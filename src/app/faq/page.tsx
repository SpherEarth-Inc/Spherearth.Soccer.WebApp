import { Suspense } from "react";
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

      <Suspense
        fallback={
          <section className="section-padding">
            <div className="container mx-auto container-padding">
              <div className="mx-auto max-w-3xl text-muted-foreground">Loading FAQs...</div>
            </div>
          </section>
        }
      >
        <FaqCategories categories={faqContent.categories} />
      </Suspense>

      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
        dark={false}
      />
    </>
  );
}
