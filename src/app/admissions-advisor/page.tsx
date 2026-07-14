import { AppLink } from "@/components/ui/app-link";
import { PageHero } from "@/components/layout/page-hero";
import { AdvisorForm } from "@/components/forms/advisor-form";
import { ContentBlock } from "@/components/sections/content-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { advisorContent } from "@/lib/content/pages/advisor";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: advisorContent.meta.title,
  description: advisorContent.meta.description,
  path: advisorContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: advisorContent.meta.title },
];

export default function AdmissionsAdvisorPage() {
  const { meta, finalCta } = advisorContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
        imageClassName="object-top"
        className="min-h-[360px] md:min-h-[440px]"
      />
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
            <div className="space-y-10">
              <ContentBlock section={advisorContent.intro} className="!py-0" />
              <ContentBlock section={advisorContent.role} className="!py-0" />
              <ContentBlock section={advisorContent.responsibilities} className="!py-0" />
              <ContentBlock section={advisorContent.qualifications} className="!py-0" />
              <ContentBlock section={advisorContent.process} className="!py-0" />
              <ContentBlock section={advisorContent.commissionNote} className="!py-0" />
            </div>
            <AdvisorForm />
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-muted-foreground leading-relaxed">
            Have questions about becoming an Admissions Advisor?{" "}
            <AppLink
              href="/faq/?category=advisors"
              className="font-semibold text-red-600 transition-colors hover:text-red-700"
            >
              View the admissions advisor FAQ
            </AppLink>
            .
          </p>
        </div>
      </section>
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
