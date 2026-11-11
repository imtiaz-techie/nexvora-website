/**
 * ============================================================
 *  BLOG CONFIGURATION
 *  Each post creates a page at /blog/[slug].
 *  Content is a list of blocks: paragraphs, headings and lists.
 * ============================================================
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO format: YYYY-MM-DD
  readTime: string;
  image: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-tech-stack",
    title: "How to Choose the Right Technology Stack for Your Next Product",
    excerpt:
      "A practical framework for selecting frameworks, databases and cloud services that balance speed, cost and long-term maintainability.",
    category: "Engineering",
    author: "Nexvora Editorial Team",
    date: "2026-10-14",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    content: [
      { type: "p", text: "Choosing a technology stack is one of the earliest — and most consequential — decisions in any software project. The right choice accelerates delivery and keeps maintenance costs low; the wrong one creates friction for years." },
      { type: "h2", text: "Start with the problem, not the tools" },
      { type: "p", text: "Before comparing frameworks, define your product’s core requirements: expected users, performance needs, integrations, data sensitivity and time-to-market. These constraints narrow the options quickly." },
      { type: "h2", text: "Key factors to evaluate" },
      { type: "ul", items: [
        "Team expertise and hiring market for the technology",
        "Ecosystem maturity, libraries and community support",
        "Scalability and performance characteristics",
        "Security track record and update cadence",
        "Total cost of ownership, including hosting and licences",
      ] },
      { type: "h2", text: "A pragmatic default" },
      { type: "p", text: "For many web products, a TypeScript front-end with Next.js, a Node.js or Python back-end and PostgreSQL offers an excellent balance of productivity, performance and talent availability. Specialised needs — such as heavy machine learning — may call for additional components." },
      { type: "p", text: "Whatever you choose, document the reasoning. Architecture decision records help future team members understand trade-offs and evolve the system confidently." },
    ],
  },
  {
    slug: "practical-ai-adoption-for-businesses",
    title: "Practical AI Adoption: Where Businesses Should Start",
    excerpt:
      "Generative AI is everywhere — but value comes from focused use cases. Here’s how to identify, validate and scale them responsibly.",
    category: "AI & Machine Learning",
    author: "Nexvora Editorial Team",
    date: "2026-09-02",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    content: [
      { type: "p", text: "Artificial intelligence can transform how organisations work, but successful adoption rarely starts with a grand strategy. It starts with a well-defined problem and measurable outcomes." },
      { type: "h2", text: "Identify high-value use cases" },
      { type: "ul", items: [
        "Repetitive knowledge work such as document review and summarisation",
        "Customer support triage and self-service answers",
        "Forecasting demand, churn or risk from historical data",
        "Extracting structured data from unstructured documents",
      ] },
      { type: "h2", text: "Validate before you scale" },
      { type: "p", text: "Run a time-boxed proof of concept with real data and clear success metrics. Measure accuracy, user satisfaction and cost per task before committing to a full rollout." },
      { type: "h2", text: "Build in governance from day one" },
      { type: "p", text: "Define what data the system can access, how outputs are reviewed and how errors are reported. Responsible AI is not a final step — it is part of the design." },
    ],
  },
  {
    slug: "cloud-cost-optimisation-guide",
    title: "Cloud Cost Optimisation: 8 Wins Most Teams Overlook",
    excerpt:
      "Cloud bills grow quietly. These practical techniques help engineering teams reduce spend without sacrificing reliability.",
    category: "Cloud & DevOps",
    author: "Nexvora Editorial Team",
    date: "2026-07-21",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    content: [
      { type: "p", text: "The flexibility of the cloud makes it easy to over-provision. A regular review of your architecture and usage patterns can uncover significant savings." },
      { type: "h2", text: "Quick wins" },
      { type: "ul", items: [
        "Right-size instances based on actual utilisation",
        "Schedule non-production environments to shut down out of hours",
        "Use reserved capacity or savings plans for steady workloads",
        "Apply storage lifecycle policies to move cold data to cheaper tiers",
        "Remove unattached volumes, idle load balancers and old snapshots",
        "Cache aggressively at the CDN and application layers",
        "Adopt containers or serverless for spiky workloads",
        "Tag resources and review cost reports by team and project",
      ] },
      { type: "h2", text: "Make it a habit" },
      { type: "p", text: "Cost optimisation works best as a continuous practice. Add cost dashboards to team rituals and include cost impact in architecture reviews." },
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
