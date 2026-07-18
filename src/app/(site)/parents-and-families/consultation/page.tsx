import { PageHero } from "@/components/layout/page-hero";
import { ConsultationPageSections } from "@/components/sections/consultation-page-sections";
import { CtaBanner } from "@/components/sections/cta-banner";
import { consultationContent } from "@/lib/content/pages/consultation";
import { parentsContent } from "@/lib/content/pages/parents";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: consultationContent.meta.title,
  description: consultationContent.meta.description,
  path: consultationContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: parentsContent.meta.title, href: parentsContent.meta.path },
  { label: "Consultation" },
];

export default function ParentConsultationPage() {
  const { meta, finalCta } = consultationContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={parentsContent.meta.heroImage}
      />
      <ConsultationPageSections />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={[finalCta.cta]}
      />
    </>
  );
}
