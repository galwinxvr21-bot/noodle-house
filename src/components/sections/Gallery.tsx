"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Visual Feast"
          title="Gallery"
          subtitle="Food, ambiance, and the art of Pan-Asian dining"
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, index) => (
            <ScrollReveal key={img.id} delay={index * 0.06}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl ${
                  img.span === "tall"
                    ? "aspect-[3/4]"
                    : img.span === "wide"
                      ? "aspect-[16/9]"
                      : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={
                    img.objectPosition
                      ? { objectPosition: img.objectPosition }
                      : undefined
                  }
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/30" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="font-sans text-sm text-cream">{img.alt}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
