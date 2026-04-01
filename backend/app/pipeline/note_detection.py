"""Pitch/note detection using Spotify's Basic Pitch model."""

from pathlib import Path
import numpy as np

from app.config import BASIC_PITCH_ONSET_THRESHOLD, BASIC_PITCH_FRAME_THRESHOLD
from app.models import DetectedNote


MIDI_TO_NOTE = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
]


def midi_to_pitch_name(midi_note: int) -> str:
    """Convert MIDI note number to pitch name like 'C4'."""
    octave = (midi_note // 12) - 1
    note = MIDI_TO_NOTE[midi_note % 12]
    return f"{note}{octave}"


def detect_notes(audio_path: Path) -> list[DetectedNote]:
    """
    Run Basic Pitch note detection on an audio file.
    Returns list of detected notes with timing, pitch, and confidence.
    """
    from basic_pitch.inference import predict

    model_output, midi_data, note_events = predict(
        str(audio_path),
        onset_threshold=BASIC_PITCH_ONSET_THRESHOLD,
        frame_threshold=BASIC_PITCH_FRAME_THRESHOLD,
    )

    detected = []
    for note in note_events:
        start_time, end_time, midi_note, velocity, confidence_list = (
            note[0], note[1], note[2], note[3],
            note[4] if len(note) > 4 else [1.0]
        )

        confidence = confidence_list if isinstance(confidence_list, (int, float)) else np.mean(confidence_list)

        detected.append(DetectedNote(
            start_time=round(float(start_time), 4),
            end_time=round(float(end_time), 4),
            midi_note=int(midi_note),
            velocity=round(float(velocity), 3),
            confidence=round(float(confidence), 3),
        ))

    # Sort by start time
    detected.sort(key=lambda n: n.start_time)
    return detected


def get_midi_data(audio_path: Path) -> bytes | None:
    """Get raw MIDI data from Basic Pitch for optional download."""
    from basic_pitch.inference import predict

    _, midi_data, _ = predict(
        str(audio_path),
        onset_threshold=BASIC_PITCH_ONSET_THRESHOLD,
        frame_threshold=BASIC_PITCH_FRAME_THRESHOLD,
    )

    if midi_data:
        from io import BytesIO
        buf = BytesIO()
        midi_data.write(buf)
        return buf.getvalue()
    return None
