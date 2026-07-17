"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  const numericValue = parseFloat(value);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, numericValue, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl px-6 py-8 text-center"
    >
      <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {Number.isInteger(numericValue) ? Math.round(display) : display.toFixed(2)}
        {suffix}
      </div>
      <p className="mt-2 text-xs uppercase tracking-wide text-[var(--text-secondary)]">
        {label}
      </p>
    </motion.div>
  );
}
