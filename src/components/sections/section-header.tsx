import { AppLink } from "@/components/ui/app-link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  seeAllHref?: string;
  seeAllLabel?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  seeAllHref,
  seeAllLabel = "See all",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-4 border-b pb-4",
        light ? "border-white/20" : "border-border",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="h-7 w-1.5 shrink-0 bg-brand-green" aria-hidden />
        <div>
          <h2
            className={cn(
              "text-2xl font-bold uppercase leading-none tracking-tight md:text-3xl",
              light && "text-white"
            )}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={cn(
                "mt-1.5 text-sm",
                light ? "text-white/70" : "text-muted-foreground"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {seeAllHref && (
        <AppLink
          href={seeAllHref}
          className={cn(
            "group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors",
            light
              ? "text-white/80 hover:text-brand-green"
              : "text-foreground/70 hover:text-brand-green"
          )}
        >
          {seeAllLabel}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </AppLink>
      )}
    </div>
  );
}
