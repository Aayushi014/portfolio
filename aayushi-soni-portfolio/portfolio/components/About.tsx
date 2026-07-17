"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import StatCard from "@/components/StatCard";
import { PERSONAL, EDUCATION, EXPERIENCE, STATS } from "@/constants/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="About Me"
        title="From raw data to real decisions"
        description="A quick look at who I am, where I've studied, and where I've worked."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <GlassCard className="h-full p-8" glow="violet">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {PERSONAL.about}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Python", "SQL", "Power BI", "Pandas", "Data Storytelling"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <GlassCard className="h-full p-8" glow="cyan">
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap size={18} className="text-aurora-cyan" />
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            <div className="space-y-5">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.school}
                  className="border-l border-white/10 pl-4"
                >
                  <p className="font-medium">{edu.school}</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-xs font-mono text-aurora-cyan">
                    {edu.period} · {edu.location} · {edu.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-2 mt-8 flex items-center gap-2">
              <Briefcase size={18} className="text-aurora-violet" />
              <h3 className="font-display text-lg font-semibold">
                Experience
              </h3>
            </div>
            <div className="space-y-5">
              {EXPERIENCE.map((exp) => (
                <div key={exp.role} className="border-l border-white/10 pl-4">
                  <p className="font-medium">
                    {exp.role} · {exp.org}
                  </p>
                  <p className="mt-1 text-xs font-mono text-aurora-violet">
                    {exp.period}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[var(--text-secondary)]">
                    {exp.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
