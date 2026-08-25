"""
FastAPI application for the Song-to-PDF transcription backend.

Endpoints:
- POST /api/upload          — Upload audio file, get project metadata
- POST /api/transcribe      — Start transcription job (async)
- GET  /api/job/{job_id}    — Poll job status
- GET  /api/result/{project_id} — Get completed transcription result
- GET  /api/files/{path}    — Serve stems and other output files
- GET  /health              — Health check (unauthenticated)
"""

from __future__ import annotations
import uuid
import shutil
import threading
from pathlib import Path
from datetime import datetime, timezone
from typing import Optional

from fastapi import Depends, FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
import uvicorn

from app.auth import require_api_key
from app.config import (
    CORS_ORIGINS, UPLOAD_DIR, OUTPUT_DIR, MAX_UPLOAD_SIZE_MB, PORT,
)
from app.models import (
    UploadResponse, JobResponse, JobStatus, TranscribeRequest,
    TranscriptionResult, QualityLevel,
)
from app.pipeline.audio_analysis import analyze_audio
from app.pipeline.orchestrator import run_pipeline


# ── App Setup ────────────────────────────────

app = FastAPI(
    title="Song-to-PDF Transcription API",
    version="1.0.0",
    description="AI-powered music transcription: audio to lead sheet / piano score",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── In-Memory State ─────────────────────────────
# In production, replace with Redis or database

jobs: dict[str, JobResponse] = {}
results: dict[str, TranscriptionResult] = {}
project_files: dict[str, Path] = {}  # project_id -> audio file path

MAX_CONCURRENT_JOBS = 3
_TERMINAL_STATUSES = {JobStatus.complete, JobStatus.error}
_protected = [Depends(require_api_key)]


def _active_job_count() -> int:
    return sum(1 for j in jobs.values() if j.status not in _TERMINAL_STATUSES)


async def require_job_capacity() -> None:
    """Simple in-memory cap on concurrent transcription jobs."""
    if _active_job_count() >= MAX_CONCURRENT_JOBS:
        raise HTTPException(
            status_code=429,
            detail=f"Too many concurrent jobs (max {MAX_CONCURRENT_JOBS})",
        )


_upload_transcribe_deps = _protected + [Depends(require_job_capacity)]


# ── Endpoints ────────────────────────────────

@app.get("/health")
async def health():
    return {"status": "ok", "version": "1.0.0"}


@app.post("/api/upload", response_model=UploadResponse, dependencies=_upload_transcribe_deps)
async def upload_audio(
    file: UploadFile = File(...),
    title: str = Form("Untitled"),
    artist: str = Form("Unknown"),
):
    """Upload an audio file and extract basic metadata."""
    # Validate file type
    allowed_extensions = {".wav", ".mp3", ".flac", ".aiff", ".aif", ".ogg", ".m4a"}
    ext = Path(file.filename or "file").suffix.lower()
    if ext not in allowed_extensions:
        raise HTTPException(415, f"Unsupported format: {ext}. Use WAV, MP3, FLAC, AIFF, OGG, or M4A.")

    # Check file size (read content length from header or stream)
    project_id = f"proj-{uuid.uuid4().hex[:12]}"
    project_dir = UPLOAD_DIR / project_id
    project_dir.mkdir(parents=True, exist_ok=True)
    audio_path = project_dir / f"original{ext}"

    # Save uploaded file
    total_bytes = 0
    max_bytes = MAX_UPLOAD_SIZE_MB * 1024 * 1024
    with open(audio_path, "wb") as f:
        while chunk := await file.read(1024 * 1024):  # 1MB chunks
            total_bytes += len(chunk)
            if total_bytes > max_bytes:
                audio_path.unlink(missing_ok=True)
                raise HTTPException(413, f"File exceeds {MAX_UPLOAD_SIZE_MB}MB limit")
            f.write(chunk)

    # Quick metadata extraction
    try:
        metadata = analyze_audio(audio_path)
    except Exception as e:
        raise HTTPException(422, f"Could not analyze audio: {str(e)[:200]}")

    # Store file reference
    project_files[project_id] = audio_path

    # Create output directory
    (OUTPUT_DIR / project_id).mkdir(parents=True, exist_ok=True)

    return UploadResponse(
        project_id=project_id,
        filename=file.filename or "unknown",
        size=total_bytes,
        duration=metadata.duration,
        sample_rate=metadata.sample_rate,
        channels=metadata.channels,
    )


@app.post("/api/transcribe", response_model=JobResponse, dependencies=_upload_transcribe_deps)
async def start_transcription(request: TranscribeRequest):
    """Start an async transcription job."""
    project_id = request.project_id
    audio_path = project_files.get(project_id)

    if not audio_path or not audio_path.exists():
        raise HTTPException(404, f"Project {project_id} not found or audio missing")

    job_id = f"job-{uuid.uuid4().hex[:12]}"

    # Initialize job status
    jobs[job_id] = JobResponse(
        job_id=job_id,
        project_id=project_id,
        status=JobStatus.queued,
        progress=0.0,
        stage="Queued for processing",
        started_at=datetime.now(timezone.utc).isoformat(),
    )

    def progress_callback(status: JobStatus, progress: float, stage: str):
        if job_id in jobs:
            jobs[job_id] = JobResponse(
                job_id=job_id,
                project_id=project_id,
                status=status,
                progress=progress,
                stage=stage,
                started_at=jobs[job_id].started_at,
            )

    def run_job():
        try:
            # Extract title from filename if not provided
            title = audio_path.stem.replace("original", "Untitled").replace("_", " ").replace("-", " ")

            result = run_pipeline(
                audio_path=audio_path,
                project_id=project_id,
                quality=request.quality,
                title=title,
                artist="Unknown",
                on_progress=progress_callback,
            )
            results[project_id] = result

            jobs[job_id] = JobResponse(
                job_id=job_id,
                project_id=project_id,
                status=JobStatus.complete,
                progress=100.0,
                stage="Transcription complete!",
                started_at=jobs[job_id].started_at,
            )
        except Exception as e:
            jobs[job_id] = JobResponse(
                job_id=job_id,
                project_id=project_id,
                status=JobStatus.error,
                progress=0.0,
                stage=f"Error: {str(e)[:200]}",
                started_at=jobs[job_id].started_at,
                error_message=str(e),
            )

    # Run in background thread
    thread = threading.Thread(target=run_job, daemon=True)
    thread.start()

    return jobs[job_id]


@app.get("/api/job/{job_id}", response_model=JobResponse, dependencies=_protected)
async def get_job_status(job_id: str):
    """Poll the status of a transcription job."""
    if job_id not in jobs:
        raise HTTPException(404, f"Job {job_id} not found")
    return jobs[job_id]


@app.get("/api/result/{project_id}", dependencies=_protected)
async def get_result(project_id: str):
    """Get the completed transcription result."""
    if project_id not in results:
        raise HTTPException(404, f"No result for project {project_id}")
    return results[project_id]


@app.get("/api/files/{project_id}/{path:path}", dependencies=_protected)
async def serve_file(project_id: str, path: str):
    """Serve output files (stems, MIDI, etc.)."""
    file_path = OUTPUT_DIR / project_id / path
    if not file_path.exists():
        raise HTTPException(404, "File not found")

    # Security: ensure path doesn't escape output dir
    try:
        file_path.resolve().relative_to(OUTPUT_DIR.resolve())
    except ValueError:
        raise HTTPException(403, "Invalid path")

    return FileResponse(file_path)


@app.delete("/api/project/{project_id}", dependencies=_protected)
async def delete_project(project_id: str):
    """Clean up a project's files."""
    # Remove upload
    upload_dir = UPLOAD_DIR / project_id
    if upload_dir.exists():
        shutil.rmtree(upload_dir)

    # Remove output
    output_dir = OUTPUT_DIR / project_id
    if output_dir.exists():
        shutil.rmtree(output_dir)

    # Remove from memory
    project_files.pop(project_id, None)
    results.pop(project_id, None)

    # Remove associated jobs
    to_remove = [jid for jid, j in jobs.items() if j.project_id == project_id]
    for jid in to_remove:
        jobs.pop(jid, None)

    return {"status": "deleted", "project_id": project_id}


# ── Entry Point ───────────────────────────────

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=PORT, reload=False)
