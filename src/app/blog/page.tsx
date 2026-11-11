import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { BlogCards } from "@/components/sections/BlogCards";
import { CTA } from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Insights on software engineering, AI, cloud, design and digital transformation from our team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Blog & technology insights"
        description="Practical articles on software engineering, AI, cloud infrastructure and product design — written by our team."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <section className="section-y bg-slate-50">
        <div className="container-x">
          <BlogCards />
        </div>
      </section>
      <CTA />
    </>
  );
}
