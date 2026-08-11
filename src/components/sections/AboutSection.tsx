"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/profile";
import { Code2, Brain, Database, Cloud, Terminal, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function AboutSection() {
  const highlights = [
    {
      icon: <Brain className="w-5 h-5 text-sky-400" />,
      title: "Algorithms & Machine Learning",
      description: "Proficient in Java for DSA and building AI models using Python, FastAPI, and Scikit-learn."
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      title: "Full-Stack Web Development",
      description: "Building production SaaS apps with React, Next.js, Node.js, Express, and modern CSS systems."
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      title: "Database Management & APIs",
      description: "Experienced with MongoDB, MySQL, PostgreSQL, RESTful APIs, and secure authentication flows."
    },
    {
      icon: <Cloud className="w-5 h-5 text-emerald-400" />,
      title: "Cloud & Developer Tools",
      description: "Deploying applications with AWS (EC2, S3, Cognito, DDB), Docker, Vercel, Git, and Postman."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <ScrollReveal direction="up">
        <SectionHeading
          badge="About Me"
          title="Software Engineer & CSE Student"
          subtitle="Motivated CSE student at CGC University with expertise in software engineering and full-stack development."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Bio Card */}
        <ScrollReveal direction="right" className="lg:col-span-5">
          <TiltCard className="glass-panel p-8 border border-[var(--border-color)] space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/15 text-sky-400 border border-blue-500/30">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                <span>Summary</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">Engineering Philosophy</h3>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
              {profileData.bio}
            </p>

            <div className="pt-4 border-t border-[var(--border-color)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>B.Tech CSE Student (2022 – 2026)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>MERN Stack & Python FastAPI Developer</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>AWS Cloud & Docker Practitioner</span>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* Right Pillars Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <TiltCard className="glass-panel p-6 border border-[var(--border-color)] space-y-3 h-full">
                <div className="p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] w-fit shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">{item.title}</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
