"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  menuCategories,
  menuItems,
  type MenuCategory,
} from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MenuCategories() {
  const [active, setActive] = useState<MenuCategory>("soups");

  return (
    <section id="menu" className="relative bg-charcoal py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Explore"
          title="Our Menu"
          subtitle="Soups, ramen, noodles, rice, and more — crafted with care"
        />

        <ScrollReveal>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`relative rounded-full px-4 py-2 font-sans text-xs uppercase tracking-widest transition-colors md:px-5 md:text-sm ${
                  active === cat.id
                    ? "text-charcoal"
                    : "text-cream/60 hover:text-cream"
                }`}
              >
                {active === cat.id && (
                  <motion.span
                    layoutId="menu-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-gold-dark"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {menuItems[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="menu-item-glow group flex items-start justify-between gap-4 rounded-xl border border-white/5 bg-wood-dark/20 p-5 transition-all hover:border-gold/25 hover:bg-wood-dark/40"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-display text-lg text-cream group-hover:text-gold transition-colors">
                      {item.name}
                    </h4>
                    {item.tag && (
                      <span className="rounded bg-neon/20 px-2 py-0.5 font-sans text-[10px] uppercase tracking-wider text-neon">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-sans text-sm text-cream/50">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 font-sans font-semibold text-gold">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
