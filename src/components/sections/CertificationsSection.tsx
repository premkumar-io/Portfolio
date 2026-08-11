import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificationsData } from "@/data/certifications";
import { Award, Calendar } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeading
        badge="Credentials"
        title="Certifications & Specializations"
        subtitle="Verified professional programs and skill accreditations."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="glass-panel p-6 rounded-3xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium text-[var(--text-muted)] flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-blue-500" />
                  {cert.issueDate}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-base leading-snug">{cert.name}</h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-1">{cert.issuer}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)]">
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-primary)] text-[11px] font-medium border border-[var(--border-color)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
