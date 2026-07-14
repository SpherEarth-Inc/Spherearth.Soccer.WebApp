"use client";

import Image from "next/image";
import { images } from "@/lib/content/assets";
import { cn } from "@/lib/utils";

const LOADER_TITLE = "l'Académie de Football";
const LOADER_BRAND = "SpherEarth";
const LOADER_ARIA_TEXT = `${LOADER_TITLE} ${LOADER_BRAND}`;

interface FootballLoaderProps {
  size?: number;
  className?: string;
  label?: string;
  showText?: boolean;
}

export function FootballLoader({
  size = 48,
  className,
  label = "Loading",
  showText = false,
}: FootballLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={showText ? `${label}. ${LOADER_ARIA_TEXT}` : label}
      className={cn("inline-flex flex-col items-center gap-3", className)}
    >
      <Image
        src={images.spinnerIcon}
        alt=""
        width={size}
        height={size}
        priority
        className="animate-football-roll"
      />
      {showText && (
        <div className="space-y-1 text-center">
          <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
            {LOADER_TITLE}
          </p>
          <p className="whitespace-nowrap font-heading text-xs font-bold uppercase tracking-[0.22em] sm:text-sm">
            <span className="text-foreground">Spher</span>
            <span className="text-brand-green">Earth</span>
          </p>
        </div>
      )}
    </div>
  );
}
