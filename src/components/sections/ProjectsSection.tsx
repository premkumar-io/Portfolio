"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projects";
import { Project } from "@/types/portfolio";
import { ExternalLink, ArrowRight, Sparkles, CheckCircle2, ChevronRight, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { TiltCard } from "@/components/ui/TiltCard";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "AI/ML", "Full-Stack", "Algorithms"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeading
        badge="Featured Engineering Work"
        title="Software Projects & Open Source Repositories"
        subtitle="Full-stack SaaS applications, AI models, machine learning algorithms, and software projects published on GitHub."
      />

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              activeCategory === cat
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-bold"
                : "bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)]"
            }`}
          >
            {cat} Projects
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <TiltCard key={project.slug} className="glass-panel p-6 border border-[var(--border-color)] flex flex-col justify-between h-full bg-[var(--bg-card)]">
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-500/10 text-sky-400 border border-blue-500/20">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    <Sparkles className="w-3 h-3" /> Flagship
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                {project.shortDescription}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-color)]">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] text-[11px] font-medium border border-[var(--border-color)]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-2 py-1 rounded-lg bg-[var(--bg-surface)] text-[var(--text-muted)] text-[11px]">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="pt-4 mt-6 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-sky-400/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-sky-400/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:underline px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  Quick View
                </button>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Quick Case Study Modal Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-2xl w-full max-h-[85vh] overflow-y-auto glass-panel p-6 md:p-8 rounded-3xl border border-[var(--border-color)] shadow-2xl space-y-6 relative bg-[var(--bg-surface)] text-[var(--text-primary)]">
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close Project Modal"
              className="absolute top-6 right-6 p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-elevated)] border border-[var(--border-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-blue-500/10 text-sky-400 border border-blue-500/20">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">{selectedProject.title}</h3>
              <p className="text-xs text-[var(--text-secondary)]">{selectedProject.tagline}</p>
            </div>

            {/* Problem & Solution */}
            <div className="space-y-4 pt-2">
              <div className="bg-red-500/10 p-4 rounded-2xl border border-red-500/20">
                <h4 className="text-xs font-bold uppercase text-red-400 tracking-wider">The Problem</h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
                <h4 className="text-xs font-bold uppercase text-emerald-400 tracking-wider">The Solution</h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[var(--text-primary)]">Key Features</h4>
              <ul className="space-y-1.5">
                {selectedProject.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20">
              <h4 className="text-xs font-bold uppercase text-sky-400">Engineering Outcome</h4>
              <p className="text-xs text-[var(--text-primary)] mt-1 leading-relaxed">{selectedProject.outcome}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
              <div className="flex items-center gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-color)]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Repository</span>
                  </a>
                )}
              </div>
              <Link
                href={`/projects/${selectedProject.slug}`}
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:underline"
              >
                Full Case Study Page
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
