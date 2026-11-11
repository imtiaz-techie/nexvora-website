import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { getService, services } from "@/config/services";
import { projects } from "@/config/projects";
import { technologies } from "@/config/technologies";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { TechLogo } from "@/components/ui/TechLogo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { CTA } from "@/components/sections/CTA";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({ title: service.title, description: service.short, path: `/services/${slug}` });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = projects.filter((p) => service.relatedCategories.includes(p.category)).slice(0, 3);
  const logoFor = (name: string) => technologies.find((t) => t.name === name)?.logo ?? "";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={service.title}
        description={service.short}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href={`/contact?type=quote&service=${encodeURIComponent(service.title)}`} size="lg">
            Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/portfolio" variant="outlineLight" size="lg">
            View Our Work
          </ButtonLink>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Reveal>
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30">
                <Icon name={service.icon} className="h-8 w-8" />
              </span>
              <h2 className="mt-8 text-3xl font-bold sm:text-4xl">Overview</h2>
              <p className="mt-6 text-lg leading-relaxed">{service.overview}</p>
            </Reveal>

            <h2 className="mt-16 text-3xl font-bold">What we offer</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {service.features.map((f, i) => (
                <Reveal key={f.title} delay={(i % 2) * 0.08} className="rounded-2xl border border-slate-100 p-6 transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-sm font-bold text-brand-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{f.description}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="rounded-3xl bg-navy-950 p-8 text-white">
              <h3 className="text-xl font-bold text-white">Key benefits</h3>
              <ul className="mt-6 space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-navy-100">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-500">
                      <Check className="h-3 w-3 text-white" aria-hidden="true" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="rounded-3xl border border-slate-100 p-8">
              <h3 className="text-xl font-bold">Technologies</h3>
              <ul className="mt-6 flex flex-wrap gap-3">
                {service.technologies.map((t) => (
                  <li key={t} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm font-semibold text-navy-800">
                    {logoFor(t) && <TechLogo name={t} logo={logoFor(t)} size={20} />}
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15} className="rounded-3xl border border-slate-100 p-8">
              <h3 className="text-xl font-bold">Other services</h3>
              <ul className="mt-5 space-y-1">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-navy-800 transition hover:bg-brand-50 hover:text-brand-600">
                        {s.title} <ArrowRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="section-y bg-slate-50">
        <div className="container-x">
          <SectionHeading eyebrow="Our approach" title={`How we deliver ${service.title}`} />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.process.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 0.08} className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="font-display text-3xl font-extrabold text-gradient">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="section-y bg-white">
          <div className="container-x">
            <SectionHeading eyebrow="Related work" title="Projects in this area" />
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="section-y bg-slate-50">
          <div className="container-x max-w-4xl">
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
            <div className="mt-12 space-y-4">
              {service.faqs.map((f) => (
                <details key={f.question} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-bold text-navy-900">
                    {f.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-brand-500 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-4 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        </section>
      )}

      <CTA title={`Ready to start your ${service.title} project?`} />
    </>
  );
}
