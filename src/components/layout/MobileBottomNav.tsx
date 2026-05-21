"use client";

import { Home, UtensilsCrossed, Star, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const items = [
  { href: "#", icon: Home, label: "Home" },
  { href: "#menu", icon: UtensilsCrossed, label: "Menu" },
  { href: "#reviews", icon: Star, label: "Reviews" },
  { href: "tel:+918807518436", icon: Phone, label: "Call" },
  { href: "#contact", icon: MapPin, label: "Visit" },
];

export function MobileBottomNav() {
  return (
    <nav className="glass-nav fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 md:hidden">
      <ul className="flex items-center justify-around py-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="flex flex-col items-center gap-0.5 px-3 py-2 text-cream/60 transition-colors hover:text-neon"
            >
              <item.icon size={20} strokeWidth={1.5} />
              <span className="font-sans text-[10px] uppercase tracking-wider">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
