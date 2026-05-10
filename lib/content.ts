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
    headline: "Better business results, from strategy to execution.",
    subheadline:
      "We're business consultants who help leaders identify the highest-value problems and solve them - bringing decades of operating experience and AI where it makes us faster, sharper, and better.",
    ctaLabel: "Book a free consultation \u2192",
  },
  testimonials: {
    heading: "Value delivered to our clients",
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
    heading: "Our approach",
    body: "We start with your business, not with AI. We identify the highest-value opportunity, execute quickly, and measure the result.",
  },
  services: {
    tag: "Our Services",
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
          "Make your operations faster, higher quality, and ready for more volume \u2014 without a linear increase in cost",
      },
    ],
  },
  howWeDoIt: {
    heading: "Others deliver slides. We deliver outcomes.",
    body: "Most firms hand over a deck and disappear when execution gets hard. We don't. We bring hands-on operating experience, use AI to move faster and produce better work, and stay focused on what matters: measurable results in the business.",
    linkLabel: "See how we did it for Urban Point \u2192",
  },
  team: {
    tag: "Team",
    heading: "We're operators, not theorists",
    body: "Together, we bring 40+ years of hands-on experience building, scaling, and fixing companies from the inside - leading product, sales, and operations. We now bring that experience directly to our clients.",
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
    copy: "AI is changing how companies build, sell, and operate. The leaders who figure out where to apply it - and where not to - are pulling ahead. The gap compounds quietly, then suddenly. Evolve or get left behind.",
  },
  finalCta: {
    tag: "Let\u2019s Talk",
    heading: "Ready to talk?",
    subheadline:
      "30 minutes, no pitch deck, no obligation. Tell us about your business, your bottlenecks, and your priorities. Let\u2019s explore where we can help.",
    ctaLabel: "Book a free consultation",
  },
  leadMagnet: {
    heading: "An example of how we use AI",
    body: "This is the full playbook we used to build the site you're on.",
    ctaLabel: "Download the playbook",
  },
} as const;
