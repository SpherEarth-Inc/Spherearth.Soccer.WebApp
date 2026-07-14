import { PageHero } from "@/components/layout/page-hero";
import { CareersForm } from "@/components/forms/careers-form";
import { ContentBlock } from "@/components/sections/content-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { careersContent } from "@/lib/content/pages/careers";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: careersContent.meta.title,
  description: careersContent.meta.description,
  path: careersContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: careersContent.meta.title },
];

export default function CareersPage() {
  const { meta, roleCategories, finalCta } = careersContent;

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
          <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
            <div className="space-y-10">
              <ContentBlock section={careersContent.intro} className="!py-0" />
              <div>
                <h2 className="text-2xl font-bold uppercase">Role Categories</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {roleCategories.map((role) => (
                    <div key={role.id} className="border-l-4 border-brand-green pl-4">
                      <h3 className="font-bold">{role.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ContentBlock section={careersContent.whyJoin} className="!py-0" />
              <ContentBlock section={careersContent.applicationNote} className="!py-0" />
            </div>
            <CareersForm />
          </div>
        </div>
      </section>
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={[finalCta.cta]}
      />
    </>
  );
}
