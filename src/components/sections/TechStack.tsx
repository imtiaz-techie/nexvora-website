import { technologies, technologyGroups } from "@/config/technologies";
import { TechLogo } from "@/components/ui/TechLogo";
import { Reveal } from "@/components/ui/Reveal";

export function TechStack({ grouped = false }: { grouped?: boolean }) {
  if (grouped) {
    return (
      <div className="space-y-10">
        {technologyGroups.map((g) => {
          const items = technologies.filter((t) => t.group === g);
          if (!items.length) return null;
          return (
            <div key={g} className="grid gap-4 md:grid-cols-[200px_1fr] md:items-center">
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-navy-500">{g}</h3>
              <ul className="flex flex-wrap gap-4">
                {items.map((t) => (
                  <TechTile key={t.name} name={t.name} logo={t.logo} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
      {technologies.map((t, i) => (
        <Reveal key={t.name} as="li" delay={(i % 7) * 0.04}>
          <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-6 transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-500/5">
            <span className="grayscale-[35%] transition group-hover:grayscale-0">
              <TechLogo name={t.name} logo={t.logo} />
            </span>
            <span className="text-center text-sm font-semibold text-navy-800">{t.name}</span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

function TechTile({ name, logo }: { name: string; logo: string }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
      <TechLogo name={name} logo={logo} size={28} />
      <span className="text-sm font-semibold text-navy-800">{name}</span>
    </li>
  );
}
