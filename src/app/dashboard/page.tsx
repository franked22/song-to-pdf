"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import StatusBadge from "@/components/StatusBadge";
import { MOCK_PROJECTS, formatDuration } from "@/lib/store";
import type { Project, ProjectStatus } from "@/types";

type FilterTab = ProjectStatus | "all";

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function StatCard({
  icon,
  label,
  value,
  sub,
  accent = "text-primary",
}: {
  icon: string;
  label: string;
  value: string;
  sub?: string;
  accent?: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-surface-container-low border border-white/5 hover:border-primary/20 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <p className="text-outline text-[10px] uppercase tracking-[0.2em] font-label font-bold">
          {label}
        </p>
        <span className={`material-symbols-outlined ${accent} text-xl`}>{icon}</span>
      </div>
      <h2 className={`text-3xl font-headline font-bold ${accent}`}>{value}</h2>
      {sub && <p className="text-xs text-outline mt-2 font-label">{sub}</p>}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.status === "complete" || project.status === "review" ? "/lead-sheet" : "/uploader"}
      className="group bg-surface-container-low rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 card-shadow overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h4 className="font-bold text-base font-headline text-on-surface group-hover:text-primary transition-colors">
              {project.title}
            </h4>
            <p className="text-sm text-outline-variant mt-0.5">{project.artist}</p>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <div className="flex items-center gap-4 text-xs text-outline font-label mt-4">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">music_note</span>
            {project.key}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">speed</span>
            {project.bpm} BPM
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">timer</span>
            {formatDuration(project.duration)}
          </span>
        </div>

        {project.accuracy != null && (
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="flex justify-between text-[10px] font-bold font-label uppercase text-outline mb-1.5">
              <span>Accuracy</span>
              <span className="text-secondary">{project.accuracy}%</span>
            </div>
            <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-secondary h-full rounded-full transition-all"
                style={{ width: `${project.accuracy}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/5">
          <span className="text-[10px] text-outline font-label font-bold uppercase tracking-wider">
            {timeAgo(project.updatedAt)}
          </span>
          <span className="material-symbols-outlined text-outline group-hover:text-primary text-lg transition-colors">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function DashboardPage() {
  const [projects] = useState<Project[]>(MOCK_PROJECTS);
  const [filter, setFilter] = useState<FilterTab>("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.status === filter)),
    [projects, filter]
  );

  const stats = useMemo(() => {
    const total = projects.length;
    const complete = projects.filter((p) => p.status === "complete").length;
    const withAccuracy = projects.filter((p) => p.accuracy != null);
    const avgAccuracy =
      withAccuracy.length > 0
        ? (withAccuracy.reduce((s, p) => s + (p.accuracy ?? 0), 0) / withAccuracy.length).toFixed(1)
        : "—";
    const totalDuration = projects.reduce((s, p) => s + p.duration, 0);
    return { total, complete, avgAccuracy, totalDuration };
  }, [projects]);

  const TABS: { label: string; value: FilterTab }[] = [
    { label: "All", value: "all" },
    { label: "Complete", value: "complete" },
    { label: "In Review", value: "review" },
    { label: "Transcribing", value: "transcribing" },
  ];

  return (
    <AppShell
      headerActions={
        <Link
          href="/uploader"
          className="px-5 py-2 bg-primary text-on-primary font-bold rounded-xl hover:bg-primary-fixed-dim transition-all active:scale-95 text-sm flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          New Transcription
        </Link>
      }
    >
      <div className="pt-8 pb-24 px-8 max-w-[1400px] mx-auto w-full">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <StatCard icon="folder" label="Total Projects" value={String(stats.total)} accent="text-primary" />
          <StatCard icon="check_circle" label="Completed" value={String(stats.complete)} accent="text-secondary" />
          <StatCard
            icon="verified"
            label="Avg. Accuracy"
            value={`${stats.avgAccuracy}%`}
            accent="text-secondary"
            sub="Across completed projects"
          />
          <StatCard
            icon="timer"
            label="Total Audio"
            value={formatDuration(stats.totalDuration)}
            accent="text-tertiary"
            sub="Combined duration"
          />
        </div>

        {/* Filter & Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h3 className="text-xl font-headline font-bold tracking-tight">Projects</h3>
          <div className="flex bg-surface-container-high p-1 rounded-xl">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filter === tab.value
                    ? "bg-surface-container-lowest text-primary shadow-sm shadow-black/20"
                    : "text-outline hover:text-on-surface"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Empty "New" card */}
          <Link
            href="/uploader"
            className="group rounded-2xl border-2 border-dashed border-outline-variant/30 hover:border-primary/40 flex flex-col items-center justify-center py-16 transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-outline group-hover:text-primary text-2xl transition-colors">
                add
              </span>
            </div>
            <span className="text-sm font-bold text-outline group-hover:text-primary transition-colors">
              Start New Transcription
            </span>
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
