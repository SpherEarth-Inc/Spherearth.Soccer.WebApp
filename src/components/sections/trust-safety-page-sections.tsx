import { AppLink } from "@/components/ui/app-link";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollToButtonLink, ScrollToLink } from "@/components/ui/scroll-to-link";
import { trustSafetyContent } from "@/lib/content/pages/trust-safety";
import type { ContentSection } from "@/types/content";
import { cn } from "@/lib/utils";

function DetailBlock({ section }: { section: ContentSection }) {
  return (
    <div id={section.id} className="scroll-mt-24">
      {section.subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-green">
          {section.subtitle}
        </p>
      )}
      {section.description && (
        <p className="mt-3 text-muted-foreground leading-relaxed">{section.description}</p>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mt-3 text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
      {section.bullets && (
        <ul className="mt-4 space-y-2">
          {section.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green" />
              {b}
            </li>
          ))}
        </ul>
      )}
      {section.cta && (
        <div id={section.id ? `${section.id}-action` : undefined} className="scroll-mt-24">
          {section.cta.href.startsWith("#") ? (
            <ScrollToButtonLink
              targetId={section.cta.href.slice(1)}
              variant="outline"
              size="lg"
              className="mt-6 h-12 w-full rounded-none px-8 text-base sm:w-auto md:h-14 md:px-10 md:text-lg"
            >
              {section.cta.label}
            </ScrollToButtonLink>
          ) : (
            <ButtonLink
              href={section.cta.href}
              variant={section.cta.variant === "primary" ? "default" : "outline"}
              className={cn(
                "mt-6 h-12 w-full rounded-none px-8 text-base sm:w-auto md:h-14 md:px-10 md:text-lg",
                section.cta.variant === "primary" && "bg-brand-green hover:bg-brand-green/90"
              )}
            >
              {section.cta.label}
            </ButtonLink>
          )}
        </div>
      )}
    </div>
  );
}

export function TrustSafetyPageSections() {
  const { intro, promise } = trustSafetyContent;

  const detailSections = [
    trustSafetyContent.trustCentre,
    trustSafetyContent.communicationChannels,
    trustSafetyContent.authorizedRepresentatives,
    trustSafetyContent.paymentSecurity,
    trustSafetyContent.privacy,
    trustSafetyContent.reporting,
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold uppercase md:text-4xl">{intro.title}</h2>
          {intro.paragraphs?.map((p, i) => (
            <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}

          <p className="mt-10 text-muted-foreground leading-relaxed">
            Need to verify someone?{" "}
            <ScrollToLink
              targetId="verify-action"
              className="font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              Verify a representative
            </ScrollToLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have questions about trust and safety?{" "}
            <AppLink
              href="/faq/?category=trust-safety"
              className="font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              View the trust &amp; safety FAQ
            </AppLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Learn how we protect your information.{" "}
            <ScrollToLink
              targetId="privacy-action"
              className="font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              Privacy &amp; personal information
            </ScrollToLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Want to see what we stand for?{" "}
            <ScrollToLink
              targetId="commitments"
              className="font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              Our commitments
            </ScrollToLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            See something suspicious?{" "}
            <ScrollToLink
              targetId="reporting-action"
              className="font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              Report suspicious activity
            </ScrollToLink>
            .
          </p>

          <div className="mt-10">
            <DetailBlock section={promise} />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          {detailSections.map((section) => (
            <DetailBlock key={section.id ?? section.subtitle} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
