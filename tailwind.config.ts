import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0F0F11",
        surfaceHover: "#18181B",
        cardBorder: "#27272A",
        keyframeCyan: "#00F0FF",
        recordRed: "#FF3B30",
        gradingAmber: "#F59E0B",
        accentViolet: "#8B5CF6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "keyframe-spin": "keyframeSpin 8s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)" },
          "50%": { opacity: "0.5", boxShadow: "0 0 5px rgba(0, 240, 255, 0.1)" },
        },
        keyframeSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
