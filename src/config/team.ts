/**
 * ============================================================
 *  TEAM CONFIGURATION
 *  Replace the placeholder names with your real team.
 *  `photo` (optional): path in /public, e.g. "/team/jane.jpg".
 *  Without a photo, a professional initials avatar is shown.
 *  `group` decides which section the person appears in.
 * ============================================================
 */

export const teamGroups = ["Leadership", "Engineering", "Design", "Project Management"] as const;
export type TeamGroup = (typeof teamGroups)[number];

export type TeamMember = {
  name: string;
  role: string;
  group: TeamGroup;
  bio?: string;
  photo?: string;
  linkedin?: string;
  github?: string;
};

export const team: TeamMember[] = [
  // Leadership
  { name: "Founder Name", role: "Founder & Chief Executive Officer", group: "Leadership", bio: "Sets company vision and leads client partnerships and strategic growth.", linkedin: "" },
  { name: "CTO Name", role: "Chief Technology Officer", group: "Leadership", bio: "Leads architecture, engineering standards and technology strategy.", linkedin: "" },
  { name: "COO Name", role: "Chief Operating Officer", group: "Leadership", bio: "Oversees delivery operations, quality and client success.", linkedin: "" },

  // Engineering
  { name: "Developer Name", role: "Senior Full-Stack Engineer", group: "Engineering", github: "" },
  { name: "Developer Name", role: "Lead Mobile Engineer", group: "Engineering", github: "" },
  { name: "Developer Name", role: "AI / ML Engineer", group: "Engineering", github: "" },
  { name: "Developer Name", role: "DevOps & Cloud Engineer", group: "Engineering", github: "" },

  // Design
  { name: "Designer Name", role: "Head of Product Design", group: "Design" },
  { name: "Designer Name", role: "Senior UI/UX Designer", group: "Design" },

  // Project Management
  { name: "Manager Name", role: "Senior Project Manager", group: "Project Management" },
  { name: "Manager Name", role: "Scrum Master & Delivery Lead", group: "Project Management" },
];
