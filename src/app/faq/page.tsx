import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqCategories } from "@/components/sections/faq-categories";
import { faqContent } from "@/lib/content/pages/faq";
import { landingContent } from "@/lib/content/pages/landing";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: faqContent.meta.title,
  description: faqContent.meta.description,
  path: faqContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "FAQ" },
];

export default function FaqPage() {
  const { finalCta } = landingContent;

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Everything families ask us most, in one place."
        breadcrumb={breadcrumb}
      />

      <FaqCategories categories={faqContent.categories} />

      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
        dark={false}
      />
    </>
  );
}
