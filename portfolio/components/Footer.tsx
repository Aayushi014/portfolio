"use client";

import { ArrowUp } from "lucide-react";
import { PERSONAL } from "@/constants/data";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative px-6 pb-8 pt-4">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl px-8 py-8 sm:flex-row">
        <p className="text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} {PERSONAL.name}. Built with Next.js &amp; a lot of coffee.
        </p>

        <SocialLinks />

        <button
          data-cursor-hover
          onClick={scrollTop}
          aria-label="Back to top"
          className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:-translate-y-1 hover:shadow-glow-cyan"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
