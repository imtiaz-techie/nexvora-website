import { ArrowRight, Eye, Target } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { Icon } from "@/components/ui/Icon";

export function AboutPreview() {
  const { about, whyChooseUs, foundedYear } = siteConfig;
  const years = new Date().getFullYear() - foundedYear;
  return (
    <section className="section-y bg-white">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[5/5.4] overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-100 to-brand-100">
            <SafeImage src={about.image} alt="Our team at work" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-8 right-4 rounded-2xl bg-navy-900 p-6 text-white shadow-2xl sm:-right-6 sm:p-8">
            <p className="font-display text-5xl font-extrabold">
              {years}
              <span className="text-accent-400">+</span>
            </p>
            <p className="mt-1 text-sm text-navy-200">Years of engineering
              <br />excellence</p>
          </div>
          <div className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-3xl bg-grid-light" />
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span className="h-px w-8 bg-brand-500" /> About our company
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
              Your long-term partner for digital transformation
            </h2>
            <p className="mt-6 text-lg leading-relaxed">{about.overview}</p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.1} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
              <Target className="h-7 w-7 text-brand-500" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed">{about.mission}</p>
            </Reveal>
            <Reveal delay={0.2} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
              <Eye className="h-7 w-7 text-brand-500" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed">{about.vision}</p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ButtonLink href="/about" variant="secondary" className="mt-10">
              More about us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>
      </div>

      {/* Why choose us */}
      <div className="container-x mt-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08} className="group rounded-2xl border border-slate-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                <Icon name={w.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{w.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
