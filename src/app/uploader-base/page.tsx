"use client";

export default function UploaderBasePage() {
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
<div className="relative h-96 bg-surface-container-low border-2 border-dashed border-outline-variant hover:border-primary transition-all rounded-xl flex flex-col items-center justify-center p-8 group-hover:bg-surface-container-high">
<div className="absolute inset-0 overflow-hidden rounded-xl opacity-5 pointer-events-none">
<img alt="Abstract soundwave pattern" className="w-full h-full object-cover" data-alt="Abstract fluid flowing silk-like blue and purple gradients resembling digital soundwaves on black background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnZ3uyWG3L_vuvYakugWiFvbgxVbwRp-11WKSKxMs6G24n9Mt-8_BIzOBXQCyNkKavIdFN4Sl7UCApcDKejMccbdzrzNPVU6gCuPrC6Ho3yVlIxuWxuG1dNDqPgwTaRxrRtZBZEFHh1xiimfn0s3-OeXYjB458wP_X4aDeMAgkBplM_1Pb-GaX641iq2r7Ra4LkjBeB7OAXv5zfBXi1Ea1Bcu1_JMikOczGBBTcoyfwAWQWwJ3C_gCldSxgphFAxt_YBUfRaZQOQ"/>
</div>
<div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6 shadow-xl">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="cloud_upload">cloud_upload</span>
</div>
<h3 className="text-xl font-headline font-bold mb-2">Drop audio files here</h3>
<p className="text-sm text-outline mb-8 font-label">WAV, MP3, FLAC or AIFF (Max 500MB)</p>
<button className="px-8 py-3 bg-surface-container-highest text-on-surface font-bold rounded-md hover:bg-surface-bright transition-all border border-white/5">
              Select from Filesystem
            </button>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div className="p-6 bg-surface-container-low rounded-xl border border-white/5">
<h4 className="text-sm font-headline font-bold uppercase tracking-widest text-primary mb-6">Target Output</h4>
<div className="space-y-3">
<label className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg cursor-pointer hover:bg-surface-bright transition-all border-b-2 border-transparent active:border-secondary group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline group-hover:text-secondary" data-icon="piano">piano</span>
<span className="text-sm font-medium">Piano Score</span>
</div>
<input defaultChecked className="form-radio bg-transparent border-outline text-secondary focus:ring-secondary" name="format" type="radio"/>
</label>
<label className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg cursor-pointer hover:bg-surface-bright transition-all border-b-2 border-transparent active:border-secondary group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline group-hover:text-secondary" data-icon="description">description</span>
<span className="text-sm font-medium">Lead Sheet</span>
</div>
<input className="form-radio bg-transparent border-outline text-secondary focus:ring-secondary" name="format" type="radio"/>
</label>
<label className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg cursor-pointer hover:bg-surface-bright transition-all border-b-2 border-transparent active:border-secondary group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline group-hover:text-secondary" data-icon="full_stacked_bar_chart">full_stacked_bar_chart</span>
<span className="text-sm font-medium">Full Orchestration</span>
</div>
<input className="form-radio bg-transparent border-outline text-secondary focus:ring-secondary" name="format" type="radio"/>
</label>
</div>
</div>
<div className="p-6 bg-surface-container-low rounded-xl border border-white/5 flex-1">
<h4 className="text-sm font-headline font-bold uppercase tracking-widest text-primary mb-4">Precision Mode</h4>
<div className="flex items-center gap-3 mb-6">
<div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4FDBC8]"></div>
<span className="text-xs font-label text-on-surface">AI Harmonic Analysis Active</span>
</div>
<p className="text-[11px] text-outline leading-relaxed font-body">Our engine will attempt to detect tempo changes, polyphonic textures, and microtonal inflections automatically.</p>
</div>
</div>

<div className="col-span-12">
<div className="p-8 bg-surface-container-low rounded-xl border border-white/5">
<div className="flex justify-between items-end mb-4">
<div>
<span className="text-xs font-label uppercase tracking-widest text-secondary mb-1 block">Active Process</span>
<h4 className="text-2xl font-headline font-bold text-on-surface">Analyzing Harmonies...</h4>
</div>
<span className="text-4xl font-headline font-light text-primary">68%</span>
</div>

<div className="h-12 bg-surface-container-lowest rounded-md relative overflow-hidden flex items-center gap-1 px-4">

