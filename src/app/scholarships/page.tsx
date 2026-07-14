import { AppLink } from "@/components/ui/app-link";
import { PageHero } from "@/components/layout/page-hero";
import { OfficialCommunicationsSection } from "@/components/sections/official-communications-section";
import { ButtonLink } from "@/components/ui/button-link";
import { scholarshipsContent } from "@/lib/content/pages/scholarships";
import { createMetadata } from "@/lib/content/site";
import type { ContentSection } from "@/types/content";

export const metadata = createMetadata({
  title: scholarshipsContent.meta.title,
  description: scholarshipsContent.meta.description,
  path: scholarshipsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: scholarshipsContent.meta.title },
];

function OverviewSection({ section }: { section: ContentSection }) {
  return (
    <div>
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
      {section.trailingParagraphs?.map((p, i) => (
        <p key={i} className="mt-3 text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function ScholarshipsPage() {
  const { meta, intro } = scholarshipsContent;
  const overviewSections = [
    scholarshipsContent.philosophy,
    scholarshipsContent.merit,
    scholarshipsContent.needsBased,
    scholarshipsContent.eligibility,
    scholarshipsContent.selectionProcess,
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
                {p}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-10">
            {overviewSections.map((section) => (
              <OverviewSection key={section.id} section={section} />
            ))}
            <OfficialCommunicationsSection />
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-muted-foreground leading-relaxed">
            Have questions about scholarships?{" "}
            <AppLink
              href="/faq/?category=scholarships"
              className="font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              View the scholarship FAQ
            </AppLink>
            .
          </p>

          {intro.cta && (
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3">
              <ButtonLink
                href={intro.cta.href}
                className="h-12 w-full rounded-none bg-brand-green px-8 text-base hover:bg-brand-green/90 sm:w-auto md:h-14 md:px-10 md:text-lg"
              >
                {intro.cta.label}
              </ButtonLink>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
