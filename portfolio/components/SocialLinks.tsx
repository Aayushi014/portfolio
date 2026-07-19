"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { PERSONAL } from "@/constants/data";
import { cn } from "@/utils/cn";

export default function SocialLinks({ className }: { className?: string }) {
  const items = [
    { icon: Github, href: PERSONAL.socials.github, label: "GitHub" },
    { icon: Linkedin, href: PERSONAL.socials.linkedin, label: "LinkedIn" },
    { icon: Mail, href: PERSONAL.socials.email, label: "Email" },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {items.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          data-cursor-hover
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-secondary)] transition-all hover:-translate-y-1 hover:text-[var(--text-primary)] hover:shadow-glow-cyan"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
