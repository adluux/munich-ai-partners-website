import type { Metadata } from "next";

import StaticPage from "@/lib/staticPage";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Legal notice and imprint for Corvant AI, a brand of Hitead GmbH, Munich, Germany.",
  alternates: { canonical: "/legal.html" },
  openGraph: { url: "/legal.html" },
};

export default function Page() {
  return <StaticPage fileName="legal.html" />;
}
