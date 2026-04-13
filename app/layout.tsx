import { clsx } from "clsx";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Munich AI Partners",
  description:
    "We help you achieve better business results, from strategy to execution, with an AI-first approach.",
  openGraph: {
    title: "Munich AI Partners",
    description:
      "We help you achieve better business results, from strategy to execution, with an AI-first approach.",
    type: "website",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={clsx(playfairDisplay.variable, inter.variable, "scroll-smooth")}
    >
      <body className="bg-background font-sans text-text antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-card focus:px-4 focus:py-3 focus:text-text focus:shadow-soft"
        >
          Skip to content
        </a>
        {/* TODO: Analytics snippet */}
        {children}
      </body>
    </html>
  );
}
