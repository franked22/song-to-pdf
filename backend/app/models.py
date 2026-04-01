"""Pydantic models for API request/response schemas."""

from __future__ import annotations
from datetime import datetime
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field


class JobStatus(str, Enum):
    queued = "queued"
    separating_stems = "separating_stems"
    detecting_pitch = "detecting_pitch"
    detecting_chords = "detecting_chords"
    transcribing_lyrics = "transcribing_lyrics"
    generating_notation = "generating_notation"
    complete = "complete"
    error = "error"


class OutputFormat(str, Enum):
    lead_sheet = "lead_sheet"
    piano_score = "piano_score"


class QualityLevel(str, Enum):
    draft = "draft"  # fast, lower accuracy
    standard = "standard"  # balanced
    professional = "professional"  # slow, max accuracy


# ── Request Models ───────────────────────────────────────────


class TranscribeRequest(BaseModel):
    project_id: str
    output_format: OutputFormat = OutputFormat.lead_sheet
    quality: QualityLevel = QualityLevel.standard


# ── Response Models ──────────────────────────────────────────


class UploadResponse(BaseModel):
    project_id: str
    filename: str
    size: int
    duration: Optional[float] = None
    sample_rate: Optional[int] = None
    channels: Optional[int] = None


class JobResponse(BaseModel):
    job_id: str
    project_id: str
    status: JobStatus
    progress: float = 0.0
    stage: str = ""
    started_at: Optional[str] = None
    estimated_completion: Optional[str] = None
    error_message: Optional[str] = None


class ChordSymbol(BaseModel):
    root: str
    quality: str
    bass: Optional[str] = None
    beat: float


class NoteEvent(BaseModel):
    pitch: str  # e.g. "C4"
    midi: int
    start_beat: float
    duration_beats: float
    velocity: float
    value: str  # "whole", "half", "quarter", "eighth", "sixteenth"


class MeasureData(BaseModel):
    id: str
    number: int
    chords: list[ChordSymbol]
    lyrics: Optional[str] = None
    notes: list[NoteEvent]


class SectionData(BaseModel):
    id: str
    name: str
    measures: list[MeasureData]


class StemInfo(BaseModel):
    name: str
    type: str  # vocals, drums, bass, piano, guitar, other
    file_url: Optional[str] = None


class TranscriptionResult(BaseModel):
    project_id: str
    title: str
    artist: str
    key: str
    bpm: float
    time_signature: str
    duration: float
    sections: list[SectionData]
    stems: list[StemInfo] = []
    accuracy_estimate: Optional[float] = None


# ── Internal Pipeline Models ─────────────────────────────────


class AudioMetadata(BaseModel):
    duration: float
    sample_rate: int
    channels: int
    bpm: float
    key: str
    time_signature: str


class DetectedNote(BaseModel):
    """Raw note detection output from Basic Pitch."""
    start_time: float  # seconds
    end_time: float
    midi_note: int
    velocity: float
    confidence: float


class DetectedChord(BaseModel):
    """Raw chord detection output."""
    start_time: float
    end_time: float
    root: str
    quality: str
    bass: Optional[str] = None
    confidence: float


class LyricsSegment(BaseModel):
    """A segment of transcribed lyrics with timing."""
    start_time: float
    end_time: float
    text: str
