"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { EXPERIENCE, ACHIEVEMENTS } from "@/constants/data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've been putting in the work"
        description="Internships, clubs, and the milestones along the way."
      />

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-aurora-violet via-aurora-cyan to-transparent sm:left-1/2" />

        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 sm:pr-10 ${
                i % 2 === 0 ? "sm:ml-0 sm:text-right" : "sm:ml-auto sm:pl-10 sm:pr-0 sm:text-left"
              }`}
            >
              <span className="absolute left-[9px] top-1 h-3 w-3 rounded-full bg-aurora-cyan shadow-glow-cyan sm:left-auto sm:right-[-6px] sm:translate-x-1/2 sm:top-1.5" />
              <GlassCard className="p-6" glow="violet">
                <div className="mb-2 flex items-center gap-2 sm:justify-end">
                  <Briefcase size={16} className="text-aurora-violet" />
                  <span className="font-mono text-xs text-aurora-violet">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {exp.role}
                </h3>
                <p className="mb-2 text-sm text-aurora-cyan">{exp.org}</p>
                <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                  {exp.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <GlassCard className="p-8" glow="cyan">
          <h3 className="mb-4 font-display text-lg font-semibold">
            Achievements
          </h3>
          <ul className="space-y-3">
            {ACHIEVEMENTS.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-aurora-violet to-aurora-cyan" />
                {a}
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>
    </section>
  );
}
