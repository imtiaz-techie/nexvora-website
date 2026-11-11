"use client";

import { useState } from "react";
import { initials } from "@/lib/utils";

/** Technology logo with a text-badge fallback if the image cannot load. */
export function TechLogo({ name, logo, size = 44 }: { name: string; logo: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  if (failed || !logo) {
    return (
      <span
        className="grid place-items-center rounded-lg bg-navy-50 font-display text-sm font-bold text-navy-700"
        style={{ width: size, height: size }}
      >
        {initials(name)}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={`${name} logo`}
      width={size}
      height={size}
      loading="lazy"
      className="object-contain"
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}
