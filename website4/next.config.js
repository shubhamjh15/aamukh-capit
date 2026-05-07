/** @type {import('next').NextConfig} */

// Next.js configuration for Aamukh Capital website
// - Images: allow external domains for future CDN integration
// - Strict mode enabled for better React hygiene
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add external image domains here as needed
    domains: [],
    // Use modern image formats for better performance
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
