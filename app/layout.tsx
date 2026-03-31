import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munich AI Partners",
  description:
    "We help you achieve better business results, from strategy to execution, with an AI-first approach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream font-sans text-charcoal antialiased">
        <a
          href="#main-content"
          className="sr-only z-[60] rounded-md bg-dark-olive px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
