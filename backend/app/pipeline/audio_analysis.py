"""Audio metadata extraction: BPM, key, time signature, duration."""

from pathlib import Path
import numpy as np
import librosa

from app.models import AudioMetadata


# Key profiles (Krumhansl-Kessler)
MAJOR_PROFILE = np.array([6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88])
MINOR_PROFILE = np.array([6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17])
NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]


def detect_key(y: np.ndarray, sr: int) -> str:
    """Detect musical key using chroma features + Krumhansl-Kessler profiles."""
    chroma = librosa.feature.chroma_cqt(y=y, sr=sr)
    chroma_mean = chroma.mean(axis=1)

    best_corr = -1.0
    best_key = "C"

    for shift in range(12):
        rotated = np.roll(chroma_mean, -shift)
        # Check major
        corr_major = np.corrcoef(rotated, MAJOR_PROFILE)[0, 1]
        if corr_major > best_corr:
            best_corr = corr_major
            best_key = NOTE_NAMES[shift]
        # Check minor
        corr_minor = np.corrcoef(rotated, MINOR_PROFILE)[0, 1]
        if corr_minor > best_corr:
            best_corr = corr_minor
            best_key = f"{NOTE_NAMES[shift]}m"

    return best_key


def detect_time_signature(y: np.ndarray, sr: int) -> str:
    """Simple time signature estimation based on beat strength patterns."""
    tempo, beats = librosa.beat.beat_track(y=y, sr=sr)
    if len(beats) < 8:
        return "4/4"

    # Analyze onset strength at beat positions
    onset_env = librosa.onset.onset_strength(y=y, sr=sr)
    beat_strengths = onset_env[beats] if len(beats) > 0 else np.array([])

    if len(beat_strengths) < 8:
        return "4/4"

    # Check periodic accent patterns
    # Group by 3 and 4, see which has stronger downbeats
    groups_of_3 = beat_strengths[:len(beat_strengths) - len(beat_strengths) % 3].reshape(-1, 3)
    groups_of_4 = beat_strengths[:len(beat_strengths) - len(beat_strengths) % 4].reshape(-1, 4)

    if len(groups_of_3) > 0 and len(groups_of_4) > 0:
        contrast_3 = groups_of_3[:, 0].mean() / (groups_of_3[:, 1:].mean() + 1e-8)
        contrast_4 = groups_of_4[:, 0].mean() / (groups_of_4[:, 1:].mean() + 1e-8)

        if contrast_3 > contrast_4 * 1.15:
            return "3/4"

    return "4/4"


def analyze_audio(audio_path: Path) -> AudioMetadata:
    """Extract all audio metadata from a file."""
    y, sr = librosa.load(str(audio_path), sr=22050, mono=True)

    duration = librosa.get_duration(y=y, sr=sr)

    # BPM
    tempo_result = librosa.beat.beat_track(y=y, sr=sr)
    tempo = tempo_result[0]
    if isinstance(tempo, np.ndarray):
        tempo = float(tempo[0])
    else:
        tempo = float(tempo)

    # Key
    key = detect_key(y, sr)

    # Time signature
    time_sig = detect_time_signature(y, sr)

    # Channel info from original file
    import soundfile as sf
    info = sf.info(str(audio_path))

    return AudioMetadata(
        duration=round(duration, 2),
        sample_rate=info.samplerate,
        channels=info.channels,
        bpm=round(tempo, 1),
        key=key,
        time_signature=time_sig,
    )
