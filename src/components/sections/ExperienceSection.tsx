"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <ScrollReveal direction="up">
        <SectionHeading
          badge="Work History"
          title="Software Engineering Internships"
          subtitle="Hands-on industry experience building AI systems, RESTful APIs, and full-stack web applications."
        />
      </ScrollReveal>

      <div className="relative border-l-2 border-[var(--border-color)] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
        {experienceData.map((exp, index) => (
          <ScrollReveal key={exp.id} direction="up" delay={index * 0.15}>
            <div className="relative">
              {/* Timeline Indicator Badge */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-blue-600 border-4 border-[var(--bg-main)] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <TiltCard className="glass-panel p-6 md:p-8 border border-[var(--border-color)] space-y-4">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-color)] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-sky-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold text-[var(--text-muted)]">
                    <div className="flex items-center gap-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-xl border border-[var(--border-color)]">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.startDate} – {exp.endDate}</span>
                    </div>
                    {exp.location && (
                      <div className="hidden sm:flex items-center gap-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-xl border border-[var(--border-color)]">
                        <MapPin className="w-3.5 h-3.5 text-sky-400" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">Key Contributions</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-color)]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] text-[11px] font-medium border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
