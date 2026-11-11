import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCards } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Custom software, web and mobile app development, UI/UX design, AI & machine learning, image processing, eCommerce, digital marketing, cloud solutions and IT consultancy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Technology services that drive measurable results"
        description="We combine strategy, design and engineering to deliver complete digital solutions — tailored to your industry, users and business goals."
        breadcrumbs={[{ label: "Services" }]}
      />
      <section className="section-y bg-slate-50">
        <div className="container-x">
          <ServiceCards />
        </div>
      </section>
      <Process />
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Industries" title="Solutions tailored to your industry" />
          <div className="mt-14">
            <IndustriesGrid />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
