import { images } from "../assets";
import type { ContentSection, CtaLink, PageMeta } from "@/types/content";

export interface SuccessStoriesContent {
  meta: PageMeta;
  intro: ContentSection;
  legacy: ContentSection;
  whatYoullFind: ContentSection;
  foundingChapter: ContentSection;
  lookingAhead: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const successStoriesContent: SuccessStoriesContent = {
  meta: {
    title: "Success Stories",
    description:
      "Every great journey begins with a first step. Success stories from SpherEarth Football Academy players, families, and partners — coming soon.",
    path: "/success-stories/",
    heroImage: images.stadiumTunnel,
  },
  intro: {
    title: "Success Stories",
    subtitle: "Every Great Journey Begins With a First Step.",
    paragraphs: [
      "Every successful athlete has a story.",
      "At SpherEarth Football Academy, we look forward to celebrating the achievements, growth, and experiences of our players, families, coaches, and partners as they progress through their football journeys.",
      "As our academy community grows, this page will become home to the stories that inspire future generations.",
    ],
  },
  legacy: {
    id: "legacy",
    title: "Building Tomorrow's Success Stories",
    subtitle: "A Legacy in the Making",
    paragraphs: [
      "SpherEarth Football Academy is preparing to welcome its founding generation of players and families.",
      "While our story is only beginning, our commitment to excellence, character development, and long-term player growth is already shaping the future we intend to build.",
      "The athletes who join us today will become the success stories of tomorrow.",
    ],
  },
  whatYoullFind: {
    id: "what-youll-find",
    title: "What You'll Find Here",
    description: "As the academy develops, this page will feature:",
    bullets: [
      "Player development journeys",
      "Family experiences",
      "Coach perspectives",
      "Community impact stories",
      "Academy milestones",
      "Scholarship success stories",
      "Competition highlights",
      "Leadership achievements",
      "Educational accomplishments",
      "Alumni journeys",
      "Photo galleries",
      "Video features",
    ],
    paragraphs: [
      "Every story will reflect our belief that football can help develop confident, responsible, and well-rounded young people.",
    ],
  },
  foundingChapter: {
    id: "founding-chapter",
    title: "Founding Families Will Help Write Our Story",
    subtitle: "Our First Chapter Starts With You",
    paragraphs: [
      "The first generation of SpherEarth Football Academy players and families will play a unique role in establishing the culture, traditions, and legacy of the academy.",
      "Their experiences, commitment, and achievements will help shape the future of the academy for years to come.",
      "Every institution begins somewhere. Ours begins with the families who choose to believe in the vision.",
    ],
  },
  lookingAhead: {
    id: "looking-ahead",
    title: "A Story Worth Following",
    subtitle: "Looking Ahead",
    description: "As our players grow, this page will evolve into a living record of their achievements, milestones, and memories. We look forward to celebrating:",
    bullets: [
      "First training sessions",
      "Academy events",
      "Community initiatives",
      "Player development",
      "Match experiences",
      "Scholarships awarded",
      "Leadership achievements",
      "Graduation milestones",
      "Future opportunities",
    ],
    paragraphs: [
      "Every success will represent the collective efforts of players, families, coaches, partners, and the wider SpherEarth community.",
    ],
  },
  finalCta: {
    title: "Be Part of the First Chapter",
    description:
      "Every great institution begins with people who believe in a vision before the success stories are written. If you are looking for an academy committed to long-term development, meaningful relationships, and lasting impact, we invite you to begin your journey with us. The next success story could be yours.",
    ctas: [
      { label: "Apply Now", href: "/admissions/apply/", variant: "primary" },
      { label: "Book a Parent Consultation", href: "/parent-consultation/", variant: "secondary" },
    ],
  },
};
