# Aamukh Capital

> The 1% Angel Collective — conviction-driven capital for India's next generation of global founders.

Built in Bharat, for the world.

## Tech Stack

- **Framework** — Next.js 13 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Animations** — Framer Motion, GSAP
- **3D** — Three.js, React Three Fiber
- **UI** — Radix UI, Lucide Icons

## Features

- Animated hero section with blur-reveal text effects
- Interactive dual model visualization
- Bento grid portfolio showcase
- Marquee ticker with portfolio companies
- Flywheel model section with scroll animations
- Fully responsive across all screen sizes
- Optimized images via Next.js Image component

## Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+

## Getting Started

```bash
git clone https://github.com/shubhamjh15/aamukh-capit.git
cd aamukh-capit/website4
npm install
cp ../.env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Base URL of the app | Yes |
| `NEXT_PUBLIC_APP_NAME` | Display name | No |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | No |

## Project Structure

```
website4/
├── app/              # Next.js app router
│   ├── globals.css   # Global styles & animations
│   ├── layout.tsx    # Root layout with fonts
│   └── page.tsx      # Home page composition
├── components/       # React components
│   └── BentoCards/   # Bento grid card variants
├── constants/        # Static data & media refs
└── public/           # Static assets
```
