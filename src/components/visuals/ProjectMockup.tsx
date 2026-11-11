import type { MockupVariant } from "@/config/projects";
import { cn } from "@/lib/utils";

type Props = {
  variant: MockupVariant;
  from: string;
  to: string;
  title?: string;
  className?: string;
};

/**
 * Generated, resolution-independent UI mockup used as a project
 * thumbnail/screenshot until real screenshots are supplied.
 */
export function ProjectMockup({ variant, from, to, title, className }: Props) {
  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      role="img"
      aria-label={title ? `${title} interface preview` : "Project interface preview"}
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_40%),radial-gradient(circle_at_80%_90%,white_0,transparent_35%)]" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      {variant === "mobile" ? <Phones accent={from} /> : <Browser variant={variant} accent={from} accent2={to} />}
    </div>
  );
}

function Bar({ w, className }: { w: string; className?: string }) {
  return <div className={cn("h-1.5 rounded-full bg-slate-200", className)} style={{ width: w }} />;
}

function Browser({ variant, accent, accent2 }: { variant: MockupVariant; accent: string; accent2: string }) {
  return (
    <div className="absolute left-[8%] right-[8%] top-[12%] bottom-[-6%] overflow-hidden rounded-t-xl bg-white shadow-2xl shadow-black/30">
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="ml-3 h-3 w-1/3 rounded-full bg-slate-200" />
      </div>
      <div className="flex h-full">
        {(variant === "dashboard" || variant === "analytics" || variant === "learning") && (
          <aside className="hidden w-[18%] flex-col gap-2 border-r border-slate-100 p-3 sm:flex">
            <div className="mb-2 h-3 w-3/4 rounded" style={{ background: accent }} />
            {[70, 55, 80, 60, 50].map((w, i) => (
              <Bar key={i} w={`${w}%`} className={i === 1 ? "bg-slate-300" : undefined} />
            ))}
          </aside>
        )}
        <div className="flex-1 p-3 sm:p-4">
          {variant === "dashboard" && <DashboardBody accent={accent} accent2={accent2} />}
          {variant === "analytics" && <AnalyticsBody accent={accent} accent2={accent2} />}
          {variant === "storefront" && <StoreBody accent={accent} accent2={accent2} />}
          {variant === "chat" && <ChatBody accent={accent} />}
          {variant === "vision" && <VisionBody accent={accent} />}
          {variant === "learning" && <LearningBody accent={accent} accent2={accent2} />}
        </div>
      </div>
    </div>
  );
}

function StatCards({ accent }: { accent: string }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded-lg border border-slate-100 p-2">
          <Bar w="50%" />
          <div className="mt-2 h-3 w-2/3 rounded" style={{ background: i === 0 ? accent : "#cbd5e1" }} />
        </div>
      ))}
    </div>
  );
}

