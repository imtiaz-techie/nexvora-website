import { CheckCircle2, Eye, Target } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { Icon } from "@/components/ui/Icon";
import { StatsBand } from "@/components/sections/StatsBand";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.name} — our background, mission, vision, values and the team behind our software engineering services.`,
  path: "/about",
});

export default function AboutPage() {
  const { about, whyChooseUs, foundedYear } = siteConfig;
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Engineering trusted digital solutions since day one"
        description={`Since ${foundedYear}, ${siteConfig.name} has partnered with organisations to design, build and scale software that delivers lasting value.`}
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Overview & background */}
      <section className="section-y bg-white">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span className="h-px w-8 bg-brand-500" /> Company overview
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Who we are</h2>
            <p className="mt-6 text-lg leading-relaxed">{about.overview}</p>
            <h3 className="mt-10 text-2xl font-bold">Our background</h3>
            <p className="mt-4 leading-relaxed">{about.background}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Dedicated delivery teams", "Transparent pricing", "Full IP ownership", "Post-launch support"].map((t) => (
                <li key={t} className="flex items-center gap-2 font-medium text-navy-800">
                  <CheckCircle2 className="h-5 w-5 text-brand-500" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-100 to-brand-100">
              <SafeImage src={about.image} alt="Our team collaborating" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-brand-500 p-6 text-white shadow-2xl sm:block">
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-brand-100">Founded</p>
              <p className="font-display text-4xl font-extrabold">{foundedYear}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / vision */}
      <section className="bg-slate-50 py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl bg-white p-10 shadow-sm">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white">
              <Target className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed">{about.mission}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-navy-950 p-10 text-white shadow-sm">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-500 text-white">
              <Eye className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-white">Our Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-200">{about.vision}</p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Our values" title="The principles that guide our work" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-2xl border border-slate-100 p-8">
                <span className="font-display text-4xl font-extrabold text-brand-100">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-bold">{v.title}</h3>
                <p className="mt-3 leading-relaxed">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Why choose us */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why choose us"
            title="What makes us a reliable technology partner"
            description="We combine technical depth with business understanding to deliver predictable, high-quality outcomes."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08} className="rounded-2xl bg-slate-50 p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{w.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="Meet our leadership team" />
          <div className="mt-14">
            <TeamGrid groups={["Leadership"]} showHeadings={false} />
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-x">
          <SectionHeading eyebrow="Technology" title="Technologies we master" />
          <div className="mt-14">
            <TechStack grouped />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
