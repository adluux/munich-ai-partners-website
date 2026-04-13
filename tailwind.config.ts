import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
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
        heading: ["var(--font-heading)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
        prose: "800px",
        narrow: "700px",
      },
      spacing: {
        navbar: "72px",
      },
      boxShadow: {
        nav: "0 12px 30px rgba(45, 45, 45, 0.08)",
        soft: "0 18px 45px rgba(61, 61, 46, 0.08)",
      },
      transitionDuration: {
        600: "600ms",
      },
    },
  },
  plugins: [],
};
export default config;
