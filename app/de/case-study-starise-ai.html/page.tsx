import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import { caseStudyJsonLd } from "@/lib/seo";
import StaticPage from "@/lib/staticPage";

const EN = "/case-study-starise-ai.html";
const DE = "/de/case-study-starise-ai.html";
const HEADLINE = "Starise AI Fallstudie: 100× höhere Akquisekapazität bei gleichem Team und gleicher Kostenbasis";
const DESCRIPTION =
  "Wie Corvant AI für Starise AI ein marktreifes Akquise-Tool baute, das jede Stadt in Minuten in eine gezielte Lead-Liste verwandelt — 100× höhere Akquisekapazität in 2 Wochen.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: DE, languages: { en: EN, de: DE, "x-default": EN } },
  openGraph: { url: DE, type: "article", locale: "de_DE", title: HEADLINE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StaticPage fileName="de/case-study-starise-ai.html" />
      <JsonLd
        data={caseStudyJsonLd({
          headline: "100× höhere Akquisekapazität bei gleichem Team und gleicher Kostenbasis",
          description: DESCRIPTION,
          about: "Akquisekapazität",
          path: DE,
        })}
      />
    </>
  );
}
