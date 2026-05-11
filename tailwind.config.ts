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
        primary: "#0D0D0D",
        background: "#FFFFFF",
        card: "#F5F5F5",
        accent: "#2563EB",
        "accent-bg": "#F0F4FF",
        cta: "#0D0D0D",
        text: "#555555",
        "text-secondary": "#999999",
        "text-muted": "#999999",
        "border-light": "#E4E4E4",
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
        soft: "0 18px 45px rgba(13, 13, 13, 0.08)",
      },
      transitionDuration: {
        600: "600ms",
      },
    },
  },
  plugins: [],
};
export default config;
