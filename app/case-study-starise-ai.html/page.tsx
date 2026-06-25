import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import { caseStudyJsonLd } from "@/lib/seo";
import StaticPage from "@/lib/staticPage";

const PATH = "/case-study-starise-ai.html";
const HEADLINE = "Starise AI case study: 100× outreach capacity, same team and cost";
const DESCRIPTION =
  "How Corvant AI built Starise AI a market-ready outreach tool that turns any city into a targeted lead list in minutes — a 100× increase in outreach capacity in 2 weeks.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { url: PATH, type: "article", title: HEADLINE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StaticPage fileName="case-study-starise-ai.html" />
      <JsonLd
        data={caseStudyJsonLd({
          headline: "100x increase in outreach capacity, same team, same cost",
          description: DESCRIPTION,
          about: "Outreach capacity",
          path: PATH,
        })}
      />
    </>
  );
}
