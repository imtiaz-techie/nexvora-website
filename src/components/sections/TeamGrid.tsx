import Image from "next/image";
import { team, teamGroups, type TeamGroup, type TeamMember } from "@/config/team";
import { SocialIcon } from "@/components/ui/SocialIcons";
import { Reveal } from "@/components/ui/Reveal";
import { initials, cn } from "@/lib/utils";

const groupGradients: Record<TeamGroup, string> = {
  Leadership: "from-navy-800 to-brand-700",
  Engineering: "from-brand-600 to-accent-500",
  Design: "from-violet-600 to-fuchsia-500",
  "Project Management": "from-emerald-600 to-teal-500",
};

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/10">
      <div className={cn("relative aspect-[4/4.2] overflow-hidden bg-gradient-to-br", groupGradients[member.group])}>
        {member.photo ? (
          <Image src={member.photo} alt={member.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <div className="grid h-full place-items-center">
            <div className="bg-grid absolute inset-0 opacity-70" />
            <span className="relative grid h-28 w-28 place-items-center rounded-full border-4 border-white/30 bg-white/10 font-display text-4xl font-bold text-white backdrop-blur">
              {initials(member.name)}
            </span>
          </div>
        )}
        {(member.linkedin || member.github) && (
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition duration-300 group-hover:opacity-100 focus-within:opacity-100">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} className="grid h-9 w-9 place-items-center rounded-full bg-white text-navy-900 hover:bg-brand-500 hover:text-white">
                <SocialIcon network="linkedin" className="h-4 w-4" />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on GitHub`} className="grid h-9 w-9 place-items-center rounded-full bg-white text-navy-900 hover:bg-brand-500 hover:text-white">
                <SocialIcon network="github" className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-600">{member.role}</p>
        {member.bio && <p className="mt-3 text-sm leading-relaxed">{member.bio}</p>}
      </div>
    </article>
  );
}

export function TeamGrid({ groups = teamGroups as readonly TeamGroup[], showHeadings = true }: { groups?: readonly TeamGroup[]; showHeadings?: boolean }) {
  return (
    <div className="space-y-16">
      {groups.map((g) => {
        const members = team.filter((m) => m.group === g);
        if (!members.length) return null;
        return (
          <section key={g} aria-label={g}>
            {showHeadings && (
              <div className="mb-8 flex items-center gap-4">
                <h3 className="text-2xl font-bold">{g}</h3>
                <span className="h-px flex-1 bg-slate-200" />
              </div>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {members.map((m, i) => (
                <Reveal key={m.role + i} delay={(i % 4) * 0.07}>
                  <TeamCard member={m} />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
