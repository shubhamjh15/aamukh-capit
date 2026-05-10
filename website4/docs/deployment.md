# Deployment Guide

## Vercel (Recommended)

1. Push your branch to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import `shubhamjh15/aamukh-capit`
4. Set **Root Directory** to `website4`
5. Add environment variables from `.env.example`
6. Deploy

## Manual Build

```bash
cd website4
npm run build
npm run start
```

## Environment Variables on Vercel

Add in Project Settings → Environment Variables:

| Key | Value |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Your production URL |
| `NEXT_PUBLIC_APP_NAME` | Aamukh Capital |
| `NEXT_PUBLIC_ENABLE_3D` | true |

## Custom Domain

1. Project → Domains in Vercel dashboard
2. Add domain and follow DNS instructions
3. SSL provisioned automatically

## Previews

Vercel creates a preview deployment for every PR automatically. Share the preview URL for design review before merging.
