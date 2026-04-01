"""Stem separation using Demucs (Meta's hybrid transformer model)."""

import subprocess
import shutil
from pathlib import Path

from app.config import OUTPUT_DIR, DEMUCS_MODEL
from app.models import StemInfo


STEM_TYPES = {
    "vocals": "vocals",
    "drums": "drums",
    "bass": "bass",
    "other": "other",
}


def separate_stems(audio_path: Path, project_id: str) -> list[StemInfo]:
    """
    Run Demucs stem separation on an audio file.
    Returns paths to separated stems (vocals, drums, bass, other).
    """
    output_dir = OUTPUT_DIR / project_id / "stems"
    output_dir.mkdir(parents=True, exist_ok=True)

    # Run demucs via subprocess for isolation and memory management
    cmd = [
        "python", "-m", "demucs",
        "--name", DEMUCS_MODEL,
        "--out", str(output_dir),
        "--two-stems", "vocals",  # First pass: separate vocals
        str(audio_path),
    ]

    try:
        subprocess.run(cmd, check=True, capture_output=True, text=True, timeout=600)
    except subprocess.TimeoutExpired:
        raise RuntimeError("Stem separation timed out (>10 minutes)")
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"Demucs failed: {e.stderr[:500]}")

    # Now run full separation
    cmd_full = [
        "python", "-m", "demucs",
        "--name", DEMUCS_MODEL,
        "--out", str(output_dir),
        str(audio_path),
    ]

    try:
        subprocess.run(cmd_full, check=True, capture_output=True, text=True, timeout=600)
    except subprocess.CalledProcessError as e:
        # Full separation failed — fall back to two-stem result
        pass

    # Find output stems
    stem_name = audio_path.stem
    stems = []

    # Check both htdemucs and htdemucs_ft output paths
    for model_name in [DEMUCS_MODEL, "htdemucs", "htdemucs_ft"]:
        stem_dir = output_dir / model_name / stem_name
        if stem_dir.exists():
            for stem_file in stem_dir.glob("*.wav"):
                stem_type = stem_file.stem
                if stem_type in STEM_TYPES:
                    # Copy to a predictable location
                    dest = output_dir / f"{stem_type}.wav"
                    shutil.copy2(stem_file, dest)
                    stems.append(StemInfo(
                        name=stem_type.capitalize(),
                        type=STEM_TYPES[stem_type],
                        file_url=f"/files/{project_id}/stems/{stem_type}.wav",
                    ))
            break

    if not stems:
        raise RuntimeError("No stems produced by Demucs")

    return stems


def get_vocals_path(project_id: str) -> Path | None:
    """Get path to separated vocals stem for lyrics transcription."""
    vocals = OUTPUT_DIR / project_id / "stems" / "vocals.wav"
    if vocals.exists():
        return vocals
    return None


def get_accompaniment_path(project_id: str) -> Path | None:
    """Get path to non-vocal audio for chord/note detection."""
    other = OUTPUT_DIR / project_id / "stems" / "other.wav"
    if other.exists():
        return other
    # Fall back to bass
    bass = OUTPUT_DIR / project_id / "stems" / "bass.wav"
    if bass.exists():
        return bass
    return None
