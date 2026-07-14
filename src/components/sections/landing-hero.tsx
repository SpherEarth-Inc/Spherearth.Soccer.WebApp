"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CtaLink } from "@/types/content";
import { ButtonLink } from "@/components/ui/button-link";
import { asset } from "@/lib/asset";

interface LandingHeroProps {
  headline: string;
  subheadline: string;
  description: string;
  image: string;
  ctas: CtaLink[];
}

export function LandingHero({
  headline,
  subheadline,
  description,
  image,
  ctas,
}: LandingHeroProps) {
  return (
    <section className="relative isolate flex min-h-[78vh] flex-col justify-end overflow-hidden bg-brand-navy text-white">
      <Image
        src={asset(image)}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />

      <div className="absolute left-0 top-0 z-10">
        <div className="container mx-auto container-padding pt-8">
          <span className="inline-flex bg-brand-green px-3 py-1.5 text-xs font-bold uppercase tracking-widest">
            {subheadline}
          </span>
        </div>
      </div>

      <div className="container relative z-10 mx-auto container-padding pb-14 pt-24 md:pb-20">
        <h1 className="max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
          {headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {ctas.map((cta, i) => (
            <ButtonLink
              key={cta.href}
              href={cta.href}
              size="lg"
              variant={i === 0 ? "default" : "outline"}
              className={
                i === 0
                  ? "rounded-none bg-brand-green hover:bg-brand-green/90"
                  : "rounded-none border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              }
            >
              {cta.label}
              {i === 0 && <ArrowRight className="size-4" />}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
