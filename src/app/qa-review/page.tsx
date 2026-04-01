"use client";

export default function QaReviewPage() {
  return (
    <>
      <header className="bg-[#131313] font-['Space_Grotesk'] tracking-tight flex justify-between items-center w-full px-6 py-3 fixed top-0 z-50">
<div className="flex items-center gap-8">
<span className="text-xl font-bold text-indigo-100">Harmonic Precision</span>
<nav className="hidden md:flex gap-6 items-center">
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Dashboard</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Uploader</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Editor</a>
<a className="text-indigo-400 border-b-2 border-indigo-400 pb-1" href="#">Reports</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-zinc-500 hover:bg-zinc-800/50 transition-all p-2 rounded-lg" data-icon="notifications">notifications</button>
<button className="material-symbols-outlined text-zinc-500 hover:bg-zinc-800/50 transition-all p-2 rounded-lg" data-icon="settings">settings</button>
<div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
<img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbkMf39wGpmvoLQYZBRNrvpl0oPn1HB4q2MI9JyUC3QnDZ_fn6q3q2CahQeuWjtwkh8_alP67KUkJlJSfIoGYFti9mmTcDrN7ikPW-cJuP3_YldcQ8C9idYAPHjByt-4eK6NhxuaH328qEqjE-LSEJ67pBAn8KjSNVb4IY7KDqKfU_B_yKGx_qhBOIEXoB2BmucuvccPVaGUtZudVQxDmpw93-BZYq72zqGubXwl4Z6QPlP39-9MF9o1-dazLemauCzwCuEH8iUg"/>
</div>
</div>
</header>
<div className="flex h-screen pt-[52px]">
<aside className="bg-[#1C1B1B] font-['Manrope'] text-sm font-medium h-full w-64 flex flex-col py-4 border-r border-zinc-800/15 shadow-[40px_0_40px_rgba(0,0,0,0.06)] shrink-0">
<div className="px-6 mb-8 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-white text-xs" data-icon="analytics">analytics</span>
</div>
<div>
<h2 className="text-lg font-semibold text-zinc-100 leading-none">QA Review</h2>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Precision Mode</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="text-zinc-400 hover:text-zinc-200 px-4 py-3 flex items-center gap-3 transition-colors hover:bg-[#2A2A2A]" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                Overview
            </a>
<a className="text-zinc-400 hover:text-zinc-200 px-4 py-3 flex items-center gap-3 transition-colors hover:bg-[#2A2A2A]" href="#">
<span className="material-symbols-outlined" data-icon="music_note">music_note</span>
                Pitch Accuracy
            </a>
<a className="text-zinc-400 hover:text-zinc-200 px-4 py-3 flex items-center gap-3 transition-colors hover:bg-[#2A2A2A]" href="#">
<span className="material-symbols-outlined" data-icon="speed">speed</span>
                Rhythmic Timing
            </a>
<a className="text-zinc-400 hover:text-zinc-200 px-4 py-3 flex items-center gap-3 transition-colors hover:bg-[#2A2A2A]" href="#">
<span className="material-symbols-outlined" data-icon="lyrics">lyrics</span>
                Lyric Alignment
            </a>
<a className="bg-[#2A2A2A] text-teal-400 rounded-md ml-2 my-1 px-4 py-3 flex items-center gap-3" href="#">
<span className="material-symbols-outlined" data-icon="Query_stats">query_stats</span>
                Confidence Map
            </a>
</nav>
<div className="mt-auto px-4 space-y-1 pt-4 border-t border-outline-variant/10">
<a className="text-zinc-400 hover:text-zinc-200 px-4 py-3 flex items-center gap-3 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                Help
            </a>
<a className="text-zinc-400 hover:text-zinc-200 px-4 py-3 flex items-center gap-3 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="archive">archive</span>
                Archive
            </a>
<button className="w-full mt-4 bg-gradient-to-br from-primary to-primary-container text-on-primary py-2.5 rounded-md font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-primary-container/20">
                Export Score
                <span className="material-symbols-outlined text-sm" data-icon="ios_share">ios_share</span>
</button>
</div>
</aside>
<main className="flex-1 flex flex-col bg-background overflow-hidden">
<section className="h-[40%] bg-surface-container-low relative border-b border-outline-variant/10 flex flex-col">
<div className="flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-4">
<span className="font-headline text-2xl font-bold text-primary">02:44:12</span>
<div className="px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/20 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-[10px] font-label font-semibold uppercase tracking-tighter">Live Source</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-surface-variant rounded transition-colors text-zinc-400"><span className="material-symbols-outlined" data-icon="zoom_in">zoom_in</span></button>
<button className="p-2 hover:bg-surface-variant rounded transition-colors text-zinc-400"><span className="material-symbols-outlined" data-icon="zoom_out">zoom_out</span></button>
<div className="w-px h-4 bg-outline-variant/30 mx-2"></div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-highest rounded-lg text-xs font-medium text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="tune">tune</span>
                        Gain Filter
                    </button>
</div>
</div>
<div className="flex-1 flex items-center justify-center relative waveform-container overflow-hidden px-10">
<div className="w-full h-32 flex items-center gap-[2px]">
<div className="flex-1 h-12 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-16 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-24 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-20 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-32 bg-primary/60 rounded-full shadow-[0_0_15px_rgba(193,193,255,0.3)]"></div>
<div className="flex-1 h-28 bg-primary rounded-full shadow-[0_0_20px_rgba(193,193,255,0.4)]"></div>
<div className="flex-1 h-20 bg-primary/60 rounded-full"></div>
<div className="flex-1 h-16 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-24 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-14 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-10 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-18 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-22 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-16 bg-outline-variant/40 rounded-full"></div>
<div className="flex-1 h-28 bg-outline-variant/40 rounded-full"></div>
<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-secondary shadow-[0_0_10px_#4fdbc8] z-10 flex flex-col items-center">
<div className="bg-secondary text-on-secondary text-[10px] font-bold px-1.5 py-0.5 rounded-sm -mt-2">SYNC</div>
</div>
</div>
<div className="absolute bottom-6 left-[30%] flex flex-col items-center">
<div className="w-px h-12 bg-tertiary/40"></div>
<span className="text-[9px] text-tertiary font-bold mt-1">SNARE_HIT</span>
</div>
<div className="absolute bottom-6 left-[65%] flex flex-col items-center">
<div className="w-px h-12 bg-secondary/40"></div>
<span className="text-[9px] text-secondary font-bold mt-1">PITCH_LOCK</span>
</div>
</div>
</section>
<section className="flex-1 flex flex-col bg-surface-container-lowest relative overflow-hidden">
<div className="flex items-center justify-between px-6 py-3 bg-surface-container-low/50">
<div className="flex items-center gap-6">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Tempo</span>
<span className="font-headline font-bold text-lg leading-none">124 <span className="text-xs font-normal text-zinc-500">BPM</span></span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Key</span>
<span className="font-headline font-bold text-lg leading-none">Ab <span className="text-xs font-normal text-zinc-500">Maj</span></span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-xs font-medium">98.2% Accuracy</span>
</div>
<button className="bg-surface-container-high hover:bg-surface-bright text-xs px-4 py-2 rounded-lg transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
                        Manual Override
                    </button>
</div>
</div>
<div className="flex-1 flex flex-col px-6 pt-4 pb-20">
<div className="flex-1 bg-surface-container-high/20 rounded-xl p-8 border border-outline-variant/5 shadow-inner relative flex flex-col gap-8">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="query_stats">query_stats</span>
                                Multi-Layer Confidence Analytics
                            </h4>
<div className="flex gap-4">
<div className="flex items-center gap-2 text-[10px] font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Pitch
                                </div>
<div className="flex items-center gap-2 text-[10px] font-semibold">
<span className="w-2 h-2 rounded-full bg-primary"></span> Rhythm
                                </div>
<div className="flex items-center gap-2 text-[10px] font-semibold">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> Lyrics
                                </div>
</div>
</div>

<div className="grid grid-rows-3 gap-1 relative group/map">

<div className="flex h-6 gap-[2px]">
<div className="flex-1 bg-secondary rounded-sm heatmap-cell relative opacity-90"><div className="tooltip-custom absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-surface px-2 py-1 rounded text-[8px] whitespace-nowrap z-20 border border-outline-variant">99% Confidence</div></div>
<div className="flex-1 bg-secondary rounded-sm heatmap-cell relative opacity-90"></div>
<div className="flex-1 bg-secondary rounded-sm heatmap-cell relative opacity-90"></div>
<div className="flex-1 bg-secondary/30 rounded-sm heatmap-cell relative ring-1 ring-secondary/50">
<div className="tooltip-custom absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-surface px-2 py-1 rounded text-[8px] whitespace-nowrap z-20 border border-secondary">Measure 01.3: Low Velocity (72%)</div>
</div>
<div className="flex-1 bg-secondary rounded-sm heatmap-cell relative opacity-90"></div>
<div className="flex-1 bg-secondary rounded-sm heatmap-cell relative opacity-90"></div>
<div className="flex-1 bg-secondary rounded-sm heatmap-cell relative opacity-90"></div>
<div className="flex-1 bg-secondary rounded-sm heatmap-cell relative opacity-90"></div>
</div>

<div className="flex h-6 gap-[2px]">
<div className="flex-1 bg-primary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-primary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-primary/20 rounded-sm heatmap-cell relative ring-1 ring-primary/40">
<div className="tooltip-custom absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-surface px-2 py-1 rounded text-[8px] whitespace-nowrap z-20 border border-primary">Sync Flutter: ±4ms</div>
</div>
<div className="flex-1 bg-primary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-primary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-primary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-primary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-primary rounded-sm heatmap-cell relative opacity-80"></div>
</div>

<div className="flex h-6 gap-[2px]">
<div className="flex-1 bg-tertiary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-tertiary/20 rounded-sm heatmap-cell relative ring-1 ring-tertiary/50">
<div className="tooltip-custom absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-surface px-2 py-1 rounded text-[8px] whitespace-nowrap z-20 border border-tertiary">Phonetic Mismatch Detected</div>
</div>
<div className="flex-1 bg-tertiary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-tertiary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-tertiary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-tertiary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-tertiary rounded-sm heatmap-cell relative opacity-80"></div>
<div className="flex-1 bg-tertiary rounded-sm heatmap-cell relative opacity-80"></div>
</div>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute left-[38%] top-0 bottom-0 w-px bg-secondary shadow-[0_0_8px_#4fdbc8] opacity-40"></div>
<div className="absolute left-[38%] -top-4 text-[8px] font-bold text-secondary uppercase tracking-tighter">Issue 01.3</div>
</div>
</div>
</div>

<div className="space-y-12">
<div className="relative group">
<div className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-[10px] font-bold text-primary">MS. 01</span>
</div>
<div className="flex flex-col gap-[8px] w-full">
<div className="h-px bg-on-surface/20 w-full"></div>
<div className="h-px bg-on-surface/20 w-full"></div>
<div className="h-px bg-on-surface/20 w-full"></div>
<div className="h-px bg-on-surface/20 w-full"></div>
<div className="h-px bg-on-surface/20 w-full"></div>
</div>
<div className="absolute inset-0 flex items-center px-12 gap-8">
<div className="relative flex flex-col items-center">
<div className="w-4 h-3 bg-secondary rounded-full rotate-[-20deg] shadow-[0_0_10px_rgba(79,219,200,0.5)]"></div>
<div className="w-px h-10 bg-on-surface absolute bottom-2 -right-px"></div>
<div className="absolute -top-6 text-[10px] font-bold text-secondary">A♭4</div>
</div>
<div className="relative flex flex-col items-center">
<div className="w-4 h-3 bg-secondary rounded-full rotate-[-20deg] shadow-[0_0_10px_rgba(79,219,200,0.5)]"></div>
<div className="w-px h-10 bg-on-surface absolute bottom-2 -right-px"></div>
</div>
<div className="relative flex flex-col items-center">
<div className="w-4 h-3 bg-tertiary rounded-full rotate-[-20deg] shadow-[0_0_10px_rgba(255,182,149,0.5)]"></div>
<div className="w-px h-10 bg-on-surface absolute bottom-2 -right-px"></div>
<div className="absolute -top-6 text-[10px] font-bold text-tertiary">E♭4?</div>
</div>
<div className="relative flex flex-col items-center ml-12">
<div className="w-4 h-3 border-2 border-secondary rounded-full rotate-[-20deg]"></div>
<div className="w-px h-12 bg-on-surface absolute bottom-2 -right-px"></div>
</div>
</div>
<div className="absolute inset-0 flex">
<div className="w-[25%] h-full bg-secondary/5 border-l-2 border-secondary/20"></div>
<div className="w-[25%] h-full bg-secondary/5 border-l-2 border-secondary/20"></div>
<div className="w-[25%] h-full bg-tertiary/10 border-l-2 border-tertiary/30"></div>
<div className="w-[25%] h-full bg-secondary/5 border-x-2 border-secondary/20"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-panel border border-white/10 px-8 py-3 rounded-full flex items-center gap-8 shadow-2xl z-20">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-zinc-400 hover:text-white" data-icon="skip_previous">skip_previous</button>
<button className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/30">
<span className="material-symbols-outlined text-3xl" data-icon="play_arrow" style={{"fontVariationSettings": "'FILL' 1"}}>play_arrow</span>
</button>
<button className="material-symbols-outlined text-zinc-400 hover:text-white" data-icon="skip_next">skip_next</button>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-zinc-400" data-icon="volume_up">volume_up</span>
<div className="w-24 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-secondary"></div>
</div>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-2">
<button className="px-3 py-1 text-[10px] font-bold border border-secondary text-secondary rounded uppercase tracking-tighter">Loop</button>
<button className="px-3 py-1 text-[10px] font-bold text-zinc-500 rounded uppercase tracking-tighter">Click</button>
</div>
</div>
</section>
</main>
<aside className="w-80 bg-surface-container-low border-l border-outline-variant/10 flex flex-col h-full shrink-0">
<div className="p-6 border-b border-outline-variant/10">
<h3 className="font-headline font-semibold text-lg">Review Console</h3>
<p className="text-xs text-zinc-500 mt-1">12 issues remaining in this section</p>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">
<div className="bg-surface-container-high p-4 rounded-xl border-l-4 border-tertiary relative group cursor-pointer hover:bg-surface-bright transition-colors">

<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-tertiary rounded-full shadow-[0_0_8px_#ffb695]"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-tertiary uppercase">Measure 01.3</span>
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="warning">warning</span>
</div>
<p className="text-xs text-zinc-300 font-medium">Potential ghost note detected. Pitch Ab4 matches but velocity is significantly lower than threshold.</p>
<div className="mt-4 flex gap-2">
<button className="flex-1 bg-surface-container-lowest hover:bg-background py-2 rounded text-[10px] font-bold uppercase transition-colors">Dismiss</button>
<button className="flex-1 bg-tertiary text-on-tertiary py-2 rounded text-[10px] font-bold uppercase transition-colors">Edit Pitch</button>
</div>
</div>
<div className="bg-surface-container-high p-4 rounded-xl border-l-4 border-secondary/50">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-secondary uppercase">Measure 02.1</span>
<span className="material-symbols-outlined text-secondary text-sm" data-icon="check_circle" style={{"fontVariationSettings": "'FILL' 1"}}>check_circle</span>
</div>
<p className="text-xs text-zinc-300 font-medium">Rhythmic alignment verified against transient marker #104.</p>
<div className="mt-3">
<span className="text-[10px] bg-secondary-container/20 text-secondary px-2 py-0.5 rounded-full font-bold">Auto-Verified</span>
</div>
</div>
<div className="bg-surface-container-high/50 p-4 rounded-xl border-l-4 border-outline-variant">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-zinc-500 uppercase">Measure 03.4</span>
<span className="material-symbols-outlined text-zinc-500 text-sm" data-icon="pending">pending</span>
</div>
<p className="text-xs text-zinc-400">Waiting for playback synchronization...</p>
</div>
<div className="grid grid-cols-2 gap-3 mt-6">
<div className="bg-surface-container-highest/30 p-3 rounded-lg flex flex-col items-center justify-center text-center border border-white/5">
<span className="text-2xl font-headline font-bold text-primary">84%</span>
<span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mt-1">Rhythm</span>
</div>
<div className="bg-surface-container-highest/30 p-3 rounded-lg flex flex-col items-center justify-center text-center border border-white/5">
<span className="text-2xl font-headline font-bold text-secondary">99%</span>
<span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mt-1">Pitch</span>
</div>
</div>
</div>
<div className="p-6 bg-surface-container-lowest border-t border-outline-variant/10">
<div className="flex flex-col gap-3">
<button className="w-full bg-primary text-on-primary font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="verified">verified</span>
                    Finalize Batch Review
                </button>
<button className="w-full bg-surface-container-high text-zinc-300 font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-surface-bright transition-all">
<span className="material-symbols-outlined text-sm" data-icon="flag">flag</span>
                    Mark for Human Oversight
                </button>
</div>
</div>
</aside>
</div>

<div className="fixed bottom-6 right-8 w-48 h-12 glass-panel border border-white/10 rounded-lg overflow-hidden flex items-center shadow-2xl z-[60]">
<div className="w-full h-full relative opacity-50">
<img alt="Global waveform map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJVROxYh3EMiWAkuINESbiX1_ndrQ4OaB9Rd3hmUr5gvDs7EfwuhEKRvIQYhYm8VVey4YOoPm68rjDfGOar0VZkeJkwrTpuzYlMNf5AENmjPhDPSbGEni_RrxXKOkwpyEhAjvIbP0YnsIm5DZBUzE3EJMX_WlXaIgqFDhZurRsPsPSHsPFyR-35wpKWTytUHyWCIlGUmIKiLm0pMlJ-Z64mD7__bWzQMmNF5T-kDPuWM2hAbLlYi4qLCicQT9fWZsAMeIIvbAZQ"/>
<div className="absolute left-1/3 top-0 bottom-0 w-12 bg-primary/20 border-x border-primary"></div>
</div>
</div>
    </>
  );
}
