import { PageHero } from "@/components/layout/page-hero";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { ProgramsPageSections } from "@/components/sections/programs-page-sections";
import { landingContent } from "@/lib/content/pages/landing";
import { programsContent } from "@/lib/content/pages/programs";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: programsContent.meta.title,
  description: programsContent.meta.description,
  path: programsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Overview" },
];

export default function ProgramsPage() {
  const { meta } = programsContent;
  const { academyDifference } = landingContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <ProgramsPageSections />
      <ComparisonTable
        title={academyDifference.title}
        subtitle={academyDifference.subtitle}
        rows={academyDifference.rows}
      />
    </>
  );
}
