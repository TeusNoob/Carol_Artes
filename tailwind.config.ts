
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF78A9", // Soft pink
          dark: "#FF4785",
          foreground: "#FFFFFF"
        },
        secondary: {
          DEFAULT: "#FFB5D8", // Light pink
          foreground: "#FFFFFF"
        },
        pastel: {
          pink: "#FFE5F0",
          purple: "#F0E5FF",
          blue: "#E5F0FF",
          yellow: "#FFF5E5"
        },
        accent: "#FFE0EB",
        light: "#FFF5F9",
        dark: "#4A4A4A",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "paper-float": {
          "0%": { transform: "rotate(0deg) translateY(0)" },
          "25%": { transform: "rotate(2deg) translateY(-5px)" },
          "75%": { transform: "rotate(-2deg) translateY(5px)" },
          "100%": { transform: "rotate(0deg) translateY(0)" }
        },
        "sparkle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        }
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "paper-float": "paper-float 5s ease-in-out infinite",
        "sparkle": "sparkle 2s ease-in-out infinite"
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
