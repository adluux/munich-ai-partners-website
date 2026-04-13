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
        primary: "#3D3D2E",
        background: "#F5F0E8",
        card: "#FAF8F4",
        accent: "#6B6B4E",
        cta: "#4A5A3A",
        text: "#2D2D2D",
        "text-secondary": "#666666",
        "border-light": "#E0DCD4",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "container-max": "1200px",
      },
      spacing: {
        "section-px": "24px",
        "section-py": "100px",
        "card-p": "24px",
        "gap-sm": "16px",
        "gap-md": "32px",
        "gap-lg": "80px",
        navbar: "72px",
      },
      borderRadius: {
        card: "8px",
        button: "8px",
      },
      boxShadow: {
        nav: "0 10px 24px rgba(61, 61, 46, 0.08)",
        button: "0 12px 24px rgba(74, 90, 58, 0.18)",
      },
      transitionDuration: {
        200: "200ms",
        300: "300ms",
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};
export default config;
