import { PageHero } from "@/components/layout/page-hero";
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
  const { meta } = successStoriesContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
    </>
  );
}
