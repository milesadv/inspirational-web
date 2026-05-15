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
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"]
      },
      maxWidth: {
        content: "1200px",
        reading: "680px",
        narrow: "520px"
      },
      letterSpacing: {
        caps: "0.14em"
      }
    }
  },
  plugins: []
};

export default config;
