import { AppLink } from "@/components/ui/app-link";
import type { BreadcrumbItem } from "@/types/content";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <li>
          <AppLink
            href="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Home className="size-3.5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </AppLink>
        </li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1">
            <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
            {item.href ? (
              <AppLink href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </AppLink>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
