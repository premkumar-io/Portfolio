"use client";

import { profileData } from "@/data/profile";
import { FileText, Download, ExternalLink, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
      <ScrollReveal direction="scale">
        <TiltCard className="glass-panel p-8 md:p-12 border border-[var(--border-color)] relative overflow-hidden bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-surface)]">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/15 blur-[90px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-600/15 blur-[90px] pointer-events-none rounded-full" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 text-sky-400 border border-blue-500/30 text-xs font-bold shadow-md">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Official Developer Credentials</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                Looking for My Resume?
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                Download my single-page PDF resume or view the full print-friendly web format.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={profileData.resumeUrl}
                download="Prem_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </a>

              <a
                href="/resume"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold text-sm border border-[var(--border-color)] hover:border-sky-400/50 hover:-translate-y-0.5 transition-all"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View Web Resume</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </TiltCard>
      </ScrollReveal>
    </section>
  );
}
