"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ButtonLink } from "@/components/ui/button-link";
import { asset } from "@/lib/asset";
import { images } from "@/lib/content/assets";
import { mainNavigation } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/content/site";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className="border-b-2 border-transparent px-2.5 py-1.5 text-xs font-bold uppercase tracking-wide text-foreground/80 transition-colors hover:border-brand-green hover:text-brand-green xl:px-3"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 border-b-2 border-transparent px-2.5 py-1.5 text-xs font-bold uppercase tracking-wide text-foreground/80 transition-colors hover:border-brand-green hover:text-brand-green xl:px-3"
      >
        {item.label}
        <ChevronDown className="size-3.5" aria-hidden="true" />
      </Link>
      <div
        className={cn(
          "absolute left-0 top-full z-50 min-w-[300px] divide-y divide-border overflow-hidden bg-background shadow-lg transition-all",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block px-5 py-3.5 text-sm font-semibold leading-snug text-foreground transition-colors hover:text-brand-green"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="border-b bg-white text-foreground">
        <div className="container mx-auto flex items-center justify-between gap-6 container-padding py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={asset(images.logo)}
              alt={siteConfig.shortName}
              width={180}
              height={48}
              className="h-9 w-auto md:h-11"
              priority
            />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center lg:flex"
            aria-label="Main navigation"
          >
            {mainNavigation.map((item) => (
              <DesktopNavItem key={item.href + item.label} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href="/admissions/apply/"
              className="hidden rounded-none bg-brand-green font-bold uppercase tracking-wide hover:bg-brand-green/90 sm:inline-flex"
            >
              Apply Now
            </ButtonLink>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
