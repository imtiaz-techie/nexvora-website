import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTA({
  title = "Have a project in mind? Let’s build it together.",
  description = "Tell us about your goals. Our team will respond within one business day with next steps and a tailored proposal.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="bg-grid absolute inset-0 opacity-70" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-500/40 blur-[100px]" />
          <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-accent-500/25 blur-[100px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
              <p className="mt-5 max-w-xl text-lg text-navy-200">{description}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
              <ButtonLink href="/contact?type=quote" size="lg" variant="white">
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </ButtonLink>
              <a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-3 text-white">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-navy-300">Call us directly</span>
                  <span className="block font-display font-bold">{siteConfig.contact.phone}</span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
