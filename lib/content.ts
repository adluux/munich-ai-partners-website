export type Locale = "en" | "de";

export interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

export interface ResultCardItem {
  id: string;
  target: number;
  prefix: string;
  suffix: string;
  companyName: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface PartnerItem {
  name: string;
  title: string;
  linkedinLabel: string;
  linkedinUrl: string;
  imageSrc: string;
  imageClassName: string;
}

export interface SiteContent {
  booking: {
    url: string;
  };
  brand: {
    name: string;
    tagline: string;
    email: string;
    location: string;
    copyright: string;
  };
  navigation: {
    links: readonly NavLinkItem[];
    ctaLabel: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaLabel: string;
  };
  testimonials: {
    heading: string;
    cards: readonly ResultCardItem[];
  };
  guarantee: {
    headline: string;
    copy: string;
  };
  midCta: {
    label: string;
  };
  howWeWork: {
    heading: string;
    body: string;
  };
  services: {
    heading: string;
    items: readonly ServiceItem[];
  };
  howWeDoIt: {
    heading: string;
    body: string;
    linkLabel: string;
    linkHref: string;
  };
  team: {
    heading: string;
    body: string;
    partners: readonly PartnerItem[];
  };
  urgency: {
    copy: string;
  };
  finalCta: {
    heading: string;
    subheadline: string;
    ctaLabel: string;
  };
  leadMagnet: {
    heading: string;
    body: string;
    ctaLabel: string;
  };
}

const booking = {
  url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0v6PZydheL8-0l8arI22xHx1dA8xCfDbfel5C2ClMbEk4A3z1ydExnDRb4E--EAlmC93C8c74U",
} as const;

const sharedTeamMedia = {
  ivan: {
    linkedinUrl: "https://www.linkedin.com/in/skokoivan/",
    imageSrc: "/team/ivan-skoko.png",
    imageClassName: "object-[center_35%]",
  },
  tracy: {
    linkedinUrl: "https://www.linkedin.com/in/tracha/",
    imageSrc: "/team/tracy-chang.png",
    imageClassName: "object-center",
  },
  michael: {
    linkedinUrl: "https://www.linkedin.com/in/michaelmalderle/",
    imageSrc: "/team/michael-malderle.jpg",
    imageClassName: "object-[center_35%]",
  },
} as const;

const translations: Record<Locale, SiteContent> = {
  en: {
    booking,
    brand: {
      name: "Corvant AI",
      tagline: "AI-First Consulting",
      email: "hello@[domain].com",
      location: "Munich, Germany",
      copyright: "© 2026 Corvant AI. All rights reserved.",
    },
    navigation: {
      links: [
        { label: "Impact", href: "#testimonials", id: "testimonials" },
        { label: "Services", href: "#services", id: "services" },
        { label: "About", href: "#about", id: "about" },
        { label: "Team", href: "#team", id: "team" },
      ],
      ctaLabel: "Book a Call",
    },
    hero: {
      headline: "Better business results, from strategy to execution.",
      subheadline:
        "We help leaders identify the highest-value problems and solve them, leveraging decades of operating experience, using AI where it creates real business value.",
      ctaLabel: "Book a free consultation →",
    },
    testimonials: {
      heading: "Value delivered to our clients",
      cards: [
        {
          id: "01",
          target: 4,
          prefix: "",
          suffix: "X",
          companyName: "Urban Point",
          title: "Faster software development",
          description:
            "Established a standardized AI-first engineering workflow - 4x faster delivery, quality preserved.",
        },
        {
          id: "02",
          target: 1,
          prefix: "€",
          suffix: "M+",
          companyName: "FastReview",
          title: "Funding raised",
          description:
            "Rebuilt FastReview's investor story and AI-first product vision.",
        },
        {
          id: "03",
          target: 100,
          prefix: "",
          suffix: "X",
          companyName: "Starise AI",
          title: "Outreach capacity",
          description:
            "Built a Google Maps lead engine that scaled cold outreach 100x - same team, same cost.",
        },
      ],
    },
    guarantee: {
      headline: "Our Commitment",
      copy:
        "Every engagement starts with clear success metrics — agreed upfront.\nWe only take on projects where we're confident we can deliver measurable results.",
    },
    midCta: {
      label: "Book a free consultation →",
    },
    howWeWork: {
      heading: "Our approach",
      body: "We start with your business, not with AI. We identify the highest-value opportunity, execute quickly, and measure the result.",
    },
    services: {
      heading: "Where we can add value",
      items: [
        {
          id: "01",
          title: "AI Implementation",
          description:
            "Identify where AI can create real value, put it into practice, and measure the business result.",
        },
        {
          id: "02",
          title: "Strategy",
          description:
            "Helping you decide where to focus, what to change, and how to move the business forward.",
        },
        {
          id: "03",
          title: "Product",
          description:
            "From early concept through design, build, pricing, and launch - we help shape products customers understand and want.",
        },
        {
          id: "04",
          title: "Marketing & Sales",
          description:
            "Helping you improve how you attract demand, move deals forward, and turn commercial effort into real growth.",
        },
        {
          id: "05",
          title: "Operations",
          description:
            "Make your operations faster, higher quality, and ready for more volume — without a linear increase in cost",
        },
      ],
    },
    howWeDoIt: {
      heading: "Others deliver slides. We deliver outcomes.",
      body: "Most firms hand over a deck and disappear when execution gets hard. We don't. We bring hands-on operating experience, use AI to move faster and produce better work, and stay focused on what matters: measurable results in the business.",
      linkLabel: "See how we did it for Urban Point →",
      linkHref: "/case-studies/urban-point",
    },
    team: {
      heading: "We're operators, not theorists",
      body: "Together, we bring 40+ years of hands-on experience building, scaling, and fixing companies from the inside - leading product, sales, and operations. We now bring that experience directly to our clients.",
      partners: [
        {
          name: "Ivan Skoko",
          title: "Partner",
          linkedinLabel: "Connect on LinkedIn",
          ...sharedTeamMedia.ivan,
        },
        {
          name: "Tracy Chang",
          title: "Partner",
          linkedinLabel: "Connect on LinkedIn",
          ...sharedTeamMedia.tracy,
        },
        {
          name: "Michael Malderle",
          title: "Partner",
          linkedinLabel: "Connect on LinkedIn",
          ...sharedTeamMedia.michael,
        },
      ],
    },
    urgency: {
      copy: "AI is changing how companies build, sell, and operate. The leaders who figure out where to apply it - and where not to - are pulling ahead. The gap compounds quietly, then suddenly. Evolve or get left behind.",
    },
    finalCta: {
      heading: "Ready to talk?",
      subheadline:
        "30 minutes, no pitch deck, no obligation. Tell us about your business, your bottlenecks, and your priorities. Let’s explore where we can help.",
      ctaLabel: "Book a free consultation",
    },
    leadMagnet: {
      heading: "An example of how we use AI",
      body: "This is the full playbook we used to build the site you're on.",
      ctaLabel: "Download the playbook",
    },
  },
  de: {
    booking,
    brand: {
      name: "Corvant AI",
      tagline: "KI-orientierte Beratung",
      email: "hello@[domain].com",
      location: "München, Deutschland",
      copyright: "© 2026 Corvant AI. Alle Rechte vorbehalten.",
    },
    navigation: {
      links: [
        { label: "Wirkung", href: "#testimonials", id: "testimonials" },
        { label: "Leistungen", href: "#services", id: "services" },
        { label: "Über uns", href: "#about", id: "about" },
        { label: "Team", href: "#team", id: "team" },
      ],
      ctaLabel: "Gespräch buchen",
    },
    hero: {
      headline: "Bessere Geschäftsergebnisse, von der Strategie bis zur Umsetzung.",
      subheadline:
        "Wir helfen Führungskräften, die wichtigsten Probleme zu identifizieren und zu lösen - mit jahrzehntelanger operativer Erfahrung und dem gezielten Einsatz von KI dort, wo sie echten Mehrwert schafft.",
      ctaLabel: "Kostenloses Erstgespräch buchen →",
    },
    testimonials: {
      heading: "Für unsere Kunden geschaffener Mehrwert",
      cards: [
        {
          id: "01",
          target: 4,
          prefix: "",
          suffix: "x",
          companyName: "Urban Point",
          title: "Schnellere Softwareentwicklung",
          description:
            "Einen standardisierten KI-orientierten Engineering-Workflow etabliert — 4x schnellere Lieferung bei gleichbleibender Qualität.",
        },
        {
          id: "02",
          target: 1,
          prefix: "€",
          suffix: "M+",
          companyName: "FastReview",
          title: "Finanzierung eingeworben",
          description:
            "Die Investor Story und die KI-orientierte Produktvision von FastReview neu aufgebaut.",
        },
        {
          id: "03",
          target: 100,
          prefix: "",
          suffix: "X",
          companyName: "Starise AI",
          title: "Outreach-Kapazität",
          description:
            "Eine Google-Maps-Lead-Engine aufgebaut, die Kaltakquise um den Faktor 100 skaliert hat — mit demselben Team und denselben Kosten.",
        },
      ],
    },
    guarantee: {
      headline: "Unser Versprechen",
      copy:
        "Jede Zusammenarbeit beginnt mit klaren Erfolgskennzahlen — vorab gemeinsam vereinbart.\nWir übernehmen nur Projekte, bei denen wir überzeugt sind, messbare Ergebnisse liefern zu können.",
    },
    midCta: {
      label: "Kostenloses Erstgespräch buchen →",
    },
    howWeWork: {
      heading: "Unser Ansatz",
      body: "Wir beginnen mit Ihrem Geschäft, nicht mit KI. Wir identifizieren die wertvollste Chance, setzen schnell um und messen das Ergebnis.",
    },
    services: {
      heading: "Wo wir Mehrwert schaffen können",
      items: [
        {
          id: "01",
          title: "KI-Implementierung",
          description:
            "Identifizieren, wo KI echten Mehrwert schaffen kann, sie in die Praxis bringen und das Geschäftsergebnis messen.",
        },
        {
          id: "02",
          title: "Strategie",
          description:
            "Wir helfen Ihnen zu entscheiden, worauf Sie sich fokussieren, was Sie verändern und wie Sie Ihr Unternehmen voranbringen.",
        },
        {
          id: "03",
          title: "Produkt",
          description:
            "Vom ersten Konzept über Design, Entwicklung, Preisgestaltung und Markteinführung — wir helfen dabei, Produkte zu gestalten, die Kunden verstehen und wollen.",
        },
        {
          id: "04",
          title: "Marketing & Vertrieb",
          description:
            "Wir helfen Ihnen, Nachfrage besser zu erzeugen, Verkaufschancen voranzubringen und kommerziellen Aufwand in echtes Wachstum zu übersetzen.",
        },
        {
          id: "05",
          title: "Operations",
          description:
            "Machen Sie Ihre operativen Abläufe schneller, hochwertiger und bereit für mehr Volumen — ohne linearen Kostenanstieg.",
        },
      ],
    },
    howWeDoIt: {
      heading: "Andere liefern Folien. Wir liefern Ergebnisse.",
      body: "Die meisten Firmen übergeben eine Präsentation und verschwinden, wenn die Umsetzung schwierig wird. Wir nicht. Wir bringen praktische operative Erfahrung ein, nutzen KI, um schneller zu arbeiten und bessere Ergebnisse zu erzielen, und bleiben auf das fokussiert, worauf es ankommt: messbare Ergebnisse im Unternehmen.",
      linkLabel: "Sehen Sie, wie wir es für Urban Point umgesetzt haben →",
      linkHref: "/case-studies/urban-point",
    },
    team: {
      heading: "Wir sind Praktiker, keine Theoretiker",
      body: "Gemeinsam bringen wir über 40 Jahre praktische Erfahrung darin mit, Unternehmen von innen aufzubauen, zu skalieren und weiterzuentwickeln — in führenden Rollen in Produkt, Vertrieb und Operations. Diese Erfahrung bringen wir heute direkt zu unseren Kunden.",
      partners: [
        {
          name: "Ivan Skoko",
          title: "Partner",
          linkedinLabel: "Auf LinkedIn vernetzen",
          ...sharedTeamMedia.ivan,
        },
        {
          name: "Tracy Chang",
          title: "Partner",
          linkedinLabel: "Auf LinkedIn vernetzen",
          ...sharedTeamMedia.tracy,
        },
        {
          name: "Michael Malderle",
          title: "Partner",
          linkedinLabel: "Auf LinkedIn vernetzen",
          ...sharedTeamMedia.michael,
        },
      ],
    },
    urgency: {
      copy: "KI verändert, wie Unternehmen bauen, verkaufen und arbeiten. Führungskräfte, die verstehen, wo sie KI einsetzen sollten — und wo nicht —, ziehen davon. Der Abstand wächst zunächst leise, dann plötzlich. Entwickeln Sie sich weiter — oder bleiben Sie zurück.",
    },
    finalCta: {
      heading: "Bereit für ein Gespräch?",
      subheadline:
        "30 Minuten, keine Präsentation, unverbindlich. Erzählen Sie uns von Ihrem Unternehmen, Ihren Engpässen und Ihren Prioritäten. Lassen Sie uns gemeinsam prüfen, wo wir helfen können.",
      ctaLabel: "Kostenloses Erstgespräch buchen",
    },
    leadMagnet: {
      heading: "Ein Beispiel dafür, wie wir KI einsetzen",
      body: "Das ist der vollständige Leitfaden, mit dem wir diese Website erstellt haben.",
      ctaLabel: "Leitfaden herunterladen",
    },
  },
};

export function normalizeLocale(value?: string | string[]): Locale {
  const locale = Array.isArray(value) ? value[0] : value;

  return locale === "de" ? "de" : "en";
}

export function getContent(locale: Locale): SiteContent {
  return translations[locale];
}
