import { team } from "@/config/team";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata = buildMetadata({
  title: "Our Team",
  description: "Meet the leadership, engineers, designers and project managers behind our software and technology services.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="The team behind the technology"
        description="Experienced leaders, engineers, designers and project managers working together to deliver exceptional software."
        breadcrumbs={[{ label: "Our Team" }]}
      >
        <p className="mt-8 text-sm text-navy-300">{team.length} team members featured</p>
      </PageHero>
      <section className="section-y bg-white">
        <div className="container-x">
          <TeamGrid />
        </div>
      </section>
      <CTA
        title="Want to join our team?"
        description="We are always looking for talented engineers, designers and project managers. Send us your CV and portfolio."
      />
    </>
  );
}
