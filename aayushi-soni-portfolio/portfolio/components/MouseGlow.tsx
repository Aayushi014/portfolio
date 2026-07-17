"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

/** Soft radial glow that follows the cursor, hidden on touch devices. */
export default function MouseGlow() {
  const { x, y } = useMousePosition();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!window.matchMedia("(hover: none)").matches);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[5] transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(124,108,255,0.12), transparent 70%)`,
      }}
    />
  );
}
