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
        primary: "#0A1628",
        background: "#F8F6F2",
        card: "#FFFFFF",
        accent: "#E8A010",
        cta: "#E8A010",
        text: "#2D2D2D",
        "text-secondary": "#555555",
        "text-muted": "#8BA3C7",
        "border-light": "#DEDAD3",
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
        soft: "0 18px 45px rgba(10, 22, 40, 0.08)",
      },
      transitionDuration: {
        600: "600ms",
      },
    },
  },
  plugins: [],
};
export default config;
