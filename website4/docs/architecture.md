# Architecture Overview

## Tech Decisions

### Next.js 13 (App Router)
Single `page.tsx` composes all section components. No routing — one-page marketing site.

### Component Architecture
Self-contained sections. No shared state. Easy to reorder or A/B test independently.

### Animation Strategy
- **Entrance** — Framer Motion `viewport` trigger
- **Scroll-linked** — GSAP ScrollTrigger timelines
- **CSS keyframes** — `blur-reveal` in `globals.css` (GPU composited, avoids JS)
- **3D** — React Three Fiber for `InteractiveDualModel`

### Styling
Tailwind CSS with design tokens in `tailwind.config.ts`. No magic values in components.

## Data Flow

All content is static — no API calls, no CMS. For CMS integration: extract content to `constants/`, fetch at build time with `generateStaticParams`.

## Performance Notes

- `next/image` for all images (WebP/AVIF, lazy load, prevents CLS)
- `next/font` for Inter Tight + Instrument Serif (zero layout shift)
- `blur-reveal` uses `will-change: transform, opacity` for GPU layer
- Three.js canvas deferred until visible with `IntersectionObserver`

## Bundle Considerations

Three.js is the largest dependency (~600KB gzipped). It's only used in `InteractiveDualModel` — consider dynamic import with `next/dynamic` and `ssr: false` if initial load performance becomes a concern.
