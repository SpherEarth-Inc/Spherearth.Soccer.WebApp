import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

export interface CardWallItem {
  tag: string;
  title: string;
  description?: string;
  href: string;
  image: string;
  featured?: boolean;
}

interface CardWallProps {
  items: CardWallItem[];
  className?: string;
}

export function CardWall({ items, className }: CardWallProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item) => (
        <Link
          key={item.href + item.title}
          href={item.href}
          className={cn(
            "group relative isolate flex min-h-[16rem] flex-col justify-end overflow-hidden bg-brand-navy text-white",
            item.featured && "sm:col-span-2 sm:min-h-[22rem] lg:row-span-2 lg:min-h-full"
          )}
        >
          <Image
            src={asset(item.image)}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={item.featured ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
          <div className="absolute left-0 top-0 m-4 inline-flex bg-red-600 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-widest">
            {item.tag}
          </div>
          <div className="relative z-10 p-5 md:p-6">
            <h3
              className={cn(
                "font-heading font-bold uppercase leading-tight tracking-tight",
                item.featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
              )}
            >
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-2 line-clamp-2 max-w-md text-sm text-white/75">
                {item.description}
              </p>
            )}
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-brand-green">
              Read more
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
