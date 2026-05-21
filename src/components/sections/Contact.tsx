"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { ClientOnly } from "@/components/ui/ClientOnly";
import {
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  RESTAURANT_ADDRESS_LINE,
  WHATSAPP_NUMBER,
} from "@/lib/site";
import { getWhatsAppReservationUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function ReservationFormSkeleton() {
  return (
    <div
      className="rounded-2xl glass-card p-6 md:p-8"
      aria-hidden
    >
      <div className="h-8 w-48 animate-pulse rounded bg-white/5" />
      <div className="mt-2 h-4 w-64 animate-pulse rounded bg-white/5" />
      <div className="mt-6 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-12 animate-pulse rounded-lg bg-white/5" />
        ))}
      </div>
    </div>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const date = String(data.get("date") ?? "");
    const guests = String(data.get("guests") ?? "");
    const specialRequests = String(data.get("message") ?? "").trim();

    const whatsappUrl = getWhatsAppReservationUrl({
      name,
      phone,
      date,
      guests,
      specialRequests,
    });

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Visit Us"
          title="Reserve & Contact"
          subtitle="We look forward to welcoming you to Noodle House Cuddalore"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <a
                href="tel:+918807518436"
                className="flex items-center gap-4 rounded-xl glass-card p-5 transition-colors hover:border-gold/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Phone size={22} />
                </span>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-cream/50">
                    Phone
                  </p>
                  <p className="font-display text-xl text-cream">
                    +91 88075 18436
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl glass-card p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Clock size={22} />
                </span>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-cream/50">
                    Operating Hours
                  </p>
                  <p className="mt-2 font-sans text-cream/80">
                    Mon–Sat: 12 PM – 10:30 PM
                  </p>
                  <p className="font-sans text-cream/80">
                    Sunday: 12 PM – 10 PM
                  </p>
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-xl glass-card p-5 transition-colors hover:border-gold/30"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <MapPin size={22} />
                </span>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-cream/50">
                    Location
                  </p>
                  <p className="mt-2 font-sans leading-relaxed text-cream/80">
                    {RESTAURANT_ADDRESS_LINE}
                  </p>
                  <p className="mt-1 font-sans text-sm text-gold">
                    Open in Google Maps →
                  </p>
                </div>
              </a>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:scale-105"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <ClientOnly fallback={<ReservationFormSkeleton />}>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="rounded-2xl glass-card p-6 md:p-8"
            >
              <h3 className="font-display text-2xl text-cream">
                Table Reservation
              </h3>
              <p className="mt-1 font-sans text-sm text-cream/50">
                Submit to send your booking details on WhatsApp
              </p>

              {submitted ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 rounded-lg bg-gold/10 p-4 font-sans text-gold"
                >
                  Opening WhatsApp… Send the message to complete your
                  reservation at +91 88075 18436.
                </motion.p>
              ) : (
                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-white/10 bg-charcoal/50 px-4 py-3 font-sans text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-white/10 bg-charcoal/50 px-4 py-3 font-sans text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full rounded-lg border border-white/10 bg-charcoal/50 px-4 py-3 font-sans text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <select
                    name="guests"
                    required
                    className="w-full rounded-lg border border-white/10 bg-charcoal/50 px-4 py-3 font-sans text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Number of Guests
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Special requests (optional)"
                    className="w-full resize-none rounded-lg border border-white/10 bg-charcoal/50 px-4 py-3 font-sans text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-dark py-4 font-sans text-sm font-semibold uppercase tracking-widest text-charcoal transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle size={18} />
                    Request Reservation via WhatsApp
                  </button>
                </div>
              )}
            </form>
            </ClientOnly>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Noodle House Cuddalore on Google Maps"
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-[1.1] invert-[0.9] hue-rotate-180"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
