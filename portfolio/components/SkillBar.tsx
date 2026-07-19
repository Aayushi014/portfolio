"use client";

import { motion } from "framer-motion";

export default function SkillBar({
  name,
  level,
}: {
  name: string;
  level: number;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span>{name}</span>
        <span className="font-mono text-xs text-aurora-cyan">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-aurora-violet to-aurora-cyan"
        />
      </div>
    </div>
  );
}
