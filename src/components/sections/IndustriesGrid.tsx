import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/config/industries";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";

export function IndustriesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((ind, i) => (
        <Reveal key={ind.slug} delay={(i % 4) * 0.07}>
          <Link
            href={`/industries#${ind.slug}`}
            className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl bg-navy-900 p-6"
          >
            <SafeImage
              src={ind.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10 transition duration-500 group-hover:via-brand-900/80" />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white backdrop-blur transition group-hover:bg-brand-500">
                <Icon name={ind.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{ind.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-200">{ind.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 opacity-0 transition duration-300 group-hover:opacity-100">
                Explore <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
