import type { ContentSection, CtaLink, PageMeta } from "@/types/content";

export interface NewsCategory {
  id: string;
  title: string;
  description: string;
}

export interface FeaturedAnnouncement {
  title: string;
  date: string;
  excerpt: string;
  cta: CtaLink;
}

export interface NewsContent {
  meta: PageMeta;
  intro: ContentSection;
  featured: FeaturedAnnouncement;
  updateCategories: NewsCategory[];
  insights: ContentSection;
  connect: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const newsContent: NewsContent = {
  meta: {
    title: "News & Insights",
    description:
      "Stay informed as SpherEarth Football Academy grows. Official announcements, admissions updates, and academy insights.",
    path: "/news/",
    heroImage: "/images/explore/news.jpg",
  },
  intro: {
    title: "News & Insights",
    subtitle: "Stay informed as SpherEarth Football Academy grows.",
    paragraphs: [
      "Welcome to the official News & Insights page of SpherEarth Football Academy.",
      "This is where we share academy announcements, admissions updates, programme developments, community initiatives, educational articles, and other official communications.",
      "Whether you are a prospective family, player, partner, sponsor, or member of the community, this page will help you stay connected with the academy's journey.",
    ],
  },
  featured: {
    title: "Welcome to SpherEarth Football Academy",
    date: "2026",
    excerpt:
      "We are pleased to introduce SpherEarth Football Academy—a premium youth football development academy built in Toronto and designed to support the next generation of athletes through structured coaching, character development, and long-term opportunity. Our focus extends beyond football. We are committed to developing confident, disciplined, and well-rounded young people while building meaningful partnerships with families and communities.",
    cta: { label: "Discover the Academy", href: "/" },
  },
  updateCategories: [
    {
      id: "admissions",
      title: "Admissions Updates",
      description: "Application periods, intake announcements, and admissions process updates.",
    },
    {
      id: "programmes",
      title: "Programme Announcements",
      description: "New programmes, training developments, and player pathway updates.",
    },
    {
      id: "parents",
      title: "Parent Information",
      description: "Guidance and announcements for parents and families.",
    },
    {
      id: "community",
      title: "Community Initiatives",
      description: "Community events, outreach programmes, and local engagement.",
    },
    {
      id: "partnerships",
      title: "Partnership Announcements",
      description: "New sponsors, strategic partners, and collaboration news.",
    },
    {
      id: "scholarships",
      title: "Scholarship Announcements",
      description: "Scholarship opportunities, awards, and donor recognition.",
    },
    {
      id: "notices",
      title: "Important Academy Notices",
      description: "Official notices, schedule changes, and academy communications.",
    },
  ],
  insights: {
    id: "insights",
    title: "Insights",
    description: "We believe informed families make better decisions. Our Insights section will feature articles and resources covering topics such as:",
    bullets: [
      "Youth football development",
      "Leadership through sport",
      "Parent guidance",
      "Athlete well-being",
      "Long-term player development",
      "Academy life",
    ],
  },
  connect: {
    id: "connect",
    title: "Connect With Us",
    description:
      "Follow SpherEarth Football Academy through our official communication channels for the latest announcements and academy updates.",
    paragraphs: [
      "We invite you to follow our journey as we build a community committed to developing talented athletes, supporting families, and creating meaningful opportunities through football.",
    ],
  },
  finalCta: {
    title: "Stay Connected",
    description:
      "Follow our official channels for the latest academy announcements, educational content, and community updates.",
    ctas: [
      { label: "Explore the Academy", href: "/", variant: "primary" },
      { label: "Apply Now", href: "/admissions/apply/", variant: "secondary" },
    ],
  },
};
