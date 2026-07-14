import type { StepItem } from "@/types/content";

interface StepsTimelineProps {
  id?: string;
  title?: string;
  subtitle?: string;
  steps: StepItem[];
}

export function StepsTimeline({ id, title, subtitle, steps }: StepsTimelineProps) {
  return (
    <section id={id} className={id ? "scroll-mt-24 section-padding" : "section-padding"}>
      <div className="container mx-auto container-padding">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold uppercase md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="relative border-l-4 border-brand-green pl-6">
              <span className="absolute -left-3 flex size-6 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white">
                {step.step}
              </span>
              <h3 className="font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
