import { PageHero } from "@/components/layout/page-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { successStoriesContent } from "@/lib/content/pages/success-stories";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: successStoriesContent.meta.title,
  description: successStoriesContent.meta.description,
  path: successStoriesContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: successStoriesContent.meta.title },
];

export default function SuccessStoriesPage() {
  const { meta, finalCta } = successStoriesContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <ContentBlock section={successStoriesContent.intro} />
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto container-padding text-center">
          <div className="mx-auto max-w-lg rounded-none border border-dashed border-muted-foreground/30 bg-background p-12">
            <p className="text-lg font-semibold uppercase">Stories Coming Soon</p>
            <p className="mt-4 text-muted-foreground">
              As our academy community grows, player journeys, family experiences, and milestone
              achievements will be shared here.
            </p>
          </div>
        </div>
      </section>
      <ContentBlock section={successStoriesContent.legacy} imageRight />
      <ContentBlock section={successStoriesContent.whatYoullFind} />
      <ContentBlock section={successStoriesContent.foundingChapter} imageRight />
      <ContentBlock section={successStoriesContent.lookingAhead} />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
