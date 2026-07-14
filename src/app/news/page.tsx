import { PageHero } from "@/components/layout/page-hero";
import { ContentBlock } from "@/components/sections/content-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { newsContent } from "@/lib/content/pages/news";
import { createMetadata } from "@/lib/content/site";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata = createMetadata({
  title: newsContent.meta.title,
  description: newsContent.meta.description,
  path: newsContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: newsContent.meta.title },
];

export default function NewsPage() {
  const { meta, featured, updateCategories, finalCta } = newsContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <ContentBlock section={newsContent.intro} />
      <section className="section-padding bg-brand-navy text-white">
        <div className="container mx-auto container-padding">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
              Featured · {featured.date}
            </p>
            <h2 className="mt-2 text-3xl font-bold uppercase md:text-4xl">{featured.title}</h2>
            <p className="mt-4 text-white/80 leading-relaxed">{featured.excerpt}</p>
            <ButtonLink
              href={featured.cta.href}
              className="mt-8 rounded-none bg-brand-green hover:bg-brand-green/90"
            >
              {featured.cta.label}
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="text-center text-2xl font-bold uppercase">Latest Articles</h2>
          <div className="mx-auto mt-12 max-w-lg rounded-none border border-dashed border-muted-foreground/30 bg-muted/30 p-12 text-center">
            <p className="font-semibold">More articles coming soon</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Official announcements, admissions updates, and academy insights will appear here as
              they are published.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {updateCategories.map((category) => (
              <div key={category.id} className="border border-border p-6">
                <h3 className="font-bold">{category.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContentBlock section={newsContent.insights} />
      <ContentBlock section={newsContent.connect} imageRight />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
