# Component Reference

All components live in `website4/components/`.

## Page Sections (render order)

| Component | Description |
|---|---|
| `NavigationSection` | Sticky top nav with logo and CTA |
| `HeroSection` | Full-viewport hero with animated heading |
| `MarqueeSection` | Auto-scrolling portfolio ticker |
| `BentoGrid` | 5-card bento layout |
| `InteractiveDualModel` | 3D dual-panel interactive model |
| `MarketVisionSection` | Market opportunity with data viz |
| `ValuePropositionSection` | Three-column value props |
| `CorePhilosophySection` | Investment philosophy |
| `FlywheelModelSection` | Animated flywheel diagram |
| `InvestmentProgramsSection` | Program tiers |
| `FundStructureSection` | Fund structure |
| `PipelineShowcaseSection` | Deal pipeline |
| `TeamExpertiseSection` | Team profiles |
| `CallToActionSection` | Apply CTA |
| `FooterSection` | Footer with links |

## HeroSection

Full-viewport section using `min-h-[100svh]` (small viewport height unit for mobile).

Typography uses `clamp(2.6rem, 6.5vw, 7rem)` — scales smoothly from mobile to 4K.

Entrance: `blur-reveal` CSS animation with staggered `animation-delay` per line.

## NavigationSection

Sticky navigation with `position: sticky; top: 0`. Uses `backdrop-blur` for the frosted glass effect. CTA button links to `#apply`.

## MarqueeSection

CSS marquee using `animation: marquee linear infinite`. Items duplicate to create seamless loop. Pauses on hover via `animation-play-state: paused`.
