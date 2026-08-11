import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-[var(--text-muted)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
