"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type MagneticButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  as?: "button" | "a";
  download?: boolean | string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

/** Button that gently pulls toward the cursor within its bounds ("magnetic" hover). */
export default function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className,
  download,
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-display text-sm font-medium tracking-wide transition-colors duration-300",
    variant === "primary"
      ? "bg-gradient-to-r from-aurora-violet to-aurora-cyan text-[#050816] shadow-glow-violet"
      : "glass text-[var(--text-primary)] hover:border-aurora-cyan/50",
    className
  );

  const content = (
    <motion.div
      ref={ref}
      data-cursor-hover
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className={classes}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} type="button">
      {content}
    </button>
  );
}
