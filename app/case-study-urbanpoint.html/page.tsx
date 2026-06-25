import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import { caseStudyJsonLd } from "@/lib/seo";
import StaticPage from "@/lib/staticPage";

const PATH = "/case-study-urbanpoint.html";
const HEADLINE = "Urban Point case study: 4× faster software development";
const DESCRIPTION =
  "How Corvant AI helped Urban Point's engineering team ship 4× faster — same quality, same team — with a documented AI engineering standard, in 8 weeks.";

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { url: PATH, type: "article", title: HEADLINE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StaticPage fileName="case-study-urbanpoint.html" />
      <JsonLd
        data={caseStudyJsonLd({
          headline: "4x faster software development, same quality, same team",
          description: DESCRIPTION,
          about: "Engineering velocity",
          path: PATH,
        })}
      />
    </>
  );
}
