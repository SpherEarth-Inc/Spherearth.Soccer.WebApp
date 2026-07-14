import { PageHero } from "@/components/layout/page-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PillarsGrid } from "@/components/sections/pillars-grid";
import { aboutContent } from "@/lib/content/pages/about";
import { landingContent } from "@/lib/content/pages/landing";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: "About",
  description:
    "Why SpherEarth Football Academy exists and the four pillars that guide our player development philosophy.",
  path: "/about/",
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About" },
];

export default function AboutPage() {
  const { whyWeExist, pillars, finalCta } = landingContent;

  return (
    <>
      <PageHero
        title="About The Academy"
        description="Football is our platform. Character is our foundation. Opportunity is our destination."
        breadcrumb={breadcrumb}
        image="/images/explore/academy.webp"
      />

      <ContentBlock section={whyWeExist} />

      <PillarsGrid
        title={pillars.title}
        subtitle={pillars.subtitle}
        items={pillars.items}
      />

      <ContentBlock section={aboutContent.operations} />

      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
        dark={false}
      />
    </>
  );
}
