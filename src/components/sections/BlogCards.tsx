import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/config/blog";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { formatDate } from "@/lib/utils";

export function BlogCards({ limit }: { limit?: number }) {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit ?? blogPosts.length);
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((p, i) => (
        <Reveal key={p.slug} delay={(i % 3) * 0.08} as="article">
          <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/10">
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-navy-800 to-brand-600">
              <SafeImage src={p.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy-900">{p.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" aria-hidden="true" />{formatDate(p.date)}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" aria-hidden="true" />{p.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold leading-snug transition group-hover:text-brand-600">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed">{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Read article <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
