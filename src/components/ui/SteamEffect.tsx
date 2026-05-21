"use client";

import { motion } from "framer-motion";

export function SteamEffect({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-3 ${className}`}
      aria-hidden
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-16 w-3 rounded-full bg-gradient-to-t from-white/0 via-white/25 to-white/50 blur-md"
          initial={{ opacity: 0, y: 20, scaleY: 0.5 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [-10, -50, -80],
            scaleY: [0.5, 1.2, 0.8],
            scaleX: [1, 1.3, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