function DashboardBody({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <div className="space-y-3">
      <StatCards accent={accent} />
      <div className="rounded-lg border border-slate-100 p-3">
        <svg viewBox="0 0 200 60" className="h-16 w-full sm:h-20" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 50 C30 40 40 20 70 28 S120 10 140 22 S180 8 200 12 L200 60 L0 60Z" fill={accent} opacity="0.15" />
          <path d="M0 50 C30 40 40 20 70 28 S120 10 140 22 S180 8 200 12" fill="none" stroke={accent} strokeWidth="2" />
          <path d="M0 55 C40 50 60 40 90 44 S150 30 200 34" fill="none" stroke={accent2} strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>
      </div>
      <div className="space-y-2 rounded-lg border border-slate-100 p-3">
        {[90, 75, 82].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-slate-200" />
            <Bar w={`${w}%`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsBody({ accent, accent2 }: { accent: string; accent2: string }) {
  const bars = [40, 65, 50, 80, 60, 90, 70, 85];
  return (
    <div className="space-y-3">
      <StatCards accent={accent} />
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 flex h-24 items-end gap-1.5 rounded-lg border border-slate-100 p-3 sm:h-28">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i % 2 ? accent2 : accent, opacity: i % 2 ? 0.55 : 1 }} />
          ))}
        </div>
        <div className="grid place-items-center rounded-lg border border-slate-100 p-2">
          <svg viewBox="0 0 36 36" className="h-14 w-14 sm:h-16 sm:w-16" aria-hidden="true">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="5" />
            <circle cx="18" cy="18" r="14" fill="none" stroke={accent} strokeWidth="5" strokeDasharray="60 100" transform="rotate(-90 18 18)" />
            <circle cx="18" cy="18" r="14" fill="none" stroke={accent2} strokeWidth="5" strokeDasharray="18 100" strokeDashoffset="-60" transform="rotate(-90 18 18)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StoreBody({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <div className="space-y-3">
      <div className="flex h-16 items-center justify-between rounded-lg p-3 sm:h-20" style={{ background: `linear-gradient(90deg, ${accent}22, ${accent2}33)` }}>
        <div className="space-y-1.5">
          <div className="h-2.5 w-24 rounded" style={{ background: accent }} />
          <Bar w="80px" />
        </div>
        <div className="h-5 w-14 rounded-full" style={{ background: accent }} />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="rounded-lg border border-slate-100 p-1.5">
            <div className="aspect-square rounded-md" style={{ background: i % 3 === 0 ? `${accent}33` : i % 3 === 1 ? `${accent2}33` : "#f1f5f9" }} />
            <Bar w="80%" className="mt-1.5" />
            <div className="mt-1 h-1.5 w-1/3 rounded-full" style={{ background: accent }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatBody({ accent }: { accent: string }) {
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="ml-auto w-2/3 rounded-2xl rounded-br-sm p-2.5" style={{ background: accent }}>
        <div className="h-1.5 w-full rounded-full bg-white/70" />
        <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-white/70" />
      </div>
      <div className="w-3/4 space-y-1.5 rounded-2xl rounded-bl-sm bg-slate-100 p-2.5">
        <Bar w="100%" className="bg-slate-300" />
        <Bar w="90%" className="bg-slate-300" />
        <Bar w="60%" className="bg-slate-300" />
        <div className="flex gap-1.5 pt-1">
          <span className="h-3 w-12 rounded border border-slate-300 bg-white" />
          <span className="h-3 w-12 rounded border border-slate-300 bg-white" />
        </div>
      </div>
      <div className="ml-auto w-1/2 rounded-2xl rounded-br-sm p-2.5" style={{ background: accent }}>
        <div className="h-1.5 w-full rounded-full bg-white/70" />
      </div>
      <div className="w-2/3 space-y-1.5 rounded-2xl rounded-bl-sm bg-slate-100 p-2.5">
        <Bar w="100%" className="bg-slate-300" />
        <Bar w="70%" className="bg-slate-300" />
      </div>
    </div>
  );
}

function VisionBody({ accent }: { accent: string }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-lg bg-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,#475569,transparent_60%)]" />
        <div className="absolute left-[18%] top-[22%] h-[40%] w-[30%] rounded border-2" style={{ borderColor: accent }}>
          <span className="absolute -top-3 left-0 rounded px-1 text-[7px] font-bold text-white" style={{ background: accent }}>OK 0.98</span>
        </div>
        <div className="absolute right-[14%] bottom-[18%] h-[30%] w-[24%] rounded border-2 border-red-400">
          <span className="absolute -top-3 left-0 rounded bg-red-400 px-1 text-[7px] font-bold text-white">DEFECT</span>
        </div>
      </div>
      <div className="space-y-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-md border border-slate-100 p-1.5">
            <Bar w="70%" />
            <div className="mt-1 h-1.5 rounded-full" style={{ width: `${40 + i * 15}%`, background: i === 2 ? "#f87171" : accent }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function LearningBody({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <div className="space-y-3">
      <div className="aspect-video max-h-28 w-full rounded-lg" style={{ background: `linear-gradient(135deg, ${accent}, ${accent2})` }}>
        <div className="grid h-full place-items-center">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/90">
            <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent" style={{ borderLeftColor: accent }} />
          </span>
        </div>
      </div>
      {[80, 55, 30].map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-5 w-5 shrink-0 rounded bg-slate-100" />
          <div className="flex-1">
            <Bar w="60%" />
            <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
              <div className="h-full rounded-full" style={{ width: `${p}%`, background: accent }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Phones({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-4 pt-[10%]">
      {[0, 1].map((n) => (
        <div
          key={n}
          className={cn(
            "relative w-[30%] max-w-[170px] overflow-hidden rounded-[1.6rem] border-[5px] border-navy-950 bg-white shadow-2xl shadow-black/40",
            n === 0 ? "mb-[-8%] aspect-[9/17]" : "mb-[-20%] aspect-[9/17] hidden sm:block",
          )}
        >
          <div className="mx-auto mt-1 h-2.5 w-1/3 rounded-full bg-navy-950" />
          <div className="space-y-2 p-2.5">
            <div className="h-2 w-1/2 rounded" style={{ background: accent }} />
            <div className="h-16 rounded-lg" style={{ background: `${accent}33` }} />
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="h-5 w-5 rounded-md bg-slate-100" />
                <div className="flex-1 space-y-1">
                  <Bar w="90%" />
                  <Bar w="50%" className="bg-slate-100" />
                </div>
              </div>
            ))}
            <div className="h-5 rounded-full" style={{ background: accent }} />
          </div>
        </div>
      ))}
    </div>
  );
}
