import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import { homepageJsonLdDe } from "@/lib/seo";
import StaticPage from "@/lib/staticPage";

export const metadata: Metadata = {
  title: {
    absolute: "Corvant AI — Geschäftsergebnisse mit AI-first-Ansatz, von der Strategie bis zur Umsetzung",
  },
  description:
    "Münchner AI-first-Beratung. Wir identifizieren Ihren wertvollsten Engpass, lösen ihn hands-on und koppeln unser Honorar an das vereinbarte Ergebnis — nicht an Aufwand.",
  alternates: {
    canonical: "/de",
    languages: { en: "/", de: "/de", "x-default": "/" },
  },
  openGraph: { url: "/de", locale: "de_DE" },
};

export default function Page() {
  return (
    <>
      <StaticPage fileName="de/homepage.html" />
      <JsonLd data={homepageJsonLdDe} />
    </>
  );
}
