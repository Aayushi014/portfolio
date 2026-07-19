"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-aurora-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--text-secondary)]">{description}</p>
      )}
    </motion.div>
  );
}
