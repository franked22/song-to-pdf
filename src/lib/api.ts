/**
 * API client for the Song-to-PDF transcription backend.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// ── Types matching backend models ────────────────────────────

export interface UploadResponse {
  project_id: string;
  filename: string;
  size: number;
  duration: number | null;
  sample_rate: number | null;
  channels: number | null;
}

export interface JobResponse {
  job_id: string;
  project_id: string;
  status:
    | "queued"
    | "separating_stems"
    | "detecting_pitch"
    | "detecting_chords"
    | "transcribing_lyrics"
    | "generating_notation"
    | "complete"
    | "error";
  progress: number;
  stage: string;
  started_at: string | null;
  estimated_completion: string | null;
  error_message: string | null;
}

export interface ChordSymbolData {
  root: string;
  quality: string;
  bass: string | null;
  beat: number;
}

export interface NoteEventData {
  pitch: string;
  midi: number;
  start_beat: number;
  duration_beats: number;
  velocity: number;
  value: string;
}

export interface MeasureDataResponse {
  id: string;
  number: number;
  chords: ChordSymbolData[];
  lyrics: string | null;
  notes: NoteEventData[];
}

export interface SectionDataResponse {
  id: string;
  name: string;
  measures: MeasureDataResponse[];
}

export interface StemInfoResponse {
  name: string;
  type: string;
  file_url: string | null;
}

export interface TranscriptionResult {
  project_id: string;
  title: string;
  artist: string;
  key: string;
  bpm: number;
  time_signature: string;
  duration: number;
  sections: SectionDataResponse[];
  stems: StemInfoResponse[];
  accuracy_estimate: number | null;
}

// ── API Functions ────────────────────────────────────────────

export async function uploadAudio(
  file: File,
  title: string = "Untitled",
  artist: string = "Unknown"
): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("title", title);
  formData.append("artist", artist);

  const res = await fetch(`${API_URL}/api/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(error.detail || `Upload failed: ${res.status}`);
  }

  return res.json();
}

export async function startTranscription(
  projectId: string,
  outputFormat: "lead_sheet" | "piano_score" = "lead_sheet",
  quality: "draft" | "standard" | "professional" = "standard"
): Promise<JobResponse> {
  const res = await fetch(`${API_URL}/api/transcribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project_id: projectId,
      output_format: outputFormat,
      quality,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(error.detail || `Transcription start failed: ${res.status}`);
  }

  return res.json();
}

export async function pollJobStatus(jobId: string): Promise<JobResponse> {
  const res = await fetch(`${API_URL}/api/job/${jobId}`);
  if (!res.ok) {
    throw new Error(`Job poll failed: ${res.status}`);
  }
  return res.json();
}

export async function getTranscriptionResult(
  projectId: string
): Promise<TranscriptionResult> {
  const res = await fetch(`${API_URL}/api/result/${projectId}`);
  if (!res.ok) {
    throw new Error(`Result fetch failed: ${res.status}`);
  }
  return res.json();
}

export function getFileUrl(path: string): string {
  return `${API_URL}${path}`;
}

/**
 * Poll a job until it completes or errors, calling onProgress for each update.
 */
export async function pollUntilDone(
  jobId: string,
  onProgress: (job: JobResponse) => void,
  intervalMs: number = 2000
): Promise<JobResponse> {
  return new Promise((resolve, reject) => {
    const poll = async () => {
      try {
        const job = await pollJobStatus(jobId);
        onProgress(job);

        if (job.status === "complete") {
          resolve(job);
        } else if (job.status === "error") {
          reject(new Error(job.error_message || job.stage));
        } else {
          setTimeout(poll, intervalMs);
        }
      } catch (err) {
        reject(err);
      }
    };
    poll();
  });
}
