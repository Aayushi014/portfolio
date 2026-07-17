"use client";

import { motion } from "framer-motion";

/**
 * Fixed, full-viewport backdrop: base color, grid, mesh-gradient aurora,
 * and a handful of slow-floating glow orbs. Purely decorative — sits
 * behind all content with pointer-events disabled.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg-void)]"
    >
      <div className="absolute inset-0 bg-aurora-radial" />
      <div className="absolute inset-0 bg-grid opacity-60" />

      <motion.div
        className="absolute -left-32 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-aurora-violet/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-aurora-cyan/20 blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[30%] h-[34rem] w-[34rem] rounded-full bg-aurora-magenta/15 blur-[130px]"
        animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* faint floating particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/30 animate-float"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 6) * 0.8}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-void)]" />
    </div>
  );
}
