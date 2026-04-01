"""Chord detection using chroma feature analysis."""

from pathlib import Path
import numpy as np
import librosa

from app.models import DetectedChord


# Chord templates: binary representation of chord tones in 12-semitone chroma
CHORD_TEMPLATES = {
    # Major triads
    ("", "major"): [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],  # root, M3, P5
    # Minor triads
    ("m", "minor"): [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    # Dominant 7
    ("7", "dom7"): [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    # Major 7
    ("maj7", "maj7"): [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    # Minor 7
    ("m7", "min7"): [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    # Diminished
    ("dim", "dim"): [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    # Augmented
    ("aug", "aug"): [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    # Sus4
    ("sus4", "sus4"): [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    # Sus2
    ("sus2", "sus2"): [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    # Minor 9 (simplified)
    ("m9", "min9"): [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    # Major 9
    ("maj9", "maj9"): [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    # Dominant 9
    ("9", "dom9"): [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    # Minor 11
    ("m11", "min11"): [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
}

NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

# Enharmonic preferences for common keys
ENHARMONIC = {
    "C#": "Db", "D#": "Eb", "F#": "Gb", "G#": "Ab", "A#": "Bb",
}


def match_chord(chroma_vector: np.ndarray) -> tuple[str, str, float]:
    """
    Match a 12-dimensional chroma vector to the best chord template.
    Returns (root_note, quality_suffix, confidence).
    """
    best_score = -1.0
    best_root = "C"
    best_quality = ""

    chroma_norm = chroma_vector / (np.linalg.norm(chroma_vector) + 1e-8)

    for (suffix, _), template in CHORD_TEMPLATES.items():
        template_arr = np.array(template, dtype=float)
        template_norm = template_arr / (np.linalg.norm(template_arr) + 1e-8)

        for root_idx in range(12):
            rotated = np.roll(template_norm, root_idx)
            score = np.dot(chroma_norm, rotated)

            if score > best_score:
                best_score = score
                best_root = NOTE_NAMES[root_idx]
                best_quality = suffix

    return best_root, best_quality, float(best_score)


def detect_chords(
    audio_path: Path,
    bpm: float = 120.0,
    time_sig: str = "4/4",
) -> list[DetectedChord]:
    """
    Detect chords from an audio file using chroma features.
    Groups analysis into beat-aligned segments.
    """
    y, sr = librosa.load(str(audio_path), sr=22050, mono=True)

    # Get beat frames for segmentation
    _, beat_frames = librosa.beat.beat_track(y=y, sr=sr, bpm=bpm)
    beat_times = librosa.frames_to_time(beat_frames, sr=sr)

    if len(beat_times) < 2:
        return []

    # Compute chroma features
    chroma = librosa.feature.chroma_cqt(y=y, sr=sr)

    # Determine beats per measure
    beats_per_measure = int(time_sig.split("/")[0]) if "/" in time_sig else 4

    detected = []
    # Analyze chord per measure (group beats_per_measure beats)
    i = 0
    while i < len(beat_times) - 1:
        measure_end = min(i + beats_per_measure, len(beat_times) - 1)
        start_time = beat_times[i]
        end_time = beat_times[measure_end] if measure_end < len(beat_times) else beat_times[-1]

        # Also check if there's a chord change mid-measure
        # Analyze each beat individually first
        beat_chords = []
        for b in range(i, measure_end):
            if b + 1 >= len(beat_times):
                break
            start_frame = librosa.time_to_frames(beat_times[b], sr=sr)
            end_frame = librosa.time_to_frames(beat_times[b + 1], sr=sr)

            if end_frame <= start_frame:
                continue

            segment_chroma = chroma[:, start_frame:end_frame].mean(axis=1)
            root, quality, confidence = match_chord(segment_chroma)
            beat_chords.append((beat_times[b], beat_times[b + 1], root, quality, confidence))

        # Merge consecutive same chords within a measure
        if beat_chords:
            merged = [beat_chords[0]]
            for bc in beat_chords[1:]:
                prev = merged[-1]
                if bc[2] == prev[2] and bc[3] == prev[3]:
                    # Same chord — extend duration
                    merged[-1] = (prev[0], bc[1], prev[2], prev[3], (prev[4] + bc[4]) / 2)
                else:
                    merged.append(bc)

            for (st, et, root, quality, conf) in merged:
                detected.append(DetectedChord(
                    start_time=round(st, 3),
                    end_time=round(et, 3),
                    root=root,
                    quality=quality,
                    confidence=round(conf, 3),
                ))

        i += beats_per_measure

    return detected
