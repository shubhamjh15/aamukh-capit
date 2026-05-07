import type { Config } from "tailwindcss";

// Aamukh Capital — Tailwind CSS configuration
// Primary brand color: #4C6BE8 (electric blue)
// Background: white with subtle gradients
// Typography: Inter Tight (sans) + Instrument Serif (editorial)

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
        // Brand colors
        brand: "#4C6BE8",
        "brand-dark": "#152873",
        // Semantic text colors
        "text-primary": "#0A1128",
        "text-secondary": "#4A5568",
        "text-muted": "#9CA3AF",
        // Border
        border: "#E5E7EB",
      },
    },
  },
  plugins: [],
};

export default config;
