import { PageHero } from "@/components/layout/page-hero";
import { CalendlyWidget } from "@/components/embeds/calendly-widget";
import { ContentBlock } from "@/components/sections/content-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { consultationContent } from "@/lib/content/pages/consultation";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: consultationContent.meta.title,
  description: consultationContent.meta.description,
  path: consultationContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: consultationContent.meta.title },
];

export default function ParentConsultationPage() {
  const { meta, finalCta } = consultationContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <ContentBlock section={consultationContent.intro} />
      <ContentBlock section={consultationContent.discussionTopics} imageRight />
      <ContentBlock section={consultationContent.whoShouldAttend} />
      <ContentBlock section={consultationContent.beforeYourCall} imageRight />
      <ContentBlock section={consultationContent.whatHappensNext} />
      <section id="calendly" className="section-padding bg-muted/50">
        <div className="container mx-auto container-padding">
          <CalendlyWidget />
        </div>
      </section>
      <FaqAccordion items={consultationContent.faqs} />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={[finalCta.cta]}
      />
    </>
  );
}
