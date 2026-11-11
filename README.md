# Nexvora Technologies — Corporate IT Company Website

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion and Lucide Icons.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Editing content (no code changes needed)

All content lives in `src/config/`:

| File | What it controls |
|------|------------------|
| `site.ts` | Company name, tagline, contact details, social links, navigation, hero, about, mission/vision, values, "why choose us", statistics, delivery process |
| `services.ts` | 10 services → cards on `/services` + detail pages `/services/[slug]` (features, benefits, tech, FAQs) |
| `projects.ts` | Portfolio → filterable gallery + case studies `/portfolio/[slug]` |
| `industries.ts` | Industries section and `/industries` page |
| `technologies.ts` | Technology logos (Devicon CDN; any URL or `/public` path works) |
| `team.ts` | Team members grouped into Leadership / Engineering / Design / Project Management |
| `testimonials.ts` | Client logos, testimonials, success stories |
| `blog.ts` | Blog posts (paragraphs, headings, lists) |

### Things to replace before launch

- **Contact details** in `site.ts` (email, phone, address are placeholders).
- **Google Maps**: set `contact.mapQuery` to your address or `"lat,lng"`. The map only appears when this is set.
- **Statistics** in `site.ts → stats`: update with your real figures.
- **Portfolio**: the 10 projects are *sample case studies*. Replace them with real projects. Add real images
  by placing files in `/public/projects/...` and setting `coverImage` / `screenshots`. Without images, a generated UI mockup is shown.
  Fill `client` only when you have permission to name the client.
- **Team**: replace placeholder names; add photos via `photo: "/team/name.jpg"`.
- **Clients & testimonials**: arrays are empty on purpose. Placeholder states are shown until you add genuine entries.
- **Logo**: edit `src/components/ui/Logo.tsx` and `public/icon.svg`.
- **Icons**: config uses Lucide icon names registered in `src/components/ui/Icon.tsx`. Add new icons there.

## Contact form backend

`POST /api/contact` (`src/app/api/contact/route.ts`):

- Validates with Zod (shared schema in `src/lib/contact-schema.ts`, also used client-side).
- Honeypot spam field and in-memory rate limiting (5 requests / 10 min per IP).
- Sends email through SMTP (Nodemailer) when `SMTP_HOST` is set in `.env.local`.
  Without SMTP, enquiries are logged to the server console.
- Supports general enquiries and quote requests (`/contact?type=quote&service=...`).

## Project structure

```
src/
  app/                 Routes (home, about, services, portfolio, industries, team, blog, contact, api)
  components/
    layout/            Header (mega menu, mobile nav), Footer
    sections/          Reusable page sections
    portfolio/         Gallery with category filters, project cards
    contact/           Contact form, info, map
    visuals/           Generated project mockups
    ui/                Buttons, headings, reveal animation, icons, images
  config/              Editable content
  lib/                 SEO helpers, utilities, validation schema
```

## SEO

Per-page metadata, Open Graph/Twitter tags, canonical URLs, `sitemap.xml`, `robots.txt`, and JSON-LD
(Organization, FAQPage, BlogPosting). Set `NEXT_PUBLIC_SITE_URL` in production.

## Design system

- **Colors**: navy `#0A1A3F` (primary), azure `#2F6FF6` (action), cyan `#22D3EE` (accent). Tokens in `src/app/globals.css`.
- **Type**: Plus Jakarta Sans (headings), Inter (body).
- **Motion**: Framer Motion reveal-on-scroll, animated counters, layout-animated portfolio filters; respects `prefers-reduced-motion`.
