"use client";

import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import { PERSONAL } from "@/constants/data";
import MagneticButton from "@/components/MagneticButton";
import SocialLinks from "@/components/SocialLinks";
import TypingText from "@/components/TypingText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-8 h-36 w-36 sm:h-44 sm:w-44"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-aurora-violet via-aurora-cyan to-aurora-magenta opacity-80 blur-md animate-spin-slow" />
        <div className="absolute inset-[3px] rounded-full bg-[var(--bg-void)]" />
        <div className="absolute inset-[6px] flex items-center justify-center rounded-full bg-gradient-to-br from-base-panel to-base-deep font-display text-4xl font-bold text-gradient">
          {PERSONAL.initials}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-aurora-cyan"
      >
        Welcome to my universe
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-3xl text-center font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
      >
        Hi, I&apos;m {PERSONAL.name.split(" ")[0]} —
        <br />
        <TypingText words={PERSONAL.roles} />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.7 }}
        className="mt-6 max-w-xl text-center text-base text-[var(--text-secondary)] sm:text-lg"
      >
        {PERSONAL.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton href={PERSONAL.resumeUrl} download variant="primary">
          <Download size={16} /> Download Resume
        </MagneticButton>
        <MagneticButton href="#contact" variant="ghost">
          <Mail size={16} /> Contact Me
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="mt-10"
      >
        <SocialLinks />
      </motion.div>

      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll to About section"
        className="absolute bottom-8 flex flex-col items-center gap-2 text-[var(--text-secondary)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
