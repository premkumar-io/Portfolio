import Link from "next/link";
import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { achievementsData } from "@/data/achievements";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prem Kumar — Official Resume",
  description: "Official resume of Prem Kumar, Software Engineer & B.Tech CSE student.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] py-12 px-4 flex flex-col items-center print:bg-white print:py-0 print:px-0">
      {/* Action Bar (Hidden when printing) */}
      <div className="max-w-4xl w-full mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="text-xs font-semibold text-[var(--text-primary)] hover:text-sky-400 bg-[var(--bg-surface)] px-4 py-2 rounded-xl border border-[var(--border-color)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          ← Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <a
            href={profileData.resumeUrl}
            download="Prem_Kumar_Resume.pdf"
            className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Download PDF Resume
          </a>
        </div>
      </div>

      {/* Printable Paper Document (A4 / Letter proportions) */}
      <div className="max-w-4xl w-full bg-white text-slate-900 p-8 sm:p-12 shadow-2xl rounded-2xl print:shadow-none print:p-0 print:w-full print:max-w-none print:rounded-none font-sans leading-relaxed text-sm">
        {/* Header */}
        <header className="text-center border-b border-slate-900 pb-4 mb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{profileData.name}</h1>
          <p className="text-xs font-medium text-slate-800 mt-2 space-x-3">
            <span>{profileData.phone}</span>
            <span>•</span>
            <span>{profileData.email}</span>
            <span>•</span>
            <span>linkedin.com/in/premkumar-io</span>
            <span>•</span>
            <span>github.com/premkumar-io</span>
          </p>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
            Summary
          </h2>
          <p className="text-xs text-slate-800 leading-normal">{profileData.bio}</p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-3">
            Education
          </h2>
          {educationData.map((edu) => (
            <div key={edu.id} className="space-y-1">
              <div className="flex items-center justify-between font-bold text-xs text-slate-900">
                <span>{edu.institution}, {edu.location}</span>
                <span>{edu.startDate} – {edu.endDate}</span>
              </div>
              <p className="text-xs italic text-slate-700">{edu.degree} in {edu.fieldOfStudy}</p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-3">
            Experience
          </h2>
          <div className="space-y-4">
            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex items-center justify-between font-bold text-xs text-slate-900">
                  <span>{exp.role}{exp.company ? `, ${exp.company}` : ""}</span>
                  <span>{exp.startDate} – {exp.endDate}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-800">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="pl-1">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-3">
            Projects
          </h2>
          <div className="space-y-4">
            {projectsData.map((proj) => (
              <div key={proj.slug} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                  <span>
                    {proj.title} <span className="font-normal text-slate-700">| {proj.technologies.join(", ")}</span>
                  </span>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                      Live Link
                    </a>
                  )}
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-800">
                  {proj.keyFeatures.map((feat, i) => (
                    <li key={i} className="pl-1">{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
            Technical Skills
          </h2>
          <div className="space-y-1 text-xs text-slate-800">
            {skillsData.map((cat) => (
              <p key={cat.category}>
                <strong className="font-bold text-slate-900">{cat.category}:</strong>{" "}
                {cat.skills.map((s) => s.name).join(", ")}
              </p>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
            Achievements
          </h2>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-800">
            {achievementsData.map((ach) => (
              <li key={ach.id} className="pl-1">{ach.description}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
