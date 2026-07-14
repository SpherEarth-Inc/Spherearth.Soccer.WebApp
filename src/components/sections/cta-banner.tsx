import { ArrowRight } from "lucide-react";
import type { CtaLink } from "@/types/content";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  title: string;
  description?: string;
  ctas: CtaLink[];
  dark?: boolean;
}

export function CtaBanner({ title, description, ctas, dark = true }: CtaBannerProps) {
  return (
    <section className={cn("section-padding", dark ? "bg-brand-navy text-white" : "border-t bg-white")}>
      <div className="container mx-auto container-padding text-center">
        <h2 className="text-3xl font-bold uppercase md:text-4xl">{title}</h2>
        {description && (
          <p className={cn("mx-auto mt-4 max-w-2xl", dark ? "text-white/80" : "text-muted-foreground")}>
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {ctas.map((cta, i) => (
            <ButtonLink
              key={cta.href}
              href={cta.href}
              size="lg"
              variant={i === 0 ? "default" : "outline"}
              className={cn(
                "rounded-none",
                i === 0 && "bg-brand-green hover:bg-brand-green/90",
                i > 0 && dark && "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              )}
            >
              {cta.label}
              {i === 0 && <ArrowRight className="size-4" />}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
