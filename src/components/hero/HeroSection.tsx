"use client";

import { ArrowRight, FileText, Mail, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Hero3DCanvas } from "@/components/ui/Hero3DCanvas";
import { TiltCard } from "@/components/ui/TiltCard";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] pt-28 pb-20 px-4 md:px-8 flex items-center justify-center bg-grid-pattern overflow-hidden">
      {/* Luminous Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-sky-500/20 via-blue-600/20 to-indigo-600/25 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[280px] bg-gradient-to-br from-indigo-500/20 to-sky-500/15 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Headline Column */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-secondary)] shadow-xl hover:border-sky-400/50 transition-all">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profileData.statusBadge}</span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
              Building Intelligent <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 dark:from-sky-300 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                Software & AI Products
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl font-normal leading-relaxed mx-auto lg:mx-0">
              Hi, I&apos;m <span className="font-bold text-[var(--text-primary)]">{profileData.name}</span> — a {profileData.title}. I specialize in full-stack architecture, machine learning models, and building fast, accessible web applications.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-500/35 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all group focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold text-sm border border-[var(--border-color)] hover:border-sky-400/50 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <FileText className="w-4 h-4 text-sky-400 dark:text-sky-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-sky-400/50 transition-all hover:scale-110 shadow-md"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-sky-400/50 transition-all hover:scale-110 shadow-md"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Send Email"
              className="p-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-sky-400/50 transition-all hover:scale-110 shadow-md"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Interactive 3D Canvas Column */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative w-full">
            <div className="absolute -top-4 -left-4 z-20 px-3 py-1 rounded-full text-[11px] font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin" />
              <span>Interactive 3D Canvas</span>
            </div>
            <Hero3DCanvas />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="absolute bottom-4 left-0 right-0 max-w-4xl mx-auto px-4 hidden md:block z-10">
        <div className="grid grid-cols-3 gap-4">
          {profileData.stats.map((stat, i) => (
            <TiltCard key={i} className="glass-panel p-4 text-left border border-[var(--border-color)] shadow-xl">
              <div className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight">{stat.value}</div>
              <div className="text-xs font-bold text-sky-400 mt-0.5">{stat.label}</div>
              {stat.subtext && <div className="text-[11px] text-[var(--text-muted)] mt-1">{stat.subtext}</div>}
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
