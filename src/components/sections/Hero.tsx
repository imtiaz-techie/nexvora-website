"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle, ShieldCheck, Rocket } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";

export function Hero() {
  const { hero, stats } = siteConfig;
  const reduce = useReducedMotion();
  const [before, after] = hero.headline.split(hero.highlight);

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden bg-navy-950 pb-24 pt-36 lg:pb-32 lg:pt-48">
      {/* Background */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-brand-600/30 blur-[140px]" />
      <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-[140px]" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-300 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="mt-7 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[4rem]"
          >
            {before}
            <span className="text-gradient">{hero.highlight}</span>
            {after}
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-7 max-w-xl text-lg leading-relaxed text-navy-200">
            {hero.description}
          </motion.p>

          <motion.div {...fade(0.3)} className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact" size="lg">
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="outlineLight" size="lg">
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              View Portfolio
            </ButtonLink>
          </motion.div>

          <motion.dl {...fade(0.4)} className="mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-navy-300">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                  <span className="text-accent-400">{s.suffix}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand-500/40 to-accent-400/30 blur-2xl" />
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-800 to-brand-900 shadow-2xl sm:aspect-[4/3.6]">
            <SafeImage
              src={hero.image}
              alt="Engineering team collaborating on a software project"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <p className="font-display text-sm font-semibold text-white">End-to-end delivery</p>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-navy-100">
                {["Strategy & consulting", "UI/UX design", "Engineering & QA", "Cloud & support"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-10 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl shadow-navy-950/40 sm:flex lg:-left-10"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-sm font-bold text-navy-900">Secure by design</span>
              <span className="block text-xs text-slate-500">Security-first engineering</span>
            </span>
          </motion.div>
          <motion.div
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 top-1/2 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl shadow-navy-950/40 sm:flex lg:-right-8"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Rocket className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-sm font-bold text-navy-900">Agile delivery</span>
              <span className="block text-xs text-slate-500">2-week sprint cycles</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
