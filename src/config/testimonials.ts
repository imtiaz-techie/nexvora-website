/**
 * ============================================================
 *  CLIENTS & TESTIMONIALS
 *  Only add REAL clients and REAL testimonials that you have
 *  permission to publish. While these arrays are empty, the
 *  site shows tasteful placeholder states instead.
 * ============================================================
 */

export type ClientLogo = { name: string; logo: string; url?: string };

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo?: string;
  projectSlug?: string; // links to a portfolio case study
};

export type SuccessStory = {
  title: string;
  summary: string;
  projectSlug: string;
};

/** Example: { name: "Acme Inc.", logo: "/clients/acme.svg", url: "https://acme.com" } */
export const clients: ClientLogo[] = [];

/** Example: { quote: "…", name: "Jane Doe", role: "CTO", company: "Acme Inc." } */
export const testimonials: Testimonial[] = [];

/**
 * Success stories highlight case studies from /portfolio.
 * These reference sample projects — update with your own.
 */
export const successStories: SuccessStory[] = [
  {
    title: "Unifying patient engagement",
    summary: "How a secure portal brought scheduling, records and telehealth into one experience.",
    projectSlug: "medicore-patient-portal",
  },
  {
    title: "Bringing AI to internal knowledge",
    summary: "A permission-aware AI assistant that answers questions with cited sources.",
    projectSlug: "documind-ai-assistant",
  },
  {
    title: "Scaling a multi-vendor marketplace",
    summary: "Vendor self-service, automated commissions and a faster mobile storefront.",
    projectSlug: "urbancart-marketplace",
  },
];
