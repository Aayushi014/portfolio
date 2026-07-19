"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import SocialLinks from "@/components/SocialLinks";
import { PERSONAL } from "@/constants/data";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // No backend wired up yet — replace with your API route or form service.
    window.setTimeout(() => {
      setStatus("sent");
      window.setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", message: "" });
      }, 2400);
    }, 1100);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something with your data"
        description="Have a role, a project, or just want to talk dashboards? My inbox is open."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <GlassCard className="flex h-full flex-col justify-between p-8" glow="violet">
            <div>
              <h3 className="font-display text-lg font-semibold">
                Find me elsewhere
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {PERSONAL.email}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <MapPin size={14} /> {PERSONAL.location}
              </p>
            </div>
            <SocialLinks className="mt-8" />
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <GlassCard className="p-8" glow="cyan">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-aurora-cyan/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-aurora-cyan/60"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-aurora-cyan/60"
                  placeholder="Tell me a bit about what you're building..."
                />
              </div>

              <motion.button
                data-cursor-hover
                type="submit"
                disabled={status !== "idle"}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aurora-violet to-aurora-cyan px-6 py-3 font-display text-sm font-medium text-[#050816] shadow-glow-violet disabled:opacity-80"
              >
                {status === "idle" && (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
                {status === "sending" && "Sending..."}
                {status === "sent" && (
                  <>
                    <CheckCircle2 size={16} /> Message sent
                  </>
                )}
              </motion.button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
