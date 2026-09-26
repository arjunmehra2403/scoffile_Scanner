import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bloom: {
          50: "#FFF3F7",
          100: "#FFE1EC",
          200: "#FFC2DA",
          300: "#FF97BF",
          400: "#FF6FA5",
          500: "#F04785",
          600: "#DA2C6C",
          700: "#B31E58",
          800: "#7A1440",
          900: "#3A0A20",
        },
        ink: { DEFAULT: "#241019", soft: "#4A2E38" },
        cream: "#FFF8F4",
        mustard: "#F2B705",
        chili: "#E14C3B",
      },
      fontFamily: {
        display: ["var(--font-fredoka)"],
        body: ["var(--font-jakarta)"],
      },
      boxShadow: {
        pop: "0 8px 24px -8px rgba(179, 30, 88, 0.35)",
        card: "0 2px 14px rgba(58, 10, 32, 0.08)",
      },
      borderRadius: { blob: "42% 58% 65% 35% / 45% 40% 60% 55%" },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: { scanline: "scanline 2.2s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
