"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import AppShell from "@/components/AppShell";
import type { UploadState, TranscriptionQuality } from "@/types";

const ACCEPTED_TYPES = [
  "audio/wav",
  "audio/x-wav",
  "audio/mpeg",
  "audio/mp3",
  "audio/flac",
  "audio/aiff",
  "audio/x-aiff",
];
const ACCEPTED_EXTENSIONS = [".wav", ".mp3", ".flac", ".aiff", ".aif"];
const MAX_SIZE_MB = 500;

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

export default function UploaderPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [upload, setUpload] = useState<UploadState>({
    file: null,
    progress: 0,
    status: "idle",
  });
  const [quality, setQuality] = useState<TranscriptionQuality>("standard");
  const [outputFormat, setOutputFormat] = useState<"piano" | "lead-sheet" | "orchestration">("lead-sheet");
  const [jobStage, setJobStage] = useState("");

  const validateFile = (file: File): string | null => {
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ACCEPTED_EXTENSIONS.includes(ext) && !ACCEPTED_TYPES.includes(file.type)) {
      return `Unsupported format. Please use WAV, MP3, FLAC, or AIFF.`;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      return `File too large (${formatBytes(file.size)}). Maximum is ${MAX_SIZE_MB}MB.`;
    }
    return null;
  };

  const handleFile = useCallback((file: File) => {
    const error = validateFile(file);
    if (error) {
      setUpload({ file: null, progress: 0, status: "error", error });
      return;
    }
    setUpload({ file, progress: 0, status: "idle" });
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
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
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const startTranscription = useCallback(() => {
    if (!upload.file) return;

    // Simulate upload phase
    setUpload((prev) => ({ ...prev, status: "uploading", progress: 0 }));

    const stages = [
      { progress: 25, status: "uploading" as const, stage: "Uploading audio..." },
      { progress: 40, status: "processing" as const, stage: "Separating stems..." },
      { progress: 60, status: "processing" as const, stage: "Detecting pitch & rhythm..." },
      { progress: 80, status: "processing" as const, stage: "Generating notation..." },
      { progress: 95, status: "processing" as const, stage: "Building lead sheet..." },
      { progress: 100, status: "complete" as const, stage: "Complete!" },
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i >= stages.length) {
        clearInterval(interval);
        setTimeout(() => router.push("/lead-sheet"), 1200);
        return;
      }
      const s = stages[i];
      setUpload((prev) => ({ ...prev, status: s.status, progress: s.progress }));
      setJobStage(s.stage);
      i++;
    }, 1500);
  }, [upload.file, router]);

  const reset = () => {
    setUpload({ file: null, progress: 0, status: "idle" });
    setJobStage("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const isProcessing = upload.status === "uploading" || upload.status === "processing";

  return (
    <AppShell>
      <div className="pt-8 pb-24 px-8 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface mb-2">
            Ingest New Audio
          </h2>
          <p className="text-outline font-body text-sm">
            Upload high-fidelity stems or recordings for AI-driven transcription.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Drop Zone */}
          <div className="col-span-12 lg:col-span-8">
            {!isProcessing && upload.status !== "complete" ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => inputRef.current?.click()}
                className={`relative h-80 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-8 cursor-pointer transition-all ${
                  dragActive
                    ? "border-primary bg-primary/5 scale-[1.01]"
                    : upload.file
                    ? "border-secondary/50 bg-secondary/5"
                    : upload.status === "error"
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

                {upload.status === "error" ? (
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-error text-3xl">error</span>
                    </div>
                    <p className="text-sm text-error font-bold mb-2">{upload.error}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        reset();
                      }}
                      className="text-xs text-outline hover:text-on-surface underline"
                    >
                      Try again
                    </button>
                  </div>
                ) : upload.file ? (
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-secondary text-3xl">audio_file</span>
                    </div>
                    <p className="text-sm font-bold text-on-surface mb-1">{upload.file.name}</p>
                    <p className="text-xs text-outline mb-4">{formatBytes(upload.file.size)}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        reset();
                      }}
                      className="text-xs text-outline hover:text-error underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                    </div>
                    <h3 className="text-lg font-headline font-bold mb-1">Drop audio files here</h3>
                    <p className="text-sm text-outline mb-6 font-label">
                      WAV, MP3, FLAC or AIFF (Max {MAX_SIZE_MB}MB)
                    </p>
                    <span className="px-6 py-2.5 bg-primary text-on-primary font-bold rounded-xl text-sm hover:bg-primary-fixed-dim transition-all">
                      Select from Filesystem
                    </span>
                  </div>
                )}
              </div>
            ) : (
              /* Processing View */
              <div className="p-8 bg-surface-container-low rounded-2xl border border-white/5">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-[10px] font-label uppercase tracking-[0.3em] text-secondary mb-2 block font-bold">
                      {upload.status === "complete" ? "Transcription Complete" : "Transcription In Progress"}
                    </span>
                    <h4 className="text-2xl font-headline font-bold text-on-surface">{jobStage}</h4>
                  </div>
                  <span className="text-3xl font-headline font-black text-primary">{upload.progress}%</span>
                </div>

                <div className="w-full bg-surface-container-lowest h-3 rounded-full overflow-hidden border border-white/5">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      upload.status === "complete" ? "bg-secondary" : "bg-primary"
                    }`}
                    style={{ width: `${upload.progress}%` }}
                  />
                </div>

                {upload.status === "complete" && (
                  <p className="mt-4 text-sm text-secondary font-label">
                    Redirecting to lead sheet editor...
                  </p>
                )}
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
                {(
                  [
                    { value: "piano", icon: "piano", label: "Piano Score" },
                    { value: "lead-sheet", icon: "description", label: "Lead Sheet" },
                    { value: "orchestration", icon: "full_stacked_bar_chart", label: "Orchestration" },
                  ] as const
                ).map((opt) => (
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
                      <span className="text-sm font-bold font-headline tracking-tight">{opt.label}</span>
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
                {(
                  [
                    { value: "draft", label: "Draft", desc: "Fast, basic accuracy" },
                    { value: "standard", label: "Standard", desc: "Balanced speed & accuracy" },
                    { value: "professional", label: "Professional", desc: "Maximum fidelity" },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setQuality(opt.value)}
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
              disabled={!upload.file || isProcessing}
              className={`w-full py-3.5 font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2 ${
                upload.file && !isProcessing
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
