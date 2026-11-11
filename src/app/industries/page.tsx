import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { industries } from "@/config/industries";
import { projects } from "@/config/projects";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SafeImage } from "@/components/ui/SafeImage";
import { CTA } from "@/components/sections/CTA";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Industries",
  description:
    "Software solutions for healthcare, education, finance, retail & eCommerce, manufacturing, logistics, travel & tourism and enterprise businesses.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Industry expertise that accelerates delivery"
        description="Deep domain understanding means fewer surprises, faster delivery and solutions aligned with how your sector really works."
        breadcrumbs={[{ label: "Industries" }]}
      >
        <ul className="mt-10 flex flex-wrap gap-2">
          {industries.map((ind) => (
            <li key={ind.slug}>
              <a href={`#${ind.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-navy-100 transition hover:border-white/40 hover:text-white">
                <Icon name={ind.icon} className="h-4 w-4" /> {ind.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <div className="bg-white">
        {industries.map((ind, i) => {
          const caseStudies = projects.filter((p) => p.industry === ind.title).slice(0, 2);
          const reverse = i % 2 === 1;
          return (
            <section key={ind.slug} id={ind.slug} className={cn("scroll-mt-24 py-20 md:py-24", reverse && "bg-slate-50")}>
              <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal className={cn("relative", reverse && "lg:order-2")}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-800 to-brand-600">
                    <SafeImage src={ind.image} alt={`${ind.title} technology solutions`} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                  </div>
                  <span className="absolute -bottom-6 left-6 grid h-20 w-20 place-items-center rounded-2xl bg-brand-500 text-white shadow-2xl shadow-brand-500/30">
                    <Icon name={ind.icon} className="h-9 w-9" />
                  </span>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Industry 0{i + 1}</p>
                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{ind.title}</h2>
                  <p className="mt-5 text-lg leading-relaxed">{ind.description}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {ind.solutions.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 font-medium text-navy-800">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" /> {s}
                      </li>
                    ))}
                  </ul>
                  {caseStudies.length > 0 && (
                    <div className="mt-8 border-t border-slate-200 pt-6">
                      <p className="text-sm font-semibold text-slate-500">Related case studies</p>
                      <ul className="mt-3 space-y-2">
                        {caseStudies.map((p) => (
                          <li key={p.slug}>
                            <Link href={`/portfolio/${p.slug}`} className="group inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700">
                              {p.title}
                              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CTA title="Don’t see your industry? Let’s talk." description="Our engineering practices adapt to any domain. Tell us about your sector and challenges." />
    </>
  );
}
