/**
 * ============================================================
 *  COMPANY CONFIGURATION
 *  Edit this file to update company-wide information.
 *  Everything here is used across the header, footer, SEO,
 *  contact page and About page.
 * ============================================================
 */

export const siteConfig = {
  name: "Nexvora Technologies",
  shortName: "Nexvora",
  legalName: "Nexvora Technologies Ltd.",
  tagline: "Engineering Digital Excellence",
  description:
    "Nexvora Technologies is a full-service software engineering company delivering custom software, web and mobile applications, AI solutions, cloud infrastructure and digital transformation for businesses worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  foundedYear: 2016,
  keywords: [
    "IT company",
    "software development company",
    "custom software development",
    "web application development",
    "mobile app development",
    "AI and machine learning",
    "cloud solutions",
    "IT consultancy",
  ],

  // ----- Contact details (REPLACE with your real details) -----
  contact: {
    email: "info@example.com",
    salesEmail: "sales@example.com",
    phone: "+1 (000) 000-0000",
    whatsapp: "", // e.g. "+10000000000" — leave empty to hide
    workingHours: "Mon – Fri, 9:00 AM – 6:00 PM",
    address: {
      line1: "Your Office Address",
      line2: "Building / Suite",
      city: "City",
      country: "Country",
    },
    /**
     * Google Maps: put your full address or "lat,lng" here.
     * The map is ONLY shown when this value is non-empty.
     */
    mapQuery: "",
  },

  // ----- Social profiles (leave a value empty to hide its icon) -----
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/",
  },

  // ----- Navigation -----
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Industries", href: "/industries" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],

  // ----- Hero -----
  hero: {
    eyebrow: "Software Engineering & Digital Transformation",
    headline: "We build software that moves businesses forward.",
    highlight: "moves businesses forward",
    description:
      "From enterprise platforms to AI-powered products, Nexvora partners with organisations to design, build and scale reliable digital solutions — delivered by a dedicated team of engineers, designers and strategists.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  },

  // ----- About -----
  about: {
    overview:
      "Nexvora Technologies is a software development and IT services company that helps startups, SMEs and enterprises turn complex business challenges into dependable digital products. We combine product thinking, engineering discipline and transparent delivery to build software that lasts.",
    background:
      "Founded as a small team of engineers with a shared belief that great software comes from deep collaboration, Nexvora has grown into a multidisciplinary company covering strategy, design, development, cloud and AI. Our process is built on clear communication, measurable milestones and long-term partnerships.",
    mission:
      "To empower organisations with secure, scalable and thoughtfully designed technology that creates measurable business value.",
    vision:
      "To be a trusted global technology partner recognised for engineering quality, integrity and innovation.",
    values: [
      { title: "Integrity", description: "Honest estimates, transparent progress and clear ownership." },
      { title: "Quality", description: "Code reviews, automated testing and documented architecture as standard." },
      { title: "Partnership", description: "We act as an extension of your team, not just a vendor." },
      { title: "Innovation", description: "Pragmatic adoption of modern tools, AI and cloud-native practices." },
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
  },

  // ----- Why choose us -----
  whyChooseUs: [
    {
      icon: "ShieldCheck",
      title: "Enterprise-grade quality",
      description: "Secure coding standards, code reviews and automated QA on every release.",
    },
    {
      icon: "Users",
      title: "Dedicated expert teams",
      description: "Senior engineers, designers and project managers assigned to your product.",
    },
    {
      icon: "Workflow",
      title: "Agile & transparent delivery",
      description: "Sprint-based delivery with demos, reports and direct access to your team.",
    },
    {
      icon: "Headset",
      title: "Long-term support",
      description: "Maintenance, monitoring and continuous improvement after launch.",
    },
  ],

  /**
   * Company statistics — UPDATE these with your real figures.
   * `value` is animated as a counter; `suffix` is appended.
   */
  stats: [
    { value: 10, suffix: "+", label: "Years of experience" },
    { value: 250, suffix: "+", label: "Projects delivered" },
    { value: 60, suffix: "+", label: "Engineers & specialists" },
    { value: 15, suffix: "+", label: "Countries served" },
  ],

  // ----- Delivery process (shown on home + service pages) -----
  process: [
    { title: "Discovery", description: "Workshops to understand goals, users, constraints and success metrics." },
    { title: "Planning & Design", description: "Architecture, roadmap, UX flows and interactive prototypes." },
    { title: "Development", description: "Agile sprints with continuous integration, testing and demos." },
    { title: "Launch & Scale", description: "Deployment, monitoring, optimisation and ongoing support." },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
