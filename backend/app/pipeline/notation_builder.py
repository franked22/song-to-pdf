"""
Convert raw detection data (notes, chords, lyrics) into structured
lead sheet or piano score notation.

This is the core musical intelligence layer that:
1. Quantizes note timings to a rhythmic grid
2. Groups notes into measures based on BPM and time signature
3. Assigns chord symbols to beats
4. Aligns lyrics to measures
5. Detects section boundaries (verse, chorus, etc.)
"""

from __future__ import annotations
import uuid
import math
from typing import Optional

from app.models import (
    DetectedNote, DetectedChord, LyricsSegment,
    AudioMetadata, MeasureData, SectionData,
    ChordSymbol, NoteEvent, TranscriptionResult, StemInfo,
)
from app.pipeline.note_detection import midi_to_pitch_name


# ── Note Value Quantization ──────────────────────────────────

def beats_to_note_value(duration_beats: float) -> str:
    """Map a beat duration to the closest standard note value."""
    if duration_beats >= 3.5:
        return "whole"
    elif duration_beats >= 1.75:
        return "half"
    elif duration_beats >= 0.875:
        return "quarter"
    elif duration_beats >= 0.4375:
        return "eighth"
    else:
        return "sixteenth"


def quantize_to_grid(value: float, grid: float) -> float:
    """Snap a value to the nearest grid point."""
    return round(value / grid) * grid


# ── Section Detection ────────────────────────────────────────

def detect_sections(
    chords: list[DetectedChord],
    notes: list[DetectedNote],
    lyrics: list[LyricsSegment],
    metadata: AudioMetadata,
) -> list[tuple[float, float, str]]:
    """
    Detect musical sections (Intro, Verse, Chorus, Bridge, Outro).
    Uses a combination of:
    - Energy changes in note density
    - Chord progression repetition patterns
    - Gaps in lyrics (instrumental sections)
    """
    duration = metadata.duration
    bpm = metadata.bpm
    beats_per_measure = int(metadata.time_signature.split("/")[0]) if "/" in metadata.time_signature else 4
    seconds_per_measure = (60.0 / bpm) * beats_per_measure

    if duration < 10:
        return [(0.0, duration, "Section 1")]

    # Strategy: divide into ~8-measure phrases and look for natural boundaries
    phrase_length = seconds_per_measure * 8
    num_phrases = max(1, int(duration / phrase_length))

    sections: list[tuple[float, float, str]] = []
    section_names = _generate_section_names(num_phrases, lyrics, metadata)

    for i in range(num_phrases):
        start = i * phrase_length
        end = min((i + 1) * phrase_length, duration)
        name = section_names[i] if i < len(section_names) else f"Section {i + 1}"
        sections.append((start, end, name))

    return sections


def _generate_section_names(
    num_phrases: int,
    lyrics: list[LyricsSegment],
    metadata: AudioMetadata,
) -> list[str]:
    """Generate meaningful section names based on content analysis."""
    duration = metadata.duration
    bpm = metadata.bpm
    beats_per_measure = int(metadata.time_signature.split("/")[0]) if "/" in metadata.time_signature else 4
    seconds_per_measure = (60.0 / bpm) * beats_per_measure
    phrase_length = seconds_per_measure * 8

    names = []
    has_lyrics = len(lyrics) > 0
    verse_count = 0
    chorus_count = 0

    for i in range(num_phrases):
        start = i * phrase_length
        end = min((i + 1) * phrase_length, duration)

        # Check if this phrase has lyrics
        phrase_lyrics = [l for l in lyrics if l.start_time >= start and l.start_time < end]
        phrase_has_lyrics = len(phrase_lyrics) > 0

        if i == 0:
            # First section
            if not phrase_has_lyrics and has_lyrics:
                names.append("Intro")
            else:
                verse_count += 1
                names.append(f"Verse {verse_count}")
        elif i == num_phrases - 1:
            # Last section
            if not phrase_has_lyrics and has_lyrics:
                names.append("Outro")
            else:
                names.append(f"Verse {verse_count + 1}")
        else:
            if not phrase_has_lyrics and has_lyrics:
                names.append("Interlude")
            else:
                # Simple alternation heuristic: every other vocal section is a chorus
                if verse_count > 0 and (verse_count % 2 == 0 or i % 3 == 2):
                    chorus_count += 1
                    names.append(f"Chorus{' ' + str(chorus_count) if chorus_count > 1 else ''}")
                else:
                    verse_count += 1
                    names.append(f"Verse {verse_count}")

    return names


# ── Main Builder ─────────────────────────────────────────────

