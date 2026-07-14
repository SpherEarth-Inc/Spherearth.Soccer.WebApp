import { PageHero } from "@/components/layout/page-hero";
import { ApplyPageContent } from "@/components/sections/apply-page-content";
import { applyContent } from "@/lib/content/pages/apply";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: applyContent.meta.title,
  description: applyContent.meta.description,
  path: applyContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions/" },
  { label: applyContent.meta.title },
];

export default function ApplyPage() {
  const { meta } = applyContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <ApplyPageContent />
    </>
  );
}
