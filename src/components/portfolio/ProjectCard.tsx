import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/config/projects";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10">
      <Link href={`/portfolio/${project.slug}`} className="relative block aspect-[16/11] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
          <ProjectVisual project={project} image={project.coverImage} />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900 backdrop-blur">
          {project.category}
        </span>
        <span className="absolute inset-0 grid place-items-center bg-navy-950/0 opacity-0 transition duration-300 group-hover:bg-navy-950/40 group-hover:opacity-100">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-navy-900 shadow-xl">
            <ArrowUpRight className="h-6 w-6" />
          </span>
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{project.industry}</p>
        <h3 className="mt-2 text-xl font-bold">
          <Link href={`/portfolio/${project.slug}`} className="transition hover:text-brand-600">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
          {project.technologies.slice(0, 4).map((t) => (
            <li key={t} className="rounded-md bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-700">
              {t}
            </li>
          ))}
          {project.technologies.length > 4 && (
            <li className="rounded-md bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-500">
              +{project.technologies.length - 4}
            </li>
          )}
        </ul>
        <Link
          href={`/portfolio/${project.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          View Details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          <span className="sr-only">: {project.title}</span>
        </Link>
      </div>
    </article>
  );
}
