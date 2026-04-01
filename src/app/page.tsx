import Link from "next/link";

const sections = [
  {
    title: "Dashboard & Navigation",
    pages: [
      { href: "/dashboard", icon: "dashboard", label: "Project Dashboard", desc: "Main conductor dashboard", primary: true },
      { href: "/dashboard-base", icon: "dashboard_customize", label: "Dashboard (Base)", desc: "Initial iteration" },
    ],
  },
  {
    title: "Music Upload & Stems",
    pages: [
      { href: "/uploader", icon: "cloud_upload", label: "Music Uploader", desc: "Upload and process audio files", primary: true },
      { href: "/uploader-base", icon: "upload_file", label: "Uploader (Base)", desc: "Base upload interface" },
      { href: "/stems-mixer", icon: "tune", label: "Stems Mixer", desc: "Stem separation and mixing", accent: "secondary" },
    ],
  },
  {
    title: "Lead Sheets",
    pages: [
      { href: "/lead-sheet", icon: "lyrics", label: "Lead Sheet + Lyrics", desc: "Full lead sheet with lyrics", primary: true },
      { href: "/lead-sheet-duration", icon: "timer", label: "Duration Controls", desc: "Lyrics with timing controls", accent: "secondary" },
      { href: "/lead-sheet-pdf", icon: "picture_as_pdf", label: "PDF Export", desc: "Generate PDF from lead sheets", accent: "tertiary" },
      { href: "/lead-sheet-chords", icon: "music_note", label: "Chords View", desc: "Chord-focused lead sheet" },
    ],
  },
  {
    title: "Piano Score Editor",
    pages: [
      { href: "/piano-editor", icon: "edit_note", label: "Piano Score + Lyrics", desc: "Full piano score editor", primary: true },
      { href: "/piano-editor-duration", icon: "straighten", label: "Duration Controls", desc: "Score editing with timing", accent: "secondary" },
      { href: "/piano-editor-pdf", icon: "picture_as_pdf", label: "PDF Export", desc: "Export piano scores to PDF", accent: "tertiary" },
      { href: "/piano-editor-base", icon: "piano", label: "Editor (Base)", desc: "Base piano score editor" },
    ],
  },
  {
    title: "QA & Transcription",
    pages: [
      { href: "/qa-review", icon: "fact_check", label: "QA Console", desc: "Quality assurance review", primary: true },
      { href: "/qa-stems", icon: "equalizer", label: "QA + Stems Mixer", desc: "QA with stem mixing", accent: "secondary" },
      { href: "/qa-base", icon: "verified", label: "QA Review (Base)", desc: "Base QA interface" },
      { href: "/transcription-report", icon: "analytics", label: "Transcription Report", desc: "Detailed accuracy metrics", primary: true },
      { href: "/transcription-report-base", icon: "assessment", label: "Report (Base)", desc: "Base accuracy report" },
    ],
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-on-primary text-3xl">piano</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tighter font-headline text-on-surface">
              Sonic Manuscript
            </h1>
            <p className="text-sm text-outline font-label tracking-wide">
              Harmonic Precision Framework
            </p>
          </div>
        </div>
        <p className="text-on-surface-variant text-lg max-w-2xl font-body leading-relaxed">
          A professional suite for music transcription, lead sheet generation,
          piano score editing, and quality assurance review.
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-outline font-label font-bold mb-6">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block p-6 bg-surface-container-high rounded-xl border border-white/5 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_-5px_rgba(193,193,255,0.25)]"
              >
                <span
                  className={`material-symbols-outlined mb-3 block ${
                    page.primary
                      ? "text-primary"
                      : page.accent === "secondary"
                      ? "text-secondary"
                      : page.accent === "tertiary"
                      ? "text-tertiary"
                      : "text-outline-variant"
                  }`}
                >
                  {page.icon}
                </span>
                <h3 className="font-headline font-semibold text-on-surface mb-1">
                  {page.label}
                </h3>
                <p className="text-sm text-on-surface-variant">{page.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <footer className="mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-sm text-outline font-label">
          Sonic Manuscript — Harmonic Precision Framework
        </p>
      </footer>
    </div>
  );
}
