"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-2">
              <span className="font-display text-3xl font-light tracking-widest text-cream md:text-4xl">
                NOODLE
              </span>
              <span className="font-display text-3xl font-light text-gold md:text-4xl">
                HOUSE
              </span>
            </div>
            <p className="font-sans text-xs uppercase tracking-[0.4em] text-cream/50">
              Cuddalore
            </p>
          </motion.div>

          <motion.div
            className="mt-12 h-0.5 w-48 overflow-hidden rounded-full bg-wood/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gold via-neon to-gold"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.p
            className="mt-6 font-sans text-sm text-cream/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Preparing your experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
