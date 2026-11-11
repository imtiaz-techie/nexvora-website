"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * next/image wrapper that fades in on load and hides itself if the
 * source fails, so the gradient background behind it shows instead.
 */
export function SafeImage({ className, alt, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <Image
      {...props}
      alt={alt}
      className={cn("transition-opacity duration-700", loaded ? "opacity-100" : "opacity-0", className)}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  );
}
