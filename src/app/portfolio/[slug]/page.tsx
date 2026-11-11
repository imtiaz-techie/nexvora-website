import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building, Calendar, CheckCircle2, Clock, Layers, Lightbulb, Target, TrendingUp } from "lucide-react";
import { getProject, projects } from "@/config/projects";
import { technologies } from "@/config/technologies";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { TechLogo } from "@/components/ui/TechLogo";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { CTA } from "@/components/sections/CTA";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.title} — Case Study`,
    description: project.summary,
    path: `/portfolio/${slug}`,
    image: project.coverImage,
    type: "article",
  });
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3);
  const moreProjects = related.length ? related : projects.filter((p) => p.slug !== slug).slice(0, 3);
  const logoFor = (name: string) => technologies.find((t) => t.name === name)?.logo ?? "";

  const screenshots = project.screenshots?.length
    ? project.screenshots.map((src) => ({ src, variant: undefined }))
    : project.screenshotMockups.map((variant) => ({ src: undefined, variant }));

  const facts = [
    { icon: Layers, label: "Category", value: project.category },
    { icon: Building, label: "Industry", value: project.industry },
    project.duration && { icon: Clock, label: "Duration", value: project.duration },
    project.year && { icon: Calendar, label: "Year", value: project.year },
  ].filter(Boolean) as { icon: typeof Layers; label: string; value: string }[];

  return (
    <>
      <PageHero
        eyebrow={`Case study · ${project.category}`}
        title={project.title}
        description={project.summary}
        breadcrumbs={[{ label: "Portfolio", href: "/portfolio" }, { label: project.title }]}
      />

      {/* Cover */}
      <section className="relative bg-white">
        <div className="container-x -mt-10 md:-mt-14">
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20 ring-1 ring-black/5">
            <ProjectVisual project={project} image={project.coverImage} priority sizes="(min-width: 1280px) 1200px, 100vw" />
          </Reveal>
        </div>
      </section>

      {/* Overview + facts */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <h2 className="text-3xl font-bold">Project overview</h2>
            <p className="mt-6 text-lg leading-relaxed">{project.overview}</p>
            <h3 className="mt-10 text-xl font-bold">Services provided</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.services.map((s) => (
                <li key={s} className="rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-8">
              <h3 className="text-lg font-bold">Project details</h3>
              <dl className="mt-6 space-y-5">
                {facts.map(({ icon: I, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
                      <I className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-slate-500">{label}</dt>
                      <dd className="font-semibold text-navy-900">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              {/* Client information — only shown when provided in config */}
              {project.client && (
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Client</p>
                  <p className="mt-1 font-display text-lg font-bold text-navy-900">{project.client.name}</p>
                  {project.client.location && <p className="text-sm">{project.client.location}</p>}
                  {project.client.website && (
                    <a href={project.client.website} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-semibold text-brand-600 hover:underline">
                      Visit website
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenges & solutions */}
      <section className="section-y bg-slate-50">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-rose-50 text-rose-500">
              <Target className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold">The challenges</h2>
            <ul className="mt-6 space-y-4">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-0.5 font-display text-sm font-bold text-rose-400">{String(i + 1).padStart(2, "0")}</span>
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white">
              <Lightbulb className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-white">Our solution</h2>
            <ul className="mt-6 space-y-4">
              {project.solutions.map((s, i) => (
                <li key={i} className="flex gap-4 text-navy-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="text-3xl font-bold">Screenshots</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {screenshots.map((s, i) => (
              <Reveal
                key={i}
                delay={(i % 2) * 0.08}
                className={`relative overflow-hidden rounded-2xl ring-1 ring-black/5 ${i === 0 ? "aspect-[16/8] md:col-span-2" : "aspect-[16/10]"}`}
              >
                <ProjectVisual project={project} image={s.src} variant={s.variant} sizes={i === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-y bg-slate-50">
        <div className="container-x">
          <h2 className="text-3xl font-bold">Key features</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06} className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{f.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech + outcomes */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-slate-100 p-8 sm:p-10">
            <h2 className="text-2xl font-bold">Technologies used</h2>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {project.technologies.map((t) => (
                <li key={t} className="flex flex-col items-center gap-3 rounded-2xl bg-slate-50 p-5 text-center">
                  <TechLogo name={t} logo={logoFor(t)} size={36} />
                  <span className="text-sm font-semibold text-navy-800">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl p-8 text-white sm:p-10" >
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.mockup.from}, ${project.mockup.to})` }} />
            <div className="absolute inset-0 bg-navy-950/55" />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                <TrendingUp className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl font-bold text-white">Project outcomes</h2>
              <ul className="mt-6 space-y-4">
                {project.outcomes.map((o, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                    <span className="leading-relaxed text-white/90">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prev / next */}
      <nav aria-label="Project navigation" className="border-y border-slate-100 bg-white">
        <div className="container-x grid grid-cols-2 divide-x divide-slate-100">
          <Link href={`/portfolio/${prev.slug}`} className="group flex items-center gap-4 py-8 pr-4">
            <ArrowLeft className="h-5 w-5 shrink-0 text-brand-500 transition group-hover:-translate-x-1" aria-hidden="true" />
            <span>
              <span className="block text-xs uppercase tracking-wider text-slate-500">Previous project</span>
              <span className="block font-display font-bold text-navy-900 group-hover:text-brand-600">{prev.title}</span>
            </span>
          </Link>
          <Link href={`/portfolio/${next.slug}`} className="group flex items-center justify-end gap-4 py-8 pl-4 text-right">
            <span>
              <span className="block text-xs uppercase tracking-wider text-slate-500">Next project</span>
              <span className="block font-display font-bold text-navy-900 group-hover:text-brand-600">{next.title}</span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-brand-500 transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </nav>

      <section className="section-y bg-slate-50">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-3xl font-bold">More projects</h2>
            <ButtonLink href="/portfolio" variant="outline">View all projects</ButtonLink>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTA title="Have a similar project in mind?" />
    </>
  );
}
