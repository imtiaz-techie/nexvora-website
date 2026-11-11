/**
 * ============================================================
 *  SERVICES CONFIGURATION
 *  Each entry creates a card on /services and a detail page
 *  at /services/[slug].
 *  `icon` must be a key from src/components/ui/Icon.tsx.
 *  `relatedCategories` links portfolio projects to the service.
 * ============================================================
 */

import type { ProjectCategory } from "./projects";

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  overview: string;
  features: { title: string; description: string }[];
  benefits: string[];
  technologies: string[];
  relatedCategories: ProjectCategory[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    icon: "Code2",
    title: "Custom Software Development",
    short:
      "Tailor-made software built around your workflows, integrations and growth plans.",
    overview:
      "Off-the-shelf tools rarely fit how your business actually works. We design and engineer custom software — from internal operations platforms to customer-facing systems — with clean architecture, rigorous testing and documentation that your team can own long-term.",
    features: [
      { title: "Business process automation", description: "Replace spreadsheets and manual steps with reliable, auditable workflows." },
      { title: "ERP & CRM systems", description: "Modular platforms covering operations, finance, inventory and customer relationships." },
      { title: "Legacy modernisation", description: "Incrementally migrate legacy systems to modern, maintainable stacks." },
      { title: "Third-party integrations", description: "Connect payment gateways, ERPs, APIs and data sources securely." },
      { title: "API development", description: "Well-documented REST and GraphQL APIs designed for scale." },
      { title: "Quality assurance", description: "Unit, integration and end-to-end testing built into every sprint." },
    ],
    benefits: [
      "Software that fits your exact processes",
      "Full ownership of source code and IP",
      "Scalable architecture ready for growth",
      "Lower long-term licensing costs",
    ],
    technologies: ["Node.js", "Python", "Laravel", "PostgreSQL", "Docker", "AWS"],
    relatedCategories: ["Enterprise Software", "Web Development"],
    faqs: [
      { question: "How long does a custom software project take?", answer: "Most projects deliver a first production release in 8–16 weeks, depending on scope. We work in two-week sprints so you see progress continuously." },
      { question: "Do we own the source code?", answer: "Yes. All source code, documentation and intellectual property are transferred to you." },
      { question: "Can you work with our existing team?", answer: "Absolutely. We regularly collaborate with in-house teams, following your tooling and code standards." },
    ],
  },
  {
    slug: "web-application-development",
    icon: "Globe",
    title: "Web Application Development",
    short:
      "High-performance web apps, portals and SaaS platforms built with modern frameworks.",
    overview:
      "We build fast, secure and accessible web applications — from customer portals and SaaS products to complex dashboards. Our teams pair modern front-end frameworks with robust back-end services to deliver experiences that scale with your users.",
    features: [
      { title: "SaaS product development", description: "Multi-tenant platforms with subscriptions, roles and analytics." },
      { title: "Progressive web apps", description: "App-like experiences that work offline and load instantly." },
      { title: "Customer & partner portals", description: "Secure self-service portals integrated with your systems." },
      { title: "Admin dashboards", description: "Data-rich interfaces with real-time reporting and controls." },
      { title: "Performance optimisation", description: "Core Web Vitals tuning, caching and edge delivery." },
      { title: "Accessibility & SEO", description: "WCAG-aligned interfaces and technical SEO best practice." },
    ],
    benefits: [
      "Fast load times and excellent Core Web Vitals",
      "Responsive on every device",
      "Secure authentication and role management",
      "Cloud-native, horizontally scalable",
    ],
    technologies: ["React", "Next.js", "Node.js", "Laravel", "PostgreSQL", "AWS"],
    relatedCategories: ["Web Development", "Enterprise Software"],
    faqs: [
      { question: "Which framework do you recommend?", answer: "It depends on your needs. We frequently use Next.js for SEO-critical and product sites, and React with Node.js or Laravel for complex applications." },
      { question: "Do you provide hosting?", answer: "We set up and manage hosting on AWS or your preferred cloud provider, including CI/CD and monitoring." },
    ],
  },
  {
    slug: "mobile-application-development",
    icon: "Smartphone",
    title: "Mobile Application Development",
    short:
      "Native and cross-platform iOS and Android apps with polished user experiences.",
    overview:
      "From concept to App Store and Google Play, we design and build mobile applications that users love. We use Flutter and React Native for efficient cross-platform delivery, and native technologies where performance demands it.",
    features: [
      { title: "Cross-platform apps", description: "One codebase for iOS and Android with Flutter or React Native." },
      { title: "Native integrations", description: "Camera, GPS, biometrics, Bluetooth and push notifications." },
      { title: "Offline-first design", description: "Local storage and sync strategies for unreliable networks." },
      { title: "In-app payments", description: "Secure subscriptions and purchases across platforms." },
      { title: "App store publishing", description: "Store listing, review compliance and release management." },
      { title: "Analytics & crash reporting", description: "Insight into usage and stability from day one." },
    ],
    benefits: [
      "Faster time-to-market with shared codebases",
      "Consistent experience across devices",
      "Secure data handling and authentication",
      "Ongoing updates and OS compatibility",
    ],
    technologies: ["Flutter", "React Native", "Node.js", "Firebase", "AWS"],
    relatedCategories: ["Mobile Applications"],
    faqs: [
      { question: "Flutter or React Native?", answer: "Both are excellent. We recommend based on your existing team skills, design requirements and integration needs." },
      { question: "Do you handle App Store submission?", answer: "Yes, we manage the complete publishing process for both Apple App Store and Google Play." },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "PenTool",
    title: "UI/UX Design",
    short:
      "Research-driven product design that is intuitive, accessible and on-brand.",
    overview:
      "Great products start with understanding people. Our designers combine user research, information architecture and visual design to create interfaces that are simple to use and aligned with your brand — backed by scalable design systems.",
    features: [
      { title: "User research", description: "Interviews, surveys and usability testing to validate decisions." },
      { title: "Wireframes & prototypes", description: "Interactive prototypes to test ideas before development." },
      { title: "Visual design", description: "Modern, consistent interfaces that reflect your brand." },
      { title: "Design systems", description: "Reusable component libraries for consistency at scale." },
      { title: "UX audits", description: "Expert reviews identifying friction and conversion opportunities." },
      { title: "Accessibility", description: "Inclusive design aligned with WCAG guidelines." },
    ],
    benefits: [
      "Higher user satisfaction and retention",
      "Reduced development rework",
      "Consistent brand experience",
      "Data-informed design decisions",
    ],
    technologies: ["Figma", "Adobe Creative Cloud", "Framer", "Storybook"],
    relatedCategories: ["UI/UX Design"],
    faqs: [
      { question: "Can you redesign an existing product?", answer: "Yes. We start with a UX audit and analytics review, then prioritise improvements with the highest impact." },
      { question: "Do you deliver developer-ready files?", answer: "We deliver organised Figma files, design tokens and component specifications ready for development." },
    ],
  },
  {
    slug: "ai-machine-learning",
    icon: "BrainCircuit",
    title: "AI & Machine Learning",
    short:
      "Practical AI solutions — from predictive analytics to generative AI assistants.",
    overview:
      "We help organisations apply artificial intelligence where it creates real value. Our team designs, trains and deploys machine learning models and integrates large language models into products and workflows — with attention to data privacy, accuracy and cost.",
    features: [
      { title: "Generative AI & LLM integration", description: "Assistants, document Q&A and content automation using leading models." },
      { title: "Predictive analytics", description: "Forecast demand, churn and risk using your historical data." },
      { title: "Natural language processing", description: "Classification, extraction and sentiment analysis of text." },
      { title: "Recommendation engines", description: "Personalised product and content recommendations." },
      { title: "MLOps", description: "Model deployment, monitoring and retraining pipelines." },
      { title: "AI strategy", description: "Identify high-value use cases and build a practical roadmap." },
    ],
    benefits: [
      "Automate repetitive knowledge work",
      "Better decisions from your data",
      "Responsible, privacy-aware implementation",
      "Measurable ROI from targeted use cases",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "PostgreSQL"],
    relatedCategories: ["AI & Machine Learning"],
    faqs: [
      { question: "Do we need a lot of data to start?", answer: "Not always. Many generative AI use cases work with your existing documents, and we can advise on data collection for predictive models." },
      { question: "Is our data kept private?", answer: "Yes. We design solutions with strict data governance and can deploy models within your own cloud environment." },
    ],
  },
  {
    slug: "image-processing",
    icon: "ScanEye",
    title: "Image Processing",
    short:
      "Computer vision and image processing for detection, recognition and automation.",
    overview:
      "We build computer vision systems that extract meaning from images and video — automating inspection, recognition and document processing. Solutions run in the cloud, on-premise or on edge devices depending on your requirements.",
    features: [
      { title: "Object detection", description: "Identify and track objects in images and video streams." },
      { title: "OCR & document processing", description: "Extract structured data from invoices, forms and IDs." },
      { title: "Quality inspection", description: "Automated defect detection for manufacturing lines." },
      { title: "Image enhancement", description: "Background removal, restoration and batch editing pipelines." },
      { title: "Facial & pattern recognition", description: "Secure, consent-aware recognition systems." },
      { title: "Edge deployment", description: "Optimised models for cameras and embedded devices." },
    ],
    benefits: [
      "Reduce manual inspection effort",
      "Faster, more consistent processing",
      "Scalable batch and real-time pipelines",
      "Integrates with existing systems",
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Docker", "AWS"],
    relatedCategories: ["AI & Machine Learning"],
    faqs: [
      { question: "Can this run without internet?", answer: "Yes. We can optimise models for on-premise servers or edge devices." },
      { question: "How accurate are the models?", answer: "Accuracy depends on data quality. We define target metrics up front and validate against real-world samples before launch." },
    ],
  },
  {
    slug: "ecommerce-development",
    icon: "ShoppingCart",
    title: "eCommerce Development",
    short:
      "Scalable online stores and marketplaces that convert and grow.",
    overview:
      "We build eCommerce experiences that are fast, secure and designed to convert — from branded storefronts to multi-vendor marketplaces and headless commerce platforms integrated with your inventory, payments and logistics.",
    features: [
      { title: "Custom storefronts", description: "Branded, high-converting shopping experiences." },
      { title: "Headless commerce", description: "Flexible front-ends powered by modern commerce APIs." },
      { title: "Multi-vendor marketplaces", description: "Vendor onboarding, commissions and payouts." },
      { title: "Payment gateway integration", description: "Secure checkout with local and global providers." },
      { title: "Inventory & order management", description: "Real-time stock, fulfilment and returns workflows." },
      { title: "Conversion optimisation", description: "Analytics, A/B testing and checkout improvements." },
    ],
    benefits: [
      "Fast, mobile-first shopping experience",
      "Secure payments and PCI-aware design",
      "Integrated operations and fulfilment",
      "Built to scale with seasonal traffic",
    ],
    technologies: ["Next.js", "React", "Laravel", "Node.js", "MySQL", "AWS"],
    relatedCategories: ["eCommerce"],
    faqs: [
      { question: "Do you work with Shopify or WooCommerce?", answer: "Yes, as well as fully custom and headless commerce builds. We recommend the platform that fits your catalogue and growth plans." },
      { question: "Can you migrate our existing store?", answer: "We handle product, customer and order migration with SEO-safe redirects." },
    ],
  },
  {
    slug: "digital-marketing",
    icon: "Megaphone",
    title: "Digital Marketing",
    short:
      "Data-driven SEO, content and performance marketing to grow your reach.",
    overview:
      "Technology is only valuable when people find it. Our digital marketing team helps you grow visibility, attract qualified leads and measure results through technical SEO, content strategy, paid campaigns and analytics.",
    features: [
      { title: "Search engine optimisation", description: "Technical, on-page and content SEO for sustainable growth." },
      { title: "Performance marketing", description: "Search and social campaigns optimised for ROI." },
      { title: "Content strategy", description: "Thought leadership, blogs and landing pages that convert." },
      { title: "Social media management", description: "Consistent brand presence across key channels." },
      { title: "Analytics & tracking", description: "Conversion tracking, dashboards and attribution." },
      { title: "Email marketing", description: "Automated journeys and newsletters." },
    ],
    benefits: [
      "More qualified traffic and leads",
      "Transparent reporting",
      "Improved brand authority",
      "Optimised marketing spend",
    ],
    technologies: ["Google Analytics", "Google Ads", "Search Console", "HubSpot"],
    relatedCategories: ["Web Development", "eCommerce"],
    faqs: [
      { question: "How soon will we see SEO results?", answer: "Technical fixes can show impact within weeks; sustained organic growth typically builds over 3–6 months." },
    ],
  },
  {
    slug: "cloud-solutions",
    icon: "Cloud",
    title: "Cloud Solutions",
    short:
      "Cloud migration, DevOps and infrastructure engineered for reliability.",
    overview:
      "We design, migrate and operate cloud infrastructure that is secure, cost-efficient and resilient. Our DevOps engineers automate delivery pipelines and monitoring so your teams can ship faster with confidence.",
    features: [
      { title: "Cloud migration", description: "Plan and execute migrations with minimal downtime." },
      { title: "DevOps & CI/CD", description: "Automated build, test and deployment pipelines." },
      { title: "Containerisation", description: "Docker and Kubernetes for portable, scalable workloads." },
      { title: "Infrastructure as code", description: "Reproducible environments with Terraform and CloudFormation." },
      { title: "Monitoring & observability", description: "Logs, metrics and alerts for proactive operations." },
      { title: "Cost optimisation", description: "Right-sizing and architecture reviews to reduce spend." },
    ],
    benefits: [
      "Higher availability and resilience",
      "Faster, safer releases",
      "Lower infrastructure costs",
      "Security and compliance best practice",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    relatedCategories: ["Enterprise Software", "Web Development"],
    faqs: [
      { question: "Which cloud providers do you support?", answer: "We primarily work with AWS and also support Azure and Google Cloud." },
      { question: "Can you manage our infrastructure long-term?", answer: "Yes, we offer managed DevOps with monitoring, patching and incident response." },
    ],
  },
  {
    slug: "it-consultancy",
    icon: "Lightbulb",
    title: "IT Consultancy",
    short:
      "Strategic technology guidance to plan, de-risk and accelerate your initiatives.",
    overview:
      "Our consultants help leadership teams make confident technology decisions — from digital transformation roadmaps and architecture reviews to vendor selection and team augmentation.",
    features: [
      { title: "Digital transformation strategy", description: "Roadmaps aligned to business outcomes." },
      { title: "Architecture review", description: "Assess scalability, security and maintainability." },
      { title: "Technology selection", description: "Objective evaluation of platforms and vendors." },
      { title: "Security assessment", description: "Identify vulnerabilities and compliance gaps." },
      { title: "Product discovery", description: "Validate ideas and define MVP scope." },
      { title: "Team augmentation", description: "Experienced engineers to strengthen your team." },
    ],
    benefits: [
      "Reduced project risk",
      "Clear, prioritised roadmap",
      "Independent expert perspective",
      "Faster decision-making",
    ],
    technologies: ["AWS", "Docker", "Node.js", "Python", "PostgreSQL"],
    relatedCategories: ["Enterprise Software"],
    faqs: [
      { question: "Do you offer short engagements?", answer: "Yes. Discovery workshops and architecture reviews can be completed in one to four weeks." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
