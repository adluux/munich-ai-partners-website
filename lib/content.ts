export interface NavLink {
  href: string;
  label: string;
}

export interface MetricItem {
  badge: string;
  description: string;
  metric: number;
  suffix: string;
  title: string;
}

export interface ServiceItem {
  description: string;
  id: string;
  title: string;
}

export interface ContentModel {
  finalCta: {
    badge: string;
    buttonLabel: string;
    heading: string;
    subheading: string;
  };
  footer: {
    copyright: string;
    email: string;
    location: string;
    tagline: string;
  };
  guarantee: {
    text: string;
  };
  hero: {
    badge: string;
    heading: string;
    primaryCta: string;
    secondaryCta: string;
    subheading: string;
  };
  howWeDoIt: {
    body: string;
    heading: string;
    linkLabel: string;
  };
  howWeWork: {
    badge: string;
    body: string;
  };
  leadMagnet: {
    body: string;
    buttonLabel: string;
    heading: string;
  };
  midCta: {
    buttonLabel: string;
  };
  navbar: {
    brand: string;
    ctaLabel: string;
    links: NavLink[];
  };
  services: {
    badge: string;
    heading: string;
    items: ServiceItem[];
  };
  testimonials: {
    badge: string;
    ctaLabel: string;
    heading: string;
    items: MetricItem[];
  };
  urgency: {
    text: string;
  };
  whoWeAre: {
    badge: string;
    body: string;
    heading: string;
  };
}

export const CONTENT: ContentModel = {
  finalCta: {
    badge: "Let's Talk",
    buttonLabel: "Book a Free Consultation",
    heading: "Ready to get started?",
    subheading: "No sales pitch — just understanding your needs.",
  },
  footer: {
    copyright: "© 2026 Munich AI Partners. All rights reserved.",
    email: "hello@munich-ai-partners.com",
    location: "Munich, Germany",
    tagline: "AI-First Consulting",
  },
  guarantee: {
    text: "Every engagement includes clear success metrics. We only take on projects where we are confident we can deliver measurable impact.",
  },
  hero: {
    badge: "AI-First Consulting",
    heading: "Do you want better business results?",
    primaryCta: "Book a free consultation →",
    secondaryCta: "Delivered Results",
    subheading:
      "We help you achieve them, from strategy to execution, with an AI-first approach.",
  },
  howWeDoIt: {
    body: "Others sell slides and disappear when reality hits. We bring decades of hands-on industry experience and use AI to cut overhead and move faster, delivering better judgment, better work, and more value. We define success upfront, tailor every engagement to your business, and stay until the results show up in the numbers.",
    heading: "How We Do It, Differently",
    linkLabel: "See how we did it for Urban Point →",
  },
  howWeWork: {
    badge: "How we work",
    body: "We gain a thorough understanding of your business, tackle problems that matter most and measure the impact.",
  },
  leadMagnet: {
    body: "Thinking about using AI to get work done, but unsure where to start? This free download illustrates how we approach a common business challenge, building a website, using AI-first ways of working.",
    buttonLabel: "Download Free Guide",
    heading: "See how we approach real work",
  },
  midCta: {
    buttonLabel: "Book a free consultation",
  },
  navbar: {
    brand: "Munich AI Partners",
    ctaLabel: "Book a Call",
    links: [
      { href: "#testimonials", label: "Impact" },
      { href: "#services", label: "Services" },
      { href: "#team", label: "Team" },
      { href: "#about", label: "About" },
    ],
  },
  services: {
    badge: "Our Services",
    heading: "Where we can help",
    items: [
      {
        description:
          "We help you unlock AI's value through strategic assessment, practical implementation, and measured results.",
        id: "01",
        title: "AI Implementation",
      },
      {
        description:
          "We partner with you to craft the vision and strategic roadmap that drives organizational alignment and execution.",
        id: "02",
        title: "Strategy",
      },
      {
        description:
          "We solve product challenges across the full spectrum: positioning, pricing, packaging, design, and go-to-market strategy.",
        id: "03",
        title: "Product",
      },
      {
        description:
          "We help you generate more qualified leads and close more deals through better content, process, and sales enablement.",
        id: "04",
        title: "Marketing & Sales",
      },
      {
        description:
          "We transform operations into a competitive advantage by optimizing how you support customers, manage people, and deliver projects.",
        id: "05",
        title: "Operations",
      },
    ],
  },
  testimonials: {
    badge: "Delivered Results",
    ctaLabel: "Book a free consultation",
    heading: "What we achieved for clients",
    items: [
      {
        badge: "Delivered Results",
        description:
          "We help you unlock AI's value through strategic assessment, practical implementation, and measured results.",
        metric: 1,
        suffix: "",
        title: "Strategic assessment",
      },
      {
        badge: "Delivered Results",
        description:
          "We partner with you to craft the vision and strategic roadmap that drives organizational alignment and execution.",
        metric: 2,
        suffix: "",
        title: "Practical implementation",
      },
      {
        badge: "Delivered Results",
        description:
          "We solve product challenges across the full spectrum: positioning, pricing, packaging, design, and go-to-market strategy.",
        metric: 3,
        suffix: "",
        title: "Measured results",
      },
    ],
  },
  urgency: {
    text: "Competition is intensifying. The pace of change is accelerating. Those who hesitate today will struggle to catch up tomorrow.",
  },
  whoWeAre: {
    badge: "The Team",
    body: "We're operators, not theorists. Ivan and Tracy bring 30+ years of experience leading product, strategy, and operations across companies of all sizes. We've built, scaled, and optimized businesses—and now help others do the same. Based in Munich, we work with companies across the globe.",
    heading: "Who You'll Be Working With",
  },
};
