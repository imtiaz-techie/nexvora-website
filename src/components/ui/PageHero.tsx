import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  children?: ReactNode;
};

/** Dark banner used at the top of every inner page. */
export function PageHero({ eyebrow, title, description, breadcrumbs, children }: Props) {
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, ...breadcrumbs];
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-36 md:pb-24 md:pt-44">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand-500/25 blur-[120px]" />
      <div className="absolute -bottom-40 -left-20 h-[380px] w-[380px] rounded-full bg-accent-500/15 blur-[120px]" />
      <div className="container-x relative">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-300">
              {crumbs.map((c, i) => (
                <li key={c.label + i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                  {c.href && i < crumbs.length - 1 ? (
                    <Link href={c.href} className="transition hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white" aria-current="page">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {eyebrow && (
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-accent-400">{eyebrow}</p>
          )}
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">{description}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
