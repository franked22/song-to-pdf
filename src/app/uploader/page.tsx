"use client";

export default function UploaderPage() {
  return (
    <>
      
<aside className="fixed left-0 top-0 h-screen w-64 bg-stone-900 dark:bg-[#1C1B1B] flex flex-col py-6 px-4 z-50">
<div className="mb-8 px-2">
<h1 className="text-xl font-bold tracking-tighter text-indigo-100 dark:text-[#E5E2E1] font-headline">The Conductor</h1>
<p className="text-xs text-stone-500 font-label uppercase tracking-widest mt-1">Professional Tier</p>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-headline tracking-tight">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-indigo-400 dark:text-[#C1C1FF] font-bold bg-[#2A2A2A] rounded-md transition-all scale-98" href="#">
<span className="material-symbols-outlined" data-icon="upload_file">upload_file</span>
<span className="font-headline tracking-tight">Uploader</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
<span className="font-headline tracking-tight">Notation Editor</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined" data-icon="queue_music">queue_music</span>
<span className="font-headline tracking-tight">Lead Sheets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined" data-icon="library_music">library_music</span>
<span className="font-headline tracking-tight">Library</span>
</a>
</nav>
<div className="mt-auto pt-6 px-2 border-t border-white/5">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="Close up portrait of a professional male musician in a dark studio setting with moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8-9ZWoiAURLKiF7_rdVRsqI_lscYTM2kPiFYT8G-GsciB2aviZYwjLGBPImsbav8GYZcaZBqA4MoTA2ghhLj8IbCxsQ3W89qA0j8hwfFtuedwnKQeXwUxSb14TVl_AVZNe4SSjXhynIeQh7UkDrfAcW1F1iJrTmCFx4Mz5gKPT49pljxu3iaOyEGXfPGlq4rU7JlzthXpYYiKZkXigmMJ70AP8gL2OAytAassCKkV5441Gt5TgGaE-0NoHlh__2bRZtNzUHK7Gg"/>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Alex River</p>
<p className="text-[10px] text-outline uppercase tracking-tighter">Chief Arranger</p>
</div>
</div>
<button className="w-full py-3 bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] text-on-primary-fixed font-bold rounded-md active:opacity-80 transition-all text-sm">
        New Transcription
      </button>
</div>
</aside>

<header className="fixed top-0 right-0 left-64 h-16 bg-stone-950/70 dark:bg-[#131313]/70 backdrop-blur-xl flex justify-between items-center px-8 z-40 border-b border-white/5">
<div className="flex items-center gap-8">
<span className="text-lg font-black bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] bg-clip-text text-transparent font-headline">Harmonic Precision</span>
<nav className="hidden md:flex items-center gap-6">
<a className="text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity text-sm font-medium font-body" href="#">Projects</a>
<a className="text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity text-sm font-medium font-body" href="#">Shared</a>
<a className="text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity text-sm font-medium font-body" href="#">Recent</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="material-symbols-outlined text-outline cursor-pointer group-hover:text-primary transition-colors" data-icon="search">search</span>
</div>
<button className="p-2 text-stone-400 hover:text-white transition-opacity">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-stone-400 hover:text-white transition-opacity">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button className="ml-4 px-4 py-1.5 bg-surface-container-highest text-primary font-bold rounded-md hover:bg-surface-bright transition-colors text-xs font-body">
        Export Score
      </button>
</div>
</header>

<main className="ml-64 mt-16 h-[calc(100vh-144px)] overflow-y-auto p-12 bg-background">
<div className="max-w-4xl mx-auto">

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
<div className="p-6 bg-surface-container-low rounded-xl border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-5">
<span className="material-symbols-outlined text-6xl" data-icon="auto_awesome">auto_awesome</span>
</div>
<h4 className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-outline mb-6">Target Output</h4>
<div className="space-y-3">
<label className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg cursor-pointer hover:bg-surface-bright transition-all border border-transparent has-[:checked]:border-primary/50 group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-lg" data-icon="piano">piano</span>
</div>
<span className="text-sm font-bold font-headline tracking-tight">Piano Score</span>
</div>
<input defaultChecked className="form-radio bg-transparent border-outline-variant text-primary focus:ring-primary w-5 h-5" name="format" type="radio"/>
</label>
<label className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg cursor-pointer hover:bg-surface-bright transition-all border border-transparent has-[:checked]:border-primary/50 group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-outline group-hover:text-primary text-lg" data-icon="description">description</span>
</div>
<span className="text-sm font-bold font-headline tracking-tight">Lead Sheet</span>
</div>
<input className="form-radio bg-transparent border-outline-variant text-primary focus:ring-primary w-5 h-5" name="format" type="radio"/>
</label>
<label className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg cursor-pointer hover:bg-surface-bright transition-all border border-transparent has-[:checked]:border-primary/50 group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-outline group-hover:text-primary text-lg" data-icon="full_stacked_bar_chart">full_stacked_bar_chart</span>
</div>
<span className="text-sm font-bold font-headline tracking-tight">Orchestration</span>
</div>
<input className="form-radio bg-transparent border-outline-variant text-primary focus:ring-primary w-5 h-5" name="format" type="radio"/>
</label>
</div>
</div>
<div className="p-6 bg-surface-container-low rounded-xl border border-white/5 flex-1 flex flex-col justify-between">
<div>
<h4 className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-outline mb-4">Precision Mode</h4>
<div className="flex items-center gap-3 mb-6">
<div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_12px_#4FDBC8]"></div>
<span className="text-xs font-label text-on-surface font-semibold">Harmonic Analysis Active</span>
</div>
<p className="text-[11px] text-outline leading-relaxed font-body">Proprietary neural engine detecting polyphonic textures and microtonal inflections in real-time.</p>
</div>
</div>
</div>

<div className="col-span-12">
<div className="p-8 bg-surface-container-low rounded-xl border border-white/10 shadow-2xl">
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
</main>

<footer className="fixed bottom-0 right-0 left-64 h-20 bg-stone-900/80 dark:bg-[#1C1B1B]/80 backdrop-blur-2xl flex justify-center items-center space-x-12 z-50 border-t border-white/10 shadow-2xl shadow-black">
<div className="flex flex-col items-center group cursor-pointer">
<span className="material-symbols-outlined text-stone-500 dark:text-[#464555] group-hover:scale-110 group-hover:text-white transition-all" data-icon="play_arrow">play_arrow</span>
<span className="text-[10px] uppercase tracking-widest font-headline text-stone-500 dark:text-[#464555]">Play</span>
</div>
<div className="flex flex-col items-center group cursor-pointer active:scale-90 duration-150">
<span className="material-symbols-outlined text-secondary drop-shadow-[0_0_8px_rgba(79,219,200,0.5)] group-hover:scale-110 transition-transform" data-icon="stop">stop</span>
<span className="text-[10px] uppercase tracking-widest font-headline text-secondary">Stop</span>
</div>
<div className="flex flex-col items-center group cursor-pointer">
<span className="material-symbols-outlined text-stone-500 dark:text-[#464555] group-hover:scale-110 group-hover:text-white transition-all" data-icon="loop">loop</span>
<span className="text-[10px] uppercase tracking-widest font-headline text-stone-500 dark:text-[#464555]">Loop</span>
</div>
<div className="w-px h-8 bg-white/10 mx-4"></div>
<div className="flex items-center gap-4 bg-surface-container-high px-4 py-2 rounded-full border border-white/5">
<span className="material-symbols-outlined text-primary text-sm" data-icon="speed">speed</span>
<span className="text-lg font-headline font-bold text-on-surface">124 <span className="text-[10px] text-outline uppercase ml-1">BPM</span></span>
</div>
</footer>
    </>
  );
}