<div className="h-4 w-1 bg-primary rounded-full"></div>
<div className="h-6 w-1 bg-primary rounded-full"></div>
<div className="h-8 w-1 bg-primary rounded-full"></div>
<div className="h-5 w-1 bg-primary rounded-full"></div>
<div className="h-10 w-1 bg-primary rounded-full"></div>
<div className="h-6 w-1 bg-primary rounded-full"></div>
<div className="h-9 w-1 bg-primary rounded-full"></div>
<div className="h-7 w-1 bg-primary rounded-full"></div>
<div className="h-10 w-1 bg-primary rounded-full"></div>
<div className="h-4 w-1 bg-primary rounded-full"></div>
<div className="h-6 w-1 bg-primary rounded-full"></div>
<div className="h-8 w-1 bg-primary rounded-full"></div>
<div className="h-5 w-1 bg-primary rounded-full"></div>
<div className="h-3 w-1 bg-outline-variant rounded-full"></div>
<div className="h-6 w-1 bg-outline-variant rounded-full"></div>
<div className="h-8 w-1 bg-outline-variant rounded-full"></div>
<div className="h-5 w-1 bg-outline-variant rounded-full"></div>
<div className="h-7 w-1 bg-outline-variant rounded-full"></div>
<div className="h-4 w-1 bg-outline-variant rounded-full"></div>
<div className="h-9 w-1 bg-outline-variant rounded-full"></div>
<div className="h-6 w-1 bg-outline-variant rounded-full"></div>
<div className="h-5 w-1 bg-outline-variant rounded-full"></div>
<div className="h-10 w-1 bg-outline-variant rounded-full"></div>
<div className="h-3 w-1 bg-outline-variant rounded-full"></div>
<div className="h-6 w-1 bg-outline-variant rounded-full"></div>
<div className="h-8 w-1 bg-outline-variant rounded-full"></div>
<div className="h-5 w-1 bg-outline-variant rounded-full"></div>
<div className="h-10 w-1 bg-outline-variant rounded-full"></div>
<div className="h-6 w-1 bg-outline-variant rounded-full"></div>
<div className="h-9 w-1 bg-outline-variant rounded-full"></div>
<div className="absolute inset-y-0 left-0 w-[68%] bg-primary/10 border-r border-secondary"></div>
</div>
<div className="flex justify-between mt-4">
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-secondary" data-icon="check_circle">check_circle</span>
<span className="text-[10px] uppercase font-label text-outline">Tempo Map Extraction</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-secondary" data-icon="check_circle">check_circle</span>
<span className="text-[10px] uppercase font-label text-outline">Pitch Quantization</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-outline animate-pulse" data-icon="pending">pending</span>
<span className="text-[10px] uppercase font-label text-on-surface">Generating MIDI</span>
</div>
</div>
<button className="text-tertiary text-xs font-bold uppercase tracking-tighter hover:underline">Cancel Upload</button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-0 right-0 left-64 h-20 bg-stone-900/80 dark:bg-[#1C1B1B]/80 backdrop-blur-2xl flex justify-center items-center space-x-12 z-50 border-t border-white/10 shadow-2xl shadow-black">
<div className="flex flex-col items-center group cursor-pointer">
<span className="material-symbols-outlined text-stone-500 dark:text-[#464555] group-hover:scale-110 transition-transform" data-icon="play_arrow">play_arrow</span>
<span className="text-[10px] uppercase tracking-widest font-headline text-stone-500 dark:text-[#464555]">Play</span>
</div>
<div className="flex flex-col items-center group cursor-pointer active:scale-90 duration-150">
<span className="material-symbols-outlined text-teal-400 dark:text-[#4FDBC8] drop-shadow-[0_0_8px_rgba(79,219,200,0.5)] group-hover:scale-110 transition-transform" data-icon="stop">stop</span>
<span className="text-[10px] uppercase tracking-widest font-headline text-teal-400 dark:text-[#4FDBC8]">Stop</span>
</div>
<div className="flex flex-col items-center group cursor-pointer">
<span className="material-symbols-outlined text-stone-500 dark:text-[#464555] group-hover:scale-110 transition-transform" data-icon="loop">loop</span>
<span className="text-[10px] uppercase tracking-widest font-headline text-stone-500 dark:text-[#464555]">Loop</span>
</div>
<div className="w-px h-8 bg-white/10 mx-4"></div>
<div className="flex items-center gap-4 bg-surface-container-high px-4 py-2 rounded-full border border-white/5">
<span className="material-symbols-outlined text-primary text-sm" data-icon="speed">speed</span>
<span className="text-lg font-headline font-bold text-on-surface">124 <span className="text-[10px] text-outline uppercase">BPM</span></span>
</div>
</footer>
    </>
  );
}
