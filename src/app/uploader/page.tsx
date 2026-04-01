"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/AppShell";
import {
  uploadAudio,
  startTranscription as apiStartTranscription,
  pollUntilDone,
  type JobResponse,
} from "@/lib/api";
import type { TranscriptionQuality } from "@/types";

const ACCEPTED_EXTENSIONS = [".wav", ".mp3", ".flac", ".aiff", ".aif", ".ogg", ".m4a"];
const MAX_SIZE_MB = 500;

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

type Status = "idle" | "uploading" | "processing" | "complete" | "error";

export default function UploaderPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("");
  const [error, setError] = useState("");
  const [quality, setQuality] = useState<TranscriptionQuality>("standard");
  const [outputFormat, setOutputFormat] = useState<"lead_sheet" | "piano_score">("lead_sheet");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  // Audio metadata from upload
  const [audioMeta, setAudioMeta] = useState<{
    duration: number | null;
    sample_rate: number | null;
  } | null>(null);

  const validateFile = (f: File): string | null => {
    const ext = "." + f.name.split(".").pop()?.toLowerCase();
    if (!ACCEPTED_EXTENSIONS.includes(ext)) {
      return `Unsupported format (${ext}). Use WAV, MP3, FLAC, AIFF, OGG, or M4A.`;
    }
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      return `File too large (${formatBytes(f.size)}). Maximum is ${MAX_SIZE_MB}MB.`;
    }
    return null;
  };

  const handleFile = useCallback((f: File) => {
    const err = validateFile(f);
    if (err) {
      setError(err);
      setStatus("error");
      return;
    }
    setFile(f);
    setStatus("idle");
    setError("");
    // Auto-populate title from filename
    if (!title) {
      const name = f.name.replace(/\.[^.]+$/, "").replace(/[_-]/g, " ");
      setTitle(name);
    }
  }, [title]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      const f = e.dataTransfer.files[0];
      if (f) handleFile(f);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback(() => setDragActive(false), []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0];
      if (f) handleFile(f);
    },
    [handleFile]
  );

  const startTranscription = useCallback(async () => {
    if (!file) return;

    try {
      // Phase 1: Upload
      setStatus("uploading");
      setProgress(5);
      setStage("Uploading audio to server...");

      const uploadRes = await uploadAudio(file, title || "Untitled", artist || "Unknown");
      setAudioMeta({
        duration: uploadRes.duration,
        sample_rate: uploadRes.sample_rate,
      });
      setProgress(15);
      setStage("Upload complete. Starting transcription...");

      // Phase 2: Start transcription job
      setStatus("processing");
      const jobRes = await apiStartTranscription(
        uploadRes.project_id,
        outputFormat,
        quality
      );

      // Phase 3: Poll until done
      await pollUntilDone(
        jobRes.job_id,
        (job: JobResponse) => {
          setProgress(Math.round(job.progress));
          setStage(job.stage);

          if (job.status === "error") {
            setError(job.error_message || "Transcription failed");
            setStatus("error");
          }
        },
        2000
      );

      // Complete — redirect to editor
      setStatus("complete");
      setProgress(100);
      setStage("Transcription complete!");

      // Store project ID for the editor to fetch
      if (typeof window !== "undefined") {
        sessionStorage.setItem("lastProjectId", uploadRes.project_id);
      }

      setTimeout(() => {
        router.push(`/lead-sheet?project=${uploadRes.project_id}`);
      }, 1500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setError(msg);
      setStatus("error");
      setStage("");
    }
  }, [file, title, artist, quality, outputFormat, router]);

  const reset = () => {
    setFile(null);
    setStatus("idle");
    setProgress(0);
    setStage("");
    setError("");
    setAudioMeta(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const isProcessing = status === "uploading" || status === "processing";
  const showProgressView = isProcessing || status === "complete" || (status === "error" && progress > 0);

  return (
    <AppShell>
      <div className="pt-8 pb-24 px-8 max-w-4xl mx-auto w-full">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface mb-2">
            Ingest New Audio
          </h2>
          <p className="text-outline font-body text-sm">
            Upload audio for AI-powered transcription to lead sheet or piano score.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Drop Zone / Progress */}
          <div className="col-span-12 lg:col-span-8">
            {!showProgressView ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => inputRef.current?.click()}
                className={`relative h-80 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-8 cursor-pointer transition-all ${
                  dragActive
                    ? "border-primary bg-primary/5 scale-[1.01]"
                    : file
                    ? "border-secondary/50 bg-secondary/5"
                    : status === "error"
                    ? "border-error/50 bg-error/5"
                    : "border-outline-variant/30 bg-surface-container-low hover:border-primary/40 hover:bg-surface-container-high"
                }`}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept={ACCEPTED_EXTENSIONS.join(",")}
                  onChange={handleInputChange}
                  className="hidden"
                />

                {status === "error" && !file ? (
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-error text-3xl">error</span>
                    </div>
                    <p className="text-sm text-error font-bold mb-2">{error}</p>
                    <button
                      onClick={(e) => { e.stopPropagation(); reset(); }}
                      className="text-xs text-outline hover:text-on-surface underline"
                    >
                      Try again
                    </button>
                  </div>
                ) : file ? (
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-secondary text-3xl">audio_file</span>
                    </div>
                    <p className="text-sm font-bold text-on-surface mb-1">{file.name}</p>
                    <p className="text-xs text-outline mb-4">{formatBytes(file.size)}</p>
                    <button
                      onClick={(e) => { e.stopPropagation(); reset(); }}
                      className="text-xs text-outline hover:text-error underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-5">
                      <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                    </div>
                    <h3 className="text-lg font-headline font-bold mb-1">Drop audio files here</h3>
                    <p className="text-sm text-outline mb-6 font-label">
                      WAV, MP3, FLAC, AIFF, OGG, M4A (Max {MAX_SIZE_MB}MB)
                    </p>
                    <span className="px-6 py-2.5 bg-primary text-on-primary font-bold rounded-xl text-sm">
                      Select from Filesystem
                    </span>
                  </div>
                )}
              </div>
            ) : (
              /* Real Processing View */
              <div className="p-8 bg-surface-container-low rounded-2xl border border-white/5">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-[10px] font-label uppercase tracking-[0.3em] text-secondary mb-2 block font-bold">
                      {(status as string) === "complete"
                        ? "Transcription Complete"
                        : (status as string) === "error"
                        ? "Error"
                        : "Transcription In Progress"}
                    </span>
                    <h4 className="text-2xl font-headline font-bold text-on-surface">{stage}</h4>
                    {error && (status as string) === "error" && (
                      <p className="text-sm text-error mt-2">{error}</p>
                    )}
                  </div>
                  <span className={`text-3xl font-headline font-black ${(status as string) === "error" ? "text-error" : "text-primary"}`}>
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="w-full bg-surface-container-lowest h-3 rounded-full overflow-hidden border border-white/5">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      (status as string) === "complete"
                        ? "bg-secondary"
                        : (status as string) === "error"
                        ? "bg-error"
                        : "bg-primary"
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {audioMeta?.duration && (
                  <p className="mt-3 text-xs text-outline">
                    Audio: {Math.round(audioMeta.duration)}s
                    {audioMeta.sample_rate ? ` • ${audioMeta.sample_rate / 1000}kHz` : ""}
                  </p>
                )}

                {(status as string) === "complete" && (
                  <p className="mt-4 text-sm text-secondary font-label">
                    Redirecting to lead sheet editor...
                  </p>
                )}

                {(status as string) === "error" && (
                  <button
                    onClick={reset}
                    className="mt-4 px-4 py-2 bg-surface-container-high text-on-surface rounded-lg text-sm font-bold hover:bg-surface-bright transition-all"
                  >
                    Try Again
                  </button>
                )}
              </div>
            )}

            {/* Song Metadata (shown when file selected, before processing) */}
            {file && !isProcessing && status !== "complete" && (
              <div className="mt-6 p-5 bg-surface-container-low rounded-xl border border-white/5">
                <h4 className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-outline mb-4">
                  Song Details (optional)
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-label font-bold text-outline uppercase tracking-wider block mb-1">
                      Title
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Song title"
                      className="w-full bg-surface-container-high border border-white/5 rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-label font-bold text-outline uppercase tracking-wider block mb-1">
                      Artist
                    </label>
                    <input
                      value={artist}
                      onChange={(e) => setArtist(e.target.value)}
                      placeholder="Artist name"
                      className="w-full bg-surface-container-high border border-white/5 rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Settings Panel */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">
            {/* Output Format */}
            <div className="p-5 bg-surface-container-low rounded-xl border border-white/5">
              <h4 className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-outline mb-4">
                Target Output
              </h4>
              <div className="space-y-2">
                {([
                  { value: "lead_sheet" as const, icon: "description", label: "Lead Sheet", desc: "Chords + melody + lyrics" },
                  { value: "piano_score" as const, icon: "piano", label: "Piano Score", desc: "Full notation, both hands" },
                ]).map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center justify-between p-3.5 rounded-lg cursor-pointer transition-all border ${
                      outputFormat === opt.value
                        ? "bg-primary/10 border-primary/30"
                        : "bg-surface-container-high border-transparent hover:bg-surface-bright"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-lg ${outputFormat === opt.value ? "text-primary" : "text-outline"}`}>
                        {opt.icon}
                      </span>
                      <div>
                        <span className="text-sm font-bold font-headline tracking-tight block">{opt.label}</span>
                        <span className="text-[10px] text-outline">{opt.desc}</span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="format"
                      checked={outputFormat === opt.value}
                      onChange={() => setOutputFormat(opt.value)}
                      className="form-radio bg-transparent border-outline-variant text-primary focus:ring-primary w-4 h-4"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Quality */}
            <div className="p-5 bg-surface-container-low rounded-xl border border-white/5">
              <h4 className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-outline mb-4">
                Precision Mode
              </h4>
              <div className="space-y-2">
                {([
                  { value: "draft" as const, label: "Draft", desc: "Fast (~1min), basic accuracy" },
                  { value: "standard" as const, label: "Standard", desc: "Balanced (~3min), good accuracy" },
                  { value: "professional" as const, label: "Professional", desc: "Thorough (~8min), max fidelity" },
                ]).map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setQuality(opt.value)}
                    disabled={isProcessing}
                    className={`w-full text-left p-3 rounded-lg transition-all border ${
                      quality === opt.value
                        ? "bg-secondary/10 border-secondary/30"
                        : "bg-surface-container-high border-transparent hover:bg-surface-bright"
                    }`}
                  >
                    <span className={`text-sm font-bold block ${quality === opt.value ? "text-secondary" : "text-on-surface"}`}>
                      {opt.label}
                    </span>
                    <span className="text-[10px] text-outline">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={startTranscription}
              disabled={!file || isProcessing}
              className={`w-full py-3.5 font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2 ${
                file && !isProcessing
                  ? "bg-primary text-on-primary hover:bg-primary-fixed-dim active:scale-95 shadow-lg shadow-primary/20"
                  : "bg-surface-container-high text-outline cursor-not-allowed"
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                {isProcessing ? "hourglass_top" : "auto_awesome"}
              </span>
              {isProcessing ? "Processing..." : "Begin Transcription"}
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
