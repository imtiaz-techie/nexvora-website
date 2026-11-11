/**
 * ============================================================
 *  PORTFOLIO CONFIGURATION
 *  Each project creates a card on /portfolio and a case study
 *  page at /portfolio/[slug].
 *
 *  NOTE: The projects below are SAMPLE CASE STUDIES that show
 *  the structure. Replace them with your real projects.
 *
 *  Images:
 *   - `coverImage` / `screenshots`: optional real image paths
 *     (e.g. "/projects/my-app/cover.jpg" placed in /public).
 *   - If omitted, a generated UI mockup (`mockup`) is rendered.
 *  Client:
 *   - Fill `client` ONLY when you have permission to name them.
 * ============================================================
 */

export const projectCategories = [
  "Web Development",
  "Mobile Applications",
  "eCommerce",
  "Enterprise Software",
  "AI & Machine Learning",
  "UI/UX Design",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type MockupVariant =
  | "dashboard"
  | "mobile"
  | "storefront"
  | "analytics"
  | "chat"
  | "vision"
  | "learning";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  industry: string;
  summary: string;
  overview: string;
  client?: { name: string; location?: string; website?: string };
  duration?: string;
  year?: string;
  services: string[];
  challenges: string[];
  solutions: string[];
  technologies: string[];
  features: { title: string; description: string }[];
  outcomes: string[];
  mockup: { variant: MockupVariant; from: string; to: string };
  screenshotMockups: MockupVariant[];
  coverImage?: string;
  screenshots?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "medicore-patient-portal",
    title: "MediCore Patient Portal",
    category: "Web Development",
    industry: "Healthcare",
    summary:
      "A secure patient portal for appointment booking, records access and telehealth consultations.",
    overview:
      "MediCore is a patient engagement platform that connects patients, doctors and administrative staff in one secure web application. Patients can book appointments, view lab results and join video consultations, while clinics manage schedules and records from a unified dashboard.",
    duration: "6 months",
    year: "2024",
    services: ["Web Application Development", "UI/UX Design", "Cloud Solutions"],
    challenges: [
      "Fragmented scheduling across multiple departments led to double bookings.",
      "Sensitive health data required strict access control and audit trails.",
      "Patients of all ages needed an interface that was simple and accessible.",
    ],
    solutions: [
      "Centralised scheduling engine with real-time availability and automated reminders.",
      "Role-based access, encrypted storage and complete activity logging.",
      "Accessible, high-contrast UI tested with real patients across age groups.",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    features: [
      { title: "Online appointment booking", description: "Real-time availability across doctors and departments." },
      { title: "Telehealth consultations", description: "Secure in-browser video calls with session notes." },
      { title: "Medical records access", description: "Lab results and prescriptions available to patients." },
      { title: "Automated reminders", description: "Email and SMS reminders reduce missed appointments." },
    ],
    outcomes: [
      "Significantly reduced administrative workload for front-desk staff.",
      "Fewer missed appointments thanks to automated reminders.",
      "A single, secure source of truth for patient interactions.",
    ],
    mockup: { variant: "dashboard", from: "#0EA5E9", to: "#2563EB" },
    screenshotMockups: ["dashboard", "analytics", "mobile"],
    featured: true,
  },
  {
    slug: "learnsphere-lms",
    title: "LearnSphere Learning Platform",
    category: "Web Development",
    industry: "Education",
    summary:
      "A scalable learning management system with live classes, assessments and progress analytics.",
    overview:
      "LearnSphere is a learning management system for institutions and training providers. It brings courses, live classes, assignments and assessments into one platform, with analytics that help instructors support learners proactively.",
    duration: "5 months",
    year: "2024",
    services: ["Web Application Development", "UI/UX Design"],
    challenges: [
      "Course content was spread across multiple disconnected tools.",
      "Instructors lacked visibility into learner engagement.",
      "Peak traffic during exams caused performance issues.",
    ],
    solutions: [
      "Unified course builder supporting video, documents, quizzes and live sessions.",
      "Learner analytics dashboards highlighting at-risk students.",
      "Auto-scaling cloud architecture with CDN-delivered media.",
    ],
    technologies: ["React", "Laravel", "MySQL", "AWS"],
    features: [
      { title: "Course builder", description: "Drag-and-drop modules with rich media." },
      { title: "Live classes", description: "Scheduled virtual classrooms with attendance." },
      { title: "Assessments", description: "Quizzes, assignments and automated grading." },
      { title: "Progress analytics", description: "Learner and cohort performance insights." },
    ],
    outcomes: [
      "One platform replaced several disconnected tools.",
      "Stable performance during peak examination periods.",
      "Instructors gained clear visibility into learner progress.",
    ],
    mockup: { variant: "learning", from: "#8B5CF6", to: "#6366F1" },
    screenshotMockups: ["learning", "analytics", "dashboard"],
  },
  {
    slug: "fleetpulse-logistics-app",
    title: "FleetPulse Logistics App",
    category: "Mobile Applications",
    industry: "Logistics",
    summary:
      "Real-time fleet tracking and proof-of-delivery app for drivers and dispatchers.",
    overview:
      "FleetPulse gives logistics teams live visibility of vehicles and deliveries. Drivers use a mobile app for routes, status updates and electronic proof of delivery, while dispatchers monitor the fleet from a web control centre.",
    duration: "4 months",
    year: "2023",
    services: ["Mobile Application Development", "Cloud Solutions"],
    challenges: [
      "Dispatchers relied on phone calls to track driver locations.",
      "Paper proof-of-delivery caused billing delays and disputes.",
      "Drivers frequently operated in low-connectivity areas.",
    ],
    solutions: [
      "Background GPS tracking with live map for dispatchers.",
      "Digital signatures and photo capture at delivery.",
      "Offline-first app that syncs automatically when back online.",
    ],
    technologies: ["Flutter", "Node.js", "PostgreSQL", "AWS"],
    features: [
      { title: "Live fleet map", description: "Real-time vehicle positions and ETAs." },
      { title: "Route optimisation", description: "Efficient multi-stop routing for drivers." },
      { title: "Electronic POD", description: "Signatures, photos and timestamps." },
      { title: "Offline mode", description: "Works without connectivity and syncs later." },
    ],
    outcomes: [
      "Dispatch teams moved from phone calls to live dashboards.",
      "Faster invoicing with instant digital proof of delivery.",
      "Reliable operation in low-connectivity regions.",
    ],
    mockup: { variant: "mobile", from: "#F59E0B", to: "#EF4444" },
    screenshotMockups: ["mobile", "dashboard", "analytics"],
    featured: true,
  },
  {
    slug: "urbancart-marketplace",
    title: "UrbanCart Marketplace",
    category: "eCommerce",
    industry: "Retail & eCommerce",
    summary:
      "A multi-vendor marketplace with vendor dashboards, secure payments and order tracking.",
    overview:
      "UrbanCart is a multi-vendor eCommerce marketplace enabling independent sellers to reach customers through a single storefront. The platform covers vendor onboarding, catalogue management, payments, commissions and fulfilment tracking.",
    duration: "7 months",
    year: "2024",
    services: ["eCommerce Development", "UI/UX Design", "Digital Marketing"],
    challenges: [
      "Vendors needed independent control while keeping a consistent brand.",
      "Split payments and commissions were complex to reconcile.",
      "Slow page loads hurt mobile conversion.",
    ],
    solutions: [
      "Vendor portal with catalogue, order and payout management.",
      "Automated commission calculation and split settlements.",
      "Headless storefront optimised for mobile performance.",
    ],
    technologies: ["Next.js", "Laravel", "MySQL", "AWS", "Docker"],
    features: [
      { title: "Vendor dashboards", description: "Products, orders, payouts and analytics per vendor." },
      { title: "Smart search", description: "Fast faceted search across the catalogue." },
      { title: "Secure checkout", description: "Multiple payment methods and saved carts." },
      { title: "Order tracking", description: "End-to-end shipment status for customers." },
    ],
    outcomes: [
      "Streamlined vendor onboarding and self-service management.",
      "Automated reconciliation of commissions and payouts.",
      "Improved mobile page speed and checkout experience.",
    ],
    mockup: { variant: "storefront", from: "#EC4899", to: "#F97316" },
    screenshotMockups: ["storefront", "dashboard", "mobile"],
    featured: true,
  },
  {
    slug: "finledger-erp",
    title: "FinLedger Enterprise ERP",
    category: "Enterprise Software",
    industry: "Finance",
    summary:
      "A modular ERP covering accounting, procurement, inventory and executive reporting.",
    overview:
      "FinLedger is a modular enterprise resource planning system built for multi-branch organisations. It unifies accounting, procurement, inventory and HR data, giving leadership consolidated, real-time reporting.",
    duration: "10 months",
    year: "2023",
    services: ["Custom Software Development", "Cloud Solutions", "IT Consultancy"],
    challenges: [
      "Branch data was consolidated manually at month end.",
      "Approval workflows were email-based and hard to audit.",
      "Legacy desktop software could not support remote teams.",
    ],
    solutions: [
      "Centralised cloud ERP with branch-level permissions.",
      "Configurable multi-level approval workflows with audit trail.",
      "Phased migration from the legacy system with data validation.",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    features: [
      { title: "General ledger", description: "Multi-currency accounting with automated journals." },
      { title: "Procurement", description: "Requisitions, purchase orders and vendor management." },
      { title: "Inventory", description: "Multi-warehouse stock with reorder alerts." },
      { title: "Executive dashboards", description: "Consolidated KPIs across branches." },
    ],
    outcomes: [
      "Month-end consolidation moved from manual work to real-time reporting.",
      "Fully auditable approval processes.",
      "Secure remote access for distributed teams.",
    ],
    mockup: { variant: "analytics", from: "#10B981", to: "#0EA5E9" },
    screenshotMockups: ["analytics", "dashboard", "learning"],
  },
  {
    slug: "documind-ai-assistant",
    title: "DocuMind AI Assistant",
    category: "AI & Machine Learning",
    industry: "Enterprise Businesses",
    summary:
      "A generative AI assistant that answers questions from internal documents with citations.",
    overview:
      "DocuMind helps employees find answers in large volumes of internal documentation. Using retrieval-augmented generation, it answers natural-language questions with cited sources while respecting document-level permissions.",
    duration: "3 months",
    year: "2025",
    services: ["AI & Machine Learning", "Web Application Development"],
    challenges: [
      "Employees spent significant time searching policies and manuals.",
      "Answers had to be accurate and traceable to source documents.",
      "Sensitive documents must only be visible to authorised staff.",
    ],
    solutions: [
      "Retrieval-augmented generation pipeline with vector search.",
      "Every answer includes source citations for verification.",
      "Permission-aware retrieval synchronised with existing access controls.",
    ],
    technologies: ["Python", "PyTorch", "Next.js", "PostgreSQL", "AWS"],
    features: [
      { title: "Natural language Q&A", description: "Ask questions in plain language." },
      { title: "Source citations", description: "Every answer links to its source." },
      { title: "Access control", description: "Respects existing document permissions." },
      { title: "Admin analytics", description: "Insights into common questions and gaps." },
    ],
    outcomes: [
      "Faster access to internal knowledge for employees.",
      "Verifiable answers increased trust in AI-generated responses.",
      "Identified documentation gaps from frequently asked questions.",
    ],
    mockup: { variant: "chat", from: "#6366F1", to: "#06B6D4" },
    screenshotMockups: ["chat", "analytics", "dashboard"],
    featured: true,
  },
  {
    slug: "visionqc-defect-detection",
    title: "VisionQC Defect Detection",
    category: "AI & Machine Learning",
    industry: "Manufacturing",
    summary:
      "Computer vision system that detects product defects on the production line in real time.",
    overview:
      "VisionQC uses cameras and deep learning models to inspect products on the production line, flagging defects in real time and logging quality data for analysis.",
    duration: "5 months",
    year: "2024",
    services: ["Image Processing", "AI & Machine Learning"],
    challenges: [
      "Manual visual inspection was slow and inconsistent between shifts.",
      "Defect data was not captured for root-cause analysis.",
      "Inference had to run on-site with low latency.",
    ],
    solutions: [
      "Custom-trained detection models for known defect types.",
      "Quality dashboard logging every inspection with images.",
      "Edge deployment on industrial PCs beside the line.",
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "Docker"],
    features: [
      { title: "Real-time inspection", description: "Detect defects as products pass the camera." },
      { title: "Defect classification", description: "Categorise defects by type and severity." },
      { title: "Quality analytics", description: "Trends by shift, line and product." },
      { title: "Edge inference", description: "Runs on-premise without cloud dependency." },
    ],
    outcomes: [
      "Consistent inspection quality across all shifts.",
      "Structured defect data enabled root-cause analysis.",
      "Low-latency inference directly on the production floor.",
    ],
    mockup: { variant: "vision", from: "#22C55E", to: "#14B8A6" },
    screenshotMockups: ["vision", "analytics", "dashboard"],
  },
  {
    slug: "wayfare-travel-app",
    title: "Wayfare Travel Companion",
    category: "Mobile Applications",
    industry: "Travel & Tourism",
    summary:
      "A travel booking and itinerary app with personalised recommendations.",
    overview:
      "Wayfare is a mobile travel companion that lets users discover destinations, book stays and experiences, and manage itineraries in one place — with personalised suggestions based on preferences.",
    duration: "5 months",
    year: "2024",
    services: ["Mobile Application Development", "UI/UX Design", "AI & Machine Learning"],
    challenges: [
      "Travellers juggled multiple apps for bookings and plans.",
      "Generic recommendations led to low engagement.",
      "Itineraries needed to be available offline abroad.",
    ],
    solutions: [
      "Unified booking flow for stays, transport and experiences.",
      "Recommendation engine based on preferences and behaviour.",
      "Offline itinerary access with automatic sync.",
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    features: [
      { title: "Smart itineraries", description: "Auto-organised day-by-day plans." },
      { title: "Personalised discovery", description: "Recommendations tailored to each traveller." },
      { title: "In-app booking", description: "Stays and experiences with secure payment." },
      { title: "Offline access", description: "Tickets and plans available without data." },
    ],
    outcomes: [
      "One app for discovery, booking and itinerary management.",
      "More relevant recommendations for users.",
      "Reliable offline access while travelling.",
    ],
    mockup: { variant: "mobile", from: "#06B6D4", to: "#3B82F6" },
    screenshotMockups: ["mobile", "storefront", "chat"],
  },
  {
    slug: "pulsewallet-banking-redesign",
    title: "PulseWallet Banking UX Redesign",
    category: "UI/UX Design",
    industry: "Finance",
    summary:
      "End-to-end UX research and redesign of a digital banking experience and design system.",
    overview:
      "A complete UX overhaul of a digital banking experience across web and mobile, including user research, new information architecture, a scalable design system and validated high-fidelity prototypes.",
    duration: "3 months",
    year: "2025",
    services: ["UI/UX Design"],
    challenges: [
      "Users struggled to find common actions such as transfers.",
      "Inconsistent UI across web and mobile channels.",
      "Accessibility issues for users with visual impairments.",
    ],
    solutions: [
      "Research-led information architecture focused on top tasks.",
      "Unified design system with tokens for web and mobile.",
      "Accessible colour, typography and interaction patterns.",
    ],
    technologies: ["Figma", "Framer", "Storybook"],
    features: [
      { title: "User research", description: "Interviews and usability tests with customers." },
      { title: "Design system", description: "Reusable components and design tokens." },
      { title: "Interactive prototypes", description: "Validated flows ready for development." },
      { title: "Accessibility", description: "WCAG-aligned contrast and interactions." },
    ],
    outcomes: [
      "Simpler navigation to the most frequent banking tasks.",
      "Consistent experience across all digital channels.",
      "A design system that speeds up future development.",
    ],
    mockup: { variant: "dashboard", from: "#1E3A8A", to: "#7C3AED" },
    screenshotMockups: ["mobile", "dashboard", "analytics"],
  },
  {
    slug: "stockflow-retail-pos",
    title: "StockFlow Retail Operations",
    category: "Enterprise Software",
    industry: "Retail & eCommerce",
    summary:
      "Point-of-sale and inventory platform unifying physical stores and online sales.",
    overview:
      "StockFlow connects in-store point-of-sale, warehouse inventory and online orders in one platform, giving retailers a single view of stock, sales and customers.",
    duration: "6 months",
    year: "2023",
    services: ["Custom Software Development", "eCommerce Development"],
    challenges: [
      "Stock levels differed between stores and the online shop.",
      "Separate systems for POS and eCommerce caused manual reconciliation.",
      "Store managers lacked real-time sales visibility.",
    ],
    solutions: [
      "Single inventory source synchronised across all channels.",
      "Cloud POS integrated with online orders and returns.",
      "Real-time dashboards for store and regional managers.",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    features: [
      { title: "Cloud POS", description: "Fast checkout with offline support." },
      { title: "Omnichannel inventory", description: "Real-time stock across stores and online." },
      { title: "Customer profiles", description: "Unified purchase history and loyalty." },
      { title: "Sales analytics", description: "Live performance by store and product." },
    ],
    outcomes: [
      "Accurate, real-time stock across every channel.",
      "Eliminated manual reconciliation between systems.",
      "Managers gained live visibility of store performance.",
    ],
    mockup: { variant: "storefront", from: "#0F766E", to: "#2563EB" },
    screenshotMockups: ["analytics", "storefront", "dashboard"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
