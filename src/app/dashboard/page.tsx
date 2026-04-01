"use client";

export default function DashboardPage() {
  return (
    <>
      
<div className="flex h-screen overflow-hidden">

<aside className="flex flex-col h-screen py-8 px-6 bg-surface-container-low w-72 flex-shrink-0 border-r border-white/5 font-headline tracking-tight z-50">
<div className="flex items-center gap-3 px-2 mb-12">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-on-primary text-2xl">piano</span>
</div>
<div>
<h1 className="text-xl font-bold tracking-tighter text-on-surface">The Conductor</h1>
<p className="text-[10px] uppercase tracking-[0.2em] text-outline font-label font-bold">Professional Tier</p>
</div>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 text-primary font-semibold bg-primary/10 rounded-xl transition-all active-glow" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-outline hover:text-on-surface hover:bg-white/5 rounded-xl transition-all" href="#">
<span className="material-symbols-outlined" data-icon="upload_file">upload_file</span>
<span className="text-sm">Uploader</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-outline hover:text-on-surface hover:bg-white/5 rounded-xl transition-all" href="#">
<span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
<span className="text-sm">Notation Editor</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-outline hover:text-on-surface hover:bg-white/5 rounded-xl transition-all" href="#">
<span className="material-symbols-outlined" data-icon="queue_music">queue_music</span>
<span className="text-sm">Lead Sheets</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-outline hover:text-on-surface hover:bg-white/5 rounded-xl transition-all" href="#">
<span className="material-symbols-outlined" data-icon="library_music">library_music</span>
<span className="text-sm">Library</span>
</a>
</nav>
<div className="mt-auto pt-8 border-t border-white/5">
<button className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-on-primary font-bold rounded-xl hover:bg-primary-fixed-dim transition-all active:scale-95 shadow-lg shadow-primary/10 mb-8">
<span className="material-symbols-outlined text-lg" data-icon="add">add</span>
<span className="text-sm font-headline">New Transcription</span>
</button>
<div className="flex items-center gap-3 px-2">
<div className="relative">
<img alt="User Profile Avatar" className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD71h46z8Tvrk68J3u4J5kJZZwbIK0IKFMy437-5FKk_2iaJiabwMuO7lxG-ziEPWxEibSQ89cenvHBqbrA7mpeq-DuwCZCcte7oBpgc3d9GtEger7cl6-ABUEQV4kjzrBAVXabkkgGM6WCiEklkgCfoBZAAD57j4Xk8CaDx_HVwa-FbQ8bdq6oqZl8vWljx3jS0miOS5lVlikx1eDrji2jmJgxPUtOsI53inWanpXPUkf52y_yJbrKjmGPPTXmovVXyOPAFaWqvg"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary border-2 border-surface-container-low rounded-full"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold text-on-surface">Alex Mercer</span>
<span className="text-[10px] text-outline font-label uppercase">Composer</span>
</div>
<button className="material-symbols-outlined text-outline ml-auto text-xl hover:text-on-surface transition-colors">more_vert</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative h-screen overflow-y-auto hide-scrollbar bg-surface">

<header className="sticky top-0 h-20 flex justify-between items-center px-10 z-40 sonic-blur border-b border-white/5">
<div className="flex items-center gap-12">
<span className="text-xl font-bold font-headline tracking-tighter text-on-surface">Harmonic <span className="text-primary">Precision</span></span>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-semibold text-primary relative after:absolute after:bottom-[-28px] after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Projects</a>
<a className="text-sm font-semibold text-outline hover:text-on-surface transition-colors" href="#">Shared</a>
<a className="text-sm font-semibold text-outline hover:text-on-surface transition-colors" href="#">Recent</a>
</nav>
</div>
<div className="flex items-center gap-8">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">search</span>
<input className="bg-surface-container-high border-none text-sm rounded-full py-2.5 pl-12 pr-6 w-72 focus:ring-2 focus:ring-primary/20 placeholder:text-outline transition-all" placeholder="Search your archive..." type="text"/>
</div>
<div className="flex items-center gap-5 text-outline">
<button className="material-symbols-outlined cursor-pointer hover:text-on-surface transition-colors">notifications</button>
<button className="material-symbols-outlined cursor-pointer hover:text-on-surface transition-colors">settings</button>
</div>
<button className="px-6 py-2.5 bg-surface-container-highest text-on-surface font-bold rounded-xl hover:bg-white/10 transition-all text-sm font-headline">
                    Export Score
                </button>
</div>
</header>

<div className="pt-10 pb-32 px-10 max-w-[1400px] mx-auto w-full">

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
<div className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-surface-container-low border border-white/5 flex flex-col justify-between group hover:border-primary/20 transition-all">
<div>
<p className="text-outline text-xs uppercase tracking-[0.2em] font-label font-bold">Active Transcriptions</p>
<h2 className="text-6xl font-headline font-bold mt-4 text-primary leading-none">12</h2>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-primary-container border-2 border-surface flex items-center justify-center text-[10px] font-bold">JD</div>
<div className="w-8 h-8 rounded-full bg-secondary-container border-2 border-surface flex items-center justify-center text-[10px] font-bold">KM</div>
<div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-[10px] font-bold">LS</div>
</div>
<span className="text-xs text-outline italic font-label">+4 shared with collaborators</span>
</div>
</div>
<div className="p-8 rounded-2xl bg-surface-container-low border border-white/5 group hover:border-primary/20 transition-all">
<p className="text-outline text-xs uppercase tracking-[0.2em] font-label font-bold">Storage Usage</p>
<div className="flex items-baseline gap-2 mt-4">
<h2 className="text-4xl font-headline font-bold">84%</h2>
<span className="text-xs text-outline">/ 15 GB</span>
</div>
<div className="w-full bg-surface-container-lowest h-2 rounded-full mt-6 overflow-hidden">
<div className="bg-gradient-to-r from-primary to-secondary h-full w-[84%] rounded-full"></div>
</div>
<p className="text-xs text-outline-variant mt-4 font-label">12.6 GB used</p>
</div>
<div className="p-8 rounded-2xl bg-surface-container-low border border-white/5 flex flex-col justify-between group hover:border-primary/20 transition-all">
<div className="flex justify-between items-start">
<p className="text-outline text-xs uppercase tracking-[0.2em] font-label font-bold">Avg. Accuracy</p>
<span className="material-symbols-outlined text-secondary text-2xl" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span>
</div>
<div>
<h2 className="text-4xl font-headline font-bold">99.4%</h2>
<p className="text-xs text-secondary mt-2 font-medium font-label">Perfect Pitch™ Enabled</p>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-2xl font-headline font-bold tracking-tight">Recent Projects</h3>
<p className="text-outline text-sm mt-1">Pick up exactly where you left off</p>
</div>
<div className="flex bg-surface-container-high p-1 rounded-xl">
<button className="p-2 rounded-lg bg-surface-container-lowest text-primary shadow-sm shadow-black/20"><span className="material-symbols-outlined text-xl">grid_view</span></button>
<button className="p-2 rounded-lg text-outline hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-xl">list</span></button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-surface-container-low rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 card-shadow">
<div className="h-48 overflow-hidden relative">
<img alt="Sheet Music" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeTscVLvMaeRfhOu49zGHNe2M2qrEObDiyAPwato3k5jZYClHXb5noh3CDYev255WA56FOI8v61HP0X-Mg5G3tSV5B1O2fwE-RgnBH64BRNwK2hsMQPLgTpysRDNQz0Y0rv8c3Cy84b59VY_I9iN_bpUilgH-OOiMZCfBrwVhP1OmMN-KLjWS-hf_wfJ1YeetOE76btjM6XRuxW-pyXJLTdYm2MdUvrUUCT-dIoz73JBGopuPQoAJKeAZMW7gIk_kdMFvyBc4sjg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 px-3 py-1 rounded-full sonic-blur border border-white/10 text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(45,212,191,0.5)]"></span> Transcribed
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-lg font-headline text-on-surface group-hover:text-primary transition-colors">Nocturne Op. 9 No. 2</h4>
<button className="material-symbols-outlined text-outline hover:text-on-surface transition-colors">more_horiz</button>
</div>
<p className="text-sm text-outline-variant font-medium">Chopin • Solo Piano</p>
<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] text-outline font-label font-bold uppercase tracking-wider">Updated 2h ago</span>
<div className="flex gap-4">
<button className="material-symbols-outlined text-xl text-outline hover:text-primary transition-colors">share</button>
<button className="material-symbols-outlined text-xl text-outline hover:text-tertiary transition-colors">star</button>
</div>
</div>
</div>
</div>

