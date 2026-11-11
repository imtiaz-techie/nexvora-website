"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectCategories, projects, type ProjectCategory } from "@/config/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

type Filter = "All" | ProjectCategory;

export function PortfolioGallery({ limit, initial = "All" }: { limit?: number; initial?: Filter }) {
  const [active, setActive] = useState<Filter>(initial);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    projects.forEach((p) => map.set(p.category, (map.get(p.category) ?? 0) + 1));
    return map;
  }, []);

  const filtered = useMemo(() => {
    const list = active === "All" ? projects : projects.filter((p) => p.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  const filters: Filter[] = ["All", ...projectCategories];

  return (
    <div>
      <div role="tablist" aria-label="Filter projects by category" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : counts.get(f) ?? 0;
          const selected = active === f;
          return (
            <button
              key={f}
              role="tab"
              type="button"
              aria-selected={selected}
              onClick={() => setActive(f)}
              className={cn(
                "relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                selected ? "text-white" : "bg-slate-100 text-navy-700 hover:bg-slate-200",
              )}
            >
              {selected && (
                <motion.span layoutId="portfolio-pill" className="absolute inset-0 rounded-full bg-navy-900" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
              )}
              <span className="relative">
                {f} <span className={cn("ml-1 text-xs", selected ? "text-navy-300" : "text-slate-400")}>{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtered.length === 0 && (
        <p className="mt-12 rounded-2xl border border-dashed border-slate-200 p-10 text-center text-slate-500">
          No projects in this category yet. Check back soon.
        </p>
      )}
    </div>
  );
}
