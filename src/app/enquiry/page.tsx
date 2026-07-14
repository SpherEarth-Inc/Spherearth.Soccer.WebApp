import { PageHero } from "@/components/layout/page-hero";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { ContentBlock } from "@/components/sections/content-block";
import { CtaBanner } from "@/components/sections/cta-banner";
import { enquiryContent } from "@/lib/content/pages/enquiry";
import { createMetadata } from "@/lib/content/site";

export const metadata = createMetadata({
  title: enquiryContent.meta.title,
  description: enquiryContent.meta.description,
  path: enquiryContent.meta.path,
});

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: enquiryContent.meta.title },
];

export default function EnquiryPage() {
  const { meta, office, hours, mapNote, finalCta } = enquiryContent;

  return (
    <>
      <PageHero
        title={meta.title}
        description={meta.description}
        breadcrumb={breadcrumb}
        image={meta.heroImage}
      />
      <ContentBlock section={enquiryContent.intro} />
      <section id="enquiry-form" className="section-padding bg-muted/50">
        <div className="container mx-auto container-padding">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold uppercase">{enquiryContent.formIntro.title}</h2>
            {enquiryContent.formIntro.description && (
              <p className="mt-4 text-muted-foreground">
                {enquiryContent.formIntro.description}
              </p>
            )}
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
      <ContentBlock section={enquiryContent.admissionsNote} />
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold uppercase">{office.title}</h2>
              <p className="mt-2 font-medium">{office.company}</p>
              <address className="mt-4 not-italic text-muted-foreground">
                {office.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-4">
                <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-brand-green hover:underline">
                  {office.phone}
                </a>
              </p>
              <p className="mt-2">
                <a href={`mailto:${office.email}`} className="text-brand-green hover:underline">
                  {office.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Privacy:{" "}
                <a href={`mailto:${office.privacyEmail}`} className="text-brand-green hover:underline">
                  {office.privacyEmail}
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase">{hours.title}</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>{hours.weekdays}</li>
                <li>{hours.saturday}</li>
                <li>{hours.sunday}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContentBlock section={enquiryContent.operations} />
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto container-padding">
          <div className="mx-auto max-w-5xl">
            <div className="flex aspect-video items-center justify-center border border-dashed border-muted-foreground/30 bg-muted/30 p-8 text-center">
              <p className="max-w-lg text-sm text-muted-foreground">{mapNote}</p>
            </div>
          </div>
        </div>
      </section>
      <ContentBlock section={enquiryContent.beforeYouContact} />
      <CtaBanner
        title={finalCta.title}
        description={finalCta.description}
        ctas={finalCta.ctas}
      />
    </>
  );
}
