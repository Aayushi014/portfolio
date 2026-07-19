"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import GlassCard from "@/components/GlassCard";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo?: string;
  highlights: string[];
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <GlassCard tilt glow="cyan" className="group overflow-hidden">
        <div className="relative aspect-[8/5] overflow-hidden">
            <Image
              src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                aria-label={`${project.title} GitHub repository`}
                className="glass-strong flex h-10 w-10 items-center justify-center rounded-full"
              >
                <Github size={16} />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  aria-label={`${project.title} live demo`}
                  className="glass-strong flex h-10 w-10 items-center justify-center rounded-full"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="p-7">
          <h3 className="font-display text-xl font-semibold">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            {project.description}
          </p>
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
              >
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-aurora-cyan" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-aurora-cyan"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
