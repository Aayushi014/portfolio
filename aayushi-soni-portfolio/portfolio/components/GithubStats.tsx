"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import { GITHUB_USERNAME } from "@/constants/data";

export default function GithubStats() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="GitHub"
        title="Commits, streaks, and side projects"
        description="A live look at my open-source activity."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="overflow-hidden p-6" glow="violet">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&text_color=9AA4C4&icon_color=43E6E0&title_color=F5F7FF`}
              alt="GitHub stats summary"
              className="w-full"
              loading="lazy"
            />
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard className="overflow-hidden p-6" glow="cyan">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/43E6E0/${GITHUB_USERNAME}`}
              alt="GitHub contribution graph"
              className="w-full"
              loading="lazy"
            />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
