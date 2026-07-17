"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import SkillBar from "@/components/SkillBar";
import { SKILLS } from "@/constants/data";
import { cn } from "@/utils/cn";

export default function Skills() {
  const [active, setActive] = useState(SKILLS[0].name);
  const activeCategory = SKILLS.find((c) => c.name === active) ?? SKILLS[0];

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit behind the dashboards"
        description="From wrangling data to visualizing it, here's what I reach for."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {SKILLS.map((cat) => (
          <button
            key={cat.name}
            data-cursor-hover
            onClick={() => setActive(cat.name)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              active === cat.name
                ? "bg-gradient-to-r from-aurora-violet to-aurora-cyan text-[#050816] shadow-glow-cyan"
                : "glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <GlassCard className="p-8" glow="violet">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="space-y-5"
            >
              {activeCategory.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </motion.div>
          </AnimatePresence>
        </GlassCard>

        <div className="flex flex-wrap content-start gap-3">
          {SKILLS.flatMap((cat) => cat.skills).map((skill, i) => (
            <motion.span
              key={skill.name}
              data-cursor-hover
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -6, scale: 1.06 }}
              className="glass animate-float cursor-default rounded-full px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:shadow-glow-cyan"
              style={{ animationDelay: `${(i % 6) * 0.4}s` }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
