"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/content/site";

interface CalendlyWidgetProps {
  url?: string;
}

export function CalendlyWidget({ url }: CalendlyWidgetProps) {
  const calendlyUrl = url || siteConfig.calendlyUrl;

  useEffect(() => {
    if (!calendlyUrl) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [calendlyUrl]);

  if (!calendlyUrl) {
    return (
      <div className="rounded-none border border-dashed border-muted-foreground/30 bg-muted/30 p-12 text-center">
        <p className="font-semibold">Scheduling will be available soon.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Please contact us at{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-green hover:underline">
            {siteConfig.contact.email}
          </a>{" "}
          or call {siteConfig.contact.phone} to book a parent consultation.
        </p>
      </div>
    );
  }

  return (
    <div
      className="calendly-inline-widget min-h-[650px] w-full"
      data-url={calendlyUrl}
    />
  );
}
