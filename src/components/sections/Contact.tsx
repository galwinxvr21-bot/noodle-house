"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
    setSubmitted(true);
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

              <div className="flex items-start gap-4 rounded-xl glass-card p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <MapPin size={22} />
                </span>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-cream/50">
                    Location
                  </p>
                  <p className="mt-2 font-sans text-cream/80">
                    Cuddalore, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/918807518436"
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
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl glass-card p-6 md:p-8"
            >
              <h3 className="font-display text-2xl text-cream">
                Table Reservation
              </h3>
              <p className="mt-1 font-sans text-sm text-cream/50">
                We&apos;ll confirm your booking shortly
              </p>

              {submitted ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 rounded-lg bg-gold/10 p-4 font-sans text-gold"
                >
                  Thank you! We&apos;ll contact you to confirm your reservation.
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
                    className="w-full rounded-full bg-gradient-to-r from-gold to-gold-dark py-4 font-sans text-sm font-semibold uppercase tracking-widest text-charcoal transition-transform hover:scale-[1.02]"
                  >
                    Request Reservation
                  </button>
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Noodle House Cuddalore on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0!2d79.7683!3d11.7480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ0JzUyLjgiTiA3OcKwNDYnMDYuMCJF!5e0!3m2!1sen!2sin!4v1"
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
