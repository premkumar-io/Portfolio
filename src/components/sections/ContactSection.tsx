"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/profile";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <ScrollReveal direction="up">
        <SectionHeading
          badge="Get In Touch"
          title="Let&apos;s Connect & Build Together"
          subtitle="Open to full-time engineering roles, software projects, and tech collaborations."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Direct Contact Info */}
        <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
          <TiltCard className="glass-panel p-6 md:p-8 border border-[var(--border-color)] space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">Contact Details</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Feel free to reach out via email, phone, or connect on LinkedIn and GitHub.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-600/10 text-sky-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Email Address</div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">{profileData.email}</div>
                </div>
              </a>

              <a
                href={`tel:${profileData.phone}`}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)] transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-600/10 text-sky-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Phone Number</div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">{profileData.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                <div className="p-3 rounded-xl bg-blue-600/10 text-sky-400 border border-blue-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">{profileData.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-[var(--border-color)] space-y-2">
              <div className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">Social Links</div>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-color)] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-color)] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* Right Interactive Form */}
        <ScrollReveal direction="left" className="lg:col-span-7">
          <TiltCard className="glass-panel p-6 md:p-8 border border-[var(--border-color)] space-y-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">Send a Message</h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-[var(--text-primary)]">Message Received!</h4>
                <p className="text-xs text-[var(--text-secondary)]">Thank you for reaching out. I will respond to your message promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[var(--text-primary)] mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--text-primary)] mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-primary)] mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Prem, I'd like to discuss an engineering role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-500/30 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
