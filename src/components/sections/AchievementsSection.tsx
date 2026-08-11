"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievementsData } from "@/data/achievements";
import { Trophy, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <ScrollReveal direction="up">
        <SectionHeading
          badge="Honors & Contests"
          title="Achievements & Hackathons"
          subtitle="National hackathon recognition, workshops, and competitive coding milestones."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievementsData.map((ach, index) => (
          <ScrollReveal key={ach.id} direction="up" delay={index * 0.15}>
            <TiltCard className="glass-panel p-6 border border-[var(--border-color)] flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                    <Trophy className="w-5 h-5" />
                  </div>
                  {ach.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      {ach.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)]">{ach.title}</h3>
                  <p className="text-xs font-semibold text-sky-400 mt-0.5">{ach.organization}</p>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                  {ach.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)] text-[11px] font-medium text-[var(--text-muted)] flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" /> Recognized
                </span>
                <span>{ach.date}</span>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
