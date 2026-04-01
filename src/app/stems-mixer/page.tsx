"use client";

import AppShell from "@/components/AppShell";

const headerActions = (
  <div className="flex items-center gap-4">
    <div className="relative group">
      <span className="material-symbols-outlined text-outline cursor-pointer group-hover:text-primary transition-colors">search</span>
    </div>
    <button className="p-2 text-zinc-500 hover:text-zinc-300 transition-all active:scale-95 duration-150">
      <span className="material-symbols-outlined">notifications</span>
    </button>
    <button className="p-2 text-zinc-500 hover:text-zinc-300 transition-all active:scale-95 duration-150">
      <span className="material-symbols-outlined">settings</span>
    </button>
    <button className="ml-4 px-4 py-1.5 bg-surface-container-highest text-primary font-bold rounded-md hover:bg-surface-bright transition-colors text-xs font-body">
      Export Score
    </button>
  </div>
);

export default function StemsMixerPage() {
  return (
    <AppShell headerActions={headerActions}>
      <div className="pt-8 pb-24 px-8 max-w-6xl mx-auto w-full">
<div className="mb-10 text-center">
<h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface mb-2">Ingest New Audio</h2>
<p className="text-outline font-body">Upload high-fidelity stems or field recordings for AI-driven orchestration.</p>
</div>

<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-8 group">
<div className="relative h-96 bg-surface-container-low border-2 border-dashed border-outline-variant hover:border-primary transition-all rounded-xl flex flex-col items-center justify-center p-8 group-hover:bg-surface-container-high overflow-hidden">

<div className="absolute inset-0 waveform-bg opacity-30 pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-32 opacity-10 flex items-end justify-center gap-1 pointer-events-none">

<div className="w-1.5 bg-primary h-12 rounded-full"></div>
<div className="w-1.5 bg-primary h-24 rounded-full"></div>
<div className="w-1.5 bg-primary h-16 rounded-full"></div>
<div className="w-1.5 bg-primary h-28 rounded-full"></div>
<div className="w-1.5 bg-primary h-14 rounded-full"></div>
<div className="w-1.5 bg-primary h-32 rounded-full"></div>
<div className="w-1.5 bg-primary h-20 rounded-full"></div>
<div className="w-1.5 bg-primary h-12 rounded-full"></div>
<div className="w-1.5 bg-primary h-24 rounded-full"></div>
<div className="w-1.5 bg-primary h-16 rounded-full"></div>
<div className="w-1.5 bg-primary h-28 rounded-full"></div>
<div className="w-1.5 bg-primary h-14 rounded-full"></div>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6 shadow-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="cloud_upload">cloud_upload</span>
</div>
<h3 className="text-xl font-headline font-bold mb-2">Drop audio files here</h3>
<p className="text-sm text-outline mb-8 font-label">WAV, MP3, FLAC or AIFF (Max 500MB)</p>
<button className="px-8 py-3 bg-primary text-on-primary-fixed font-bold rounded-md hover:brightness-110 transition-all shadow-lg active:scale-95">
              Select from Filesystem
            </button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

<div className="p-6 bg-surface-container-low rounded-xl border border-white/5 relative overflow-hidden flex flex-col h-full shadow-lg">
<div className="flex items-center justify-between mb-6">
<h4 className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-outline">Stems Mixer</h4>
<span className="material-symbols-outlined text-secondary text-sm" data-icon="tune">tune</span>
</div>
<div className="space-y-5 flex-1 overflow-y-auto pr-1">

<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Drums</span>
<div className="flex gap-1">
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-error transition-colors">M</button>
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-secondary transition-colors">S</button>
</div>
</div>
<input className="w-full h-1" max="100" min="0" type="range" value="80"/>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Bass</span>
<div className="flex gap-1">
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-error transition-colors">M</button>
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-secondary transition-colors">S</button>
</div>
</div>
<input className="w-full h-1" max="100" min="0" type="range" value="70"/>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Piano</span>
<div className="flex gap-1">
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-error transition-colors">M</button>
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-primary transition-colors border border-primary/30">S</button>
</div>
</div>
<input className="w-full h-1" max="100" min="0" type="range" value="90"/>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Guitar</span>
<div className="flex gap-1">
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-error transition-colors">M</button>
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-secondary transition-colors">S</button>
</div>
</div>
<input className="w-full h-1" max="100" min="0" type="range" value="65"/>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Horns</span>
<div className="flex gap-1">
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-error transition-colors">M</button>
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-secondary transition-colors">S</button>
</div>
</div>
<input className="w-full h-1" max="100" min="0" type="range" value="50"/>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">Vocals</span>
<div className="flex gap-1">
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-error transition-colors">M</button>
<button className="w-6 h-6 rounded flex items-center justify-center bg-surface-container-high text-[10px] font-bold text-outline hover:text-secondary transition-colors">S</button>
</div>
</div>
<input className="w-full h-1" max="100" min="0" type="range" value="85"/>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4FDBC8]"></div>
<span className="text-[10px] font-label text-outline uppercase font-semibold">Mix engine active</span>
</div>
</div>
</div>

<div className="col-span-12">
<div className="p-8 bg-surface-container-low rounded-xl border border-white/10 shadow-2xl relative">
<div className="flex justify-between items-end mb-6">
<div>
<span className="text-[10px] font-label uppercase tracking-[0.3em] text-secondary mb-2 block font-bold">Transcription In Progress</span>
<h4 className="text-3xl font-headline font-bold text-on-surface">Analyzing Harmonies...</h4>
</div>
<div className="text-right">
<span className="text-4xl font-headline font-black text-primary drop-shadow-[0_0_10px_rgba(193,193,255,0.2)]">68%</span>
<p className="text-[10px] text-outline uppercase tracking-widest mt-1">Est. 12s remaining</p>
</div>
</div>

<div className="h-16 bg-surface-container-lowest rounded-xl relative overflow-hidden flex items-center justify-center gap-[3px] px-6 border border-white/5">

<div className="h-4 w-1.5 bg-primary rounded-full"></div>
<div className="h-8 w-1.5 bg-primary rounded-full"></div>
<div className="h-12 w-1.5 bg-primary rounded-full"></div>
<div className="h-6 w-1.5 bg-primary rounded-full"></div>
<div className="h-14 w-1.5 bg-primary rounded-full"></div>
<div className="h-10 w-1.5 bg-primary rounded-full"></div>
<div className="h-12 w-1.5 bg-primary rounded-full"></div>
<div className="h-9 w-1.5 bg-primary rounded-full"></div>
<div className="h-16 w-1.5 bg-primary rounded-full"></div>
<div className="h-7 w-1.5 bg-primary rounded-full"></div>
<div className="h-11 w-1.5 bg-primary rounded-full"></div>
<div className="h-14 w-1.5 bg-primary rounded-full"></div>
<div className="h-8 w-1.5 bg-primary rounded-full"></div>
<div className="h-5 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-9 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-13 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-7 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-11 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-6 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-14 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-10 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-8 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-15 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-5 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-9 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-12 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-7 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-14 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-9 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="h-12 w-1.5 bg-outline-variant/30 rounded-full status-bar-anim"></div>
<div className="absolute inset-y-0 left-0 w-[68%] bg-primary/10 border-r-2 border-primary shadow-[4px_0_15px_rgba(193,193,255,0.3)]"></div>
</div>
<div className="flex justify-between mt-6">
<div className="flex gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-xs text-secondary font-bold" data-icon="check">check</span>
</div>
<span className="text-[10px] uppercase font-bold tracking-wider text-secondary">Tempo Map</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-xs text-secondary font-bold" data-icon="check">check</span>
</div>
<span className="text-[10px] uppercase font-bold tracking-wider text-secondary">Pitch Quantization</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
<span className="material-symbols-outlined text-xs text-primary" data-icon="sync">sync</span>
</div>
<span className="text-[10px] uppercase font-bold tracking-wider text-on-surface">Generating MIDI</span>
</div>
</div>
<button className="text-error text-xs font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4 transition-all">Abort Task</button>
</div>
</div>
</div>
</div>
      </div>
    </AppShell>
  );
}
