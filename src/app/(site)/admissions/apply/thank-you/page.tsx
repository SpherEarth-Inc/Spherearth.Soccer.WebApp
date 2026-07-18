import { CtaBanner } from "@/components/sections/cta-banner";
import { applyContent } from "@/lib/content/pages/apply";
import { createMetadata } from "@/lib/content/site";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata = createMetadata({
  title: "Application Received",
  description: applyContent.thankYou.paragraphs[0],
  path: "/admissions/apply/thank-you/",
});

export default function ApplyThankYouPage() {
  const { thankYou } = applyContent;

  return (
    <>
      <section className="section-padding">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-3xl font-bold uppercase md:text-4xl">{thankYou.title}</h1>
          {thankYou.paragraphs.map((p, i) => (
            <p key={i} className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {thankYou.ctas.map((cta) => (
              <ButtonLink
                key={`${cta.href}-${cta.label}`}
                href={cta.href}
                variant="outline"
                className="rounded-none border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
              >
                {cta.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        title="Continue Exploring"
        description="Learn more about programmes, book a consultation, or contact our team."
        ctas={[
          { label: "Book a Parent Consultation", href: "/parents-and-families/consultation/", variant: "primary" },
          { label: "Explore Programs", href: "/programs/", variant: "secondary" },
        ]}
      />
    </>
  );
}
