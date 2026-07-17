"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: "violet" | "cyan" | "none";
};

export default function GlassCard({
  children,
  className,
  tilt = false,
  glow = "none",
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(900px) rotateX(${py * -8}deg) rotateY(${px * 10}deg) scale3d(1.02,1.02,1.02)`
    );
  };

  const reset = () => setTransform("perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ transform, transition: "transform 0.4s ease" }}
      className={cn(
        "glass rounded-3xl shadow-glass",
        glow === "violet" && "hover:shadow-glow-violet",
        glow === "cyan" && "hover:shadow-glow-cyan",
        "transition-shadow duration-500",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
