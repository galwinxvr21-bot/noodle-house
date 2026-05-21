"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { signatureDishes } from "@/data/dishes";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SteamEffect } from "@/components/ui/SteamEffect";

export function SignatureDishes() {
  return (
    <section id="dishes" className="bg-charcoal-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Chef's Selection"
          title="Signature Dishes"
          subtitle="Handcrafted favorites from our Pan-Asian kitchen"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {signatureDishes.map((dish, index) => (
            <ScrollReveal key={dish.id} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-charcoal transition-all duration-500 hover:border-neon/30 hover:shadow-[0_0_40px_rgba(255,107,74,0.15)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={
                      dish.objectPosition
                        ? { objectPosition: dish.objectPosition }
                        : undefined
                    }
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                  {(dish.name.includes("Ramen") ||
                    dish.name.includes("Soup")) && (
                    <SteamEffect className="top-4" />
                  )}
                  {dish.popular && (
                    <span className="absolute top-4 right-4 rounded-full bg-neon px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-charcoal">
                      Popular
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors">
                      {dish.name}
                    </h3>
                    <span className="shrink-0 font-sans text-sm font-semibold text-gold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-cream/55">
                    {dish.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ring-1 ring-inset ring-neon/20" />
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
