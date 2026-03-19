import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#fdf6f0",
          100: "#f7e6d4",
          200: "#edcba8",
          300: "#D2B48C",
          400: "#b8895a",
          500: "#A0522D",
          600: "#8B5E3C",
          700: "#5C3D2E",
          800: "#3d2619",
          900: "#2a1a10",
        },
        dark: {
          DEFAULT: "#2D2D2D",
          light: "#333333",
          muted: "#4a4a4a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "card": "0 4px 24px rgba(92, 61, 46, 0.10)",
        "card-hover": "0 8px 40px rgba(92, 61, 46, 0.22)",
        "nav": "0 2px 20px rgba(0,0,0,0.18)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #2D2D2D 0%, #5C3D2E 50%, #2D2D2D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
