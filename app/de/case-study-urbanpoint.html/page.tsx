import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import { caseStudyJsonLd } from "@/lib/seo";
import StaticPage from "@/lib/staticPage";

const EN = "/case-study-urbanpoint.html";
const DE = "/de/case-study-urbanpoint.html";
const HEADLINE = "Urban Point Fallstudie: 4× schnellere Softwareentwicklung";
const DESCRIPTION =
  "Wie Corvant AI dem Engineering-Team von Urban Point half, 4× schneller zu liefern — gleiche Qualität, gleiches Team — mit einem dokumentierten KI-Engineering-Standard, in 8 Wochen.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: DE, languages: { en: EN, de: DE, "x-default": EN } },
  openGraph: { url: DE, type: "article", locale: "de_DE", title: HEADLINE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StaticPage fileName="de/case-study-urbanpoint.html" />
      <JsonLd
        data={caseStudyJsonLd({
          headline: "4× schnellere Softwareentwicklung bei gleicher Qualität und gleicher Teamgröße",
          description: DESCRIPTION,
          about: "Entwicklungsgeschwindigkeit",
          path: DE,
        })}
      />
    </>
  );
}
