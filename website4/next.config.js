/** @type {import('next').NextConfig} */

// Aamukh Capital — Next.js configuration
//
// reactStrictMode: surfaces side-effects and deprecated patterns in dev
// images.formats: prefer AVIF then WebP for best compression
// images.domains: extend when adding external CDN or Contentful/Sanity
//
// For full static export (GitHub Pages, S3):
//   output: 'export'
//   images: { unoptimized: true }

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
