import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#dishes", label: "Signature Dishes" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal-dark pb-28 pt-16 md:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#" className="inline-block">
              <span className="font-display text-2xl text-cream">
                Noodle House
              </span>
              <span className="block font-sans text-xs uppercase tracking-[0.3em] text-gold">
                Cuddalore
              </span>
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/50">
              Authentic Pan-Asian Flavors in the Heart of Cuddalore
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/60 transition-colors hover:text-neon"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              Opening Hours
            </h4>
            <ul className="mt-4 space-y-2 font-sans text-sm text-cream/60">
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-gold" />
                Mon–Sat: 12 PM – 10:30 PM
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-gold" />
                Sunday: 12 PM – 10 PM
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+918807518436"
                  className="flex items-center gap-2 font-sans text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  <Phone size={14} />
                  +91 88075 18436
                </a>
              </li>
              <li className="flex items-start gap-2 font-sans text-sm text-cream/60">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
                Cuddalore, Tamil Nadu, India
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs uppercase tracking-wider text-cream/50 hover:text-neon"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs uppercase tracking-wider text-cream/50 hover:text-neon"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="font-sans text-xs text-cream/40">
            © {new Date().getFullYear()} Noodle House Cuddalore. All rights
            reserved.
          </p>
          <p className="font-sans text-xs text-cream/30">
            Thai · Indonesian · Japanese · Burmese · Indo-Chinese · Pan-Asian
          </p>
        </div>
      </div>
    </footer>
  );
}