<div className="group relative bg-surface-container-low rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 card-shadow">
<div className="h-48 overflow-hidden relative">
<img alt="Waveform" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7jNH9PH8XlSUFXmhdt31aPwfJFWZxM-7jkb0QMzKoHhIzJnmW4paQk9Y1NshMv_1TmAde2VcxbQq62EIoDdaK1mEkPbyvuLbyIVJzaaCP89ztifpvHYSGudIGH_SODXpZYUph18_TTaKbF-7u-qCWDpnPLZzotOVtTMxcATXdFaOHW12fVI5e_phqdasJa1kPYKFcTbMqdwocp_8CSvVZDYM3XZc5J9-Oekkv-CWGcvS-ALxRprMFQBBOukbJquYhewyTCLbezQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 px-3 py-1 rounded-full sonic-blur border border-white/10 text-tertiary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(251,146,60,0.5)]"></span> Processing
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-lg font-headline text-on-surface group-hover:text-primary transition-colors">Jazz Improvisation #4</h4>
<button className="material-symbols-outlined text-outline hover:text-on-surface transition-colors">more_horiz</button>
</div>
<p className="text-sm text-outline-variant font-medium">Original Composition • Trio</p>
<div className="mt-6 pt-4 border-t border-white/5">
<div className="flex justify-between text-[10px] mb-2 font-bold font-label uppercase text-outline">
<span>AI Extraction</span>
<span className="text-tertiary">65%</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-[65%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="group relative bg-surface-container-low rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 card-shadow">
<div className="h-48 overflow-hidden relative">
<img alt="Studio" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0e4l0-XkOC7bIqn3hFXNSYyWFGgy03_UWQoUO6zE8RPfR-GJII8FYed9ZjEilxzQFkF4s0xKFo1uKuqvJWxhcLU4sdEIgOeRcp1M-xoFwausQLjYxoLAanhNu7gASCOGK4gNOcxa9m5z1d7ujkJHehafMgMHH1p3e9LDhCDuOd3wx7l643ej8TKxDNlujNAefOX0npkDD8CU8v2nZiQ-ONyqvKDyQHz1KqWS3or_jhUmmhR1zItAGIAiLr7pjJY02dfRWSVqGw"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 px-3 py-1 rounded-full sonic-blur border border-white/10 text-on-surface text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
<span className="material-symbols-outlined text-[12px]">history</span> Draft
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-1">
<h4 className="font-bold text-lg font-headline text-on-surface group-hover:text-primary transition-colors">Moonlight Sonata</h4>
<button className="material-symbols-outlined text-outline hover:text-on-surface transition-colors">more_horiz</button>
</div>
<p className="text-sm text-outline-variant font-medium">Beethoven • Practice Session</p>
<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] text-outline font-label font-bold uppercase tracking-wider">Created Oct 24</span>
<div className="flex gap-4">
<button className="material-symbols-outlined text-xl text-outline hover:text-primary transition-colors">cloud_done</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 p-10 rounded-[2rem] bg-surface-container-low border border-white/5 relative overflow-hidden group">
<div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700"></div>
<div className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] group-hover:bg-secondary/10 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 inline-block">New Feature</span>
<h3 className="text-3xl font-headline font-bold text-on-surface mb-4 leading-tight">Advanced Audio Separation</h3>
<p className="text-outline text-lg leading-relaxed mb-8 max-w-xl">Extract left and right hand piano parts with 98.2% separation accuracy. Perfect for complex polyphonic transcriptions and study guides.</p>
<button className="flex items-center gap-3 text-on-surface font-bold text-base group/btn">
<span className="border-b-2 border-primary pb-1">Learn about Phase II extraction</span>
<span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-2">arrow_forward</span>
</button>
</div>
<div className="w-full md:w-80 aspect-[4/3] rounded-2xl bg-surface-container-lowest border border-white/5 flex flex-col p-6 shadow-2xl relative">
<div className="flex gap-2 mb-auto">
<div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-tertiary/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
</div>
<div className="flex items-end gap-2 h-32 mb-4">
<div className="flex-1 bg-outline-variant/10 rounded-t-lg h-[30%]"></div>
<div className="flex-1 bg-secondary rounded-t-lg h-[65%] shadow-[0_0_15px_rgba(45,212,191,0.3)]"></div>
<div className="flex-1 bg-primary rounded-t-lg h-[90%] shadow-[0_0_20px_rgba(129,140,248,0.4)]"></div>
<div className="flex-1 bg-secondary rounded-t-lg h-[55%]"></div>
<div className="flex-1 bg-outline-variant/10 rounded-t-lg h-[40%]"></div>
</div>
<div className="flex justify-between items-center text-[10px] font-bold font-label text-outline uppercase tracking-widest">
<span>Left Hand</span>
<span>Right Hand</span>
</div>
</div>
</div>
</div>
</div>

