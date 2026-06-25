import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://corvantai.com"),
  title: {
    default: "Corvant AI — AI-first business results, from strategy to execution",
    template: "%s | Corvant AI",
  },
  description:
    "Munich-based AI-first consultancy. We identify your highest-value bottleneck, fix it hands-on, and tie our fee to the agreed outcome — not billable hours.",
  openGraph: {
    type: "website",
    siteName: "Corvant AI",
    locale: "en_US",
    url: "/",
    title: "Corvant AI — AI-first business results, from strategy to execution",
    description:
      "Munich-based AI-first consultancy. We identify your highest-value bottleneck, fix it hands-on, and tie our fee to the agreed outcome — not billable hours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corvant AI — AI-first business results, from strategy to execution",
    description:
      "Munich-based AI-first consultancy. We identify your highest-value bottleneck, fix it hands-on, and tie our fee to the agreed outcome — not billable hours.",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
