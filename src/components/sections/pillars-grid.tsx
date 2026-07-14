import type { PillarItem } from "@/types/content";

interface PillarsGridProps {
  title: string;
  subtitle?: string;
  items: PillarItem[];
}

export function PillarsGrid({ title, subtitle, items }: PillarsGridProps) {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <h2 className="text-3xl font-bold uppercase md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="border-l-2 border-brand-green pl-4">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
