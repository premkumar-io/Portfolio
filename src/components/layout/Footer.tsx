import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-surface)] py-12 px-4 md:px-8 text-[var(--text-secondary)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Info */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-[var(--text-primary)]">{profileData.name}</h3>
          <p className="text-xs text-[var(--text-muted)] font-normal">
            Software Engineer & Full-Stack Developer • {profileData.location}
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
          <a href="#about" className="hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md">About</a>
          <a href="#experience" className="hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md">Experience</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md">Projects</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md">Skills</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md">Contact</a>
        </div>

        {/* Right Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-sky-400/50 transition-all hover:scale-110 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-sky-400/50 transition-all hover:scale-110 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Send Email"
            className="p-2.5 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-sky-400/50 transition-all hover:scale-110 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Back to Top"
            className="p-2.5 rounded-xl bg-blue-600/10 text-sky-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all shadow-sm ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[var(--border-color)] text-center text-[11px] text-[var(--text-muted)]">
        © {new Date().getFullYear()} {profileData.name}. All rights reserved. Built with Next.js 15, TypeScript & Tailwind CSS.
      </div>
    </footer>
  );
}
