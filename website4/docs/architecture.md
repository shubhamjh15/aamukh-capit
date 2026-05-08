# Architecture Overview

## Tech Decisions

### Next.js 13 (App Router)
Single `page.tsx` composes all section components top-to-bottom. No routing needed — this is a one-page marketing site.

### Component Architecture
Each section is fully self-contained. No shared state between sections. Easy to reorder, remove, or A/B test sections independently.

### Animation Strategy
- **Entrance animations** — Framer Motion `viewport` trigger
- **Scroll-linked** — GSAP ScrollTrigger for timeline animations
- **CSS keyframes** — `blur-reveal` in `globals.css` for text (avoids JS overhead)
- **3D** — React Three Fiber for `InteractiveDualModel`

### Styling
Tailwind CSS with a custom design token layer in `tailwind.config.ts`. All color/font values are centralized there — no magic values in components.

## Data Flow

All content is static — no API calls, no CMS. Content lives directly in component files. For future CMS integration, extract content into `constants/` and fetch at build time.

## Performance Notes

- Next.js Image for all `<img>` tags (lazy load + WebP/AVIF)
- Inter Tight and Instrument Serif loaded via `next/font` (zero layout shift)
- `blur-reveal` uses CSS `will-change: transform, opacity` for GPU compositing
