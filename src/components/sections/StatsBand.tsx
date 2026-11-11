import { siteConfig } from "@/config/site";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function StatsBand() {
  return (
    <section aria-label="Company statistics" className="relative overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 py-16">
      <div className="bg-grid absolute inset-0 opacity-50" />
      <dl className="container-x relative grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
        {siteConfig.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="flex flex-col-reverse">
            <dt className="mt-2 text-sm font-medium text-brand-100">{s.label}</dt>
            <dd className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
