import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/ui/SocialIcons";

export function ContactInfo() {
  const { contact } = siteConfig;
  const items = [
    { icon: Mail, label: "Email us", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Call us", value: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, "")}` },
    {
      icon: MapPin,
      label: "Visit our office",
      value: `${contact.address.line1}, ${contact.address.line2}, ${contact.address.city}, ${contact.address.country}`,
    },
    { icon: Clock, label: "Working hours", value: contact.workingHours },
  ];
  return (
    <div className="relative h-full overflow-hidden rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/40 blur-[80px]" />
      <div className="relative">
        <h3 className="text-2xl font-bold text-white">Contact information</h3>
        <p className="mt-3 text-navy-200">Reach out through any channel — we usually respond within one business day.</p>
        <ul className="mt-10 space-y-7">
          {items.map(({ icon: I, label, value, href }) => (
            <li key={label} className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-400">
                <I className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-navy-300">{label}</span>
                {href ? (
                  <a href={href} className="mt-1 block font-semibold hover:text-accent-300">
                    {value}
                  </a>
                ) : (
                  <span className="mt-1 block font-semibold">{value}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="mb-4 text-sm text-navy-300">Follow us</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

/** Google Maps embed — only rendered when `contact.mapQuery` is set in config. */
export function MapEmbed({ className }: { className?: string }) {
  const q = siteConfig.contact.mapQuery;
  if (!q) return null;
  return (
    <div className={className}>
      <iframe
        title={`${siteConfig.name} office location`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`}
        className="h-[420px] w-full rounded-3xl border-0 grayscale-[20%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
