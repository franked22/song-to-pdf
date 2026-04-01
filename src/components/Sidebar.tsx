"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/uploader", icon: "cloud_upload", label: "Uploader" },
  { href: "/lead-sheet", icon: "queue_music", label: "Lead Sheets" },
  { href: "/piano-editor", icon: "edit_note", label: "Notation Editor" },
  { href: "/stems-mixer", icon: "tune", label: "Stems Mixer" },
  { href: "/qa-review", icon: "fact_check", label: "QA Review" },
  { href: "/transcription-report", icon: "analytics", label: "Reports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col h-screen py-6 px-4 bg-surface-container-low w-64 flex-shrink-0 border-r border-white/5 font-headline tracking-tight z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 px-2 mb-10">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-on-primary text-xl">piano</span>
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tighter text-on-surface">The Conductor</h1>
          <p className="text-[9px] uppercase tracking-[0.2em] text-outline font-label font-bold">Professional Tier</p>
        </div>
      </Link>

      {/* New Transcription */}
      <Link
        href="/uploader"
        className="mb-8 w-full flex items-center justify-center gap-2 py-3 bg-primary text-on-primary font-bold rounded-xl hover:bg-primary-fixed-dim transition-all active:scale-95 shadow-lg shadow-primary/10 text-sm"
      >
        <span className="material-symbols-outlined text-lg">add</span>
        New Transcription
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-sm ${
                isActive
                  ? "text-primary font-semibold bg-primary/10 active-glow"
                  : "text-outline hover:text-on-surface hover:bg-white/5"
              }`}
            >
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex items-center gap-3 px-2">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-xs font-bold text-on-primary-container">
              AM
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-secondary border-2 border-surface-container-low rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-on-surface">Alex Mercer</span>
            <span className="text-[9px] text-outline font-label uppercase tracking-wider">Composer</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
