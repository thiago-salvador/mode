import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        background: "#FFFFFF",
        backgroundAlt: "#F9F6F8",
        backgroundMuted: "#F3F0F4",
        foreground: "hsl(var(--foreground))",
        surface: "rgba(255, 255, 255, 0.65)",
        borderSubtle: "#E5E4EA",
        borderSoft: "#DDD9E3",
        textPrimary: "#0B1020",
        textSecondary: "#4B5563",
        textMuted: "#6B7280",
        textOnDark: "#FFFFFF",
        navIconBg: "#0F172A",
        statNumber: "#111827",
        blobPrimary: "rgba(255, 70, 85, 0.15)",
        blobSecondary: "rgba(66, 135, 245, 0.15)",
        blobTertiary: "rgba(240, 185, 11, 0.12)",
        accentPurple: "#6B40CD",
        accentPink: "#D7428A",
        accentBlue: "#295AF9",
        accentFrom: "#FF1F8AFF", // More vibrant pink
        accentTo: "#FF8F28FF",   // More vibrant orange
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        card: "32px", // Larger border radius for softer feel
        bento: "32px",
        pill: "999px",
        input: "999px",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backdropBlur: {
        soft: "18px",
        glass: "40px", // Increased blur for premium feel
      },
      backdropSaturate: {
        glass: "180%",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.08)",
        cardSoft: "0 18px 60px rgba(15, 23, 42, 0.07)",
        cardFlat: "0 1px 0 rgba(15, 23, 42, 0.04)",
        floating: "0 32px 80px rgba(15, 23, 42, 0.12)",
        glass: "0px 4px 24px -1px rgba(0, 0, 0, 0.04), 0px 0px 1px 0px rgba(0, 0, 0, 0.1)",
        "inner-bevel": "inset 0px 1px 0px 0px rgba(255, 255, 255, 1), inset 0px -1px 0px 0px rgba(0, 0, 0, 0.02)",
        buttonFocus: "0 0 0 1px #FFFFFF, 0 0 0 6px rgba(41, 90, 249, 0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "blob-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        shimmer: "shimmer 2s linear infinite",
        "blob-float": "blob-float 20s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        scrollY: "scrollY 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
