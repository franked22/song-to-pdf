"use client";

import { useState } from "react";

interface HeaderProps {
  actions?: React.ReactNode;
}

export default function Header({ actions }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 h-16 flex justify-between items-center px-8 z-40 sonic-blur border-b border-white/5">
      <div className="flex items-center gap-10">
        <span className="text-lg font-bold font-headline tracking-tighter text-on-surface">
          Harmonic <span className="text-primary">Precision</span>
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative hidden lg:block">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-lg">
            search
          </span>
          <input
            className="bg-surface-container-high border-none text-sm rounded-full py-2 pl-11 pr-5 w-64 focus:ring-2 focus:ring-primary/20 placeholder:text-outline transition-all font-body"
            placeholder="Search projects..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Icon buttons */}
        <div className="flex items-center gap-4 text-outline">
          <button className="material-symbols-outlined hover:text-on-surface transition-colors text-xl">
            notifications
          </button>
          <button className="material-symbols-outlined hover:text-on-surface transition-colors text-xl">
            settings
          </button>
        </div>

        {/* Actions slot */}
        {actions}
      </div>
    </header>
  );
}
