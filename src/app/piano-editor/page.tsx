"use client";

import AppShell from "@/components/AppShell";

const headerActions = (
  <div className="flex items-center gap-4">
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-lg">search</span>
      <input className="bg-surface-container-lowest border border-outline-variant/30 text-sm pl-10 pr-4 py-1.5 rounded-full w-64 focus:ring-1 focus:ring-primary/50 focus:border-primary/50 placeholder:text-outline-variant transition-all" placeholder="Search notations..." type="text"/>
    </div>
    <button className="flex items-center gap-2 bg-surface-container-highest px-4 py-1.5 rounded-md text-sm hover:bg-surface-bright transition-all border border-white/5">
      <span className="material-symbols-outlined text-primary text-lg">save</span>
      <span>Save</span>
    </button>
    <button className="flex items-center gap-2 bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] px-4 py-1.5 rounded-md text-sm font-bold text-on-primary-fixed hover:shadow-lg hover:shadow-primary/20 transition-all">
      Export Score
    </button>
  </div>
);

export default function PianoEditorPage() {
  return (
    <AppShell headerActions={headerActions}>
      <div className="relative w-full h-full">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
<div className="flex items-center bg-surface-container-low/95 glass-panel rounded-2xl px-3 py-2 gap-2 border border-white/10 shadow-2xl ring-1 ring-white/5">
<div className="flex items-center gap-1 pr-3 border-r border-white/10">
<button className="p-2.5 rounded-lg hover:bg-white/5 text-on-surface/70 hover:text-white transition-all active:scale-95" title="Whole Note">
<span className="note-duration">○</span>
</button>
<button className="p-2.5 rounded-lg hover:bg-white/5 text-on-surface/70 hover:text-white transition-all active:scale-95" title="Half Note">
<span className="material-symbols-outlined text-2xl">music_note</span>
</button>
<button className="p-2.5 rounded-lg bg-primary/10 text-primary transition-all active:scale-95" title="Quarter Note">
<span className="material-symbols-outlined text-2xl" style={{"fontVariationSettings": "'FILL' 1"}}>music_note</span>
</button>
<button className="p-2.5 rounded-lg hover:bg-white/5 text-on-surface/70 hover:text-white transition-all active:scale-95" title="Eighth Note">
<span className="material-symbols-outlined text-2xl">notes</span>
</button>
</div>
<div className="flex items-center gap-1 pr-3 border-r border-white/10">
<button className="p-2.5 rounded-lg hover:bg-white/5 text-on-surface/70 hover:text-white transition-all active:scale-95" title="Sharp">
<span className="material-symbols-outlined">sharp</span>
</button>
<button className="p-2.5 rounded-lg hover:bg-white/5 text-on-surface/70 hover:text-white transition-all active:scale-95" title="Natural">
<span className="material-symbols-outlined">music_off</span>
</button>
<button className="p-2.5 rounded-lg hover:bg-white/5 text-on-surface/70 hover:text-white transition-all active:scale-95" title="Flat">
<span className="material-symbols-outlined">trending_flat</span>
</button>
</div>
<div className="flex items-center gap-3 px-2">
<button className="text-[10px] font-bold tracking-widest uppercase text-outline hover:text-primary transition-colors">Dynamics</button>
<button className="text-[10px] font-bold tracking-widest uppercase text-outline hover:text-primary transition-colors">Articulations</button>
</div>
</div>
        </div>

        <div className="pt-8 pb-24 px-8 max-w-4xl mx-auto w-full">
          <div className="text-center mb-24">
<h1 className="font-headline text-5xl font-bold tracking-tighter text-on-surface mb-3">Nocturne No. 2 in E-flat Major</h1>
            <p className="font-body text-outline uppercase tracking-[0.3em] text-xs font-bold opacity-70">Frédéric Chopin, Op. 9 No. 2</p>
          </div>

          <div className="space-y-40">

<div className="staff-group">
<div className="flex flex-col gap-12">

<div className="relative h-[48px] flex flex-col justify-between">
<div className="staff-line"></div>
<div className="staff-line"></div>
<div className="staff-line"></div>
<div className="staff-line"></div>
<div className="staff-line"></div>

<div className="absolute -left-12 -top-4 flex items-center gap-4">
<span className="material-symbols-outlined text-6xl text-on-surface/80">music_note</span>
<div className="flex flex-col font-headline font-bold text-2xl leading-none">
<span>4</span>
<span>4</span>
</div>
</div>

<div className="absolute left-32 inset-y-0 flex items-center gap-16">
<div className="relative group cursor-pointer">
<div className="w-3.5 h-2.5 bg-on-surface rounded-full rotate-[-15deg] shadow-sm"></div>
<div className="absolute bottom-0 left-[12px] h-12 w-[1.5px] bg-on-surface"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded font-bold">Eb5</div>
</div>
<div className="relative group cursor-pointer">
<span className="material-symbols-outlined text-primary text-4xl" style={{"fontVariationSettings": "'FILL' 1"}}>music_note</span>
</div>
<div className="relative group cursor-pointer translate-y-2">
<div className="w-3.5 h-2.5 bg-on-surface/40 rounded-full rotate-[-15deg]"></div>
<div className="absolute bottom-0 left-[12px] h-12 w-[1.5px] bg-on-surface/40"></div>
</div>
</div>
<div className="absolute right-1/2 inset-y-0 w-px bg-outline-variant/40"></div>
</div>

<div className="relative h-[48px] flex flex-col justify-between">
<div className="staff-line"></div>
<div className="staff-line"></div>
<div className="staff-line"></div>
<div className="staff-line"></div>
<div className="staff-line"></div>
<div className="absolute -left-12 -top-2">
<span className="material-symbols-outlined text-4xl text-on-surface/80">music_note</span>
</div>
</div>
</div>

<div className="mt-12 flex items-center pl-32 gap-16 border-t border-dashed border-outline-variant/20 pt-4">
<input className="lyrics-input bg-transparent border-none text-on-surface font-headline font-semibold focus:ring-1 focus:ring-primary/30 rounded px-2 py-1 w-20 text-center text-sm transition-colors" type="text" value="And"/>
<input className="lyrics-input bg-transparent border-none text-on-surface font-headline font-semibold focus:ring-1 focus:ring-primary/30 rounded px-2 py-1 w-20 text-center text-sm transition-colors" type="text" value="yet"/>
<input className="lyrics-input bg-transparent border-none text-on-surface font-headline font-semibold focus:ring-1 focus:ring-primary/30 rounded px-2 py-1 w-20 text-center text-sm transition-colors" type="text" value="it"/>
<div className="ml-auto text-[9px] font-bold text-outline-variant uppercase tracking-widest italic opacity-50">Transcription Active</div>
</div>

<div className="absolute left-[-24px] top-6 bottom-32 w-2.5 border-l-2 border-y-2 border-outline-variant/40 rounded-l-lg"></div>
</div>

<div className="staff-group bg-primary/5 rounded-2xl p-8 -mx-8 ring-1 ring-primary/20">
<div className="absolute top-4 right-8 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Measure 5 Focus</span>
</div>
<div className="flex flex-col gap-12">
<div className="relative h-[48px] flex flex-col justify-between">
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="absolute left-40 inset-y-0 flex items-center">
<div className="relative group cursor-pointer scale-110">
<div className="w-4 h-3 bg-secondary rounded-full rotate-[-15deg] shadow-[0_0_20px_rgba(79,219,200,0.4)]"></div>
<div className="absolute bottom-0 left-[14px] h-14 w-0.5 bg-secondary"></div>
</div>
</div>
</div>
<div className="relative h-[48px] flex flex-col justify-between">
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
</div>
</div>
<div className="mt-12 flex items-center pl-32 gap-16 border-t border-dashed border-outline-variant/20 pt-4">
<input className="lyrics-input bg-transparent border-none text-on-surface font-headline font-semibold focus:ring-1 focus:ring-primary/30 rounded px-2 py-1 w-20 text-center text-sm transition-colors" type="text" value="flows"/>
<input className="lyrics-input bg-transparent border-none text-on-surface font-headline font-semibold focus:ring-1 focus:ring-primary/30 rounded px-2 py-1 w-20 text-center text-sm transition-colors" type="text" value="through"/>
</div>
<div className="absolute left-[-24px] top-6 bottom-32 w-2.5 border-l-2 border-y-2 border-primary/30 rounded-l-lg"></div>
          </div>
          </div>

          <aside className="absolute top-48 right-8 w-80 bg-surface-container-low/95 glass-panel rounded-3xl p-6 shadow-2xl border border-white/5 ring-1 ring-white/5 z-20">
            <div className="flex justify-between items-center mb-8">
              <div className="flex flex-col">
                <h3 className="font-headline font-bold text-base text-on-surface">Properties</h3>
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Note: Eb5</span>
              </div>
              <button className="p-1.5 hover:bg-white/5 rounded-full transition-colors text-outline">
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
            <div className="space-y-8">
              <section>
                <label className="text-[10px] font-bold uppercase tracking-widest text-outline block mb-4">Duration &amp; Dynamics</label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface-container-lowest/50 border border-white/5 p-4 rounded-2xl hover:border-primary/30 transition-all group">
                    <div className="text-[9px] text-outline-variant mb-1 font-bold">PITCH</div>
                    <div className="text-lg font-bold text-primary flex items-center gap-2">
                      Eb5
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">edit</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest/50 border border-white/5 p-4 rounded-2xl hover:border-primary/30 transition-all group">
                    <div className="text-[9px] text-outline-variant mb-1 font-bold">VELOCITY</div>
                    <div className="text-lg font-bold text-secondary">88</div>
                  </div>
                </div>
              </section>
              <section>
                <label className="text-[10px] font-bold uppercase tracking-widest text-outline block mb-4">Articulations</label>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-4 py-2 rounded-xl ring-1 ring-primary/40 cursor-pointer hover:bg-primary/30 transition-all">Staccato</span>
                  <span className="bg-white/5 text-on-surface/60 text-[10px] font-bold px-4 py-2 rounded-xl hover:text-white hover:bg-white/10 cursor-pointer transition-all">Legato</span>
                  <span className="bg-white/5 text-on-surface/60 text-[10px] font-bold px-4 py-2 rounded-xl hover:text-white hover:bg-white/10 cursor-pointer transition-all">Tenuto</span>
                </div>
              </section>
              <section className="pt-6 border-t border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-outline">Humanize Factor</span>
                  <span className="text-xs font-bold text-secondary">85%</span>
                </div>
                <div className="relative w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[85%] bg-secondary shadow-[0_0_10px_rgba(79,219,200,0.5)]"></div>
                </div>
              </section>
              <div className="bg-primary/10 p-5 rounded-2xl border border-primary/20 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                <p className="text-[11px] text-on-primary-container leading-relaxed font-medium relative">
                  "Try a gradual crescendo from measure 16 to emphasize the emotional peak of the B-section."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Conductor AI Suggestion</span>
                </div>
              </div>
            </div>
          </aside>

        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-[60%] h-14 bg-surface-container-low/80 glass-panel rounded-2xl px-8 flex items-center gap-6 border border-white/5 shadow-xl">
          <span className="text-[10px] font-bold text-outline">00:00</span>
          <div className="flex-1 h-6 flex items-center gap-[3px]">
            <div className="h-3 w-1 bg-primary/40 rounded-full"></div>
            <div className="h-5 w-1 bg-primary/40 rounded-full"></div>
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <div className="h-4 w-1 bg-primary rounded-full"></div>
            <div className="h-10 w-1 bg-primary rounded-full shadow-[0_0_10px_rgba(193,193,255,0.4)]"></div>
            <div className="h-6 w-1 bg-primary rounded-full"></div>
            <div className="h-12 w-1 bg-primary rounded-full shadow-[0_0_15px_rgba(193,193,255,0.5)]"></div>
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <div className="h-4 w-1 bg-outline-variant/30 rounded-full"></div>
            <div className="h-7 w-1 bg-outline-variant/30 rounded-full"></div>
            <div className="h-10 w-1 bg-outline-variant/30 rounded-full"></div>
            <div className="h-3 w-1 bg-outline-variant/30 rounded-full"></div>
            <div className="h-5 w-1 bg-outline-variant/30 rounded-full"></div>
            <div className="h-8 w-1 bg-outline-variant/30 rounded-full"></div>
            <div className="h-2 w-1 bg-outline-variant/30 rounded-full"></div>
            <div className="h-11 w-1 bg-outline-variant/30 rounded-full"></div>
            <div className="h-6 w-1 bg-outline-variant/30 rounded-full"></div>
            <div className="flex-1 h-[2px] bg-outline-variant/20 ml-2 rounded-full"></div>
          </div>
          <span className="text-[10px] font-bold text-outline">04:32</span>
        </div>
        </div>
      </div>
    </AppShell>
  );
}
