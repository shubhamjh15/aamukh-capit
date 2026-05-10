# Setup Guide

## System Requirements

- Node.js >= 18.0.0
- npm >= 9.0.0

## Installation

```bash
git clone https://github.com/shubhamjh15/aamukh-capit.git
cd aamukh-capit/website4
npm install
```

## Development Scripts

```bash
npm run dev       # dev server on :3000 (HMR enabled)
npm run build     # production build to .next/
npm run start     # serve .next/ on :3000
npm run lint      # eslint check
```

## Environment Setup

```bash
cp ../.env.example .env.local
# Fill in NEXT_PUBLIC_APP_URL at minimum
```

## Troubleshooting

**Port in use:**
```bash
npx kill-port 3000 && npm run dev
```

**Type errors after install:**
```bash
rm -rf .next && npm run build
```

**Three.js peer warnings:** Safe to ignore — versions are pinned.

**Framer Motion hydration warning:** Expected in dev with `reactStrictMode: true`. Not present in production build.

## Dev Workflow

1. Branch: `git checkout -b feat/section-name`
2. Dev: `npm run dev`
3. Lint: `npm run lint`
4. PR against `master`
