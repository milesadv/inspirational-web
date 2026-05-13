import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A1A",
        parchment: "#F6F1E7",
        gold: "#B8893B",
        forest: "#2E4034",
        sky: "#C9D6DA",
        highlight: "#E9C46A"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      maxWidth: {
        content: "1200px",
        reading: "680px"
      },
      boxShadow: {
        soft: "0 22px 60px rgba(26, 26, 26, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
