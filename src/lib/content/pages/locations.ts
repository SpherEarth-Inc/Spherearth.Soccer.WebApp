import { gtaCommunities } from "../navigation";
import { images } from "../assets";
import type { ContentSection, CtaLink, FaqItem, PageMeta } from "@/types/content";

export interface LocationsContent {
  meta: PageMeta;
  intro: ContentSection;
  findYourZone: ContentSection;
  gta: ContentSection & { communities: readonly string[] };
  beyondGta: ContentSection;
  trainingLocations: ContentSection;
  agePathways: ContentSection;
  trainingSchedule: ContentSection;
  matchDays: ContentSection;
  parentsFamilies: ContentSection;
  commitment: ContentSection;
  faqs: FaqItem[];
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const locationsContent: LocationsContent = {
  meta: {
    title: "Locations",
    description:
      "Serving families across the Greater Toronto Area. Explore regional service areas and training locations for SpherEarth Football Academy.",
    path: "/locations/",
    heroImage: images.torontoReflection,
  },
  intro: {
    title: "Locations",
    paragraphs: [
      "SpherEarth Football Academy is committed to making structured youth football development accessible to families across the Greater Toronto Area (GTA).",
      "Our regional model is designed to bring high-quality coaching and player development closer to where families live while maintaining consistent academy standards.",
      "Training activities are delivered through carefully selected facilities and approved venues that support our operational requirements. Specific locations may vary based on programme needs, seasonal scheduling, and operational planning.",
    ],
    cta: { label: "Find Your Zone", href: "/admissions/apply/", variant: "primary" },
  },
  findYourZone: {
    id: "find-your-zone",
    title: "Regional Service Areas",
    subtitle: "Find Your Zone",
    description:
      "Families can explore the region that best corresponds with their location and connect with the appropriate Admissions Team for guidance. Our admissions process considers the most suitable training zone based on several operational factors, including geography, programme availability, and player placement.",
  },
  gta: {
    id: "gta",
    title: "Serving the GTA",
    subtitle: "Greater Toronto Area",
    description:
      "The Greater Toronto Area represents the academy's founding region and remains the focus of our initial operations. Our objective is to provide convenient regional access for families while maintaining a consistent academy experience across all approved training locations.",
    paragraphs: [
      "Families from anywhere within the GTA are encouraged to submit an application or contact our Admissions Team.",
      "Admissions Advisors will assist families in identifying the most appropriate training zone during the admissions process.",
    ],
    communities: gtaCommunities,
  },
  beyondGta: {
    id: "beyond-gta",
    title: "Looking Ahead",
    subtitle: "Beyond the GTA",
    paragraphs: [
      "As the academy develops responsibly, additional service areas may be introduced in response to operational readiness, community interest, and sustainable growth.",
      "Future expansion may include additional regions within Ontario and, over time, broader opportunities elsewhere in Canada and internationally.",
      "Expansion decisions will always be guided by quality, operational readiness, and the academy's commitment to delivering a consistent experience for every player and family.",
    ],
  },
  trainingLocations: {
    id: "training-locations",
    title: "Quality Before Quantity",
    subtitle: "Our Training Locations",
    paragraphs: [
      "SpherEarth Football Academy is committed to providing safe, professional, and appropriate training environments.",
      "Rather than operating from a single permanent campus during our early stages, the academy intends to utilize approved training venues that support our programmes and operational standards.",
      "Training locations are confirmed directly with enrolled families and may vary depending on programme requirements, seasonal scheduling, and operational considerations.",
      "This flexible approach allows the academy to maintain high standards while adapting responsibly as we grow.",
    ],
  },
  agePathways: {
    id: "age-pathways",
    title: "Supporting Every Stage of Development",
    subtitle: "Age Pathways",
    paragraphs: [
      "The academy is designed to support player development across multiple stages, with programmes appropriate for different ages and levels of experience.",
      "Our long-term vision includes development opportunities from early foundational years through late youth and transitional stages into adult football.",
      "Specific programme structures, age groupings, and progression pathways are communicated during the admissions process and may evolve as the academy continues to develop.",
    ],
  },
  trainingSchedule: {
    id: "training-schedule",
    title: "Structured Around Player Development",
    subtitle: "Training Schedule",
    paragraphs: [
      "Training schedules are carefully planned to promote consistency, progression, and a positive experience for players and families.",
      "Session schedules, programme calendars, and venue information are provided directly to enrolled families before programme commencement.",
      "This approach allows us to respond appropriately to facility availability, seasonal requirements, and operational planning while maintaining a consistent academy experience.",
    ],
  },
  matchDays: {
    id: "match-days",
    title: "Learning Through Competition",
    subtitle: "Match Days",
    paragraphs: [
      "Competition plays an important role in player development.",
      "Throughout the academy year, players may have opportunities to participate in internal development matches, friendly fixtures, festivals, tournaments, showcases, and other football activities appropriate to their stage of development.",
      "The structure and frequency of match opportunities will continue to evolve as the academy grows.",
    ],
  },
  parentsFamilies: {
    id: "parents-families",
    title: "Keeping Families Connected",
    subtitle: "Parents & Families",
    description: "Families receive timely information regarding:",
    bullets: [
      "Training schedules",
      "Approved venues",
      "Match information",
      "Academy events",
      "Parent meetings",
      "Player progress updates",
      "Important academy announcements",
    ],
    paragraphs: ["We believe clear communication helps create a positive experience for every family."],
  },
  commitment: {
    id: "commitment",
    title: "Growing Responsibly",
    subtitle: "Our Commitment",
    paragraphs: [
      "SpherEarth Football Academy is committed to responsible, sustainable growth.",
      "Rather than expanding rapidly, we intend to grow carefully, ensuring every new programme, venue, and service area reflects the standards, values, and experience families expect from the academy.",
      "Quality will always take precedence over speed.",
    ],
  },
  faqs: [
    {
      question: "Where will my child train?",
      answer:
        "Training takes place at approved venues selected by the academy. Confirmed locations are shared with enrolled families before programmes begin.",
    },
    {
      question: "Can I choose my training location?",
      answer:
        "Where possible, families are assigned to the most appropriate regional training zone based on operational considerations and programme availability.",
    },
    {
      question: "Will the academy operate from a permanent campus?",
      answer:
        "Our long-term vision includes continued investment in facilities and infrastructure as the academy grows. Future developments will be announced through official SpherEarth communication channels.",
    },
    {
      question: "Can families outside the GTA apply?",
      answer:
        "Yes. Applications from outside our primary service area are welcome and will be reviewed individually.",
    },
    {
      question: "Will additional regions be introduced?",
      answer:
        "As the academy develops, additional service areas may be introduced where operationally appropriate.",
    },
  ],
  finalCta: {
    title: "Find Your Zone",
    description:
      "No matter where you live within the Greater Toronto Area, we invite you to begin the conversation. Our Admissions Team will help you understand the most suitable pathway for your child and keep you informed as programmes and service areas continue to develop.",
    ctas: [
      { label: "Find Your Zone", href: "/admissions/apply/", variant: "primary" },
      { label: "Apply Now", href: "/admissions/apply/", variant: "secondary" },
      { label: "Book a Parent Consultation", href: "/parents-and-families/consultation/", variant: "outline" },
    ],
  },
};
