import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type SeoInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function buildMetadata({ title, description, path = "/", image, type = "website" }: SeoInput): Metadata {
  const desc = description ?? siteConfig.description;
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: desc,
      url: path,
      siteName: siteConfig.name,
      type,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: desc,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export function organizationJsonLd() {
  const { contact, social } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    foundingDate: String(siteConfig.foundedYear),
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
      addressLocality: contact.address.city,
      addressCountry: contact.address.country,
    },
    sameAs: Object.values(social).filter(Boolean),
  };
}
