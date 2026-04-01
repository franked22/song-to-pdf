// ── Domain Types ──────────────────────────────────────────────

export type ProjectStatus = "uploading" | "processing" | "transcribing" | "review" | "complete" | "error";
export type TranscriptionQuality = "draft" | "standard" | "professional";
export type NoteValue = "whole" | "half" | "quarter" | "eighth" | "sixteenth";
export type Clef = "treble" | "bass" | "alto";

export interface Project {
  id: string;
  title: string;
  artist: string;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
  bpm: number;
  key: string;
  timeSignature: string;
  duration: number; // seconds
  accuracy?: number;
  audioUrl?: string;
  stems?: StemTrack[];
  leadSheet?: LeadSheet;
}

export interface StemTrack {
  id: string;
  name: string;
  type: "vocals" | "drums" | "bass" | "piano" | "guitar" | "other";
  volume: number;
  muted: boolean;
  solo: boolean;
  color: string;
}

export interface LeadSheet {
  id: string;
  projectId: string;
  title: string;
  artist: string;
  key: string;
  bpm: number;
  timeSignature: string;
  sections: LeadSheetSection[];
}

export interface LeadSheetSection {
  id: string;
  name: string; // "Intro", "Verse 1", "Chorus", etc.
  measures: Measure[];
}

export interface Measure {
  id: string;
  number: number;
  chords: ChordSymbol[];
  lyrics?: string;
  notes: Note[];
}

export interface ChordSymbol {
  root: string;
  quality: string; // "maj", "min", "7", "maj7", "min7", "dim", "aug"
  bass?: string;
  beat: number;
}

export interface Note {
  pitch: string; // "C4", "D#5", etc.
  value: NoteValue;
  beat: number;
  duration: number;
  tied?: boolean;
  rest?: boolean;
}

// ── Upload Types ─────────────────────────────────────────────

export interface UploadState {
  file: File | null;
  progress: number;
  status: "idle" | "uploading" | "processing" | "complete" | "error";
  error?: string;
}

export interface TranscriptionJob {
  id: string;
  projectId: string;
  status: "queued" | "separating_stems" | "detecting_pitch" | "generating_notation" | "complete" | "error";
  progress: number;
  stage: string;
  startedAt: string;
  estimatedCompletion?: string;
}

// ── Nav Types ────────────────────────────────────────────────

export interface NavItem {
  href: string;
  icon: string;
  label: string;
  badge?: number;
}
