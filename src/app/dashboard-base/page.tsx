"use client";

export default function DashboardBasePage() {
  return (
    <>
      
<div className="flex h-screen overflow-hidden">

<aside className="flex flex-col h-screen py-6 px-4 bg-stone-900 dark:bg-[#1C1B1B] h-full w-64 flex-col border-r-0 font-['Space_Grotesk'] tracking-tight z-50">
<div className="flex items-center gap-3 px-2 mb-10">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-xl">piano</span>
</div>
<div>
<h1 className="text-xl font-bold tracking-tighter text-indigo-100 dark:text-[#E5E2E1]">The Conductor</h1>
<p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Professional Tier</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-indigo-400 dark:text-[#C1C1FF] font-bold bg-[#2A2A2A] rounded-md transition-all scale-98 active:opacity-80" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="upload_file">upload_file</span>
<span>Uploader</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
<span>Notation Editor</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="queue_music">queue_music</span>
<span>Lead Sheets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="library_music">library_music</span>
<span>Library</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-white/5">
<button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] text-on-primary font-bold rounded-md hover:opacity-90 transition-opacity active:scale-95">
<span className="material-symbols-outlined text-lg" data-icon="add">add</span>
                    New Transcription
                </button>
<div className="mt-6 flex items-center gap-3 px-2">
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full object-cover" data-alt="Close up portrait of a professional pianist with thoughtful expression in a studio setting with soft moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD71h46z8Tvrk68J3u4J5kJZZwbIK0IKFMy437-5FKk_2iaJiabwMuO7lxG-ziEPWxEibSQ89cenvHBqbrA7mpeq-DuwCZCcte7oBpgc3d9GtEger7cl6-ABUEQV4kjzrBAVXabkkgGM6WCiEklkgCfoBZAAD57j4Xk8CaDx_HVwa-FbQ8bdq6oqZl8vWljx3jS0miOS5lVlikx1eDrji2jmJgxPUtOsI53inWanpXPUkf52y_yJbrKjmGPPTXmovVXyOPAFaWqvg"/>
<div className="flex flex-col">
<span className="text-xs font-bold text-on-surface">Alex Mercer</span>
<span className="text-[10px] text-stone-500">Composer</span>
</div>
<span className="material-symbols-outlined text-stone-500 ml-auto text-sm" data-icon="more_vert">more_vert</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative h-screen overflow-y-auto hide-scrollbar bg-surface">

<header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-stone-950/70 dark:bg-[#131313]/70 backdrop-blur-xl border-b border-white/5 font-['Manrope'] font-medium">
<div className="flex items-center gap-8">
<span className="text-lg font-black bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] bg-clip-text text-transparent">Harmonic Precision</span>
<nav className="hidden md:flex gap-6">
<a className="text-indigo-400 dark:text-[#C1C1FF] border-b-2 border-indigo-500 pb-1" href="#">Projects</a>
<a className="text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity" href="#">Shared</a>
<a className="text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity" href="#">Recent</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-sm">search</span>
<input className="bg-surface-container-lowest border-none text-xs rounded-full py-2 pl-10 pr-4 w-64 focus:ring-1 focus:ring-secondary/50 placeholder:text-outline-variant" placeholder="Search projects..." type="text"/>
</div>
<div className="flex items-center gap-4 text-stone-400">
<span className="material-symbols-outlined cursor-pointer hover:text-white transition-opacity" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:text-white transition-opacity" data-icon="settings">settings</span>
</div>
<button className="px-4 py-1.5 bg-surface-container-highest text-primary font-bold rounded-md hover:opacity-100 transition-opacity text-sm">
                        Export Score
                    </button>
</div>
</header>

<div className="pt-24 pb-32 px-10 max-w-7xl mx-auto w-full">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
<div className="col-span-1 md:col-span-2 p-6 rounded-xl bg-surface-container-low border border-white/5 flex flex-col justify-between">
<div>
<p className="text-outline text-xs uppercase tracking-widest font-label">Active Transcriptions</p>
<h2 className="text-4xl font-headline font-bold mt-2 text-primary">12</h2>
</div>
<div className="mt-6 flex items-center gap-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-primary-container border-2 border-surface"></div>
<div className="w-6 h-6 rounded-full bg-secondary-container border-2 border-surface"></div>
<div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-surface"></div>
</div>
<span className="text-[10px] text-outline italic">+4 shared with collaborators</span>
</div>
</div>
<div className="p-6 rounded-xl bg-surface-container-low border border-white/5">
<p className="text-outline text-xs uppercase tracking-widest font-label">Storage Usage</p>
<h2 className="text-3xl font-headline font-bold mt-2">84%</h2>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full mt-4 overflow-hidden">
<div className="bg-gradient-to-r from-secondary to-primary h-full w-[84%]"></div>
</div>
<p className="text-[10px] text-outline-variant mt-2">12.6 GB of 15 GB used</p>
</div>
<div className="p-6 rounded-xl bg-surface-container-low border border-white/5 flex flex-col justify-between">
<div className="flex justify-between items-start">
<p className="text-outline text-xs uppercase tracking-widest font-label">Accuracy Avg.</p>
<span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span>
</div>
<h2 className="text-3xl font-headline font-bold">99.4%</h2>
<p className="text-[10px] text-secondary mt-1">Perfect Pitch™ active</p>
</div>
</div>

<div className="flex items-end justify-between mb-6">
<div>
<h3 className="text-2xl font-headline font-bold tracking-tight">Recent Projects</h3>
<p className="text-outline text-sm">Continue where you left off</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded bg-surface-container-high text-outline hover:text-white"><span className="material-symbols-outlined">grid_view</span></button>
<button className="p-2 rounded bg-surface-container-lowest text-outline-variant"><span className="material-symbols-outlined">list</span></button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container-high transition-all duration-300">
<div className="h-40 overflow-hidden relative">
<img alt="Piano Sheet Music" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="Detailed close up of black musical notes on cream colored staff paper with elegant ink texture and shallow depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeTscVLvMaeRfhOu49zGHNe2M2qrEObDiyAPwato3k5jZYClHXb5noh3CDYev255WA56FOI8v61HP0X-Mg5G3tSV5B1O2fwE-RgnBH64BRNwK2hsMQPLgTpysRDNQz0Y0rv8c3Cy84b59VY_I9iN_bpUilgH-OOiMZCfBrwVhP1OmMN-KLjWS-hf_wfJ1YeetOE76btjM6XRuxW-pyXJLTdYm2MdUvrUUCT-dIoz73JBGopuPQoAJKeAZMW7gIk_kdMFvyBc4sjg"/>
<div className="absolute top-3 left-3 px-2 py-1 rounded bg-secondary/20 backdrop-blur-md text-secondary text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-secondary"></span> Transcribed
                            </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start">
<h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">Nocturne Op. 9 No. 2</h4>
<span className="material-symbols-outlined text-outline-variant cursor-pointer hover:text-white">more_horiz</span>
</div>
<p className="text-xs text-outline-variant mt-1">Chopin • Solo Piano</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[10px] text-outline uppercase font-label tracking-tighter">Updated 2h ago</span>
<div className="flex gap-1">
<span className="material-symbols-outlined text-sm text-outline-variant" data-icon="share">share</span>
<span className="material-symbols-outlined text-sm text-outline-variant" data-icon="star">star</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container-high transition-all duration-300">
<div className="h-40 overflow-hidden relative">
<img alt="Audio Waveform" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="Digital blue and violet audio waveform visualization on a dark background with sharp glowing lines and technical grid elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7jNH9PH8XlSUFXmhdt31aPwfJFWZxM-7jkb0QMzKoHhIzJnmW4paQk9Y1NshMv_1TmAde2VcxbQq62EIoDdaK1mEkPbyvuLbyIVJzaaCP89ztifpvHYSGudIGH_SODXpZYUph18_TTaKbF-7u-qCWDpnPLZzotOVtTMxcATXdFaOHW12fVI5e_phqdasJa1kPYKFcTbMqdwocp_8CSvVZDYM3XZc5J9-Oekkv-CWGcvS-ALxRprMFQBBOukbJquYhewyTCLbezQ"/>
<div className="absolute top-3 left-3 px-2 py-1 rounded bg-tertiary/20 backdrop-blur-md text-tertiary text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-tertiary animate-pulse"></span> Processing
                            </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start">
<h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">Jazz Improvisation #4</h4>
<span className="material-symbols-outlined text-outline-variant cursor-pointer hover:text-white">more_horiz</span>
</div>
<p className="text-xs text-outline-variant mt-1">Original Composition • Trio</p>
<div className="mt-4">
<div className="flex justify-between text-[10px] mb-1">
<span className="text-outline uppercase font-label">AI Extraction</span>
<span className="text-tertiary">65%</span>
</div>
<div className="w-full bg-surface-container-lowest h-1 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-[65%]"></div>
</div>
</div>
</div>
</div>

<div className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container-high transition-all duration-300">
<div className="h-40 overflow-hidden relative">
<img alt="Recording Studio" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" data-alt="Atmospheric dark recording studio interior with vintage microphones and warm glowing console lights in soft focus background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0e4l0-XkOC7bIqn3hFXNSYyWFGgy03_UWQoUO6zE8RPfR-GJII8FYed9ZjEilxzQFkF4s0xKFo1uKuqvJWxhcLU4sdEIgOeRcp1M-xoFwausQLjYxoLAanhNu7gASCOGK4gNOcxa9m5z1d7ujkJHehafMgMHH1p3e9LDhCDuOd3wx7l643ej8TKxDNlujNAefOX0npkDD8CU8v2nZiQ-ONyqvKDyQHz1KqWS3or_jhUmmhR1zItAGIAiLr7pjJY02dfRWSVqGw"/>
<div className="absolute top-3 left-3 px-2 py-1 rounded bg-white/10 backdrop-blur-md text-on-surface text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[10px]">history</span> Draft
                            </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start">
<h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">Moonlight Sonata 1st mvt</h4>
<span className="material-symbols-outlined text-outline-variant cursor-pointer hover:text-white">more_horiz</span>
</div>
<p className="text-xs text-outline-variant mt-1">Beethoven • Practice Session</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[10px] text-outline uppercase font-label tracking-tighter">Created Oct 24</span>
<div className="flex gap-1">
<span className="material-symbols-outlined text-sm text-outline-variant" data-icon="cloud_done">cloud_done</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 p-8 rounded-2xl bg-[#1C1B1B] border border-white/5 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
<div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">Advanced Audio Separation</h3>
<p className="text-outline text-sm leading-relaxed mb-6">Our new AI model now supports extraction of left and right hand piano parts with 98.2% separation accuracy. Ideal for complex polyphonic transcriptions.</p>
<button className="flex items-center gap-2 text-secondary font-bold text-sm group hover:gap-3 transition-all">
                                Learn about Phase II extraction
                                <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="w-full md:w-64 aspect-video rounded-lg bg-surface-container-lowest border border-white/5 flex flex-col p-4">
<div className="flex gap-1 mb-auto">
<div className="w-2 h-2 rounded-full bg-error"></div>
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
<div className="w-2 h-2 rounded-full bg-secondary"></div>
</div>
<div className="flex items-end gap-1 h-20">
<div className="flex-1 bg-outline-variant/20 rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-secondary rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-primary rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-secondary rounded-t-sm h-[50%]"></div>
<div className="flex-1 bg-outline-variant/20 rounded-t-sm h-[30%]"></div>
</div>
</div>
</div>
</div>
</div>

<footer className="fixed bottom-0 right-0 left-64 h-20 flex justify-center items-center space-x-12 z-50 bg-stone-900/80 dark:bg-[#1C1B1B]/80 backdrop-blur-2xl border-t border-white/10 shadow-2xl shadow-black font-['Space_Grotesk'] text-[10px] uppercase tracking-widest">
<div className="absolute left-8 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary">music_note</span>
</div>
<div className="hidden lg:block">
<p className="text-on-surface font-bold normal-case tracking-normal">Nocturne Op. 9 No. 2</p>
<p className="text-stone-500 normal-case tracking-normal text-[10px]">Transcription in view</p>
</div>
</div>
<div className="flex items-center gap-8">
<button className="text-stone-500 dark:text-[#464555] hover:scale-110 transition-transform active:scale-90">
<span className="material-symbols-outlined text-3xl" data-icon="play_arrow">play_arrow</span>
</button>
<button className="text-teal-400 dark:text-[#4FDBC8] drop-shadow-[0_0_8px_rgba(79,219,200,0.5)] hover:scale-110 transition-transform active:scale-90">
<span className="material-symbols-outlined text-3xl" data-icon="stop">stop</span>
</button>
<button className="text-stone-500 dark:text-[#464555] hover:scale-110 transition-transform active:scale-90">
<span className="material-symbols-outlined text-3xl" data-icon="loop">loop</span>
</button>
<button className="text-stone-500 dark:text-[#464555] hover:scale-110 transition-transform active:scale-90">
<span className="material-symbols-outlined text-3xl" data-icon="speed">speed</span>
</button>
</div>
<div className="absolute right-8 flex items-center gap-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-stone-500 text-sm">volume_up</span>
<div className="w-24 h-1 bg-surface-container-highest rounded-full">
<div className="w-2/3 h-full bg-primary rounded-full"></div>
</div>
</div>
<button className="p-2 rounded-full border border-white/10 text-outline hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">fullscreen</span>
</button>
</div>
</footer>
</main>
</div>
    </>
  );
}
