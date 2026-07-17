import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import { caseStudyJsonLd } from "@/lib/seo";
import StaticPage from "@/lib/staticPage";

const EN = "/case-study-fastreview.html";
const DE = "/de/case-study-fastreview.html";
const HEADLINE = "FastReview Fallstudie: mehr als 1 Mio. € Finanzierung mit einer geschärften AI-first-Vision";
const DESCRIPTION =
  "Wie Corvant AI FastReview half, eine AI-first-Produktvision zu definieren und die Investorenstory neu aufzubauen — mehr als 1 Mio. € Finanzierung in 10 Wochen.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: DE, languages: { en: EN, de: DE, "x-default": EN } },
  openGraph: { url: DE, type: "article", locale: "de_DE", title: HEADLINE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StaticPage fileName="de/case-study-fastreview.html" />
      <JsonLd
        data={caseStudyJsonLd({
          headline: "Mehr als 1 Mio. € Finanzierung mit einer geschärften AI-first-Produktvision gesichert",
          description: DESCRIPTION,
          about: "AI-first-Vision und Finanzierung",
          path: DE,
        })}
      />
    </>
  );
}
