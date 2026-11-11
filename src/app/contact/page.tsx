import { CalendarCheck, FileText, MessagesSquare } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch to discuss your project, request a quote or book a free consultation with our team.",
  path: "/contact",
});

type Props = { searchParams: Promise<{ type?: string; service?: string }> };

const steps = [
  { icon: MessagesSquare, title: "1. Share your idea", text: "Tell us about your goals, users and timeline." },
  { icon: CalendarCheck, title: "2. Discovery call", text: "We schedule a free call to understand your requirements." },
  { icon: FileText, title: "3. Tailored proposal", text: "Receive a clear scope, timeline and transparent estimate." },
];

export default async function ContactPage({ searchParams }: Props) {
  const { type, service } = await searchParams;
  const isQuote = type === "quote";

  return (
    <>
      <PageHero
        eyebrow={isQuote ? "Get a quote" : "Contact us"}
        title={isQuote ? "Request a free project quote" : "Let’s talk about your next project"}
        description="Whether you have a detailed specification or just an idea, our team is ready to help. We respond within one business day."
        breadcrumbs={[{ label: isQuote ? "Get a Quote" : "Contact Us" }]}
      />
      <section className="border-b border-slate-100 bg-white pt-16">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: I, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className="flex gap-4 rounded-2xl bg-slate-50 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500 text-white">
                <I className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display font-bold text-navy-900">{title}</span>
                <span className="mt-1 block text-sm">{text}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactSection type={isQuote ? "quote" : "contact"} defaultService={service ?? ""} showHeading={false} />
    </>
  );
}
