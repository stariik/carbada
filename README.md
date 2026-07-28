<div align="center">

# Carbada · ქარბადა

**Georgia's premium automotive company — sales, rentals and taxi service, under one roof.**

[Live site](https://carbada.ge) · [Contact](https://carbada.ge/contact)

</div>

---

## About

Carbada is a bilingual marketing website for a Tbilisi-based automotive company. The site introduces three core services — vehicle sales, rentals, and a licensed taxi fleet — and is designed mobile-first for Georgian users arriving from social and paid channels.

The brand voice is calm and premium: deep navy gradients, soft radial glows, a single blue accent, and Noto Sans Georgian as the primary typeface. Every section is built to read cleanly on a phone first, then scale up.

## Techniques

| Layer | What's used |
|---|---|
| Framework | **Next.js 16** · App Router, React Server Components |
| Language | **TypeScript 5** |
| UI | **React 19** |
| Styling | **Tailwind CSS 3.4** · custom gradient tokens, safe-area insets |
| Typography | **next/font/google** — Noto Sans Georgian (self-hosted, zero layout shift) |
| Images | **next/image** — automatic AVIF/WebP, responsive srcset |
| SEO | Native Next.js `Metadata` + OpenGraph, Georgian locale (`ka_GE`) |
| Server | Custom Node HTTP server (`server.js`) for production hosting |
| Tooling | PostCSS · Autoprefixer · ESLint 9 (`eslint-config-next`) |

## Structure

```
src/
├─ app/
│  ├─ layout.tsx       · root layout, fonts, metadata
│  ├─ page.tsx         · hero, services, CTA
│  ├─ contact/         · contact page
│  └─ globals.css      · Tailwind layers + design tokens
└─ components/
   ├─ Navbar.tsx
   ├─ Footer.tsx
   └─ ServiceCard.tsx  · gradient card + inline SVG icons
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve build via server.js
```

## Design notes

- **Mobile-first.** Every breakpoint starts from a ~360px phone and scales up; decorative elements shrink on small screens so copy never competes with flourish.
- **Notch-aware.** `env(safe-area-inset-top)` is respected on the hero and contact pages.
- **Single accent.** One blue scale (`#1e3a8a → #3b82f6 → #93c5fd`) carries the whole identity — no stray hues.
- **Inline SVG icons.** Service cards use hand-tuned SVG instead of an icon library; smaller bundle, sharper rendering.

---

<sub>Built in Tbilisi · © Carbada</sub>
