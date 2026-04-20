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
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        dark: {
          DEFAULT: "#1e293b",
          light: "#334155",
          muted: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "card": "0 4px 24px rgba(29, 78, 216, 0.08)",
        "card-hover": "0 8px 40px rgba(29, 78, 216, 0.18)",
        "nav": "0 2px 20px rgba(0,0,0,0.12)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #1e3a8a 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
