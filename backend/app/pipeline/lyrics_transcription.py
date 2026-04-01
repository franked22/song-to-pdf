"""Lyrics transcription using OpenAI Whisper (local model)."""

from pathlib import Path
import whisper

from app.config import WHISPER_MODEL, MODEL_CACHE
from app.models import LyricsSegment


_model = None


def _get_model():
    """Lazy-load Whisper model (cached after first call)."""
    global _model
    if _model is None:
        _model = whisper.load_model(WHISPER_MODEL, download_root=str(MODEL_CACHE))
    return _model


def transcribe_lyrics(audio_path: Path) -> list[LyricsSegment]:
    """
    Transcribe lyrics from an audio file (ideally a vocals-only stem).
    Returns timestamped segments of lyrics.
    """
    model = _get_model()

    result = model.transcribe(
        str(audio_path),
        language=None,  # Auto-detect language
        task="transcribe",
        word_timestamps=True,
        condition_on_previous_text=True,
    )

    segments = []
    for seg in result.get("segments", []):
        text = seg.get("text", "").strip()
        if not text:
            continue

        segments.append(LyricsSegment(
            start_time=round(seg["start"], 3),
            end_time=round(seg["end"], 3),
            text=text,
        ))

    return segments


def has_vocals(audio_path: Path, threshold: float = 0.02) -> bool:
    """Quick check if an audio file likely contains vocals / speech."""
    import librosa
    import numpy as np

    y, sr = librosa.load(str(audio_path), sr=16000, mono=True, duration=30)
    rms = np.sqrt(np.mean(y ** 2))

    return float(rms) > threshold
