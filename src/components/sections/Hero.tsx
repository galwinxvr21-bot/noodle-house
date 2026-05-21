"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Star } from "lucide-react";
import { HERO_IMAGE } from "@/lib/images";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Noodle House Pan-Asian spread — ramen, wok noodles, prawns, and dim sum"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0d0d0d_75%)]" />
      </motion.div>

      <div className="absolute inset-0 bg-wood-texture opacity-20 mix-blend-overlay" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal/40 px-4 py-2 backdrop-blur-md"
        >
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < 4 ? "currentColor" : "none"}
                className={i === 4 ? "opacity-50" : ""}
              />
            ))}
          </div>
          <span className="font-sans text-xs text-cream/80">
            4.5★ · 680+ Google Reviews
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="mb-4 font-sans text-xs uppercase tracking-[0.4em] text-neon"
        >
          Authentic Pan-Asian Flavors in the Heart of Cuddalore
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="font-display text-5xl font-light leading-tight tracking-tight text-cream md:text-7xl lg:text-8xl"
        >
          <span className="block text-3xl font-normal text-gold/90 md:text-4xl">
            Noodle House
          </span>
          Experience Authentic
          <br />
          <span className="bg-gradient-to-r from-cream via-gold to-cream bg-clip-text text-transparent">
            Pan-Asian Cuisine
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-cream/70 md:text-xl"
        >
          From sizzling wok noodles to rich ramen bowls and Southeast Asian
          specialties.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#menu"
            className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gold to-gold-dark px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-charcoal transition-transform hover:scale-105 sm:w-auto"
          >
            <span className="relative z-10">View Menu</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-full duration-500" />
          </Link>
          <Link
            href="#contact"
            className="w-full rounded-full border border-cream/30 bg-cream/5 px-8 py-4 font-sans text-sm uppercase tracking-widest text-cream backdrop-blur-sm transition-all hover:border-neon hover:text-neon sm:w-auto"
          >
            Reserve Table
          </Link>
          <a
            href="tel:+918807518436"
            className="w-full rounded-full border border-neon/50 bg-neon/10 px-8 py-4 font-sans text-sm uppercase tracking-widest text-neon transition-all hover:bg-neon/20 sm:w-auto"
          >
            Order Online
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/30 p-2"
        >
          <motion.div className="h-2 w-1 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
