"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FootballLoader } from "@/components/ui/football-loader";
import { cn } from "@/lib/utils";

const MIN_VISIBLE_MS = 400;
const FADE_OUT_MS = 300;

export function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setVisible(true);
    setFading(false);
    const startedAt = Date.now();
    let fadeTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const finish = () => {
      const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - startedAt));
      fadeTimer = setTimeout(() => {
        setFading(true);
        hideTimer = setTimeout(() => setVisible(false), FADE_OUT_MS);
      }, remaining);
    };

    // Do not wait for window "load" — hero videos can delay it indefinitely.
    finish();

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-300 ease-out",
        fading ? "opacity-0" : "opacity-100"
      )}
    >
      <FootballLoader size={48} label="Loading page" showText />
    </div>
  );
}
