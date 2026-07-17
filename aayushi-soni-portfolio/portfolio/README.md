# Aayushi Soni — Developer Portfolio

A premium, futuristic developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Dark glassmorphism theme, animated aurora background, custom cursor, magnetic buttons, and scroll-triggered reveals throughout.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in [Vercel](https://vercel.com/new) — it auto-detects Next.js, no config needed (`vercel.json` is included for clarity).
3. Deploy. That's it.

## Project structure

```
app/                  App Router entry points
  layout.tsx          Root layout: fonts, metadata, global chrome
  page.tsx            Composes all sections
  globals.css         Design tokens, glass utilities, animations
  sitemap.ts          Dynamic sitemap.xml
  robots.ts           robots.txt
  loading.tsx         Route-level loading animation

components/           All UI, one component per file
  AuroraBackground.tsx    Animated mesh-gradient + floating orbs
  CustomCursor.tsx        Dot + spring-trailing ring cursor
  Navbar.tsx / ThemeToggle.tsx
  Hero.tsx / TypingText.tsx / SocialLinks.tsx
  About.tsx / StatCard.tsx
  Skills.tsx / SkillBar.tsx
  Projects.tsx / ProjectCard.tsx
  GithubStats.tsx         Live contribution graph + stats card
  ExperienceTimeline.tsx
  Certifications.tsx
  Contact.tsx
  Footer.tsx
  GlassCard.tsx / MagneticButton.tsx / SectionHeading.tsx  Shared primitives

hooks/                 useMousePosition, useScrollProgress, useTheme
utils/                 cn() class merge helper
constants/data.ts       All copy & content (sourced from the resume) — edit this file to update site content
public/                 Favicon, OG image, resume PDF, project SVG covers
```

## Editing content

Everything text-based — name, roles, stats, education, experience, projects, skills, certifications, socials — lives in **`constants/data.ts`**. Update that one file and the whole site updates.

The downloadable resume lives at `public/resume/Aayushi_Soni_Resume.pdf` — swap in a new PDF with the same filename (or update `PERSONAL.resumeUrl` in `constants/data.ts`).

## Notes

- The contact form is client-side only (simulated submit). Wire it to a real endpoint (e.g. a Next.js Route Handler, Resend, or Formspree) by replacing the `setTimeout` logic in `components/Contact.tsx`.
- `components/GithubStats.tsx` points at the `aayushisoni514` GitHub username via public, unauthenticated image APIs (github-readme-stats, ghchart) — update `GITHUB_USERNAME` in `constants/data.ts` if the handle changes.
- Reduced-motion users automatically get animations shortened to near-zero via a global `prefers-reduced-motion` rule in `globals.css`.
- Dark/light theme is toggled via a `light` class on `<html>` and persisted to `localStorage`.
