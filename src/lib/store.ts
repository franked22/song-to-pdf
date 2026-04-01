// Simple in-memory store using React context for state management
// This serves as our "database" for the demo - persists in browser session

import type { Project, LeadSheet, TranscriptionJob } from "@/types";

// ── Mock Data ────────────────────────────────────────────────

export const MOCK_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Midnight In Tokyo",
    artist: "Modern Jazz Quartet",
    status: "complete",
    createdAt: "2026-03-28T10:00:00Z",
    updatedAt: "2026-03-28T10:45:00Z",
    bpm: 124,
    key: "Bb",
    timeSignature: "4/4",
    duration: 234,
    accuracy: 97.2,
  },
  {
    id: "proj-2",
    title: "Velvet Sunrise",
    artist: "Celeste Trio",
    status: "review",
    createdAt: "2026-03-30T14:20:00Z",
    updatedAt: "2026-03-30T15:10:00Z",
    bpm: 88,
    key: "Eb",
    timeSignature: "3/4",
    duration: 312,
    accuracy: 94.8,
  },
  {
    id: "proj-3",
    title: "Electric Cathedral",
    artist: "Neon Philharmonic",
    status: "transcribing",
    createdAt: "2026-04-01T08:30:00Z",
    updatedAt: "2026-04-01T08:35:00Z",
    bpm: 140,
    key: "Am",
    timeSignature: "4/4",
    duration: 198,
  },
  {
    id: "proj-4",
    title: "Harbor Lights",
    artist: "Coastal Ensemble",
    status: "complete",
    createdAt: "2026-03-25T16:00:00Z",
    updatedAt: "2026-03-25T16:30:00Z",
    bpm: 72,
    key: "F",
    timeSignature: "6/8",
    duration: 287,
    accuracy: 99.1,
  },
];

export const MOCK_LEAD_SHEET: LeadSheet = {
  id: "ls-1",
  projectId: "proj-1",
  title: "Midnight In Tokyo",
  artist: "Modern Jazz Quartet",
  key: "Bb",
  bpm: 124,
  timeSignature: "4/4",
  sections: [
    {
      id: "sec-intro",
      name: "Intro",
      measures: [
        { id: "m1", number: 1, chords: [{ root: "Bb", quality: "maj7", beat: 1 }], lyrics: "", notes: [] },
        { id: "m2", number: 2, chords: [{ root: "Eb", quality: "maj7", beat: 1 }], lyrics: "", notes: [] },
        { id: "m3", number: 3, chords: [{ root: "Cm", quality: "7", beat: 1 }], lyrics: "", notes: [] },
        { id: "m4", number: 4, chords: [{ root: "F", quality: "7", beat: 1 }], lyrics: "", notes: [] },
      ],
    },
    {
      id: "sec-verse1",
      name: "Verse 1",
      measures: [
        { id: "m5", number: 5, chords: [{ root: "Bb", quality: "maj7", beat: 1 }], lyrics: "Walking through the neon glow,", notes: [] },
        { id: "m6", number: 6, chords: [{ root: "Gm", quality: "7", beat: 1 }], lyrics: "city lights reflect the snow.", notes: [] },
        { id: "m7", number: 7, chords: [{ root: "Eb", quality: "maj7", beat: 1 }], lyrics: "Every corner holds a song,", notes: [] },
        { id: "m8", number: 8, chords: [{ root: "F", quality: "7", beat: 1 }], lyrics: "melodies where I belong.", notes: [] },
        { id: "m9", number: 9, chords: [{ root: "Dm", quality: "7", beat: 1 }], lyrics: "Whispers in the midnight air,", notes: [] },
        { id: "m10", number: 10, chords: [{ root: "Gm", quality: "7", beat: 1 }], lyrics: "echoes dancing everywhere.", notes: [] },
        { id: "m11", number: 11, chords: [{ root: "Cm", quality: "7", beat: 1 }], lyrics: "Tokyo dreams never fade,", notes: [] },
        { id: "m12", number: 12, chords: [{ root: "F", quality: "7", beat: 1 }], lyrics: "in the night serenade.", notes: [] },
      ],
    },
    {
      id: "sec-chorus",
      name: "Chorus",
      measures: [
        { id: "m13", number: 13, chords: [{ root: "Bb", quality: "maj7", beat: 1 }], lyrics: "Midnight in Tokyo,", notes: [] },
        { id: "m14", number: 14, chords: [{ root: "Ab", quality: "maj7", beat: 1 }], lyrics: "where the music flows.", notes: [] },
        { id: "m15", number: 15, chords: [{ root: "Gm", quality: "7", beat: 1 }], lyrics: "Underneath the stars we play,", notes: [] },
        { id: "m16", number: 16, chords: [{ root: "F", quality: "7", beat: 1 }], lyrics: "till the break of day.", notes: [] },
      ],
    },
    {
      id: "sec-verse2",
      name: "Verse 2",
      measures: [
        { id: "m17", number: 17, chords: [{ root: "Bb", quality: "maj7", beat: 1 }], lyrics: "Saxophones cry in the rain,", notes: [] },
        { id: "m18", number: 18, chords: [{ root: "Gm", quality: "7", beat: 1 }], lyrics: "every note absorbs the pain.", notes: [] },
        { id: "m19", number: 19, chords: [{ root: "Eb", quality: "maj7", beat: 1 }], lyrics: "Piano keys like cherry blooms,", notes: [] },
        { id: "m20", number: 20, chords: [{ root: "F", quality: "7", beat: 1 }], lyrics: "scattered light through crowded rooms.", notes: [] },
      ],
    },
    {
      id: "sec-outro",
      name: "Outro",
      measures: [
        { id: "m21", number: 21, chords: [{ root: "Bb", quality: "maj7", beat: 1 }], lyrics: "", notes: [] },
        { id: "m22", number: 22, chords: [{ root: "Eb", quality: "maj7", beat: 1 }, { root: "F", quality: "7", beat: 3 }], lyrics: "", notes: [] },
        { id: "m23", number: 23, chords: [{ root: "Bb", quality: "maj7", beat: 1 }], lyrics: "(rit.)", notes: [] },
      ],
    },
  ],
};

// ── Helpers ──────────────────────────────────────────────────

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function statusLabel(status: string): string {
  const labels: Record<string, string> = {
    uploading: "Uploading",
    processing: "Processing",
    transcribing: "Transcribing",
    review: "In Review",
    complete: "Complete",
    error: "Error",
  };
  return labels[status] ?? status;
}

export function statusColor(status: string): string {
  const colors: Record<string, string> = {
    uploading: "text-tertiary",
    processing: "text-tertiary",
    transcribing: "text-secondary",
    review: "text-primary",
    complete: "text-secondary",
    error: "text-error",
  };
  return colors[status] ?? "text-outline";
}
