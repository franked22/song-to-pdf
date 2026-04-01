"use client";

export default function LeadSheetPage() {
  return (
    <>
      
<aside className="fixed left-0 top-0 z-50 flex flex-col h-screen py-6 px-4 bg-[#1C1B1B] w-64 border-r border-white/5 font-['Space_Grotesk'] tracking-tight">
<div className="mb-8 px-2 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container text-lg">music_note</span>
</div>
<span className="text-xl font-bold tracking-tighter text-[#E5E2E1]">The Conductor</span>
</div>
<button className="mb-8 w-full py-3 px-4 bg-primary-container text-on-primary-container rounded-md font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95">
<span className="material-symbols-outlined">add</span>
        New Transcription
    </button>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined group-hover:text-indigo-400">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined group-hover:text-indigo-400">upload_file</span>
<span>Uploader</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
<span className="material-symbols-outlined group-hover:text-indigo-400">edit_note</span>
<span>Notation Editor</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#C1C1FF] font-bold bg-[#2A2A2A] rounded-md transition-all" href="#">
<span className="material-symbols-outlined">queue_music</span>
<span>Lead Sheets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#A6A6A6] hover:bg-[#2A2A2A] hover:text-white transition-colors rounded-md group" href="#">
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

<header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-[#131313]/70 backdrop-blur-xl border-b border-white/5 font-['Manrope'] font-medium">
<div className="flex items-center gap-8">
<span className="text-lg font-black bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] bg-clip-text text-transparent">Harmonic Precision</span>
<nav className="hidden md:flex items-center gap-6">
<a className="text-[#E5E2E1] hover:text-white transition-opacity" href="#">Projects</a>
<a className="text-[#E5E2E1] hover:text-white transition-opacity" href="#">Shared</a>
<a className="text-[#E5E2E1] hover:text-white transition-opacity" href="#">Recent</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
<input className="bg-surface-container-lowest border-none rounded-lg pl-9 pr-4 py-1.5 text-sm w-64 focus:ring-1 focus:ring-secondary/50 placeholder:text-outline-variant transition-all" placeholder="Quick search..." type="text"/>
</div>
<button className="material-symbols-outlined text-[#E5E2E1] hover:text-white transition-opacity">notifications</button>
<button className="material-symbols-outlined text-[#E5E2E1] hover:text-white transition-opacity">settings</button>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<button className="flex items-center gap-2 border border-outline-variant/30 text-on-surface-variant px-4 py-1.5 rounded-md text-sm font-bold hover:bg-surface-container-high transition-all active:scale-95">
<span className="material-symbols-outlined text-sm">picture_as_pdf</span>
            PDF
        </button>
<button className="bg-gradient-to-br from-[#C1C1FF] to-[#4A4BDC] text-on-primary-container px-4 py-1.5 rounded-md text-sm font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/20">
            Export Score
        </button>
</div>
</header>

<main className="pl-64 pt-16 pb-20 min-h-screen bg-background">
<div className="max-w-6xl mx-auto p-8">

<div className="flex items-end justify-between mb-12">
<div className="space-y-1">
<h1 className="text-5xl font-headline font-bold tracking-tight text-on-background">Midnight In Tokyo</h1>
<p className="text-outline font-body flex items-center gap-4 uppercase tracking-[0.2em] text-[10px] font-semibold">
<span>Modern Jazz Quartet</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span>4/4 Time</span>
<span className="w-1 h-1 bg-outline-variant rounded-full"></span>
<span>Tempo: 124 BPM</span>
</p>
</div>

<div className="flex gap-2 bg-surface-container-high/40 p-1.5 rounded-xl border border-white/5 backdrop-blur-sm">
<button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-highest text-on-surface rounded-lg text-sm font-bold hover:bg-surface-bright transition-all border border-white/5 active:scale-95">
<span className="material-symbols-outlined text-lg">swap_horiz</span>
                    Transpose
                </button>
<button className="flex items-center gap-2 px-5 py-2.5 bg-primary-container text-on-primary-container rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/10 active:scale-95">
<span className="material-symbols-outlined text-lg">auto_fix</span>
                    Reharmonize
                </button>
</div>
</div>

<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-9 bg-surface-container-low rounded-2xl p-8 border border-white/5 shadow-2xl">

<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-6">
<div className="text-4xl font-headline font-bold text-on-surface-variant/20 tracking-tighter">01</div>
<div className="h-10 w-px bg-outline-variant/20"></div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-[0.3em] font-label text-outline font-semibold">Section A</span>
<span className="text-sm font-bold text-on-surface">Intro Theme</span>
</div>
</div>

<div className="flex items-center gap-1.5 bg-background/50 p-1.5 rounded-xl border border-white/5">
<button className="w-10 h-10 flex flex-col items-center justify-center rounded-lg text-outline hover:bg-surface-container-high transition-all">
<div className="w-3 h-2 bg-current rounded-full rotate-[-25deg]"></div>
<div className="w-0.5 h-4 bg-current -mt-1 ml-2.5"></div>
<span className="text-[7px] font-black mt-0.5">1/4</span>
</button>
<button className="w-10 h-10 flex flex-col items-center justify-center rounded-lg bg-primary/20 text-primary border border-primary/30 shadow-inner">
<div className="relative">
<div className="w-3 h-2 bg-current rounded-full rotate-[-25deg]"></div>
<div className="w-0.5 h-4 bg-current -mt-1 ml-2.5"></div>
<div className="w-2.5 h-0.5 bg-current absolute top-0.5 right-[-1px] rotate-[25deg]"></div>
</div>
<span className="text-[7px] font-black mt-0.5">1/8</span>
</button>
<button className="w-10 h-10 flex flex-col items-center justify-center rounded-lg text-outline hover:bg-surface-container-high transition-all">
<div className="w-3.5 h-2.5 border-2 border-current rounded-full rotate-[-25deg]"></div>
<div className="w-0.5 h-4 bg-current -mt-1 ml-2.5"></div>
<span className="text-[7px] font-black mt-0.5">1/2</span>
</button>
<div className="w-px h-6 bg-white/10 mx-1"></div>
<button className="w-10 h-10 flex items-center justify-center rounded-lg text-outline hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-lg">music_off</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg text-outline hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-lg">format_italic</span>
</button>
</div>
</div>

<div className="space-y-12">

<div className="staff-container group/staff border-l-4 border-primary/20 pl-6">

<div className="chord-symbol left-0 px-2 py-0.5 rounded hover:bg-primary/10 cursor-pointer border-b border-dashed border-primary/30 transition-colors">Cmaj7</div>
<div className="chord-symbol left-1/4 px-2 py-0.5 rounded hover:bg-primary/10 cursor-pointer border-b border-dashed border-primary/30 transition-colors">Am9</div>
<div className="chord-symbol left-1/2 px-2 py-0.5 rounded hover:bg-primary/10 cursor-pointer border-b border-dashed border-primary/30 transition-colors">Dm11</div>
<div className="chord-symbol left-3/4 px-2 py-0.5 rounded hover:bg-primary/10 cursor-pointer border-b border-dashed border-primary/30 transition-colors">G7<span className="text-xs align-top text-tertiary ml-0.5">alt</span></div>

<div className="lyric-text left-[5%]">Mid-</div>
<div className="lyric-text left-[15%]">night</div>
<div className="lyric-text left-[25%]">walk-</div>
<div className="lyric-text left-[40%]">ing</div>
<div className="lyric-text left-[52%] italic text-outline">in</div>
<div className="lyric-text left-[78%] font-bold text-on-surface">Tok-</div>

<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>

<div className="musical-note text-on-surface top-[4.25rem] left-[5%]" title="C4 - 1/8 note"><div className="stem"></div></div>
<div className="musical-note text-on-surface top-[3.75rem] left-[15%]" title="E4 - 1/8 note"><div className="stem"></div></div>
<div className="musical-note text-on-surface top-[3.25rem] left-[25%]" title="G4 - 1/8 note"><div className="stem"></div></div>
<div className="musical-note text-on-surface top-[4.75rem] left-[40%]" title="A3 - 1/8 note"><div className="stem"></div></div>

<div className="absolute right-0 top-0 bottom-0 w-1 bg-outline-variant/40"></div>
<div className="absolute left-1/4 top-0 bottom-0 w-px bg-outline-variant/10"></div>
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/10"></div>
<div className="absolute left-3/4 top-0 bottom-0 w-px bg-outline-variant/10"></div>
</div>

<div className="staff-container group/staff border-l-4 border-transparent pl-6 hover:border-primary/10 transition-colors">
<div className="chord-symbol left-0 px-2 py-0.5 rounded hover:bg-primary/10 cursor-pointer border-b border-dashed border-primary/30 transition-colors">Fmaj9</div>
<div className="chord-symbol left-1/4 px-2 py-0.5 rounded hover:bg-primary/10 cursor-pointer border-b border-dashed border-primary/30 transition-colors">E7<span className="text-xs align-top text-tertiary ml-0.5">b13</span></div>
<div className="chord-symbol left-1/2 px-2 py-0.5 rounded hover:bg-primary/10 cursor-pointer border-b border-dashed border-primary/30 transition-colors">Am7</div>
<div className="chord-symbol left-3/4 px-2 py-0.5 rounded hover:bg-primary/10 cursor-pointer border-b border-dashed border-primary/30 transition-colors">Gm7 <span className="text-sm font-medium text-outline ml-1">C7</span></div>
<div className="lyric-text left-[2%]">yo</div>
<div className="lyric-text left-[26%] italic text-outline">neon</div>
<div className="lyric-text left-[51%] text-on-surface">lights</div>
<div className="lyric-text left-[76%] text-secondary font-bold">glow-</div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="notation-line"></div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-outline-variant/40"></div>
<div className="absolute left-1/4 top-0 bottom-0 w-px bg-outline-variant/10"></div>
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/10"></div>
<div className="absolute left-3/4 top-0 bottom-0 w-px bg-outline-variant/10"></div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-3 space-y-6">

<div className="bg-surface-container-high p-6 rounded-2xl border border-white/5 shadow-xl">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline font-bold text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">lightbulb</span>
                            Voicings
                        </h3>
<span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-bold">4 NEW</span>
</div>
<div className="space-y-4">
<div className="bg-background/40 p-4 rounded-xl border border-white/5 group hover:border-secondary/50 hover:bg-surface-bright transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-[9px] font-bold text-outline uppercase tracking-wider">Replace Am9 with</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
<div className="w-1.5 h-1.5 rounded-full bg-outline-variant/30"></div>
</div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-headline font-bold text-on-surface">A7<span className="text-tertiary">alt</span></span>
<span className="text-[10px] font-bold text-secondary uppercase">Smooth</span>
</div>
</div>
<div className="bg-background/40 p-4 rounded-xl border border-white/5 group hover:border-primary/50 hover:bg-surface-bright transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-[9px] font-bold text-outline uppercase tracking-wider">Replace Fmaj9 with</span>
<span className="text-[10px] font-bold text-primary px-1.5 py-0.5 bg-primary/10 rounded">Coltrane</span>
</div>
<div className="text-2xl font-headline font-bold text-on-surface">Db7<span className="text-sm font-medium text-outline-variant">/F</span></div>
</div>
</div>
<button className="w-full mt-6 py-2.5 rounded-lg border border-white/5 text-[10px] uppercase tracking-widest font-bold text-outline hover:text-on-surface hover:bg-surface-bright transition-all">
                        View Recommendations
                    </button>
</div>

<div className="bg-surface-container-high p-6 rounded-2xl border border-white/5 shadow-xl">
<h3 className="font-headline font-bold text-sm mb-6">Playback Controls</h3>
<div className="space-y-5">
<label className="flex justify-between items-center cursor-pointer group">
<div className="flex flex-col">
<span className="text-xs font-bold text-on-surface">Metronome</span>
<span className="text-[10px] text-outline">Audible click track</span>
</div>
<div className="w-10 h-5 bg-secondary/20 border border-secondary/30 rounded-full relative p-1 group-active:scale-95 transition-transform">
<div className="absolute right-1 top-1 w-3 h-3 bg-secondary rounded-full shadow-lg shadow-secondary/40"></div>
</div>
</label>
<label className="flex justify-between items-center cursor-pointer group">
<div className="flex flex-col">
<span className="text-xs font-bold text-on-surface">Chord Guide</span>
<span className="text-[10px] text-outline">Piano backing track</span>
</div>
<div className="w-10 h-5 bg-surface-container-highest rounded-full relative p-1 transition-all group-active:scale-95">
<div className="absolute left-1 top-1 w-3 h-3 bg-outline rounded-full"></div>
</div>
</label>
<div className="pt-4 border-t border-white/5">
<div className="flex items-center justify-between text-[10px] font-bold text-outline uppercase mb-2">
<span>Guide Volume</span>
<span className="text-on-surface">75%</span>
</div>
<div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-primary rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden aspect-video relative group cursor-pointer border border-white/5 shadow-lg">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="close-up of jazz musician hands playing piano" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDqMuP44X3dQwWq5poTyBLLjMBv0uuxUI655MawruPnyk40-1Vr1MucB_wNEptfPeaklNTkJz1vv8jL5_3D4QApBVOxKu_ZR9mhWRXwtrArqR3RTFIfkb7GPQf9KAXGXMpK42lm-SDpV36bXL86jHIpTBTAV-dk6oW9TBq2svrJuBmy-fnnIeVvm0jUj_zWOu8oP65YuqEZB6GkwwinPO9igpKJidztOHoB8R32jZcAL437CzoNkq18PL7rype6c_3S7ckIVs63g"/>
<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-1">
<span className="text-[8px] font-black bg-primary/20 text-primary px-1.5 py-0.5 rounded tracking-widest uppercase">Tutorial</span>
<span className="text-[8px] font-bold text-white/50 tracking-widest uppercase">8m 12s</span>
</div>
<p className="text-sm font-headline font-bold text-white group-hover:text-primary transition-colors">Mastering the Lead Line</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
<span className="material-symbols-outlined text-white fill-current">play_arrow</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-0 right-0 left-64 h-20 flex justify-center items-center space-x-12 z-50 bg-[#1C1B1B]/90 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] font-['Space_Grotesk'] text-[10px] uppercase tracking-widest">
<button className="flex flex-col items-center gap-1 text-[#A6A6A6] hover:text-white hover:scale-110 transition-all duration-200">
<span className="material-symbols-outlined text-3xl">play_arrow</span>
<span className="font-bold">Play</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#A6A6A6] hover:text-white hover:scale-110 transition-all duration-200">
<span className="material-symbols-outlined text-3xl">stop</span>
<span className="font-bold">Stop</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#4FDBC8] drop-shadow-[0_0_8px_rgba(79,219,200,0.4)] hover:scale-110 transition-all duration-200">
<span className="material-symbols-outlined text-3xl">loop</span>
<span className="font-bold">Loop</span>
</button>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-5 bg-background px-6 py-2.5 rounded-full border border-white/10 shadow-inner">
<button className="material-symbols-outlined text-outline hover:text-secondary transition-colors text-xl">remove</button>
<div className="flex flex-col items-center min-w-[70px]">
<span className="text-secondary font-black text-lg tracking-normal leading-none">124</span>
<span className="text-[7px] text-outline-variant font-black mt-0.5">BPM</span>
</div>
<button className="material-symbols-outlined text-outline hover:text-secondary transition-colors text-xl">add</button>
</div>
<div className="h-8 w-px bg-white/10"></div>
<button className="flex flex-col items-center gap-1 text-[#A6A6A6] hover:text-white hover:scale-110 transition-all duration-200">
<span className="material-symbols-outlined text-3xl">speed</span>
<span className="font-bold">Tempo</span>
</button>
</footer>
    </>
  );
}
