import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { blogPosts, getPost } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { SafeImage } from "@/components/ui/SafeImage";
import { BlogCards } from "@/components/sections/BlogCards";
import { CTA } from "@/components/sections/CTA";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/blog/${slug}`, image: post.image, type: "article" });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.image,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.legalName },
  };

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-navy-200">
          <span className="flex items-center gap-2"><User className="h-4 w-4" aria-hidden="true" />{post.author}</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" aria-hidden="true" /><time dateTime={post.date}>{formatDate(post.date)}</time></span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" aria-hidden="true" />{post.readTime}</span>
        </div>
      </PageHero>

      <article className="bg-white pb-20">
        <div className="container-x -mt-10 max-w-5xl">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-800 to-brand-600 shadow-2xl">
            <SafeImage src={post.image} alt="" fill priority sizes="(min-width: 1024px) 1000px, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="container-x mt-14 max-w-3xl">
          <p className="text-xl leading-relaxed text-navy-800">{post.excerpt}</p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed">
            {post.content.map((block, i) => {
              if (block.type === "h2") return <h2 key={i} className="pt-6 text-2xl font-bold sm:text-3xl">{block.text}</h2>;
              if (block.type === "ul")
                return (
                  <ul key={i} className="space-y-3 pl-1">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>
          <div className="mt-14 border-t border-slate-100 pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to all articles
            </Link>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </article>

      <section className="section-y bg-slate-50">
        <div className="container-x">
          <h2 className="text-3xl font-bold">More articles</h2>
          <div className="mt-10">
            <BlogCards limit={3} />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
