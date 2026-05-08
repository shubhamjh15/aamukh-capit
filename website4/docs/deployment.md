# Deployment Guide

## Vercel (Recommended)

1. Push your branch to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import `shubhamjh15/aamukh-capit`
4. Set **Root Directory** to `website4`
5. Add environment variables from `.env.example`
6. Click Deploy

Vercel auto-detects Next.js and configures build settings.

## Manual Build

```bash
cd website4
npm run build
npm run start
```
