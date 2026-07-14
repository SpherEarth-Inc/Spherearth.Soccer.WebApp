import { AppLink } from "@/components/ui/app-link";
import type { ContentSection } from "@/types/content";
import { OfficialCommunicationsSection } from "@/components/sections/official-communications-section";
import { ButtonLink } from "@/components/ui/button-link";
import { programsContent } from "@/lib/content/pages/programs";

function DetailBlock({ item }: { item: ContentSection }) {
  return (
    <div>
      {item.subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-green">
          {item.subtitle}
        </p>
      )}
      {item.description && (
        <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
      )}
      {item.paragraphs?.map((p, i) => (
        <p key={i} className="mt-3 text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

export function ProgramsPageSections() {
  const { intro } = programsContent;

  const details = [
    programsContent.trainingPhilosophy,
    programsContent.ageGroups,
    programsContent.playerJourney,
    programsContent.calendar,
    programsContent.investment,
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="mx-auto max-w-3xl">
          {intro.subtitle && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-green">
              {intro.subtitle}
            </p>
          )}
          <h2 className="text-3xl font-bold uppercase md:text-4xl">{intro.title}</h2>
          {intro.paragraphs?.map((p, i) => (
            <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have questions about our programs?{" "}
            <AppLink
              href="/faq/?category=programs"
              className="font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              View the program FAQ
            </AppLink>
            .
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ready to choose a program?{" "}
            <AppLink
              href="/programs/choose-program/"
              className="font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              View programs
            </AppLink>
            .
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          {details.map((item) => (
            <DetailBlock key={item.id} item={item} />
          ))}
          <OfficialCommunicationsSection />
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3">
          <ButtonLink
            href="/programs/choose-program/"
            size="lg"
            className="h-12 gap-2 rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 md:h-14 md:px-10 md:text-lg"
          >
            View Programs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
