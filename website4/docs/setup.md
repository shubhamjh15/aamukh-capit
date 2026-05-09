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

## Development

```bash
npm run dev       # start dev server on :3000
npm run build     # production build
npm run start     # serve production build
npm run lint      # run eslint
```

## Environment Setup

```bash
cp ../.env.example .env.local
# edit .env.local with your values
```

## Troubleshooting

**Port already in use**
```bash
npx kill-port 3000
npm run dev
```

**Type errors after install**
```bash
rm -rf .next
npm run build
```

**Three.js peer dependency warnings**
These are safe to ignore — `@react-three/fiber` and `@react-three/drei` are pinned to compatible versions.

## Dev Workflow

1. Create a branch: `git checkout -b feat/section-name`
2. Make changes, run `npm run dev` to preview
3. Run `npm run lint` before committing
4. Open a PR against `master`
