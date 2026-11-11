import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", dark, className }: Props) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]",
            dark ? "text-accent-400" : "text-brand-600",
          )}
        >
          <span className={cn("h-px w-8", dark ? "bg-accent-400" : "bg-brand-500")} />
          {eyebrow}
        </p>
      )}
      <h2 className={cn("text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]", dark && "text-white")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-navy-200" : "text-slate-600")}>{description}</p>
      )}
    </Reveal>
  );
}
