import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          void: "#050816",
          deep: "#0B1120",
          panel: "#111827",
        },
        aurora: {
          violet: "#7C6CFF",
          cyan: "#43E6E0",
          magenta: "#FF6CB6",
          amber: "#FFB454",
        },
        glass: {
          border: "rgba(255,255,255,0.08)",
          fill: "rgba(255,255,255,0.04)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-radial":
          "radial-gradient(60% 50% at 20% 20%, rgba(124,108,255,0.35) 0%, rgba(124,108,255,0) 60%), radial-gradient(50% 40% at 80% 15%, rgba(67,230,224,0.25) 0%, rgba(67,230,224,0) 60%), radial-gradient(55% 45% at 50% 90%, rgba(255,108,182,0.2) 0%, rgba(255,108,182,0) 60%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.45)",
        "glow-violet": "0 0 40px rgba(124,108,255,0.35)",
        "glow-cyan": "0 0 40px rgba(67,230,224,0.3)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-24px) translateX(12px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
