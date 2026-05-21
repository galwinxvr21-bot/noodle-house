"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { reviews } from "@/data/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-gold">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? "currentColor" : "none"}
          className={i >= rating ? "opacity-30" : ""}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section id="reviews" className="bg-charcoal-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Guest Voices"
          title="What Our Guests Say"
          subtitle="Trusted by families, students, and food lovers across Cuddalore"
        />

        <ScrollReveal>
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <div className="text-center">
              <p className="font-display text-6xl font-light text-gold">4.5</p>
              <StarRating rating={5} />
              <p className="mt-2 font-sans text-sm text-cream/50">
                Based on 680+ Google Reviews
              </p>
            </div>
            <div className="hidden h-16 w-px bg-white/10 sm:block" />
            <div className="flex gap-8 text-center">
              <div>
                <p className="font-display text-3xl text-cream">680+</p>
                <p className="font-sans text-xs uppercase tracking-widest text-cream/50">
                  Reviews
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-cream">4.5★</p>
                <p className="font-sans text-xs uppercase tracking-widest text-cream/50">
                  Average
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="google-review-card rounded-2xl p-8 md:p-10"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark font-display text-xl text-charcoal">
                  {reviews[index].author.charAt(0)}
                </div>
                <div>
                  <p className="font-sans font-medium text-cream">
                    {reviews[index].author}
                  </p>
                  <p className="font-sans text-xs text-cream/40">
                    {reviews[index].date}
                  </p>
                </div>
                <div className="ml-auto">
                  <StarRating rating={reviews[index].rating} />
                </div>
              </div>
              <p className="font-sans text-lg leading-relaxed text-cream/80 md:text-xl">
                &ldquo;{reviews[index].text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="font-sans text-xs text-cream/40">
                  Posted on Google
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-white/10 p-3 text-cream transition-colors hover:border-gold hover:text-gold"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-gold" : "w-2 bg-cream/20"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-white/10 p-3 text-cream transition-colors hover:border-gold hover:text-gold"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Best ramen in Cuddalore!",
            "Authentic flavors and amazing ambiance.",
            "Soto Yum Soup is a must-try.",
            "Premium quality food worth every rupee.",
          ].map((quote, i) => (
            <ScrollReveal key={quote} delay={i * 0.1}>
              <blockquote className="rounded-xl border border-white/5 bg-charcoal/50 p-4 font-sans text-sm italic text-cream/70">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
