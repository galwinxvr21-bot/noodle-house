"use client";

import Image from "next/image";
import { Leaf, Sparkles, BookOpen, Lamp, Users } from "lucide-react";
import { foodImages } from "@/lib/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const highlights = [
  {
    icon: Leaf,
    title: "No artificial preservatives or colors",
  },
  {
    icon: Sparkles,
    title: "Fresh ingredients",
  },
  {
    icon: BookOpen,
    title: "Authentic recipes",
  },
  {
    icon: Lamp,
    title: "Contemporary ambiance",
  },
  {
    icon: Users,
    title: "Family-friendly atmosphere",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-charcoal py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Our Story"
          title="A Culinary Journey Across Asia"
          subtitle="Thai · Indonesian · Japanese · Burmese · Indo-Chinese · Pan-Asian"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={foodImages.about}
                alt="Noodle House Pan-Asian dishes — ramen and noodles"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl glass-card p-4">
                <p className="font-display text-2xl text-gold">Since Cuddalore&apos;s Favorite</p>
                <p className="mt-1 font-sans text-sm text-cream/60">
                  Trendy · Calm · Modern · Cozy
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <p className="font-sans text-lg leading-relaxed text-cream/75">
              Noodle House Cuddalore is one of the region&apos;s most loved Pan-Asian
              dining destinations, known for authentic flavors, fresh ingredients,
              and a contemporary dining atmosphere. Inspired by Thai, Japanese,
              Indonesian, and Indo-Chinese cuisine traditions, the restaurant
              delivers a unique culinary experience in Cuddalore.
            </p>

            <ul className="mt-10 space-y-4">
              {highlights.map((item, i) => (
                <ScrollReveal key={item.title} delay={0.1 * i}>
                  <li className="flex items-center gap-4 rounded-xl border border-white/5 bg-wood-dark/30 p-4 transition-colors hover:border-gold/20 hover:bg-wood-dark/50">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <item.icon size={20} strokeWidth={1.5} />
                    </span>
                    <span className="font-sans text-cream/90">{item.title}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
