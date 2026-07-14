import { images } from "../assets";
import type { ContentSection, CtaLink, PageMeta } from "@/types/content";

export interface SponsorshipContent {
  meta: PageMeta;
  intro: ContentSection;
  sponsorFunded: ContentSection;
  commitment: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const sponsorshipContent: SponsorshipContent = {
  meta: {
    title: "Sponsorship",
    description:
      "Support youth development through sponsorship at SpherEarth Football Academy. Explore sponsor-funded scholarships and partnership opportunities.",
    path: "/relations/sponsorship/",
    heroImage: images.becomeASponsor,
  },
  intro: {
    title: "Sponsorship",
    paragraphs: [
      "SpherEarth Football Academy welcomes organizations and supporters who wish to invest in young athletes, strengthen communities, and create meaningful opportunities through structured football development.",
      "Through sponsorship, partners help expand access to development pathways, scholarship opportunities, and long-term positive impact for families across the communities we serve.",
    ],
    cta: { label: "Become a Sponsor", href: "/enquiry/?department=Sponsorship", variant: "primary" },
  },
  sponsorFunded: {
    id: "sponsor-funded",
    title: "Sponsor-Funded Scholarships",
    subtitle: "Sponsor-Funded Scholarships",
    paragraphs: [
      "Many scholarship opportunities are made possible through the generosity of businesses, foundations, community organizations, and individual supporters who believe in the power of youth development through sport.",
      "Sponsor-funded scholarships allow partners to create meaningful community impact while helping talented young athletes access structured football development.",
      "Organizations interested in supporting future players are invited to explore partnership opportunities with the academy.",
    ],
  },
  commitment: {
    id: "commitment",
    title: "Our Commitment",
    subtitle: "Our Commitment",
    paragraphs: [
      "As SpherEarth Football Academy grows, our ambition is to expand scholarship opportunities through new partnerships, community support, and responsible growth.",
      "Every additional sponsor, donor, and community partner creates the possibility of supporting more young athletes in the future.",
      "Our scholarship program will continue to evolve alongside the academy and the communities we serve.",
      "Every scholarship awarded reflects the belief that investing in young people creates stronger families, stronger communities, and a brighter future.",
    ],
  },
  finalCta: {
    title: "Become a Partner in the Future of Youth Development",
    description:
      "Every successful partnership begins with a conversation. Whether your organization wishes to support youth development, strengthen community engagement, expand corporate social responsibility initiatives, or create lasting impact, we welcome the opportunity to explore how we can work together. Together, we can develop more than athletes. We can help shape future leaders.",
    ctas: [
      { label: "Become a Sponsor", href: "/enquiry/?department=Sponsorship", variant: "primary" },
      { label: "Book a Partnership Meeting", href: "/enquiry/?department=Sponsorship", variant: "secondary" },
      {
        label: "Download Sponsorship Prospectus",
        href: "/enquiry/?department=Sponsorship",
        variant: "outline",
      },
    ],
  },
};
