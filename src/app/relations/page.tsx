import { AppLink } from "@/components/ui/app-link";
import { PageHero } from "@/components/layout/page-hero";
import { overviewPartnersSponsorsContent } from "@/lib/content/pages/overview-partners-sponsors";
import { createMetadata } from "@/lib/content/site";
import type { ContentSection } from "@/types/content";

export const metadata = createMetadata({
  title: overviewPartnersSponsorsContent.meta.title,
  description: overviewPartnersSponsorsContent.meta.description,
  path: overviewPartnersSponsorsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Overview" },
];

function OverviewSection({ section }: { section: ContentSection }) {
  return (
    <div>
      {section.subtitle && section.subtitle !== section.title && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-green">
          {section.subtitle}
        </p>
      )}
      <h2 className="text-2xl font-bold uppercase md:text-3xl">{section.title}</h2>
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
    </div>
  );
}

export default function RelationsPage() {
  const { meta, intro, sections } = overviewPartnersSponsorsContent;

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
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ready to explore sponsorship?{" "}
              <AppLink
                href="/relations/sponsorship/"
                className="font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                View sponsorship
              </AppLink>
              .
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ready to explore strategic partnerships?{" "}
              <AppLink
                href="/relations/partnerships/"
                className="font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                View partnerships
              </AppLink>
              .
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-10">
            {sections.map((section) => (
              <OverviewSection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
