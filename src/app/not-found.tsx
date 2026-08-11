import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] flex items-center justify-center p-4 selection:bg-blue-600 selection:text-white font-sans bg-grid-pattern">
      <div className="max-w-md w-full glass-panel p-8 rounded-3xl border border-[var(--border-color)] text-center space-y-6 shadow-2xl bg-[var(--bg-card)]">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-sky-400 flex items-center justify-center mx-auto">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
            404 Error
          </span>
          <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Page Not Found</h1>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            The page or project case study you requested could not be located.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </main>
  );
}
