/** @type {import('next').NextConfig} */

// Next.js configuration for Aamukh Capital
// - reactStrictMode: catches side-effects and deprecated APIs in dev
// - images.formats: serve WebP/AVIF for smaller file sizes
// - images.domains: extend when integrating external CDN or CMS
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
    // Disable image optimization for static export:
    // unoptimized: true,
  },
  // Uncomment for static HTML export (e.g. Vercel static):
  // output: 'export',
};

module.exports = nextConfig;
