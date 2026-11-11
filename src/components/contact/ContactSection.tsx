import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";
import { ContactInfo, MapEmbed } from "./ContactInfo";

export function ContactSection({
  type = "contact",
  defaultService,
  showHeading = true,
}: {
  type?: "contact" | "quote";
  defaultService?: string;
  showHeading?: boolean;
}) {
  return (
    <section id="contact" className="section-y bg-white">
      <div className="container-x">
        {showHeading && (
          <SectionHeading
            eyebrow={type === "quote" ? "Get a quote" : "Contact us"}
            title={type === "quote" ? "Tell us about your project" : "Let’s start a conversation"}
            description="Share a few details and our team will get back to you with ideas, timelines and next steps."
          />
        )}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <ContactInfo />
          </Reveal>
          <Reveal delay={0.1} className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-10">
            <ContactForm type={type} defaultService={defaultService} />
          </Reveal>
        </div>
        <MapEmbed className="mt-8" />
      </div>
    </section>
  );
}
