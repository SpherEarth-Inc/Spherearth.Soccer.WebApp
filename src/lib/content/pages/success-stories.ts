import { images } from "../assets";
import type { PageMeta } from "@/types/content";

export const successStoriesContent = {
  meta: {
    title: "Success Stories",
    description: "Success stories from SpherEarth Football Academy players, families, and partners.",
    path: "/success-stories/",
    heroImage: images.successStoriesHero,
  } satisfies PageMeta,
};
