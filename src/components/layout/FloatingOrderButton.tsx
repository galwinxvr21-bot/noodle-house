"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export function FloatingOrderButton() {
  return (
    <motion.a
      href="tel:+918807518436"
      className="fixed bottom-24 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-neon-dark px-5 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-charcoal shadow-lg shadow-neon/30 md:bottom-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ShoppingBag size={18} />
      <span className="hidden sm:inline">Order Now</span>
      <span className="sm:hidden">Order</span>
      <motion.span
        className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
}
