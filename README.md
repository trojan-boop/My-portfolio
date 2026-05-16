# Anurag Ranjan — Portfolio (v2)

Production-style portfolio: **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, **Lottie**, **React Three Fiber**, **React Icons**.

## Setup

```bash
npm install
npm run dev
```

Add your PDF: copy resume to **`public/resume.pdf`** for the download button.

## Deploy (Vercel)

Import repo → Framework: **Vite** → Build: `npm run build` → Output: `dist`.

## Design tokens

| Token | Dark | Light |
|-------|------|-------|
| Background | `#06080c` | slate-50 |
| Accent | cyan-400 / `#22d3ee` | cyan-600 |
| Surface | slate-900/50 glass | white/70 |

**Fonts:** Plus Jakarta Sans (UI), Instrument Serif (headings), DM Sans (fallback).

## Free Lottie suggestions (swap URLs in `src/data/resume.ts`)

| Use | Search on LottieFiles |
|-----|------------------------|
| Hero / coding | "developer coding", "programmer workspace" |
| Loading | "loading spinner", "preloader" |
| AI assistant | "artificial intelligence", "chatbot" |

Current URLs are in `LOTTIE` in `src/data/resume.ts`.

## Project structure

```
src/
  components/     # sections + ui primitives
  context/        # ThemeProvider
  data/resume.ts  # single source of content
  hooks/          # active section, typing effect
  lib/motion.ts   # shared Framer variants
```

## Features

- Dark / light theme toggle
- Typing roles in hero
- Lottie hero + loader + AI project accent
- Scroll progress + active nav section
- Recruiter metrics + achievements
- Skill bento + proficiency bars
- Experience timeline
- Project cards (demo/GitHub placeholders for NDA work)
- Download resume
- Lazy-loaded 3D background
- Reduced motion + “Lite FX” mode
