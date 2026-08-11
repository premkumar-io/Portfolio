"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationData } from "@/data/education";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <ScrollReveal direction="up">
        <SectionHeading
          badge="Academic Background"
          title="Education & Credentials"
          subtitle="Formal degree program in Computer Science & Engineering."
        />
      </ScrollReveal>

      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <ScrollReveal key={edu.id} direction="up" delay={index * 0.15}>
            <TiltCard className="glass-panel p-6 md:p-8 border border-[var(--border-color)] space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--border-color)] pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-sky-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {edu.degree} in {edu.fieldOfStudy}
                    </h3>
                    <p className="text-sm font-semibold text-sky-400 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-[var(--text-muted)]">
                  <div className="flex items-center gap-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-xl border border-[var(--border-color)]">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{edu.startDate} – {edu.endDate}</span>
                  </div>
                  {edu.location && (
                    <div className="flex items-center gap-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-xl border border-[var(--border-color)]">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {edu.relevantCoursework && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-sky-400" />
                    <span>Core Coursework & Specialized Subjects</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCoursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-color)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
