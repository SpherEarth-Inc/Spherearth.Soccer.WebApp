"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  tag: string;
  headline: string;
  description?: string;
  /** Path under /public, e.g. "/images/home-hero/programs.mp4". Optional until a video is provided. */
  video?: string;
  /** Poster for the video and/or fallback background when no video exists yet. */
  image?: string;
  /** How the media fills the hero. "cover" (default) crops to fill; "contain" shows the whole frame. */
  fit?: "cover" | "contain";
  ctas: { label: string; href: string }[];
}

const IMAGE_DURATION = 7000;
const VIDEO_FALLBACK = 18000;

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active) {
        video.currentTime = 0;
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });

    if (slides.length <= 1) return;

    const duration = slides[active].video ? VIDEO_FALLBACK : IMAGE_DURATION;
    timerRef.current = setTimeout(next, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, slides, next]);

  return (
    <section className="relative isolate flex min-h-screen flex-col justify-end overflow-hidden bg-brand-navy text-white">
      {slides.map((slide, i) => (
        <div
          key={`${slide.tag}-bg-${i}`}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === active ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          aria-hidden={i !== active}
        >
          {slide.video ? (
            <>
              {slide.fit === "contain" && (
                <video
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-70 blur-2xl"
                  muted
                  playsInline
                  autoPlay
                  loop
                  preload="metadata"
                  aria-hidden
                >
                  <source src={asset(slide.video)} type="video/mp4" />
                </video>
              )}
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                className={cn(
                  "relative z-[1] h-full w-full",
                  slide.fit === "contain" ? "object-contain" : "object-cover object-top"
                )}
                poster={slide.image ? asset(slide.image) : undefined}
                muted
                playsInline
                preload="metadata"
                loop={slides.length <= 1}
                onEnded={slides.length > 1 ? next : undefined}
              >
                <source src={asset(slide.video)} type="video/mp4" />
              </video>
            </>
          ) : slide.image ? (
            <Image
              src={asset(slide.image)}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          ) : null}
        </div>
      ))}

      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/70 via-black/35 to-black/10" />

      <div className="container relative z-10 mx-auto container-padding pb-14 pt-24 md:pb-20">
        {slides.map((slide, i) => (
          <div key={`${slide.headline}-content-${i}`} className={i === active ? "block" : "hidden"}>
            {slide.tag && (
              <span className="inline-flex bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-widest">
                {slide.tag}
              </span>
            )}
            <h1 className="mt-4 max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              {slide.headline}
            </h1>
            {slide.description && (
              <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
                {slide.description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {slide.ctas.map((cta, ci) => (
                <ButtonLink
                  key={cta.href}
                  href={cta.href}
                  size="lg"
                  variant={ci === 0 ? "default" : "outline"}
                  className={cn(
                    "h-12 gap-2 px-8 text-base md:h-14 md:px-10 md:text-lg",
                    ci === 0
                      ? "rounded-none bg-brand-green hover:bg-brand-green/90"
                      : "rounded-none border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  {cta.label}
                  {ci === 0 && <ArrowRight className="size-5" />}
                </ButtonLink>
              ))}
            </div>
          </div>
        ))}

        {slides.length > 1 && (
          <div className="mt-8 flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={`${slide.headline}-dot-${i}`}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${slide.tag || slide.headline}`}
                aria-current={i === active}
                className={cn(
                  "h-1.5 w-8 transition-colors",
                  i === active ? "bg-brand-green" : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
