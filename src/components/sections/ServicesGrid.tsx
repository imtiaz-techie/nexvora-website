import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceCards({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {list.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 4) * 0.07} as="article">
          <Link
            href={`/services/${s.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-navy-900/10"
          >
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-400 transition-transform duration-500 group-hover:scale-x-100" />
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-50 to-accent-300/20 text-brand-600 transition duration-300 group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white">
              <Icon name={s.icon} className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-lg font-bold leading-snug">{s.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed">{s.short}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
              Learn More
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
