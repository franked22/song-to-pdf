"use client";

import { useState, useCallback } from "react";
import AppShell from "@/components/AppShell";
import StatusBadge from "@/components/StatusBadge";
import { MOCK_LEAD_SHEET } from "@/lib/store";
import type { LeadSheet, LeadSheetSection, Measure, ChordSymbol } from "@/types";

function chordDisplay(chord: ChordSymbol): string {
  return `${chord.root}${chord.quality}${chord.bass ? `/${chord.bass}` : ""}`;
}

function ChordCell({
  chord,
  onEdit,
}: {
  chord: ChordSymbol;
  onEdit: (newValue: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(chordDisplay(chord));

  const commit = () => {
    setEditing(false);
    if (value.trim() !== chordDisplay(chord)) {
      onEdit(value.trim());
    }
  };

  if (editing) {
    return (
      <input
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => e.key === "Enter" && commit()}
        className="bg-primary/10 border border-primary/30 rounded px-2 py-1 text-lg font-headline font-bold text-primary w-28 focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    );
  }

  return (
    <button
      onClick={() => setEditing(true)}
      className="px-2 py-1 rounded text-lg font-headline font-bold text-primary hover:bg-primary/10 transition-colors border-b border-dashed border-primary/30 cursor-text"
      title="Click to edit chord"
    >
      {chordDisplay(chord)}
    </button>
  );
}

function LyricsCell({
  lyrics,
  onEdit,
}: {
  lyrics: string;
  onEdit: (val: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(lyrics);

  const commit = () => {
    setEditing(false);
    if (value !== lyrics) onEdit(value);
  };

  if (editing) {
    return (
      <input
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => e.key === "Enter" && commit()}
        className="bg-surface-container-high border border-outline-variant/30 rounded px-2 py-0.5 text-sm text-on-surface w-full focus:outline-none focus:ring-2 focus:ring-primary/40 font-body"
      />
    );
  }

  return (
    <button
      onClick={() => setEditing(true)}
      className="text-sm text-outline-variant hover:text-on-surface transition-colors cursor-text italic min-h-[1.5rem] text-left w-full"
      title="Click to edit lyrics"
    >
      {lyrics || "—"}
    </button>
  );
}

function MeasureBlock({
  measure,
  onChordEdit,
  onLyricsEdit,
}: {
  measure: Measure;
  onChordEdit: (chordIdx: number, value: string) => void;
  onLyricsEdit: (value: string) => void;
}) {
  return (
    <div className="flex-1 min-w-[140px] p-3 border-r border-outline-variant/20 last:border-r-0 group/measure hover:bg-surface-container-high/50 transition-colors rounded-lg">
      {/* Measure number */}
      <span className="text-[9px] text-outline font-label font-bold uppercase tracking-wider block mb-1">
        M{measure.number}
      </span>
      {/* Chords */}
      <div className="flex flex-wrap gap-2 mb-2">
        {measure.chords.map((chord, ci) => (
          <ChordCell
            key={`${measure.id}-c${ci}`}
            chord={chord}
            onEdit={(val) => onChordEdit(ci, val)}
          />
        ))}
      </div>
      {/* Lyrics */}
      <LyricsCell lyrics={measure.lyrics ?? ""} onEdit={onLyricsEdit} />
    </div>
  );
}

function SectionBlock({
  section,
  sectionIdx,
  onChordEdit,
  onLyricsEdit,
  onRenameSection,
  onDeleteSection,
}: {
  section: LeadSheetSection;
  sectionIdx: number;
  onChordEdit: (measureIdx: number, chordIdx: number, value: string) => void;
  onLyricsEdit: (measureIdx: number, value: string) => void;
  onRenameSection: (name: string) => void;
  onDeleteSection: () => void;
}) {
  const [editingName, setEditingName] = useState(false);
  const [name, setName] = useState(section.name);

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-headline font-bold text-outline-variant/30 tracking-tighter">
            {String(sectionIdx + 1).padStart(2, "0")}
          </span>
          <div className="h-6 w-px bg-outline-variant/20" />
          {editingName ? (
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => {
                setEditingName(false);
                onRenameSection(name);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setEditingName(false);
                  onRenameSection(name);
                }
              }}
              className="bg-surface-container-high border border-outline-variant/30 rounded px-2 py-0.5 text-sm font-bold font-headline focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          ) : (
            <button
              onClick={() => setEditingName(true)}
              className="text-sm font-bold font-headline text-on-surface hover:text-primary transition-colors"
            >
              {section.name}
            </button>
          )}
        </div>
        <button
          onClick={onDeleteSection}
          className="text-outline hover:text-error transition-colors"
          title="Delete section"
        >
          <span className="material-symbols-outlined text-lg">delete</span>
        </button>
      </div>

      {/* Measures Grid (4 per row) */}
      <div className="bg-surface-container-low rounded-xl border border-white/5 p-4">
        {Array.from({ length: Math.ceil(section.measures.length / 4) }).map((_, rowIdx) => (
          <div key={rowIdx} className="flex border-b border-outline-variant/10 last:border-b-0">
            {section.measures.slice(rowIdx * 4, rowIdx * 4 + 4).map((measure, mOff) => {
              const mIdx = rowIdx * 4 + mOff;
              return (
                <MeasureBlock
                  key={measure.id}
                  measure={measure}
                  onChordEdit={(ci, val) => onChordEdit(mIdx, ci, val)}
                  onLyricsEdit={(val) => onLyricsEdit(mIdx, val)}
                />
              );
            })}
            {/* Fill empty slots in last row */}
            {rowIdx === Math.ceil(section.measures.length / 4) - 1 &&
              section.measures.length % 4 !== 0 &&
              Array.from({ length: 4 - (section.measures.length % 4) }).map((_, i) => (
                <div key={`empty-${i}`} className="flex-1 min-w-[140px]" />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LeadSheetPage() {
  const [sheet, setSheet] = useState<LeadSheet>(MOCK_LEAD_SHEET);

  const handleChordEdit = useCallback(
    (sectionIdx: number, measureIdx: number, chordIdx: number, value: string) => {
      setSheet((prev) => {
        const next = { ...prev, sections: prev.sections.map((s, si) => {
          if (si !== sectionIdx) return s;
          return {
            ...s,
            measures: s.measures.map((m, mi) => {
              if (mi !== measureIdx) return m;
              return {
                ...m,
                chords: m.chords.map((c, ci) => {
                  if (ci !== chordIdx) return c;
                  // Parse simple chord string back
                  return { ...c, root: value, quality: "" };
                }),
              };
            }),
          };
        })};
        return next;
      });
    },
    []
  );

  const handleLyricsEdit = useCallback(
    (sectionIdx: number, measureIdx: number, value: string) => {
      setSheet((prev) => ({
        ...prev,
        sections: prev.sections.map((s, si) => {
          if (si !== sectionIdx) return s;
          return {
            ...s,
            measures: s.measures.map((m, mi) => {
              if (mi !== measureIdx) return m;
              return { ...m, lyrics: value };
            }),
          };
        }),
      }));
    },
    []
  );

  const handleRenameSection = useCallback((sectionIdx: number, name: string) => {
    setSheet((prev) => ({
      ...prev,
      sections: prev.sections.map((s, si) => (si === sectionIdx ? { ...s, name } : s)),
    }));
  }, []);

  const handleDeleteSection = useCallback((sectionIdx: number) => {
    setSheet((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, si) => si !== sectionIdx),
    }));
  }, []);

  const addSection = useCallback(() => {
    setSheet((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          id: `sec-${Date.now()}`,
          name: `Section ${prev.sections.length + 1}`,
          measures: Array.from({ length: 4 }).map((_, i) => ({
            id: `m-new-${Date.now()}-${i}`,
            number: prev.sections.reduce((acc, s) => acc + s.measures.length, 0) + i + 1,
            chords: [{ root: "C", quality: "maj7", beat: 1 }],
            lyrics: "",
            notes: [],
          })),
        },
      ],
    }));
  }, []);

  return (
    <AppShell
      headerActions={
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-outline-variant/30 text-on-surface-variant px-4 py-2 rounded-xl text-sm font-bold hover:bg-surface-container-high transition-all active:scale-95">
            <span className="material-symbols-outlined text-sm">swap_horiz</span>
            Transpose
          </button>
          <button
            onClick={() => window.location.href = "/lead-sheet-pdf"}
            className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl text-sm font-bold hover:bg-primary-fixed-dim transition-all active:scale-95 shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
            Export PDF
          </button>
        </div>
      }
    >
      <div className="pt-6 pb-24 px-8 max-w-6xl mx-auto w-full">
        {/* Title Block */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-4xl font-headline font-bold tracking-tight text-on-surface">
              {sheet.title}
            </h1>
            <div className="flex items-center gap-4 mt-2 text-outline text-xs font-label font-semibold uppercase tracking-[0.2em]">
              <span>{sheet.artist}</span>
              <span className="w-1 h-1 bg-outline-variant rounded-full" />
              <span>{sheet.timeSignature} Time</span>
              <span className="w-1 h-1 bg-outline-variant rounded-full" />
              <span>Key: {sheet.key}</span>
              <span className="w-1 h-1 bg-outline-variant rounded-full" />
              <span>{sheet.bpm} BPM</span>
            </div>
          </div>
          <StatusBadge status="complete" />
        </div>

        {/* Sections */}
        {sheet.sections.map((section, si) => (
          <SectionBlock
            key={section.id}
            section={section}
            sectionIdx={si}
            onChordEdit={(mi, ci, val) => handleChordEdit(si, mi, ci, val)}
            onLyricsEdit={(mi, val) => handleLyricsEdit(si, mi, val)}
            onRenameSection={(name) => handleRenameSection(si, name)}
            onDeleteSection={() => handleDeleteSection(si)}
          />
        ))}

        {/* Add Section */}
        <button
          onClick={addSection}
          className="w-full py-4 border-2 border-dashed border-outline-variant/20 rounded-xl text-outline hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center gap-2 text-sm font-bold"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Add Section
        </button>
      </div>
    </AppShell>
  );
}
