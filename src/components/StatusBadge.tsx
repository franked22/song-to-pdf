import { statusLabel, statusColor } from "@/lib/store";

export default function StatusBadge({ status }: { status: string }) {
  const dotColors: Record<string, string> = {
    complete: "bg-secondary",
    review: "bg-primary",
    transcribing: "bg-secondary animate-pulse",
    processing: "bg-tertiary animate-pulse",
    uploading: "bg-tertiary animate-pulse",
    error: "bg-error",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-label font-semibold ${statusColor(status)}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[status] ?? "bg-outline"}`} />
      {statusLabel(status)}
    </span>
  );
}
