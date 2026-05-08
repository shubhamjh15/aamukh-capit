import type { Config } from "tailwindcss";

// Aamukh Capital — Tailwind CSS configuration
// Brand: #4C6BE8 electric blue, #0A1128 deep navy
// Fonts: Inter Tight (sans), Instrument Serif (editorial)
// Animations: blur-reveal (globals.css), tw-animate-css plugin

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter-tight)", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"],
      },
      colors: {
        brand: "#4C6BE8",
        "brand-dark": "#152873",
        "text-primary": "#0A1128",
        "text-secondary": "#4A5568",
        "text-muted": "#9CA3AF",
        border: "#E5E7EB",
      },
      // Responsive breakpoints follow Tailwind defaults:
      // sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
    },
  },
  plugins: [],
};

export default config;
