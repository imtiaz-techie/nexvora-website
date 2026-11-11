/**
 * ============================================================
 *  TECHNOLOGY STACK
 *  `logo` can be any image URL or a local path in /public.
 *  Logos are loaded from the Devicon project (MIT licensed).
 * ============================================================
 */

const devicon = (name: string, file = `${name}-original.svg`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${file}`;

export type Technology = { name: string; logo: string; group: string };

export const technologyGroups = ["Frontend", "Backend", "Mobile", "Database", "Cloud & DevOps", "AI & ML"] as const;

export const technologies: Technology[] = [
  { name: "React", logo: devicon("react"), group: "Frontend" },
  { name: "Next.js", logo: devicon("nextjs"), group: "Frontend" },
  { name: "Node.js", logo: devicon("nodejs"), group: "Backend" },
  { name: "Python", logo: devicon("python"), group: "Backend" },
  { name: "Laravel", logo: devicon("laravel"), group: "Backend" },
  { name: "PHP", logo: devicon("php"), group: "Backend" },
  { name: "Flutter", logo: devicon("flutter"), group: "Mobile" },
  { name: "React Native", logo: devicon("react"), group: "Mobile" },
  { name: "MySQL", logo: devicon("mysql"), group: "Database" },
  { name: "PostgreSQL", logo: devicon("postgresql"), group: "Database" },
  { name: "AWS", logo: devicon("amazonwebservices", "amazonwebservices-original-wordmark.svg"), group: "Cloud & DevOps" },
  { name: "Docker", logo: devicon("docker"), group: "Cloud & DevOps" },
  { name: "TensorFlow", logo: devicon("tensorflow"), group: "AI & ML" },
  { name: "PyTorch", logo: devicon("pytorch"), group: "AI & ML" },
];
