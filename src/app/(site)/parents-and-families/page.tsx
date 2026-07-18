import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ParentsPageSections } from "@/components/sections/parents-page-sections";
import { parentsContent } from "@/lib/content/pages/parents";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: parentsContent.meta.title,
  description: parentsContent.meta.description,
  path: parentsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: parentsContent.meta.title },
];

export default function ParentsAndFamiliesPage() {
  const { meta, finalCta } = parentsContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <ParentsPageSections />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
