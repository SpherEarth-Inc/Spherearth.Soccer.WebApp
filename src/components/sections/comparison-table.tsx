import type { ComparisonRow } from "@/types/content";

interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  rows: ComparisonRow[];
}

export function ComparisonTable({ title, subtitle, rows }: ComparisonTableProps) {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold uppercase md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-brand-navy">
                <th className="p-4 font-bold uppercase">Traditional Programs</th>
                <th className="bg-brand-green/10 p-4 font-bold uppercase text-brand-green">
                  SpherEarth Football Academy
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-4 text-muted-foreground">{row.traditional}</td>
                  <td className="bg-brand-green/5 p-4 font-medium">{row.academy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
