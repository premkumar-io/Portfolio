"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillsData } from "@/data/skills";
import { CheckCircle2, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <ScrollReveal direction="up">
        <SectionHeading
          badge="Technical Expertise"
          title="Skills & Technologies Matrix"
          subtitle="Core programming languages, full-stack web frameworks, cloud infrastructure, and databases."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, index) => (
          <ScrollReveal key={category.category} direction="up" delay={index * 0.1}>
            <TiltCard className="glass-panel p-6 border border-[var(--border-color)] flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center justify-between">
                    <span>{category.category}</span>
                    <Sparkles className="w-4 h-4 text-sky-400" />
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-2 border-t border-[var(--border-color)]">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        skill.highlight
                          ? "bg-blue-500/10 text-sky-400 border-blue-500/30 font-bold"
                          : "bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-color)]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${skill.highlight ? "text-sky-400" : "text-[var(--text-muted)]"}`} />
                        <span>{skill.name}</span>
                      </div>
                      {skill.highlight && (
                        <span className="text-[10px] uppercase font-bold text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded-full border border-sky-400/20">
                          Core
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
