import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import { homepageJsonLd } from "@/lib/seo";
import StaticPage from "@/lib/staticPage";

export const metadata: Metadata = {
  title: {
    absolute: "Corvant AI — AI-first business results, from strategy to execution",
  },
  description:
    "Munich-based AI-first consultancy. We identify your highest-value bottleneck, fix it hands-on, and tie our fee to the agreed outcome — not billable hours. Experience across banking, fintech, legal, telecom and more.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Page() {
  return (
    <>
      <StaticPage fileName="homepage.html" />
      <JsonLd data={homepageJsonLd} />
    </>
  );
}
