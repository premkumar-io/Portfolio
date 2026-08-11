import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2, AlertCircle, Cpu, Layers, Trophy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { TiltCard } from "@/components/ui/TiltCard";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Prem Kumar`,
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-4 md:px-8 max-w-5xl mx-auto w-full space-y-10 bg-grid-pattern">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-sky-500 dark:text-sky-400 hover:underline bg-[var(--bg-surface)] px-4 py-2 rounded-xl border border-[var(--border-color)] shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </div>

        {/* Hero Header Card */}
        <TiltCard className="glass-panel p-8 md:p-12 border border-[var(--border-color)] shadow-2xl relative overflow-hidden bg-[var(--bg-card)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/15 text-sky-500 dark:text-sky-400 border border-blue-500/30">
                {project.category} Case Study
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-bold border border-[var(--border-color)] shadow-md transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn Profile</span>
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-bold border border-[var(--border-color)] shadow-md transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Application</span>
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-color)] shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>

        {/* Executive Overview */}
        <section className="glass-panel p-6 md:p-8 border border-[var(--border-color)] space-y-3 bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-400" />
            Executive Overview
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
            {project.fullDescription}
          </p>
        </section>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="p-6 md:p-8 rounded-3xl bg-red-500/10 border border-red-500/20 space-y-3">
            <h2 className="text-base font-bold text-red-500 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              The Problem Statement
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section className="p-6 md:p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
            <h2 className="text-base font-bold text-emerald-500 dark:text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              The Technical Solution
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.solution}
            </p>
          </section>
        </div>

        {/* Key Features */}
        <section className="glass-panel p-6 md:p-8 border border-[var(--border-color)] space-y-4 bg-[var(--bg-card)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            Key Engineering Features
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {project.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)]"
              >
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="glass-panel p-6 md:p-8 border border-[var(--border-color)] space-y-3 bg-[var(--bg-card)]">
            <h2 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              Technical Challenges
            </h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="text-xs md:text-sm text-[var(--text-secondary)] flex items-start gap-2 leading-relaxed">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-panel p-6 md:p-8 border border-[var(--border-color)] space-y-3 bg-[var(--bg-card)]">
            <h2 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              System Architecture
            </h2>
            <p className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-surface)] p-4 rounded-2xl border border-[var(--border-color)] leading-relaxed">
              {project.architectureSummary}
            </p>
          </section>
        </div>

        {/* Engineering Outcome */}
        <section className="p-6 md:p-8 rounded-3xl bg-blue-500/10 border border-blue-500/20 space-y-3">
          <h2 className="text-lg font-bold text-sky-400 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-sky-400" />
            Engineering Outcome & Business Impact
          </h2>
          <p className="text-sm md:text-base text-[var(--text-primary)] leading-relaxed font-medium">
            {project.outcome}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
