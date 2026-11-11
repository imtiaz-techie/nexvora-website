import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="section-y relative overflow-hidden bg-navy-950">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="How we work"
          title="A proven delivery process built on transparency"
          description="Every engagement follows a structured, collaborative process — so you always know what is being built, why, and when."
        />
        <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" aria-hidden="true" />
        <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.process.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 0.12} className="relative">
              <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-navy-900 font-display text-xl font-bold text-white shadow-lg shadow-brand-500/10">
                <span className="text-gradient">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-navy-200">{step.description}</p>
            </Reveal>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
