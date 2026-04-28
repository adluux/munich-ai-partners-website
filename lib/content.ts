export const content = {
  booking: {
    url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0v6PZydheL8-0l8arI22xHx1dA8xCfDbfel5C2ClMbEk4A3z1ydExnDRb4E--EAlmC93C8c74U",
  },
  brand: {
    name: "Munich AI Partners",
    tagline: "AI-First Consulting",
    email: "hello@[domain].com",
    location: "Munich, Germany",
    copyright: "\u00a9 2026 Munich AI Partners. All rights reserved.",
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
    headline: "Do you want better business results?",
    subheadline:
      "We help you achieve them, from strategy to execution, with an AI-first approach.",
    ctaLabel: "Book a free consultation \u2192",
  },
  testimonials: {
    tag: "Delivered Results",
    heading: "What we achieved for clients",
    cards: [
      {
        id: "01",
        target: 1,
        suffix: "x",
        companyName: "Client Company",
        logoLabel: "Logo",
        title: "Placeholder",
        description: "Placeholder result.",
      },
      {
        id: "02",
        target: 2,
        suffix: "x",
        companyName: "Client Company",
        logoLabel: "Logo",
        title: "Placeholder",
        description: "Placeholder result.",
      },
      {
        id: "03",
        target: 3,
        suffix: "x",
        companyName: "Client Company",
        logoLabel: "Logo",
        title: "Placeholder",
        description: "Placeholder result.",
      },
    ],
  },
  guarantee: {
    headline: "Our Commitment",
    copy:
      "Every engagement starts with clear success metrics \u2014 agreed upfront.\nWe only take on projects where we're confident we can deliver measurable results.",
  },
  midCta: {
    label: "Book a free consultation \u2014>",
  },
  howWeWork: {
    tag: "How we work",
    body: "We gain a thorough understanding of your business, tackle problems that matter most and measure the impact.",
  },
  services: {
    tag: "Our Services",
    heading: "Where we can help",
    items: [
      {
        id: "01",
        title: "AI Implementation",
        description:
          "We help you unlock AI\u2019s value through strategic assessment, practical implementation, and measured results.",
      },
      {
        id: "02",
        title: "Strategy",
        description:
          "We partner with you to craft the vision and strategic roadmap that drives organizational alignment and execution.",
      },
      {
        id: "03",
        title: "Product",
        description:
          "We solve product challenges across the full spectrum: positioning, pricing, packaging, design, and go-to-market strategy.",
      },
      {
        id: "04",
        title: "Marketing & Sales",
        description:
          "We help you generate more qualified leads and close more deals through better content, process, and sales enablement.",
      },
      {
        id: "05",
        title: "Operations",
        description:
          "We transform operations into a competitive advantage by optimizing how you support customers, manage people, and deliver projects.",
      },
    ],
  },
  howWeDoIt: {
    heading: "Others sell slides. We stay for the outcome.",
    body: "Others sell slides and disappear when reality hits. We bring decades of hands-on industry experience and use AI to cut overhead and move faster, delivering better judgment, better work, and more value. We define success upfront, tailor every engagement to your business, and stay until the results show up in the numbers.",
    linkLabel: "See how we did it for Urban Point \u2192",
  },
  team: {
    tag: "Team",
    heading: "We're operators, not theorists",
    body: "Ivan and Tracy bring 30+ years of experience leading product, strategy, and operations across companies of all sizes. We've built, scaled, and optimized businesses\u2014and now help others do the same. Based in Munich, we work with companies across the globe.",
    photoLabel: "Team Photo",
    partners: [
      {
        name: "Ivan Skoko",
        title: "Partner",
        linkedinLabel: "Connect on LinkedIn",
        linkedinUrl: "#",
      },
      {
        name: "Tracy Chang",
        title: "Partner",
        linkedinLabel: "Connect on LinkedIn",
        linkedinUrl: "#",
      },
    ],
  },
  urgency: {
    copy: "Competition is intensifying. The pace of change is accelerating. Those who hesitate today will struggle to catch up tomorrow.",
  },
  finalCta: {
    tag: "Let\u2019s Talk",
    heading: "Ready to get started?",
    subheadline: "No sales pitch \u2014 just understanding your needs.",
    ctaLabel: "Book a Free Consultation",
  },
  leadMagnet: {
    heading: "See how we approach real work",
    body: "Thinking about using AI to get work done, but unsure where to start? This free download illustrates how we approach a common business challenge, building a website, using AI-first ways of working.",
    ctaLabel: "Download Free Guide",
  },
} as const;
