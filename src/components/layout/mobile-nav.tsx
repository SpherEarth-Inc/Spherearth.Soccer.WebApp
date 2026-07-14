"use client";

import { AppLink } from "@/components/ui/app-link";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ButtonLink } from "@/components/ui/button-link";
import { utilityNavigation, mainNavigation, headerActions } from "@/lib/content/navigation";
import type { NavItem } from "@/types/content";

function NavLinks({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate?: () => void;
}) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.href + item.label}>
          {item.disabled ? (
            <span className="block rounded-md px-3 py-2 text-sm text-muted-foreground/50">
              {item.label} (Coming soon)
            </span>
          ) : item.menuOnly && item.children?.length ? (
            <>
              <span className="block rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                {item.label}
              </span>
              <ul className="mb-1 ml-3 border-l pl-3">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <AppLink
                      href={child.href}
                      onClick={onNavigate}
                      className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {child.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <AppLink
                href={item.href}
                onClick={onNavigate}
                className="block rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </AppLink>
              {item.children?.length ? (
                <ul className="mb-1 ml-3 border-l pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <AppLink
                        href={child.href}
                        onClick={onNavigate}
                        className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {child.label}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex size-9 items-center justify-center text-foreground transition-colors hover:bg-muted lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left font-heading uppercase">Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-2 px-1">
          <ButtonLink
            href={headerActions.login.href}
            variant="outline"
            onClick={() => setOpen(false)}
            className="w-full rounded-none font-bold uppercase tracking-wide"
          >
            {headerActions.login.label}
          </ButtonLink>
          <ButtonLink
            href={headerActions.apply.href}
            onClick={() => setOpen(false)}
            className="w-full rounded-none bg-brand-green font-bold uppercase tracking-wide hover:bg-brand-green/90"
          >
            {headerActions.apply.label}
          </ButtonLink>
        </div>
        <nav className="mt-6">
          <p className="mb-2 px-3 text-xs font-semibold uppercase text-muted-foreground">
            Academy
          </p>
          <NavLinks items={mainNavigation} onNavigate={() => setOpen(false)} />
          <p className="mb-2 mt-6 px-3 text-xs font-semibold uppercase text-muted-foreground">
            Quick Links
          </p>
          <NavLinks items={utilityNavigation} onNavigate={() => setOpen(false)} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
