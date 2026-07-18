import { AppLink } from "@/components/ui/app-link";
import type { ContentSection } from "@/types/content";
import { CalendlyWidget } from "@/components/embeds/calendly-widget";
import { ButtonLink } from "@/components/ui/button-link";
import { consultationContent } from "@/lib/content/pages/consultation";
import { parentsContent } from "@/lib/content/pages/parents";

function DetailBlock({ item }: { item: ContentSection }) {
  const subheading = item.subtitle ?? item.title;

  return (
    <div>
      {subheading && <p className="section-subheading">{subheading}</p>}
      {item.description && (
        <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
      )}
      {item.paragraphs?.map((p, i) => (
        <p key={i} className="mt-3 text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
      {item.bullets && (
        <ul className="mt-4 space-y-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ConsultationPageSections() {
  const { intro } = consultationContent;

  const details = [
    consultationContent.discussionTopics,
    consultationContent.whoShouldAttend,
    consultationContent.beforeYourCall,
    consultationContent.whatHappensNext,
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
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Learn more about our approach for families on the{" "}
            <AppLink
              href={parentsContent.meta.path}
              className="inline-text-link"
            >
              parents & families page
            </AppLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have questions about the parent consultation?{" "}
            <AppLink href="/faq/?category=parent-consultation" className="inline-text-link">
              View the parent consultation FAQ
            </AppLink>
            .
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          {details.map((item) => (
            <DetailBlock key={item.id} item={item} />
          ))}
        </div>

        <div id="calendly" className="mx-auto mt-12 max-w-3xl scroll-mt-24">
          <CalendlyWidget />
        </div>

        {intro.cta && (
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3">
            <ButtonLink
              href={intro.cta.href}
              size="lg"
              className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
            >
              {intro.cta.label}
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
