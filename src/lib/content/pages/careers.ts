import { images } from "../assets";
import type { ContentSection, CtaLink, PageMeta } from "@/types/content";

export interface RoleCategory {
  id: string;
  title: string;
  description: string;
}

export interface CareersContent {
  meta: PageMeta;
  intro: ContentSection;
  roleCategories: RoleCategory[];
  whyJoin: ContentSection;
  applicationNote: ContentSection;
  finalCta: {
    title: string;
    description: string;
    cta: CtaLink;
  };
}

export const careersContent: CareersContent = {
  meta: {
    title: "Careers",
    description:
      "Join SpherEarth Football Academy. Explore career opportunities in coaching, admissions, operations, and more.",
    path: "/careers/",
    heroImage: images.stadiumTunnel,
  },
  intro: {
    title: "Careers",
    subtitle: "Help Shape the Future of Youth Football Development.",
    paragraphs: [
      "SpherEarth Football Academy is building a team of passionate professionals committed to developing talented young athletes and creating meaningful opportunities for families and communities.",
      "As we prepare for launch and grow responsibly across the Greater Toronto Area, we welcome individuals who share our values of integrity, excellence, and long-term impact.",
    ],
  },
  roleCategories: [
    {
      id: "admissions-advisors",
      title: "Admissions Advisors",
      description:
        "Authorized representatives who identify prospective players and families, guide families through the admissions process, and help build the academy's founding community.",
    },
    {
      id: "coaches",
      title: "Coaches",
      description:
        "Qualified coaching professionals who deliver structured technical and tactical development, mentorship, and positive player experiences within a professional academy environment.",
    },
    {
      id: "operations",
      title: "Operations",
      description:
        "Team members who support academy administration, programme coordination, communications, and the day-to-day delivery of a premium academy experience.",
    },
    {
      id: "volunteers",
      title: "Volunteers",
      description:
        "Community-minded individuals who contribute time and expertise to support academy events, outreach initiatives, and player development activities.",
    },
    {
      id: "internships",
      title: "Internships",
      description:
        "Learning opportunities for students and early-career professionals interested in sport management, coaching, marketing, operations, and youth development.",
    },
    {
      id: "corporate",
      title: "Corporate Roles",
      description:
        "Professional roles within SpherEarth Inc. supporting the academy and broader corporate operations, including finance, legal, marketing, and strategic development.",
    },
  ],
  whyJoin: {
    id: "why-join",
    title: "Why Join SpherEarth Football Academy?",
    description: "Working with the academy means contributing to something meaningful:",
    bullets: [
      "Developing the next generation of athletes and leaders",
      "Building a premium youth football academy in Toronto",
      "Working within a professionally governed organization",
      "Creating lasting community impact",
      "Growing alongside a responsible, long-term vision",
    ],
  },
  applicationNote: {
    id: "application",
    title: "How to Apply",
    paragraphs: [
      "Current openings will be posted as the academy prepares for launch and expands operations.",
      "Interested candidates are invited to submit an enquiry through the Enquiry Centre or contact us directly to express interest in future opportunities.",
      "For Admissions Advisor opportunities, please visit the dedicated Become an Admissions Advisor page.",
    ],
    cta: { label: "Become an Admissions Advisor", href: "/admissions-advisor/" },
  },
  finalCta: {
    title: "Interested in Joining Our Team?",
    description:
      "We welcome enquiries from passionate professionals who believe in the power of sport to develop young people. Contact us to learn about current and upcoming opportunities.",
    cta: { label: "Contact Us", href: "/enquiry/?department=General%20Enquiries" },
  },
};
