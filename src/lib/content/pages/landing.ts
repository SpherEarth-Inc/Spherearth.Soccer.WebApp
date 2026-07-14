import { images } from "../assets";
import type {
  ComparisonRow,
  ContentSection,
  CtaLink,
  FaqItem,
  PageMeta,
  PillarItem,
  ProgramCard,
} from "@/types/content";

export interface LandingContent {
  meta: PageMeta;
  hero: {
    headline: string;
    subheadline: string;
    description: string;
    ctas: CtaLink[];
  };
  whyWeExist: ContentSection;
  pillars: {
    title: string;
    subtitle: string;
    items: PillarItem[];
  };
  academyDifference: {
    title: string;
    subtitle: string;
    rows: ComparisonRow[];
  };
  globalVision: ContentSection;
  programsOverview: {
    title: string;
    subtitle: string;
    cards: ProgramCard[];
    cta: CtaLink;
  };
  familyPromise: ContentSection;
  scholarships: ContentSection;
  sponsorship: ContentSection;
  faqs: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  trustSnippet: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const landingContent: LandingContent = {
  meta: {
    title: "Home",
    description:
      "SpherEarth Football Academy is a premium youth football development academy built in Toronto and designed for ambitious young athletes and families.",
    path: "/",
    heroImage: images.homepageHero,
  },
  hero: {
    headline: "SpherEarth Football Academy",
    subheadline: "Developing Talent. Expanding Possibilities.",
    description:
      "SpherEarth Football Academy is a premium youth football development academy built in Toronto and designed for ambitious young athletes and families who believe football can open doors to lifelong opportunities. Our approach goes beyond training. We combine elite coaching, structured player development, character formation, leadership, academic balance, and global pathways to help young athletes become confident players, responsible leaders, and well-rounded individuals.",
    ctas: [
      { label: "Apply Now", href: "/admissions/apply/", variant: "primary" },
      { label: "Book a Parent Consultation", href: "/parent-consultation/", variant: "secondary" },
      { label: "Download Prospectus", href: "/enquiry/?department=Admissions", variant: "outline" },
    ],
  },
  whyWeExist: {
    id: "why-we-exist",
    title: "Football Can Change Lives",
    subtitle: "Why We Exist",
    paragraphs: [
      "Talent alone rarely determines success. The right environment does.",
      "At SpherEarth Football Academy, we believe every young athlete deserves access to structured coaching, positive mentorship, disciplined development, and opportunities that extend far beyond the football pitch.",
      "Our mission is to help players reach their highest potential while developing the confidence, resilience, discipline, and leadership skills that prepare them for success in sport, education, and life.",
      "Football is our platform. Character is our foundation. Opportunity is our destination.",
    ],
    image: images.whyWeExist,
  },
  pillars: {
    title: "Our Four Pillars",
    subtitle: "A Complete Player Development Philosophy",
    items: [
      {
        title: "Technical Development",
        description:
          "Develop confident players through structured coaching, ball mastery, positional skills, decision-making, and continuous technical improvement.",
      },
      {
        title: "Tactical Intelligence",
        description:
          "Teach players to understand the game—not simply play it. Develop football intelligence through match analysis, tactical awareness, communication, teamwork, and problem-solving.",
      },
      {
        title: "Academic Excellence",
        description:
          "Great athletes build great futures. We encourage educational achievement, personal responsibility, time management, and lifelong learning alongside athletic development.",
      },
      {
        title: "Global Opportunities",
        description:
          "Our vision extends beyond local competition. We aim to create pathways that connect talented players with opportunities for higher education, elite competition, international experiences, and long-term personal growth.",
      },
    ],
  },
  academyDifference: {
    title: "The SpherEarth Difference",
    subtitle: "More Than Weekly Training Sessions",
    rows: [
      { traditional: "Weekly sessions", academy: "Structured long-term development" },
      { traditional: "Technical focus", academy: "Technical, tactical, academic and character development" },
      { traditional: "Limited communication", academy: "Family partnership and transparency" },
      { traditional: "Local perspective", academy: "Global development vision" },
      { traditional: "Recreational participation", academy: "Purpose-driven player pathways" },
    ],
  },
  globalVision: {
    id: "global-vision",
    title: "Built in Toronto. Designed for the World.",
    description:
      "Football is a global language. Our long-term vision is to develop players in Toronto while building meaningful relationships with football communities, educational institutions, and development opportunities across Canada and internationally. We aspire to prepare athletes not only for today's competitions but also for tomorrow's possibilities.",
    image: "/images/football-toronto.webp",
  },
  programsOverview: {
    title: "Programs Overview",
    subtitle: "A Pathway for Every Stage of Development",
    cards: [
      {
        title: "Founding Program",
        description:
          "Designed for our inaugural intake of players and families who wish to help shape the future of the academy while receiving premium coaching and personalized attention.",
        idealFor: ["Founding families", "Motivated young athletes", "Players seeking structured development"],
        cta: { label: "Explore Programs", href: "/programs/" },
      },
      {
        title: "Premier Program",
        description:
          "For committed players seeking structured technical and tactical development within a disciplined, high-performance environment.",
        idealFor: ["Demonstrated commitment", "Structured coaching", "Continuous improvement"],
        cta: { label: "Explore Programs", href: "/programs/" },
      },
      {
        title: "Signature Program",
        description:
          "Our most comprehensive development experience, combining elite coaching, leadership development, enhanced support, and additional pathway opportunities.",
        idealFor: ["Highly committed athletes", "Premium academy experience", "Long-term development opportunities"],
        cta: { label: "Explore Programs", href: "/programs/" },
      },
    ],
    cta: { label: "Explore Programs", href: "/programs/", variant: "primary" },
  },
  familyPromise: {
    id: "family-promise",
    title: "Our Promise to Families",
    description: "Families are central to everything we do. We believe successful player development requires genuine partnership between coaches, parents, and athletes.",
    bullets: [
      "Professional communication",
      "Structured coaching",
      "Safe learning environments",
      "Transparent admissions",
      "Respect for every player",
      "Long-term development over short-term results",
    ],
    paragraphs: ["Your child is more than a player. They are part of our community."],
    image: images.families,
  },
  scholarships: {
    id: "scholarships",
    title: "Opportunity Should Never Be Limited by Circumstance",
    subtitle: "Scholarships",
    description:
      "SpherEarth Football Academy is committed to expanding access through scholarships supported by sponsors, donors, and community partners. Scholarships may be awarded based on merit, financial need, leadership, or exceptional potential, subject to availability and the academy's selection process.",
    cta: { label: "Learn About Scholarships", href: "/scholarships/" },
  },
  sponsorship: {
    id: "sponsorship",
    title: "Invest in the Next Generation",
    subtitle: "Sponsorship",
    description:
      "Partnerships create possibilities. We welcome organizations, businesses, foundations, and community leaders who share our commitment to youth development. Together we can help talented young athletes access life-changing opportunities while creating meaningful community impact.",
    image: images.sponsorship,
    cta: { label: "Become a Sponsor", href: "/relations/sponsorship/" },
  },
  faqs: {
    title: "Frequently Asked Questions",
    subtitle: "Common Questions",
    items: [
      {
        question: "Who can apply?",
        answer:
          "Players who meet the academy's age and eligibility requirements are welcome to submit an application for consideration.",
      },
      {
        question: "Does applying guarantee admission?",
        answer:
          "No. Applications begin the admissions review process but do not guarantee acceptance.",
      },
      {
        question: "Do you offer scholarships?",
        answer:
          "Yes. Scholarships may be available through academy programs and sponsor-supported initiatives.",
      },
      {
        question: "Where will training take place?",
        answer:
          "Training locations across the Greater Toronto Area will be announced through official SpherEarth communication channels.",
      },
      {
        question: "How will families be contacted?",
        answer:
          "Only through verified SpherEarth communication channels and authorized representatives.",
      },
    ],
  },
  trustSnippet: {
    id: "trust-safety",
    title: "Protect Yourself Against Fraud",
    subtitle: "Official Communications",
    description:
      "SpherEarth Football Academy will never ask families to make payments through unofficial channels or individuals claiming to represent the academy without authorization. Before sharing personal information or making any payment, verify that you are communicating with an approved SpherEarth representative.",
    ctas: [
      { label: "Verify Representative", href: "/trust-and-safety/#verify" },
      { label: "Fraud Prevention", href: "/trust-and-safety/#fraud-prevention" },
    ],
  },
  finalCta: {
    title: "The Journey Starts Here",
    description:
      "Every great opportunity begins with a single decision. Whether your goal is football excellence, personal growth, lifelong friendships, or future opportunities, SpherEarth Football Academy is committed to helping young athletes pursue their highest potential. Join us as we build a new standard for youth football development in Canada.",
    ctas: [
      { label: "Apply Now", href: "/admissions/apply/", variant: "primary" },
      { label: "Book a Parent Consultation", href: "/parent-consultation/", variant: "secondary" },
      { label: "Download Prospectus", href: "/enquiry/?department=Admissions", variant: "outline" },
    ],
  },
};
