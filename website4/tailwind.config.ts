import type { Config } from "tailwindcss";

// Aamukh Capital — Tailwind CSS configuration
//
// Brand palette:
//   #4C6BE8  electric blue  → brand CTA, links, accents
//   #0A1128  deep navy      → primary text and dark buttons
//   #152873  dark blue      → button hover state
//   white                  → backgrounds, card surfaces
//
// Typography (via next/font in layout.tsx):
//   Inter Tight → var(--font-inter-tight)        [font-sans]
//   Instrument Serif → var(--font-instrument-serif) [font-serif / editorial-italic]
//
// Animations (in globals.css):
//   .blur-reveal  entrance: opacity + blur + translateY
//   .marquee      infinite horizontal scroll

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
    },
  },
  plugins: [],
};

export default config;
