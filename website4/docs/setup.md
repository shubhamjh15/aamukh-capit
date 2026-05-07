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

Copy the example env file and fill in your values:

```bash
cp ../.env.example .env.local
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
