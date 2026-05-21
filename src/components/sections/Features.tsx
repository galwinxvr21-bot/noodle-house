"use client";

import { features } from "@/data/features";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Features() {
  return (
    <section id="features" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Amenities"
          title="Dine Your Way"
          subtitle="Everything you need for a comfortable visit"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.05}>
              <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-wood-dark/20 p-6 transition-all duration-300 hover:border-gold/30 hover:bg-wood-dark/40 hover:shadow-lg hover:shadow-gold/5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-neon/10 text-gold transition-transform group-hover:scale-110">
                  <feature.icon size={24} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-cream/50">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
