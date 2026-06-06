# Anurag Ranjan — Portfolio (v2)

Production-style portfolio: **Next.js 15**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, **Lottie**, **React Three Fiber**, **React Icons**.

## Setup

```bash
npm install
npm run dev
```

Add your PDF: copy resume to **`public/resume.pdf`** for the download button.

## Deploy (Vercel)

Import repo → Framework: **Next.js** → Build: `npm run build`.

If deploy fails with *"No Output Directory named dist"*, your project still has the old Vite setting. In Vercel → **Project Settings → Build & Development Settings**, set Framework Preset to **Next.js** and clear **Output Directory** (leave blank). The repo `vercel.json` also pins the Next.js framework.

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
  app/            # Next.js App Router (layout, page, globals.css)
  components/     # sections + ui primitives + Portfolio shell
  context/        # ThemeProvider
  data/resume.ts  # single source of content
  hooks/          # active section, typing effect
  lib/motion.ts   # shared Framer variants
```

## Features

- Fixed dark theme (class applied in root layout)
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
