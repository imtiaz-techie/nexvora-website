import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Brand mark + wordmark. Replace the SVG with your own logo if needed. */
export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} — Home`} className={cn("flex items-center gap-2.5", className)}>
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F6FF6" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#logo-g)" />
        <path d="M12 28V12l16 16V12" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="leading-none">
        <span className={cn("block font-display text-xl font-extrabold tracking-tight", dark ? "text-white" : "text-navy-900")}>
          {siteConfig.shortName}
        </span>
        <span className={cn("block text-[10px] font-semibold uppercase tracking-[0.28em]", dark ? "text-navy-300" : "text-slate-500")}>
          Technologies
        </span>
      </span>
    </Link>
  );
}
