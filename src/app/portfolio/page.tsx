import { projects, projectCategories } from "@/config/projects";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { CTA } from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Explore our portfolio of web applications, mobile apps, eCommerce platforms, enterprise software, AI solutions and UI/UX design case studies.",
  path: "/portfolio",
});

type Props = { searchParams: Promise<{ category?: string }> };

export default async function PortfolioPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const initial = projectCategories.find((c) => c === category) ?? "All";

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Portfolio & case studies"
        description="Real-world solutions across industries — explore the challenges we solved, the technology we used and the outcomes we delivered."
        breadcrumbs={[{ label: "Portfolio" }]}
      >
        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
          <div className="flex flex-col-reverse">
            <dt className="text-sm text-navy-300">Case studies</dt>
            <dd className="font-display text-3xl font-bold text-white">{projects.length}</dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="text-sm text-navy-300">Categories</dt>
            <dd className="font-display text-3xl font-bold text-white">{projectCategories.length}</dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="text-sm text-navy-300">Industries</dt>
            <dd className="font-display text-3xl font-bold text-white">{new Set(projects.map((p) => p.industry)).size}</dd>
          </div>
        </dl>
      </PageHero>
      <section className="section-y bg-white">
        <div className="container-x">
          <PortfolioGallery key={initial} initial={initial} />
        </div>
      </section>
      <CTA title="Want results like these for your business?" />
    </>
  );
}
