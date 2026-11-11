/**
 * ============================================================
 *  INDUSTRIES CONFIGURATION
 *  `icon` must be a key from src/components/ui/Icon.tsx.
 * ============================================================
 */

export type Industry = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  solutions: string[];
  image: string;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    icon: "HeartPulse",
    title: "Healthcare",
    short: "Secure digital health platforms for providers and patients.",
    description:
      "We build patient portals, telehealth solutions, clinic management systems and health data platforms with privacy and security at their core.",
    solutions: ["Patient portals", "Telemedicine platforms", "Clinic & hospital management", "Health data analytics"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "education",
    icon: "GraduationCap",
    title: "Education",
    short: "Learning platforms that engage students and empower educators.",
    description:
      "From learning management systems to virtual classrooms and student information systems, we help institutions deliver modern learning experiences.",
    solutions: ["Learning management systems", "Virtual classrooms", "Student information systems", "Assessment tools"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "finance",
    icon: "Landmark",
    title: "Finance",
    short: "Reliable fintech and banking software built for compliance.",
    description:
      "We develop digital banking, payments, accounting and lending platforms with robust security, audit trails and regulatory awareness.",
    solutions: ["Digital banking", "Payment systems", "Accounting & ERP", "Risk & fraud analytics"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "retail-ecommerce",
    icon: "ShoppingBag",
    title: "Retail & eCommerce",
    short: "Omnichannel commerce that converts and scales.",
    description:
      "We build online stores, marketplaces, POS and inventory systems that unify the customer experience across every channel.",
    solutions: ["eCommerce storefronts", "Marketplaces", "POS & inventory", "Personalisation engines"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "manufacturing",
    icon: "Factory",
    title: "Manufacturing",
    short: "Smart factory software and computer vision for quality and efficiency.",
    description:
      "We help manufacturers digitise operations with production tracking, quality inspection, IoT dashboards and predictive maintenance.",
    solutions: ["Production monitoring", "Visual quality inspection", "Predictive maintenance", "Supply chain visibility"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "logistics",
    icon: "Truck",
    title: "Logistics",
    short: "Real-time visibility across fleets, warehouses and deliveries.",
    description:
      "Our logistics solutions include fleet tracking, route optimisation, warehouse management and customer delivery portals.",
    solutions: ["Fleet tracking", "Route optimisation", "Warehouse management", "Proof of delivery"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "travel-tourism",
    icon: "Plane",
    title: "Travel & Tourism",
    short: "Booking platforms and travel apps that delight customers.",
    description:
      "We create booking engines, travel companion apps and hospitality management systems with seamless payments and personalisation.",
    solutions: ["Booking engines", "Travel mobile apps", "Hotel management", "Itinerary planning"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "enterprise",
    icon: "Building2",
    title: "Enterprise Businesses",
    short: "Scalable enterprise systems, integrations and AI adoption.",
    description:
      "We modernise enterprise technology with custom ERP and CRM systems, workflow automation, data platforms and AI-driven productivity tools.",
    solutions: ["ERP & CRM", "Workflow automation", "Data platforms", "Enterprise AI assistants"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
];