<footer className="fixed bottom-0 right-0 left-72 h-24 flex justify-between items-center px-10 z-50 sonic-blur border-t border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-5 w-1/4">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
<span className="material-symbols-outlined text-primary text-2xl">music_note</span>
</div>
<div className="hidden lg:block truncate">
<p className="text-on-surface font-bold text-sm">Nocturne Op. 9 No. 2</p>
<p className="text-outline text-xs mt-0.5">Alex Mercer • Chopin</p>
</div>
</div>
<div className="flex flex-col items-center gap-3 w-2/4">
<div className="flex items-center gap-10">
<button className="text-outline hover:text-on-surface transition-colors active:scale-90"><span className="material-symbols-outlined text-2xl">skip_previous</span></button>
<button className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"><span className="material-symbols-outlined text-3xl">play_arrow</span></button>
<button className="text-outline hover:text-on-surface transition-colors active:scale-90"><span className="material-symbols-outlined text-2xl">skip_next</span></button>
</div>
<div className="w-full max-w-md flex items-center gap-3">
<span className="text-[10px] text-outline font-label">1:24</span>
<div className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-primary rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-on-surface rounded-full shadow-[0_0_8px_white]"></div>
</div>
</div>
<span className="text-[10px] text-outline font-label">4:32</span>
</div>
</div>
<div className="flex items-center justify-end gap-8 w-1/4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline text-lg">volume_up</span>
<div className="w-24 h-1 bg-surface-container-highest rounded-full">
<div className="w-2/3 h-full bg-outline-variant rounded-full"></div>
</div>
</div>
<button className="p-2 rounded-lg text-outline hover:bg-white/5 hover:text-on-surface transition-all">
<span className="material-symbols-outlined text-xl">fullscreen</span>
</button>
</div>
</footer>
</main>
</div>
    </>
  );
}
