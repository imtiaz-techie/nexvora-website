"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || mobileOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top info bar */}
      <div
        className={cn(
          "hidden border-b border-white/10 bg-navy-950 text-xs text-navy-200 transition-all duration-300 lg:block",
          scrolled ? "h-0 overflow-hidden border-transparent opacity-0" : "h-10 opacity-100",
        )}
      >
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" /> {siteConfig.contact.email}
            </a>
            <a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {siteConfig.contact.phone}
            </a>
          </div>
          <p>{siteConfig.contact.workingHours}</p>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          solid ? "bg-white/95 shadow-[0_8px_30px_rgb(10,26,63,0.08)] backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Logo dark={!solid} />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) =>
              item.href === "/services" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={item.href}
                    aria-expanded={megaOpen}
                    onFocus={() => setMegaOpen(true)}
                    className={navLinkClass(isActive(item.href), solid)}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", megaOpen && "rotate-180")} aria-hidden="true" />
                  </Link>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4"
                      >
                        <div className="grid grid-cols-[1fr_220px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-navy-900/15">
                          <ul className="grid grid-cols-2 gap-1 p-4">
                            {services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  onBlur={(e) => {
                                    if (!e.currentTarget.closest("header")?.contains(e.relatedTarget as Node)) setMegaOpen(false);
                                  }}
                                  className="group flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-brand-50"
                                >
                                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                                    <Icon name={s.icon} className="h-4.5 w-4.5" />
                                  </span>
                                  <span className="text-sm font-semibold text-navy-900">{s.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-col justify-between bg-navy-950 p-6 text-white">
                            <div>
                              <p className="font-display text-lg font-bold">Not sure where to start?</p>
                              <p className="mt-2 text-sm text-navy-200">
                                Talk to our consultants and get a tailored proposal for your project.
                              </p>
                            </div>
                            <Link href="/contact?type=quote" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-white">
                              Get a free consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={navLinkClass(isActive(item.href), solid)}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact?type=quote" className={buttonClasses("primary", "sm", "hidden sm:inline-flex")}>
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={cn(
                "grid h-11 w-11 place-items-center rounded-full border transition lg:hidden",
                solid ? "border-slate-200 text-navy-900" : "border-white/20 text-white",
              )}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-6">
              {siteConfig.nav.map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-semibold",
                      isActive(item.href) ? "bg-brand-50 text-brand-600" : "text-navy-900 hover:bg-slate-50",
                    )}
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 opacity-40" aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact?type=quote" className={buttonClasses("primary", "lg", "mt-4")}>
                Get a Quote
              </Link>
              <div className="mt-6 space-y-2 border-t border-slate-100 pt-6 text-sm">
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-slate-600">
                  <Mail className="h-4 w-4" aria-hidden="true" /> {siteConfig.contact.email}
                </a>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-slate-600">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {siteConfig.contact.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function navLinkClass(active: boolean, solid: boolean) {
  return cn(
    "relative flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors",
    solid
      ? active
        ? "text-brand-600"
        : "text-navy-800 hover:text-brand-600"
      : active
        ? "text-white"
        : "text-navy-200 hover:text-white",
    active &&
      "after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-current",
  );
}
