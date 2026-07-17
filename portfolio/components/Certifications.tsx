"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { CERTIFICATIONS } from "@/constants/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative mx-auto max-w-6xl px-6 py-28"
    >
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials that back the work"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <GlassCard className="flex items-center justify-between gap-4 p-6" glow="violet">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-aurora-violet/30 to-aurora-cyan/30">
                  <Award size={20} className="text-aurora-cyan" />
                </div>
                <div>
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
              <a
                href={cert.url}
                data-cursor-hover
                aria-label={`View ${cert.title} certificate`}
                className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110 hover:shadow-glow-cyan"
              >
                <ExternalLink size={16} />
              </a>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
