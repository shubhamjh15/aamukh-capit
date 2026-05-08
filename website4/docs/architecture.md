# Architecture Overview

## Tech Decisions

### Next.js 13 (Pages Router compatible)
We use Next.js 13 but keep the app in `app/` directory with a single page.tsx that composes all section components top-to-bottom.

### Component Architecture
Each page section is a self-contained component. No shared state between sections — each fetches/owns its own data. This keeps sections easy to reorder or remove.

### Animation Strategy
- **Entrance animations** — Framer Motion (`initial`/`animate` with `viewport`)
- **Scroll-linked** — GSAP ScrollTrigger for complex timeline animations
- **CSS animations** — `blur-reveal` keyframe in `globals.css` for performance-critical text
- **3D** — React Three Fiber for the `InteractiveDualModel` section
