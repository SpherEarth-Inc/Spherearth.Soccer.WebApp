import { PageHero } from "@/components/layout/page-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { trustSafetyContent } from "@/lib/content/pages/trust-safety";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: trustSafetyContent.meta.title,
  description: trustSafetyContent.meta.description,
  path: trustSafetyContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Trust & Safety" },
];

export default function TrustAndSafetyPage() {
  const { meta, commitments, finalCta } = trustSafetyContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <ContentBlock section={trustSafetyContent.intro} />
      <ContentBlock section={trustSafetyContent.trustCentre} imageRight />
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto container-padding">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((commitment) => (
              <div
                key={commitment.label}
                className="border-l-4 border-brand-green bg-background p-6 shadow-sm"
              >
                <h3 className="font-bold">{commitment.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContentBlock section={trustSafetyContent.communicationChannels} />
      <ContentBlock section={trustSafetyContent.authorizedRepresentatives} imageRight />
      <ContentBlock section={trustSafetyContent.protectingYourself} />
      <ContentBlock section={trustSafetyContent.paymentSecurity} imageRight />
      <ContentBlock section={trustSafetyContent.privacy} />
      <ContentBlock section={trustSafetyContent.reporting} imageRight />
      <FaqAccordion items={trustSafetyContent.faqs} />
      <ContentBlock section={trustSafetyContent.promise} />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
