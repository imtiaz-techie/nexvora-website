import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { StatsBand } from "@/components/sections/StatsBand";
import { ServiceCards } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { TechStack } from "@/components/sections/TechStack";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogCards } from "@/components/sections/BlogCards";
import { ContactSection } from "@/components/contact/ContactSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <AboutPreview />
      <StatsBand />

      {/* Services */}
      <section className="section-y bg-slate-50">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Our services"
              title="End-to-end technology services for every stage of growth"
              description="From strategy and design to engineering, cloud and marketing — one partner for your entire digital journey."
            />
            <ButtonLink href="/services" variant="outline">
              All services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="mt-14">
            <ServiceCards />
          </div>
        </div>
      </section>

      <Process />

      {/* Portfolio */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our portfolio"
            title="Featured projects & case studies"
            description="A selection of platforms, applications and AI solutions designed and engineered by our team."
          />
          <div className="mt-12">
            <PortfolioGallery limit={6} />
          </div>
          <div className="mt-14 text-center">
            <ButtonLink href="/portfolio" variant="secondary" size="lg">
              Explore full portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-y bg-slate-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Domain expertise across key industries"
            description="We understand the regulations, workflows and customer expectations of the sectors we work in."
          />
          <div className="mt-14">
            <IndustriesGrid />
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our technologies"
            title="Modern, proven technology stack"
            description="We choose the right tools for each project — battle-tested frameworks, cloud platforms and AI libraries."
          />
          <div className="mt-14">
            <TechStack />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-y bg-slate-50">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Our team"
              title="Led by experienced technology leaders"
              description="A multidisciplinary team of engineers, designers and project managers committed to your success."
            />
            <ButtonLink href="/team" variant="outline">
              Meet the team <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="mt-14">
            <TeamGrid groups={["Leadership"]} showHeadings={false} />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Blog */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading align="left" eyebrow="Insights" title="Latest from our blog" />
            <ButtonLink href="/blog" variant="outline">
              View all articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="mt-14">
            <BlogCards limit={3} />
          </div>
        </div>
      </section>

      <div className="border-t border-slate-100">
        <ContactSection />
      </div>
    </>
  );
}
