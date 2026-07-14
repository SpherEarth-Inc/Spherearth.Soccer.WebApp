import { Suspense } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { CareersPageContent } from "@/components/sections/careers-page-content";
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
  const { meta } = careersContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <Suspense
        fallback={
          <section className="section-padding">
            <div className="container mx-auto container-padding">
              <div className="mx-auto max-w-3xl text-muted-foreground">Loading...</div>
            </div>
          </section>
        }
      >
        <CareersPageContent />
      </Suspense>
    </>
  );
}
