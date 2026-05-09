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

Full-viewport using `min-h-[100svh]`. Typography: `clamp(2.6rem, 6.5vw, 7rem)`.
Entrance: `blur-reveal` CSS animation staggered per line. Background: `bg.jpeg` with white overlay and `bg-gradient-to-t` bottom fade.

## NavigationSection

Sticky with `backdrop-blur` frosted glass. CTA links to `#apply`.

## MarqueeSection

CSS `animation: marquee linear infinite`. Items duplicate for seamless loop. Pauses on hover.

## BentoGrid

Uses CSS Grid with `grid-template-areas` for the 5-card asymmetric layout. Each card is a separate component in `BentoCards/`.

## InteractiveDualModel

React Three Fiber canvas. Two panels toggle on click. Uses `@react-three/drei` for orbit controls and environment lighting.

## FlywheelModelSection

GSAP ScrollTrigger timeline. Nodes animate in sequence as user scrolls. SVG paths drawn with `stroke-dashoffset` technique.
