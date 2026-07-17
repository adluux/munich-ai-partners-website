export const SITE_URL = "https://corvantai.com";

const organization = {
  "@type": "Organization",
  name: "Corvant AI",
  url: SITE_URL,
};

export const homepageJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Corvant AI",
  url: SITE_URL,
  description:
    "Munich-based AI-first consultancy. We identify the highest-value bottleneck in your business, fix it hands-on, and tie our fee to the agreed outcome.",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Munich",
    addressCountry: "DE",
  },
  parentOrganization: { "@type": "Organization", name: "Hitead GmbH" },
  knowsAbout: [
    "AI strategy",
    "Product management",
    "Software delivery",
    "Fundraising",
    "Go-to-market",
    "Digital transformation",
  ],
  serviceType: [
    "AI strategy consulting",
    "AI-first product development",
    "Software delivery",
    "Fundraising support",
  ],
};

export const homepageJsonLdDe: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Corvant AI",
  url: `${SITE_URL}/de`,
  description:
    "Münchner AI-first-Beratung. Wir identifizieren den wertvollsten Engpass in Ihrem Unternehmen, lösen ihn hands-on und koppeln unser Honorar an das vereinbarte Ergebnis.",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "München",
    addressCountry: "DE",
  },
  parentOrganization: { "@type": "Organization", name: "Hitead GmbH" },
  knowsAbout: [
    "KI-Strategie",
    "Produktmanagement",
    "Softwareentwicklung",
    "Finanzierung",
    "Go-to-Market",
    "Digitale Transformation",
  ],
};

export function caseStudyJsonLd(args: {
  headline: string;
  description: string;
  about: string;
  path: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    about: args.about,
    author: organization,
    publisher: organization,
    mainEntityOfPage: `${SITE_URL}${args.path}`,
  };
}
