import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { StepsTimeline } from "@/components/sections/steps-timeline";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollToLink } from "@/components/ui/scroll-to-link";
import { admissionsContent } from "@/lib/content/pages/admissions";
import { createMetadata } from "@/lib/content/site";

const ADMISSIONS_PROCESS_ID = "admissions-process";

function renderParagraphWithProcessLink(text: string) {
  const linkText = "process";
  const index = text.indexOf(linkText);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <ScrollToLink
        targetId={ADMISSIONS_PROCESS_ID}
        className="text-brand-green hover:underline"
      >
        {linkText}
      </ScrollToLink>
      {text.slice(index + linkText.length)}
    </>
  );
}

export const metadata = createMetadata({
  title: admissionsContent.meta.title,
  description: admissionsContent.meta.description,
  path: admissionsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: admissionsContent.meta.title },
];

export default function AdmissionsPage() {
  const { meta, intro, finalCta } = admissionsContent;
  const details = [
    admissionsContent.philosophy,
    admissionsContent.pathways,
    admissionsContent.selectionCriteria,
    admissionsContent.whoCanApply,
    admissionsContent.admissionsPriority,
    admissionsContent.assessment,
    admissionsContent.documents,
    admissionsContent.tuition,
    admissionsContent.paymentPlans,
    admissionsContent.international,
  ];

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mx-auto max-w-3xl">
            {intro.subtitle && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-green">
                {intro.subtitle}
              </p>
            )}
            <h2 className="text-2xl font-bold uppercase md:text-3xl">{intro.title}</h2>
            {intro.paragraphs?.map((p, i) => (
              <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                {i === 1 ? renderParagraphWithProcessLink(p) : p}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-10">
            {details.map((item) => (
              <div key={item.id}>
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
                {item.bullets && (
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {item.items && (
                  <div className="mt-4 space-y-4">
                    {item.items.map((sub) => (
                      <div key={sub.title}>
                        <h4 className="font-bold">{sub.title}</h4>
                        <p className="mt-1 text-muted-foreground leading-relaxed">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3">
            <ButtonLink
              href="/admissions/apply/"
              className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
            >
              Start Application
            </ButtonLink>
          </div>
        </div>
      </section>

      <StepsTimeline
        id={ADMISSIONS_PROCESS_ID}
        title="Admissions Process"
        subtitle="Your journey from application to enrollment"
        steps={admissionsContent.steps}
      />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
