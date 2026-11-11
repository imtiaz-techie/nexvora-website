import Link from "next/link";
import { ArrowUpRight, MessageSquareQuote, Quote } from "lucide-react";
import { successStories, testimonials } from "@/config/testimonials";
import { getProject } from "@/config/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { initials } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="section-y bg-slate-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Clients & testimonials"
          title="What our clients say about working with us"
          description="We measure success by the results and relationships we build. Here is what our partners share about their experience."
        />

        {testimonials.length > 0 ? (
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name + i} delay={(i % 3) * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                  <Quote className="h-8 w-8 text-brand-500" aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 leading-relaxed text-navy-800">“{t.quote}”</blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-900 font-display font-bold text-white">
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block font-display font-bold text-navy-900">{t.name}</span>
                      <span className="block text-sm text-slate-500">
                        {t.role}, {t.company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto mt-14 max-w-3xl rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <MessageSquareQuote className="mx-auto h-10 w-10 text-brand-500" aria-hidden="true" />
            <p className="mt-4 font-display text-xl font-bold text-navy-900">Client testimonials coming soon</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed">
              We are collecting verified feedback from our clients. In the meantime, explore our detailed case studies
              or ask us for client references during your consultation.
            </p>
          </Reveal>
        )}

        {/* Success stories */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold">Client success stories</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {successStories.map((s, i) => {
              const project = getProject(s.projectSlug);
              if (!project) return null;
              return (
                <Reveal key={s.projectSlug} delay={i * 0.08}>
                  <Link href={`/portfolio/${project.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <ProjectVisual project={project} image={project.coverImage} />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{project.industry}</p>
                      <h4 className="mt-2 text-lg font-bold">{s.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed">{s.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                        Read case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
