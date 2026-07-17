import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import { caseStudyJsonLd } from "@/lib/seo";
import StaticPage from "@/lib/staticPage";

const PATH = "/case-study-fastreview.html";
const HEADLINE = "FastReview case study: €1M+ raised with an AI-first product vision";
const DESCRIPTION =
  "How Corvant AI helped FastReview define an AI-first product vision and rebuild its investor narrative — raising €1M+ in 10 weeks.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: PATH, languages: { en: PATH, de: "/de" + PATH, "x-default": PATH } },
  openGraph: { url: PATH, type: "article", title: HEADLINE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StaticPage fileName="case-study-fastreview.html" />
      <JsonLd
        data={caseStudyJsonLd({
          headline: "€1M+ raised on the back of a sharper AI-first product vision",
          description: DESCRIPTION,
          about: "AI vision & fundraising",
          path: PATH,
        })}
      />
    </>
  );
}
