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

- Animated hero with blur-reveal text effects
- Interactive 3D dual model visualization
- Bento grid portfolio showcase
- Marquee ticker with portfolio companies
- Flywheel model with scroll animations
- Fully responsive across all screen sizes

## Prerequisites

- Node.js 18+
- npm 9+

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
├── components/       # Page section components
│   └── BentoCards/   # Bento grid cards
├── constants/        # Static data
├── docs/             # Project documentation
└── public/           # Static assets
```

## Documentation

- [Setup Guide](docs/setup.md)
- [Component Reference](docs/components.md)
- [Architecture](docs/architecture.md)
- [Deployment](docs/deployment.md)

## Performance

- Next.js Image (WebP/AVIF, lazy load)
- Fonts via `next/font` (zero layout shift)
- GPU-composited CSS animations
- Tree-shaken bundles via Next.js

## Roadmap

- [ ] CMS integration for portfolio content
- [ ] Application form backend
- [ ] Blog / thesis section
- [ ] Dark mode support
- [ ] i18n (Hindi language support)

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md).

## Deployment

Deploy on [Vercel](https://vercel.com/new) — set root directory to `website4`.

## License

MIT
