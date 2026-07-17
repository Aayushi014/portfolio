"use client";

import { useEffect, useState } from "react";

export default function TypingText({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = deleting ? 45 : 90;
    const pause = 1400;

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(t);
  }, [subIndex, deleting, wordIndex, words]);

  return (
    <span className="text-gradient font-display">
      {words[wordIndex].substring(0, subIndex)}
      <span className="animate-pulse-glow border-r-2 border-aurora-cyan ml-0.5" />
    </span>
  );
}
