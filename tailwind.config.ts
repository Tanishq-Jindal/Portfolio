import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080a0f",
        surface: {
          50: "#182234",
          100: "#131b2a",
          200: "#0f1622",
          DEFAULT: "#0b1019",
          card: "rgba(15, 22, 36, 0.7)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(99, 102, 241, 0.2)",
        },
        accent: {
          indigo: "#6366f1",
          cyan: "#0ea5e9",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-highlight":
          "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(99, 102, 241, 0.15)",
        "glow-cyan": "0 0 30px -5px rgba(14, 165, 233, 0.15)",
        card: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};

export default config;
