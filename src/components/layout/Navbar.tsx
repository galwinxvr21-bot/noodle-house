"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#dishes", label: "Dishes" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav border-b border-white/5 py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="#" className="group flex flex-col">
            <span className="font-display text-xl font-light tracking-wider text-cream transition-colors group-hover:text-gold md:text-2xl">
              Noodle House
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/50">
              Cuddalore
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm uppercase tracking-widest text-cream/70 transition-colors hover:text-neon"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="#contact"
              className="rounded-full border border-gold/40 px-5 py-2 font-sans text-xs uppercase tracking-widest text-gold transition-all hover:border-gold hover:bg-gold/10"
            >
              Reserve
            </Link>
            <a
              href="tel:+918807518436"
              className="rounded-full bg-gradient-to-r from-gold to-gold-dark px-5 py-2 font-sans text-xs font-semibold uppercase tracking-widest text-charcoal transition-transform hover:scale-105"
            >
              Order
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-cream lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-nav border-t border-white/5 lg:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block font-sans text-sm uppercase tracking-widest text-cream/80"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
