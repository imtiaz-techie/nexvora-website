import { clients } from "@/config/testimonials";

/**
 * Client logo strip. Shows real logos from config when present,
 * otherwise neutral placeholder slots (no fake brands).
 */
export function ClientLogos() {
  const hasClients = clients.length > 0;
  const items = hasClients ? [...clients, ...clients] : [];

  return (
    <section aria-label="Our clients" className="border-b border-slate-100 bg-white py-12">
      <div className="container-x">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          Trusted by growing businesses and enterprises
        </p>
        {hasClients ? (
          <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <ul className="flex w-max animate-marquee items-center gap-16">
              {items.map((c, i) => (
                <li key={c.name + i} className="shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={c.name} className="h-9 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <li
                key={i}
                className="grid h-14 place-items-center rounded-xl border border-dashed border-slate-200 text-xs font-medium uppercase tracking-wider text-slate-300"
              >
                Client logo
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
