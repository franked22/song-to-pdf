"use client";

export default function PianoEditorBasePage() {
  return (
    <>
      
<aside className="flex flex-col h-screen py-6 px-4 bg-stone-900 dark:bg-[#1C1B1B] h-full w-64 flex-col border-r-0 font-['Space_Grotesk'] tracking-tight z-50">
<div className="flex items-center gap-3 mb-10 px-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 1"}}>piano</span>
</div>
<span className="text-xl font-bold tracking-tighter text-indigo-100 dark:text-[#E5E2E1]">The Conductor</span>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-indigo-400 dark:text-[#C1C1FF] font-bold bg-[#2A2A2A] rounded-md group" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>edit_note</span>
<span className="text-sm">Notation Editor</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined">upload_file</span>
<span className="text-sm font-medium">Uploader</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined">queue_music</span>
<span className="text-sm font-medium">Lead Sheets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors group" href="#">
<span className="material-symbols-outlined">library_music</span>
<span className="text-sm font-medium">Library</span>
</a>
</nav>
<div className="mt-auto pt-6">
<button className="w-full bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] text-on-primary-fixed py-3 rounded-md font-bold text-sm tracking-wide flex items-center justify-center gap-2 active:scale-95 transition-all mb-6">
<span className="material-symbols-outlined text-sm">add</span>
                New Transcription
            </button>
<div className="flex items-center gap-3 px-2 pt-4 border-t border-white/5">
<img className="w-10 h-10 rounded-full object-cover grayscale" data-alt="Close up portrait of a professional male musician with focused expression, soft studio lighting on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB67R3LQSWafkv0x27mdLQBQRGoTAq0D4Pggih6NFCSsxdRlC6Ijp6Pdh085jx75qXp2mLdyU67pJkzmcWMgvA34cF_a8VWkJttxm7kg_bwshaxzf56VXhI1g238CU3N6FIHU3EetMAT8S3xE-ws8tNzOUP0gg-xpeVWLp7vgwGvYfeEHnuQmwjFbcOncjYFYZvg4e7aI2SEOMGTwUeR0uSRm8esGTbtjGWzvGyHjj2sEx8uO3EtZWjX5b0P2qmiR8vcPT2MUVAzA"/>
<div className="flex flex-col">
<span className="text-sm font-bold text-on-surface">Alex Mercer</span>
<span className="text-[10px] uppercase tracking-widest text-primary">Professional Tier</span>
</div>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col relative h-full overflow-hidden">

<header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-stone-950/70 dark:bg-[#131313]/70 backdrop-blur-xl border-b border-white/5 font-['Manrope'] font-medium">
<div className="flex items-center gap-8">
<span className="text-lg font-black bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] bg-clip-text text-transparent">Harmonic Precision</span>
<nav className="hidden md:flex items-center gap-6">
<a className="text-indigo-400 dark:text-[#C1C1FF] border-b-2 border-indigo-500 py-1" href="#">Projects</a>
<a className="text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity" href="#">Shared</a>
<a className="text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity" href="#">Recent</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-lg">search</span>
<input className="bg-surface-container-lowest border-none text-sm pl-10 pr-4 py-1.5 rounded-full w-48 focus:ring-1 focus:ring-secondary/50 placeholder:text-outline-variant" placeholder="Search notation..." type="text"/>
</div>
<button className="flex items-center gap-2 bg-surface-container-highest px-4 py-1.5 rounded text-sm hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-primary text-lg">save</span>
<span>Save</span>
</button>
<button className="flex items-center gap-2 bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] px-4 py-1.5 rounded text-sm font-bold text-on-primary-fixed opacity-90 hover:opacity-100 transition-opacity">
                    Export Score
                </button>
<div className="flex items-center gap-2 ml-2">
<span className="material-symbols-outlined text-stone-400 cursor-pointer hover:text-white">notifications</span>
<span className="material-symbols-outlined text-stone-400 cursor-pointer hover:text-white">settings</span>
</div>
</div>
</header>

<div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 flex items-center bg-surface-container-low/80 glass-panel rounded-xl px-2 py-2 gap-1 border border-white/5 shadow-2xl">
<button className="p-2 rounded bg-surface-container-highest text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>music_note</span>
</button>
<div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
<button className="p-2 rounded hover:bg-surface-container-high transition-colors text-on-surface-variant">
<span className="material-symbols-outlined">turn_sharp_right</span>
</button>
<button className="p-2 rounded hover:bg-surface-container-high transition-colors text-on-surface-variant">
<span className="material-symbols-outlined">trending_flat</span>
</button>
<div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
<button className="p-2 rounded hover:bg-surface-container-high transition-colors text-on-surface-variant">
<span className="material-symbols-outlined">straighten</span>
</button>
<button className="p-2 rounded hover:bg-surface-container-high transition-colors text-on-surface-variant">
<span className="material-symbols-outlined">line_weight</span>
</button>
<div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
<button className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-outline">Dynamics</button>
<button className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-outline">Articulations</button>
</div>

<div className="mt-16 flex-1 overflow-auto bg-surface-container-lowest p-12 no-scrollbar">
<div className="max-w-5xl mx-auto space-y-24">

<div className="text-center mb-16">
<h1 className="font-headline text-4xl font-bold tracking-tighter text-on-surface mb-2">Nocturne No. 2 in E-flat Major</h1>
<p className="font-body text-outline uppercase tracking-[0.2em] text-xs font-semibold">Frédéric Chopin, Op. 9 No. 2</p>
</div>

<div className="relative group">

<div className="flex flex-col gap-16 relative">

<div className="space-y-[10px] relative">
<div className="absolute left-0 -top-4 flex flex-col items-center">
<span className="material-symbols-outlined text-6xl leading-none text-on-surface">music_note</span>
<div className="font-headline text-xl font-bold -mt-2">4</div>
<div className="font-headline text-xl font-bold -mt-1">4</div>
</div>
<div className="staff-line opacity-40"></div>
<div className="staff-line opacity-40"></div>
<div className="staff-line opacity-40"></div>
<div className="staff-line opacity-40"></div>
<div className="staff-line opacity-40"></div>

<div className="absolute left-24 top-1/2 -translate-y-1/2 flex items-end gap-12">
<div className="relative group/note cursor-pointer">
<div className="w-3 h-2 bg-on-surface rounded-full rotate-[-20deg]"></div>
<div className="absolute bottom-0 left-[11px] h-10 w-[1.5px] bg-on-surface"></div>
<div className="absolute -top-12 left-0 font-headline font-bold text-primary opacity-0 group-hover/note:opacity-100 transition-opacity">Eb5</div>
</div>
<div className="relative group/note cursor-pointer translate-y-2">
<div className="w-3 h-2 bg-on-surface rounded-full rotate-[-20deg]"></div>
<div className="absolute bottom-0 left-[11px] h-10 w-[1.5px] bg-on-surface"></div>
<span className="absolute -left-4 top-0 material-symbols-outlined text-xs">trending_flat</span>
</div>
<div className="relative cursor-pointer">
<span className="material-symbols-outlined text-3xl text-secondary">music_note</span>
</div>
</div>

<div className="absolute right-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/40"></div>
</div>

<div className="space-y-[10px] relative">
<div className="absolute left-0 -top-2 flex flex-col items-center">
<span className="material-symbols-outlined text-4xl leading-none text-on-surface">music_note</span>
</div>
<div className="staff-line opacity-40"></div>
<div className="staff-line opacity-40"></div>
<div className="staff-line opacity-40"></div>
<div className="staff-line opacity-40"></div>
<div className="staff-line opacity-40"></div>
<div className="absolute left-24 top-0 flex items-start gap-8">
<div className="flex flex-col gap-[-4px]">
<div className="w-3 h-2 bg-outline-variant rounded-full rotate-[-20deg]"></div>
<div className="w-3 h-2 bg-outline-variant rounded-full rotate-[-20deg]"></div>
</div>
<span className="material-symbols-outlined text-3xl text-outline-variant">notes</span>
</div>
</div>

<div className="absolute left-[-20px] top-0 bottom-0 w-2 border-l-2 border-t-2 border-b-2 border-on-surface-variant/30 rounded-l-md"></div>
</div>
</div>

<div className="relative group bg-surface-container-high/20 rounded-xl p-8 -mx-8 ring-1 ring-primary/20">
<div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Measure 5-8 Focus</div>
<div className="flex flex-col gap-16 relative">
<div className="space-y-[10px] relative">
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="absolute left-32 top-1/2 -translate-y-1/2 flex items-center gap-16">
<span className="text-secondary material-symbols-outlined text-4xl" style={{"fontVariationSettings": "'FILL' 1"}}>music_note</span>
<div className="relative">
<div className="w-4 h-3 bg-primary rounded-full rotate-[-20deg] shadow-[0_0_15px_rgba(193,193,255,0.4)]"></div>
<div className="absolute bottom-0 left-[14px] h-12 w-[2px] bg-primary"></div>
</div>
</div>
</div>
<div className="space-y-[10px] relative">
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
<div className="staff-line opacity-60"></div>
</div>
<div className="absolute left-[-20px] top-0 bottom-0 w-2 border-l-2 border-t-2 border-b-2 border-primary/40 rounded-l-md"></div>
</div>
</div>
</div>
</div>

<footer className="fixed bottom-0 right-0 left-64 h-20 flex justify-between items-center px-10 z-50 bg-stone-900/80 dark:bg-[#1C1B1B]/80 backdrop-blur-2xl border-t border-white/10 font-['Space_Grotesk']">
<div className="flex items-center gap-8">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Position</span>
<span className="text-xl font-bold tracking-tight text-on-surface">02 : 14 : 00</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Measure</span>
<span className="text-xl font-bold tracking-tight text-on-surface">16 / 42</span>
</div>
</div>
<div className="flex items-center space-x-12">
<button className="flex flex-col items-center gap-1 group">
<span className="material-symbols-outlined text-stone-500 dark:text-[#464555] group-hover:scale-110 transition-transform">skip_previous</span>
</button>
<button className="flex flex-col items-center gap-1 group active:scale-90 duration-150">
<span className="material-symbols-outlined text-teal-400 dark:text-[#4FDBC8] drop-shadow-[0_0_8px_rgba(79,219,200,0.5)] text-4xl" style={{"fontVariationSettings": "'FILL' 1"}}>play_arrow</span>
<span className="text-[10px] uppercase tracking-widest text-teal-400">Play</span>
</button>
<button className="flex flex-col items-center gap-1 group">
<span className="material-symbols-outlined text-stone-500 dark:text-[#464555] group-hover:scale-110 transition-transform text-3xl">stop</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500">Stop</span>
</button>
<button className="flex flex-col items-center gap-1 group">
<span className="material-symbols-outlined text-stone-500 dark:text-[#464555] group-hover:scale-110 transition-transform">loop</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500">Loop</span>
</button>
</div>
<div className="flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Tempo</span>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-stone-500 text-sm">speed</span>
<span className="text-xl font-bold tracking-tight text-secondary">72 BPM</span>
</div>
</div>
<div className="w-[1px] h-8 bg-white/10 mx-2"></div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">volume_up</span>
<div className="w-24 h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-primary shadow-[0_0_8px_rgba(193,193,255,0.4)]"></div>
</div>
</div>
</div>
</footer>

<aside className="absolute top-20 right-6 w-72 bg-surface-container-low/90 glass-panel rounded-2xl p-6 shadow-2xl border border-white/5 z-20">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline font-bold text-sm tracking-tight text-on-surface">Element Inspector</h3>
<span className="material-symbols-outlined text-outline cursor-pointer text-lg">close</span>
</div>
<div className="space-y-6">
<div>
<label className="text-[10px] font-bold uppercase tracking-widest text-outline block mb-3">Pitch &amp; Velocity</label>
<div className="grid grid-cols-2 gap-3">
<div className="bg-surface-container-lowest p-3 rounded-xl">
<div className="text-[10px] text-outline-variant mb-1">Note</div>
<div className="text-sm font-bold text-primary">Eb5</div>
</div>
<div className="bg-surface-container-lowest p-3 rounded-xl">
<div className="text-[10px] text-outline-variant mb-1">Velocity</div>
<div className="text-sm font-bold text-secondary">88</div>
</div>
</div>
</div>
<div>
<label className="text-[10px] font-bold uppercase tracking-widest text-outline block mb-3">Articulation</label>
<div className="flex flex-wrap gap-2">
<span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-3 py-1 rounded-full">Staccato</span>
<span className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold px-3 py-1 rounded-full">Legato</span>
<span className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold px-3 py-1 rounded-full">Tenuto</span>
</div>
</div>
<div className="pt-6 border-t border-white/5">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-outline">Quantize Strength</span>
<span className="text-xs font-headline font-bold text-secondary">100%</span>
</div>
<div className="w-full h-1 bg-surface-container-lowest rounded-full overflow-hidden mb-2">
<div className="w-full h-full bg-secondary"></div>
</div>
</div>
<div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
<p className="text-[11px] text-on-primary-container leading-relaxed italic">"Try adding a crescendo from measure 16 to emphasize the melodic resolution."</p>
<div className="mt-3 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span className="text-[10px] font-bold uppercase tracking-widest text-primary">Assistant Suggestion</span>
</div>
</div>
</div>
</aside>

<div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-surface-container-high/30 glass-panel rounded-full px-6 flex items-center gap-4 border border-white/5">
<span className="text-[10px] font-headline text-outline">00:00</span>
<div className="flex-1 h-4 flex items-center gap-[2px]">

<div className="h-2 w-1 bg-primary rounded-full"></div>
<div className="h-3 w-1 bg-primary rounded-full"></div>
<div className="h-1 w-1 bg-primary rounded-full"></div>
<div className="h-4 w-1 bg-primary rounded-full"></div>
<div className="h-2 w-1 bg-primary rounded-full"></div>
<div className="h-5 w-1 bg-primary rounded-full"></div>
<div className="h-3 w-1 bg-primary rounded-full"></div>
<div className="h-1 w-1 bg-outline-variant rounded-full"></div>
<div className="h-2 w-1 bg-outline-variant rounded-full"></div>
<div className="h-4 w-1 bg-outline-variant rounded-full"></div>
<div className="h-3 w-1 bg-outline-variant rounded-full"></div>
<div className="h-1 w-1 bg-outline-variant rounded-full"></div>
<div className="h-5 w-1 bg-outline-variant rounded-full"></div>
<div className="h-2 w-1 bg-outline-variant rounded-full"></div>
<div className="h-4 w-1 bg-outline-variant rounded-full"></div>
<div className="h-1 w-1 bg-outline-variant rounded-full"></div>
<div className="h-3 w-1 bg-outline-variant rounded-full"></div>
<div className="h-2 w-1 bg-outline-variant rounded-full"></div>
<div className="h-5 w-1 bg-outline-variant rounded-full"></div>
<div className="h-1 w-1 bg-outline-variant rounded-full"></div>
<div className="h-3 w-1 bg-outline-variant rounded-full"></div>
<div className="h-2 w-1 bg-outline-variant rounded-full"></div>
<div className="h-4 w-1 bg-outline-variant rounded-full"></div>
<div className="h-1 w-1 bg-outline-variant rounded-full"></div>
<div className="h-5 w-1 bg-outline-variant rounded-full"></div>
<div className="h-2 w-1 bg-outline-variant rounded-full"></div>

<div className="flex-1 h-[2px] bg-outline-variant/30 ml-2 rounded-full"></div>
</div>
<span className="text-[10px] font-headline text-outline">04:32</span>
</div>
</main>
    </>
  );
}
