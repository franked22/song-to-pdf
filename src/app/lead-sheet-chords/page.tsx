"use client";

export default function LeadSheetChordsPage() {
  return (
    <>
      
<aside className="fixed left-0 top-0 z-50 flex flex-col h-screen py-6 px-4 bg-stone-900 dark:bg-[#1C1B1B] h-full w-64 flex-col border-r-0 font-['Space_Grotesk'] tracking-tight">
<div className="mb-8 px-2 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container text-lg">music_note</span>
</div>
<span className="text-xl font-bold tracking-tighter text-indigo-100 dark:text-[#E5E2E1]">The Conductor</span>
</div>
<button className="mb-8 w-full py-3 px-4 bg-primary-container text-on-primary-container rounded-md font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all scale-98 active:opacity-80">
<span className="material-symbols-outlined">add</span>
            New Transcription
        </button>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined group-hover:text-indigo-400">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined group-hover:text-indigo-400">upload_file</span>
<span>Uploader</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined group-hover:text-indigo-400">edit_note</span>
<span>Notation Editor</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-indigo-400 dark:text-[#C1C1FF] font-bold bg-[#2A2A2A] rounded-md transition-all scale-98 active:opacity-80" href="#">
<span className="material-symbols-outlined">queue_music</span>
<span>Lead Sheets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 dark:text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined group-hover:text-indigo-400">library_music</span>
<span>Library</span>
</a>
</nav>
<div className="mt-auto pt-6 px-2 flex items-center gap-3">
<img alt="User Profile Avatar" className="w-10 h-10 rounded-full border border-outline-variant/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6ai7rzrC7K7Wyv8KVWU_dv7r0bz0_bV-nPDE4ZPzlI3yZKU6kVbfgqLIeBITC77mTGvf3GSO2Tsx6Y0BEWs_ieJi_HZ4EFIWyagOZLstww4VTs1LTI8jpok4wlXQrfnmQqHAqeU1pjSV3bUiCizgSx38um_zf0O2oxuAAcgtpzi1RNSfig7jcfFfB0KFD0IvDRvjCy0eX6BJKHxzA2G5UV-yiRKaZlq9vbaea4LJuTB83IkZDtUKjbwD9EG9F38HV61-8V6hb4w"/>
<div className="flex flex-col">
<span className="text-sm font-bold text-on-surface">Alex Mercer</span>
<span className="text-[10px] uppercase tracking-widest text-indigo-400">Professional Tier</span>
</div>
</div>
</aside>

<header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-stone-950/70 dark:bg-[#131313]/70 backdrop-blur-xl border-b border-white/5 font-['Manrope'] font-medium opacity-90 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-8">
<span className="text-lg font-black bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] bg-clip-text text-transparent">Harmonic Precision</span>
<nav className="hidden md:flex items-center gap-6">
<a className="text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity" href="#">Projects</a>
<a className="text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity" href="#">Shared</a>
<a className="text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity" href="#">Recent</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
<input className="bg-surface-container-lowest border-none rounded-lg pl-9 pr-4 py-1.5 text-sm w-64 focus:ring-1 focus:ring-secondary/50 placeholder:text-outline-variant transition-all" placeholder="Quick search..." type="text"/>
</div>
<button className="material-symbols-outlined text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity">notifications</button>
<button className="material-symbols-outlined text-stone-400 dark:text-[#E5E2E1] hover:text-white transition-opacity">settings</button>
<button className="bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] text-on-primary-container px-4 py-1.5 rounded-md text-sm font-bold hover:opacity-90 transition-all active:scale-95">
                Export Score
            </button>
</div>
</header>

<main className="pl-64 pt-16 pb-20 min-h-screen bg-background">
<div className="max-w-6xl mx-auto p-8">

<div className="flex items-end justify-between mb-12">
<div className="space-y-1">
<h1 className="text-5xl font-headline font-bold tracking-tight text-on-background">Midnight In Tokyo</h1>
<p className="text-outline font-body flex items-center gap-4 uppercase tracking-[0.2em] text-xs">
<span>Modern Jazz Quartet</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span>4/4 Time</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span>Tempo: 124 BPM</span>
</p>
</div>

<div className="flex gap-3 bg-surface-container-high/40 backdrop-blur-md p-1.5 rounded-xl">
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest text-primary rounded-lg text-sm font-medium hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-lg">swap_horiz</span>
                        Transpose
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/10">
<span className="material-symbols-outlined text-lg">auto_fix</span>
                        Reharmonize
                    </button>
</div>
</div>

<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-9 bg-surface-container-low rounded-2xl p-10 shadow-inner">
<div className="flex justify-between items-center mb-10">
<div className="flex items-center gap-6">
<div className="text-4xl font-headline font-bold text-on-surface-variant/20 tracking-tighter">01</div>
<div className="h-10 w-px bg-outline-variant/20"></div>
<span className="text-xs uppercase tracking-[0.3em] font-label text-outline font-semibold">Intro Theme</span>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold text-secondary uppercase tracking-widest rounded-full">Alto Sax</span>
<span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold text-outline uppercase tracking-widest rounded-full">Concert Key</span>
</div>
</div>

<div className="space-y-16">

<div className="staff-container border-l-2 border-on-surface-variant/30 pl-4 relative">
<div className="chord-symbol left-0">Cmaj7</div>
<div className="chord-symbol left-1/4">Am9</div>
<div className="chord-symbol left-1/2">Dm11</div>
<div className="chord-symbol left-3/4">G7<span className="text-xs align-top text-tertiary">alt</span></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>

<div className="absolute top-[3.75rem] left-[5%] w-3 h-2 bg-on-surface rounded-full rotate-[-20deg]"></div>
<div className="absolute top-[3.25rem] left-[15%] w-3 h-2 bg-on-surface rounded-full rotate-[-20deg]"></div>
<div className="absolute top-[2.75rem] left-[25%] w-3 h-2 bg-on-surface rounded-full rotate-[-20deg]"></div>
<div className="absolute top-[4.25rem] left-[40%] w-3 h-2 bg-on-surface rounded-full rotate-[-20deg]"></div>
<div className="absolute right-0 top-0 bottom-0 w-0.5 bg-outline-variant/40"></div>
<div className="absolute left-1/4 top-0 bottom-0 w-px bg-outline-variant/20"></div>
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/20"></div>
<div className="absolute left-3/4 top-0 bottom-0 w-px bg-outline-variant/20"></div>
</div>

<div className="staff-container border-l-2 border-on-surface-variant/30 pl-4 relative">
<div className="chord-symbol left-0">Fmaj9</div>
<div className="chord-symbol left-1/4">E7<span className="text-xs align-top text-tertiary">b13</span></div>
<div className="chord-symbol left-1/2">Am7</div>
<div className="chord-symbol left-3/4">Gm7 <span className="text-sm font-medium text-outline">C7</span></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="absolute right-0 top-0 bottom-0 w-0.5 bg-outline-variant/40"></div>
<div className="absolute left-1/4 top-0 bottom-0 w-px bg-outline-variant/20"></div>
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/20"></div>
<div className="absolute left-3/4 top-0 bottom-0 w-px bg-outline-variant/20"></div>
</div>

<div className="staff-container border-l-2 border-on-surface-variant/30 pl-4 relative">
<div className="chord-symbol left-0">Bbmaj7</div>
<div className="chord-symbol left-1/2">Bdim7</div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="absolute right-0 top-0 bottom-0 w-0.5 bg-outline-variant/40"></div>
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/20"></div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-3 space-y-6">
<div className="bg-surface-container-high p-6 rounded-2xl">
<h3 className="font-headline font-bold text-sm mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">lightbulb</span>
                            Voicing Suggestions
                        </h3>
<div className="space-y-3">

<div className="bg-surface-container p-4 rounded-xl border-l-4 border-secondary/50 group hover:bg-surface-bright transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-bold text-outline uppercase tracking-tighter">Replace Am9 with</span>
<span className="text-[10px] font-label px-1.5 py-0.5 bg-secondary-container/20 text-secondary rounded">Smooth</span>
</div>
<div className="text-2xl font-headline font-bold text-on-surface">A7<span className="text-tertiary">alt</span></div>
<div className="mt-2 flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
<div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
<div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
</div>
</div>

<div className="bg-surface-container p-4 rounded-xl border-l-4 border-primary/30 group hover:bg-surface-bright transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-bold text-outline uppercase tracking-tighter">Replace Fmaj9 with</span>
<span className="text-[10px] font-label px-1.5 py-0.5 bg-primary-container/20 text-primary rounded">Coltrane</span>
</div>
<div className="text-2xl font-headline font-bold text-on-surface">Db7<span className="text-sm font-medium text-outline-variant">/F</span></div>
</div>
</div>
<button className="w-full mt-4 py-2 text-[10px] uppercase tracking-widest font-bold text-outline hover:text-on-surface transition-colors">View All Suggestions</button>
</div>
<div className="bg-surface-container-high p-6 rounded-2xl">
<h3 className="font-headline font-bold text-sm mb-4">Playback Settings</h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-xs font-label text-on-surface-variant">Metronome</span>
<div className="w-8 h-4 bg-secondary rounded-full relative">
<div className="absolute right-1 top-1 w-2 h-2 bg-on-secondary rounded-full"></div>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-xs font-label text-on-surface-variant">Chord Guide</span>
<div className="w-8 h-4 bg-surface-container-highest rounded-full relative">
<div className="absolute left-1 top-1 w-2 h-2 bg-outline rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden aspect-video relative group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="close-up of jazz musician hands playing piano with warm moody lighting and shallow depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDqMuP44X3dQwWq5poTyBLLjMBv0uuxUI655MawruPnyk40-1Vr1MucB_wNEptfPeaklNTkJz1vv8jL5_3D4QApBVOxKu_ZR9mhWRXwtrArqR3RTFIfkb7GPQf9KAXGXMpK42lm-SDpV36bXL86jHIpTBTAV-dk6oW9TBq2svrJuBmy-fnnIeVvm0jUj_zWOu8oP65YuqEZB6GkwwinPO9igpKJidztOHoB8R32jZcAL437CzoNkq18PL7rype6c_3S7ckIVs63g"/>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Tutorial</span>
<p className="text-sm font-headline font-medium">Mastering the Lead</p>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-0 right-0 left-64 h-20 flex justify-center items-center space-x-12 z-50 bg-stone-900/80 dark:bg-[#1C1B1B]/80 backdrop-blur-2xl border-t border-white/10 shadow-2xl shadow-black font-['Space_Grotesk'] text-[10px] uppercase tracking-widest">
<button className="flex flex-col items-center gap-1 text-stone-500 dark:text-[#464555] hover:scale-110 transition-transform active:scale-90 duration-150">
<span className="material-symbols-outlined text-2xl">play_arrow</span>
<span>Play</span>
</button>
<button className="flex flex-col items-center gap-1 text-stone-500 dark:text-[#464555] hover:scale-110 transition-transform active:scale-90 duration-150">
<span className="material-symbols-outlined text-2xl">stop</span>
<span>Stop</span>
</button>
<button className="flex flex-col items-center gap-1 text-teal-400 dark:text-[#4FDBC8] drop-shadow-[0_0_8px_rgba(79,219,200,0.5)] hover:scale-110 transition-transform active:scale-90 duration-150">
<span className="material-symbols-outlined text-2xl">loop</span>
<span>Loop</span>
</button>
<div className="h-10 w-px bg-white/10"></div>
<div className="flex items-center gap-4 bg-surface-container-lowest px-4 py-2 rounded-full border border-white/5">
<button className="material-symbols-outlined text-outline hover:text-secondary">remove</button>
<div className="flex flex-col items-center min-w-[60px]">
<span className="text-secondary font-bold text-xs tracking-normal">124</span>
<span className="text-[8px] text-outline-variant">BPM</span>
</div>
<button className="material-symbols-outlined text-outline hover:text-secondary">add</button>
</div>
<div className="h-10 w-px bg-white/10"></div>
<button className="flex flex-col items-center gap-1 text-stone-500 dark:text-[#464555] hover:scale-110 transition-transform active:scale-90 duration-150">
<span className="material-symbols-outlined text-2xl">speed</span>
<span>Tempo</span>
</button>
</footer>
    </>
  );
}
