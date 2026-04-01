"use client";

import AppShell from "@/components/AppShell";

const headerActions = (
  <div className="flex items-center gap-4">
    <button className="p-2 text-zinc-500 hover:bg-zinc-800/50 transition-all rounded-full active:scale-95 duration-150">
      <span className="material-symbols-outlined">notifications</span>
    </button>
    <button className="p-2 text-zinc-500 hover:bg-zinc-800/50 transition-all rounded-full active:scale-95 duration-150">
      <span className="material-symbols-outlined">settings</span>
    </button>
    <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
      <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFVKkDwrXyrS-AaCx8Wh0cN8xtgYVGEuJCI8X5h8OtfiTgGhaX4xa0VLntVut7JZDOMLgrN4QJXJ6e6zxAbGRQcAk7KyV3xXp4xFCgu_ejFgjgQfbSnhJPMA8S1FjCOuEschG9A3qjmQDuhjP3GkFyC1M7XUNZgEPue6Y60rf2XSA8hXH5ReXYxUGlelRMeAaoWZhCvN6KYpYLghs1OxCNaREx67dNwN9R_9xOhBTq9vSQ44gFhnpxCnjBn9IVvqTW8lUXazy-Jg"/>
    </div>
  </div>
);

export default function TranscriptionReportPage() {
  return (
    <AppShell headerActions={headerActions}>
      <div className="pt-8 pb-24 px-8 max-w-6xl mx-auto w-full">

<div className="mb-12 flex justify-between items-end">
<div>
<h1 className="text-4xl font-headline font-bold text-on-background tracking-tight mb-2">Transcription Accuracy Report</h1>
<p className="text-on-surface-variant font-label">Session ID: HP-9928-AX • Mozart_Requiem_Vocal_Stem.wav</p>
</div>
<div className="flex gap-3">
<span className="px-3 py-1 bg-surface-container-high rounded-full text-secondary text-xs font-bold border border-secondary/20">98.5% GLOBAL SCORE</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="bg-surface-container-low p-6 rounded-xl border-b-2 border-transparent hover:border-primary transition-all">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary">music_note</span>
<span className="text-primary font-headline text-3xl font-bold">99.8%</span>
</div>
<h3 className="text-on-background font-semibold mb-1">Pitch Accuracy</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">Near-perfect frequency detection across 4 octaves. Minimal drift detected.</p>
</div>
<div className="bg-surface-container-low p-6 rounded-xl border-b-2 border-transparent hover:border-secondary transition-all">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-secondary">speed</span>
<span className="text-secondary font-headline text-3xl font-bold">98.5%</span>
</div>
<h3 className="text-on-background font-semibold mb-1">Rhythmic Timing</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">Micro-fluctuations identified in rubato sections. Quantization alignment active.</p>
</div>
<div className="bg-surface-container-low p-6 rounded-xl border-b-2 border-transparent hover:border-tertiary transition-all">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-tertiary">lyrics</span>
<span className="text-tertiary font-headline text-3xl font-bold">97.2%</span>
</div>
<h3 className="text-on-background font-semibold mb-1">Lyric Alignment</h3>
<p className="text-xs text-on-surface-variant leading-relaxed">High syllabic precision. 3 minor phonetic ambiguities flagged for review.</p>
</div>
</div>

<div className="bg-surface-container-low rounded-xl overflow-hidden mb-12 border border-white/5">
<div className="px-6 py-4 flex justify-between items-center border-b border-white/5 bg-surface-container-lowest/50">
<h2 className="font-headline font-bold text-lg">Confidence Map</h2>
<div className="flex items-center gap-6 text-[10px] font-label uppercase tracking-widest text-zinc-400">
<div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-secondary"></span> High (&gt;95%)</div>
<div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-tertiary"></span> Medium (70-95%)</div>
<div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-error shadow-[0_0_8px_rgba(255,180,171,0.4)]"></span> Attention Required (&lt;70%)</div>
</div>
</div>
<div className="p-8">
<div className="relative flex gap-4">

<div className="flex flex-col justify-between py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-tighter w-12">
<span>Pitch</span>
<span>Rhythm</span>
<span>Lyrics</span>
</div>

<div className="relative flex-1 h-36 bg-surface-container-lowest rounded-lg border border-white/10 overflow-hidden shadow-inner">

<div className="absolute inset-0 flex flex-col">

<div className="flex-1 flex border-b border-white/5">
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-tertiary/40 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1"></div>
</div>

<div className="flex-1 flex border-b border-white/5">
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-tertiary/40 flex-1 border-r border-white/5"></div>
<div className="h-full bg-error/40 flex-1 border-r border-white/5 animate-pulse"></div>
<div className="h-full bg-tertiary/40 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1"></div>
</div>

<div className="flex-1 flex">
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-tertiary/40 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1 border-r border-white/5"></div>
<div className="h-full bg-tertiary/40 flex-1 border-r border-white/5"></div>
<div className="h-full bg-secondary/30 flex-1"></div>
</div>
</div>

<div className="absolute left-[42%] top-0 -translate-x-1/2 flex flex-col items-center group cursor-pointer z-20">
<div className="w-6 h-6 rounded-full bg-error text-on-error flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-xs" style={{"fontVariationSettings": "'FILL' 1"}}>flag</span>
</div>
<div className="h-full w-px bg-error/50 group-hover:bg-error transition-colors"></div>
</div>
<div className="absolute left-[18%] top-0 -translate-x-1/2 flex flex-col items-center group cursor-pointer z-20 opacity-60 hover:opacity-100">
<div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-xs" style={{"fontVariationSettings": "'FILL' 1"}}>flag</span>
</div>
<div className="h-full w-px bg-tertiary/30 group-hover:bg-tertiary transition-colors"></div>
</div>

<div className="absolute left-1/3 top-[-8px] bottom-[-8px] w-0.5 bg-primary scrubber-glow z-30 pointer-events-none">
<div className="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center border-2 border-background">
<div className="w-1.5 h-1.5 rounded-full bg-on-primary"></div>
</div>
<div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center border-2 border-background"></div>
</div>
</div>
</div>
<div className="flex justify-between px-16 mt-4 text-[10px] text-zinc-600 font-label tracking-widest uppercase">
<span>00:00.00</span>
<span>01:15.00</span>
<span className="text-error font-bold flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-error"></span> 02:30.00 Critical</span>
<span>03:45.00</span>
<span>05:00.00</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

<div className="lg:col-span-3">
<h2 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">checklist</span> Action Items
                        </h2>
<div className="space-y-3">
<div className="group flex items-center justify-between p-4 bg-surface-container-high rounded-lg hover:bg-surface-bright transition-all cursor-pointer border border-transparent hover:border-white/10">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-error/20 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 1"}}>warning</span>
</div>
<div>
<p className="text-sm font-semibold">Check Measure 42: Potential overlap</p>
<p className="text-xs text-on-surface-variant">Soprano voice frequency clash detected with alto track.</p>
</div>
</div>
<span className="material-symbols-outlined text-zinc-600 group-hover:text-primary transition-colors">arrow_forward</span>
</div>
<div className="group flex items-center justify-between p-4 bg-surface-container-high rounded-lg hover:bg-surface-bright transition-all cursor-pointer border border-transparent hover:border-white/10">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-tertiary/20 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-sm">lyrics</span>
</div>
<div>
<p className="text-sm font-semibold">Verify Phoneme: "Lux"</p>
<p className="text-xs text-on-surface-variant">Ambiguous vowel duration at 02:45.30.</p>
</div>
</div>
<span className="material-symbols-outlined text-zinc-600 group-hover:text-primary transition-colors">arrow_forward</span>
</div>
<div className="group flex items-center justify-between p-4 bg-surface-container-high rounded-lg hover:bg-surface-bright transition-all cursor-pointer border border-transparent hover:border-white/10">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-primary-container/30 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm">speed</span>
</div>
<div>
<p className="text-sm font-semibold">Rhythmic Anchor Adjustment</p>
<p className="text-xs text-on-surface-variant">Manual override suggested for final cadence retardando.</p>
</div>
</div>
<span className="material-symbols-outlined text-zinc-600 group-hover:text-primary transition-colors">arrow_forward</span>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="bg-surface-container-low rounded-xl p-6 h-full border border-white/5 shadow-xl">
<h3 className="font-headline font-bold mb-6">Distribution Summary</h3>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-on-surface-variant">Harmonic Consistency</span>
<span className="text-primary font-bold">99%</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary w-[99%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-on-surface-variant">Background Noise floor</span>
<span className="text-secondary font-bold">-64dB</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[85%] shadow-[0_0_8px_rgba(79,219,200,0.3)]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-on-surface-variant">AI Processing Load</span>
<span className="text-on-background font-bold">High</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-tertiary w-[70%]"></div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-lg border border-white/5">
<div className="text-center flex-1">
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Total Notes</p>
<p className="text-xl font-headline font-bold">14,204</p>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="text-center flex-1">
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Time Elapsed</p>
<p className="text-xl font-headline font-bold">4.2s</p>
</div>
</div>
</div>
</div>
</div>
</div>
      </div>

      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary text-on-primary shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group z-50">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">edit_note</span>
        <div className="absolute right-full mr-4 px-3 py-1 bg-surface-bright text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-xl">
          Open in Editor
        </div>
      </button>
      </div>
    </AppShell>
  );
}