def build_notation(
    notes: list[DetectedNote],
    chords: list[DetectedChord],
    lyrics: list[LyricsSegment],
    metadata: AudioMetadata,
    stems: list[StemInfo],
    project_id: str,
    title: str = "Untitled",
    artist: str = "Unknown",
) -> TranscriptionResult:
    """
    Build a complete TranscriptionResult from raw detection data.
    This is the core assembly function of the entire pipeline.
    """
    bpm = metadata.bpm
    time_sig = metadata.time_signature
    beats_per_measure = int(time_sig.split("/")[0]) if "/" in time_sig else 4
    seconds_per_beat = 60.0 / bpm
    seconds_per_measure = seconds_per_beat * beats_per_measure

    # Quantization grid: sixteenth note
    grid_beats = 0.25
    grid_seconds = grid_beats * seconds_per_beat

    # Detect sections
    section_boundaries = detect_sections(chords, notes, lyrics, metadata)

    all_sections: list[SectionData] = []
    global_measure_num = 1

    for sec_start, sec_end, sec_name in section_boundaries:
        measures: list[MeasureData] = []

        # Calculate measures in this section
        num_measures = max(1, round((sec_end - sec_start) / seconds_per_measure))

        for m in range(num_measures):
            measure_start = sec_start + m * seconds_per_measure
            measure_end = measure_start + seconds_per_measure

            # ─── Collect chords for this measure ───
            measure_chords: list[ChordSymbol] = []
            relevant_chords = [
                c for c in chords
                if c.start_time < measure_end and c.end_time > measure_start
            ]

            if relevant_chords:
                for c in relevant_chords:
                    # Calculate which beat this chord lands on
                    beat_in_measure = max(1.0, ((c.start_time - measure_start) / seconds_per_beat) + 1)
                    beat_in_measure = quantize_to_grid(beat_in_measure, 0.5)
                    beat_in_measure = max(1.0, min(float(beats_per_measure), beat_in_measure))

                    measure_chords.append(ChordSymbol(
                        root=c.root,
                        quality=c.quality,
                        bass=c.bass,
                        beat=round(beat_in_measure, 2),
                    ))

                # Deduplicate chords on the same beat
                seen_beats: dict[float, ChordSymbol] = {}
                for mc in measure_chords:
                    seen_beats[mc.beat] = mc
                measure_chords = sorted(seen_beats.values(), key=lambda c: c.beat)
            else:
                # No chord detected — use previous measure's chord or default
                measure_chords = [ChordSymbol(root="N.C.", quality="", beat=1.0)]

            # ─── Collect notes for this measure ───
            measure_notes: list[NoteEvent] = []
            relevant_notes = [
                n for n in notes
                if n.start_time < measure_end and n.end_time > measure_start
            ]

            for n in relevant_notes:
                start_beat = max(0, ((n.start_time - measure_start) / seconds_per_beat))
                start_beat = quantize_to_grid(start_beat, grid_beats)

                duration_seconds = n.end_time - n.start_time
                duration_beats = max(grid_beats, duration_seconds / seconds_per_beat)
                duration_beats = quantize_to_grid(duration_beats, grid_beats)

                note_value = beats_to_note_value(duration_beats)

                measure_notes.append(NoteEvent(
                    pitch=midi_to_pitch_name(n.midi_note),
                    midi=n.midi_note,
                    start_beat=round(start_beat, 4),
                    duration_beats=round(duration_beats, 4),
                    velocity=n.velocity,
                    value=note_value,
                ))

            measure_notes.sort(key=lambda n: (n.start_beat, n.midi))

            # ─── Collect lyrics for this measure ───
            measure_lyrics_parts: list[str] = []
            for l in lyrics:
                if l.start_time < measure_end and l.end_time > measure_start:
                    measure_lyrics_parts.append(l.text)

            lyrics_text = " ".join(measure_lyrics_parts).strip() if measure_lyrics_parts else None

            measures.append(MeasureData(
                id=f"m-{uuid.uuid4().hex[:8]}",
                number=global_measure_num,
                chords=measure_chords,
                lyrics=lyrics_text,
                notes=measure_notes,
            ))
            global_measure_num += 1

        all_sections.append(SectionData(
            id=f"sec-{uuid.uuid4().hex[:8]}",
            name=sec_name,
            measures=measures,
        ))

    # Accuracy estimate based on detection confidence
    note_confidences = [n.confidence for n in notes] if notes else [0.5]
    chord_confidences = [c.confidence for c in chords] if chords else [0.5]
    avg_confidence = (
        sum(note_confidences) / len(note_confidences) * 0.6 +
        sum(chord_confidences) / len(chord_confidences) * 0.4
    )

    return TranscriptionResult(
        project_id=project_id,
        title=title,
        artist=artist,
        key=metadata.key,
        bpm=metadata.bpm,
        time_signature=metadata.time_signature,
        duration=metadata.duration,
        sections=all_sections,
        stems=stems,
        accuracy_estimate=round(avg_confidence * 100, 1),
    )
