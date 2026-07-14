import { ButtonLink } from "@/components/ui/button-link";
import { officialCommunicationsSection } from "@/lib/content/shared/official-communications";
import { cn } from "@/lib/utils";

interface OfficialCommunicationsSectionProps {
  className?: string;
}

export function OfficialCommunicationsSection({ className }: OfficialCommunicationsSectionProps) {
  const section = officialCommunicationsSection;

  return (
    <div className={cn(className)}>
      {section.subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-green">
          {section.subtitle}
        </p>
      )}
      {section.description && (
        <p className="mt-3 text-muted-foreground leading-relaxed">{section.description}</p>
      )}
      {section.ctas && (
        <div className="mt-6 flex flex-wrap gap-3">
          {section.ctas.map((cta) => (
            <ButtonLink
              key={`${cta.href}-${cta.label}`}
              href={cta.href}
              variant={cta.variant === "primary" ? "default" : "outline"}
              className="rounded-none"
            >
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      )}
    </div>
  );
}
