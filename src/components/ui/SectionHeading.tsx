"use client";

import { ScrollReveal } from "./ScrollReveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-[0.35em] text-neon">
        {label}
      </span>
      <h2 className="font-display text-4xl font-light tracking-tight text-cream md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl font-sans text-base leading-relaxed text-cream/60 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </ScrollReveal>
  );
}
