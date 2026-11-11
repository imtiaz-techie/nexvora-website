import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialIcons";

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  const { contact } = siteConfig;
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[120px]" />
      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo dark />
          <p className="mt-6 max-w-sm leading-relaxed">{siteConfig.description}</p>
          <SocialLinks className="mt-8" />
        </div>

        <FooterCol title="Company" className="lg:col-span-2">
          {company.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Services" className="lg:col-span-3">
          {services.slice(0, 7).map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>
              {s.title}
            </FooterLink>
          ))}
          <FooterLink href="/services">View all services →</FooterLink>
        </FooterCol>

        <FooterCol title="Get in touch" className="lg:col-span-3">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
            <address className="not-italic">
              {contact.address.line1}, {contact.address.line2}
              <br />
              {contact.address.city}, {contact.address.country}
            </address>
          </li>
          <li className="flex gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
            <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
          </li>
          <li className="flex gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
            <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">{contact.phone}</a>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
            <span>{contact.workingHours}</span>
          </li>
        </FooterCol>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h3 className="font-display text-base font-bold text-white">{title}</h3>
      <ul className="mt-6 space-y-3.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition hover:text-white hover:underline hover:decoration-accent-400 hover:underline-offset-4">
        {children}
      </Link>
    </li>
  );
}
