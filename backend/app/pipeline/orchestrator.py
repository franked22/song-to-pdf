"""
Pipeline orchestrator — runs the full transcription pipeline with progress tracking.

Pipeline stages:
1. Audio analysis (BPM, key, time sig)
2. Stem separation (Demucs)
3. Note detection (Basic Pitch)
4. Chord detection (chroma analysis)
5. Lyrics transcription (Whisper) — only if vocals detected
6. Notation building (assembly)
"""

from __future__ import annotations
from pathlib import Path
from typing import Callable, Optional
import traceback

from app.models import (
    AudioMetadata, DetectedNote, DetectedChord, LyricsSegment,
    StemInfo, TranscriptionResult, JobStatus, QualityLevel,
)
from app.pipeline.audio_analysis import analyze_audio
from app.pipeline.stem_separation import separate_stems, get_vocals_path
from app.pipeline.note_detection import detect_notes
from app.pipeline.chord_detection import detect_chords
from app.pipeline.lyrics_transcription import transcribe_lyrics, has_vocals
from app.pipeline.notation_builder import build_notation


ProgressCallback = Callable[[JobStatus, float, str], None]


def run_pipeline(
    audio_path: Path,
    project_id: str,
    quality: QualityLevel = QualityLevel.standard,
    title: str = "Untitled",
    artist: str = "Unknown",
    on_progress: Optional[ProgressCallback] = None,
) -> TranscriptionResult:
    """
    Execute the full transcription pipeline.

    Args:
        audio_path: Path to the uploaded audio file
        project_id: Unique project identifier
        quality: Processing quality level
        title: Song title (from user or filename)
        artist: Artist name (from user or "Unknown")
        on_progress: Callback for progress updates (status, progress%, stage_label)

    Returns:
        TranscriptionResult with complete lead sheet data
    """

    def update(status: JobStatus, progress: float, stage: str):
        if on_progress:
            on_progress(status, progress, stage)

    try:
        # ─── Stage 1: Audio Analysis ─────────────────────────
        update(JobStatus.detecting_pitch, 5.0, "Analyzing audio properties...")
        metadata: AudioMetadata = analyze_audio(audio_path)
        update(JobStatus.detecting_pitch, 10.0, f"Detected: {metadata.key} key, {metadata.bpm} BPM, {metadata.time_signature}")

        # ─── Stage 2: Stem Separation ────────────────────────
        update(JobStatus.separating_stems, 15.0, "Separating audio stems with Demucs...")
        stems: list[StemInfo] = []
        vocals_path: Path | None = None

        try:
            stems = separate_stems(audio_path, project_id)
            vocals_path = get_vocals_path(project_id)
            update(JobStatus.separating_stems, 35.0, f"Separated {len(stems)} stems")
        except Exception as e:
            # Stem separation failed — continue with original audio
            update(JobStatus.separating_stems, 35.0, f"Stem separation skipped: {str(e)[:100]}")
            vocals_path = audio_path  # Use original for lyrics

        # ─── Stage 3: Note Detection ─────────────────────────
        update(JobStatus.detecting_pitch, 40.0, "Detecting notes with Basic Pitch...")

        # For better note detection, use the non-vocal stem if available
        note_source = audio_path  # Default to full mix
        if quality != QualityLevel.draft and stems:
            # Use full mix for note detection (Basic Pitch handles polyphony)
            pass

        detected_notes: list[DetectedNote] = detect_notes(note_source)
        update(JobStatus.detecting_pitch, 55.0, f"Detected {len(detected_notes)} notes")

        # ─── Stage 4: Chord Detection ────────────────────────
        update(JobStatus.detecting_chords, 58.0, "Analyzing chord progressions...")
        detected_chords: list[DetectedChord] = detect_chords(
            audio_path,
            bpm=metadata.bpm,
            time_sig=metadata.time_signature,
        )
        update(JobStatus.detecting_chords, 70.0, f"Detected {len(detected_chords)} chord changes")

        # ─── Stage 5: Lyrics Transcription ───────────────────
        lyrics_segments: list[LyricsSegment] = []

        # Only transcribe lyrics if we detect vocals
        lyrics_source = vocals_path if vocals_path else audio_path
        if lyrics_source and lyrics_source.exists():
            update(JobStatus.transcribing_lyrics, 72.0, "Checking for vocals...")
            if has_vocals(lyrics_source):
                update(JobStatus.transcribing_lyrics, 75.0, "Transcribing lyrics with Whisper...")
                lyrics_segments = transcribe_lyrics(lyrics_source)
                update(JobStatus.transcribing_lyrics, 88.0, f"Transcribed {len(lyrics_segments)} lyric segments")
            else:
                update(JobStatus.transcribing_lyrics, 88.0, "No vocals detected — skipping lyrics")
        else:
            update(JobStatus.transcribing_lyrics, 88.0, "No vocal stem — skipping lyrics")

        # ─── Stage 6: Build Notation ─────────────────────────
        update(JobStatus.generating_notation, 90.0, "Assembling lead sheet notation...")

        result = build_notation(
            notes=detected_notes,
            chords=detected_chords,
            lyrics=lyrics_segments,
            metadata=metadata,
            stems=stems,
            project_id=project_id,
            title=title,
            artist=artist,
        )

        update(JobStatus.complete, 100.0, "Transcription complete!")
        return result

    except Exception as e:
        update(JobStatus.error, 0.0, f"Pipeline failed: {str(e)[:200]}")
        raise RuntimeError(f"Transcription pipeline failed: {str(e)}") from e
