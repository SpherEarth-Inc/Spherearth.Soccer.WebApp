import { siteConfig } from "../site";
import type { ContentSection, CtaLink, PageMeta } from "@/types/content";

export interface EnquiryContent {
  meta: PageMeta;
  intro: ContentSection;
  formIntro: ContentSection;
  admissionsNote: ContentSection;
  office: {
    title: string;
    company: string;
    address: string[];
    phone: string;
    email: string;
    privacyEmail: string;
  };
  operations: ContentSection;
  mapNote: string;
  hours: {
    title: string;
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  beforeYouContact: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const enquiryContent: EnquiryContent = {
  meta: {
    title: "Enquiry Centre",
    description:
      "We're here to help. Contact SpherEarth Football Academy for admissions, scholarships, sponsorship, partnerships, media, and general enquiries.",
    path: "/enquiry/",
    heroImage: "/images/football-toronto.webp",
  },
  intro: {
    title: "Enquiry Centre",
    subtitle: "We're here to help.",
    paragraphs: [
      "Whether you're a prospective family, player, sponsor, partner, media representative, or community member, we would be pleased to hear from you.",
      "Our team is committed to providing professional, timely, and helpful assistance through our official communication channels.",
    ],
  },
  formIntro: {
    id: "enquiry-form",
    title: "How Can We Help You?",
    description:
      "Please complete the enquiry form below. Your enquiry will be directed automatically to the appropriate department, helping us respond as efficiently as possible.",
  },
  admissionsNote: {
    id: "admissions-note",
    title: "Thinking About Joining the Academy?",
    description:
      "Families interested in admissions are encouraged to begin with a Parent Consultation before submitting an application whenever appropriate.",
    ctas: [
      { label: "Book Parent Consultation", href: "/parent-consultation/" },
      { label: "Apply Now", href: "/admissions/apply/" },
    ],
  },
  office: {
    title: "Corporate Office",
    company: siteConfig.parentCompany,
    address: [
      siteConfig.contact.address,
      siteConfig.contact.city,
      siteConfig.contact.country,
    ],
    phone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    privacyEmail: siteConfig.contact.privacyEmail,
  },
  operations: {
    id: "operations",
    title: "Serving Families Across the Greater Toronto Area",
    subtitle: "Academy Operations",
    paragraphs: [
      "SpherEarth Football Academy is a business of SpherEarth Inc.",
      "Corporate administration is managed through the Toronto headquarters of SpherEarth Inc.",
      "While corporate administration is managed from the Toronto headquarters of SpherEarth Inc., academy programmes, admissions activities, consultations, and football operations are delivered through approved locations and operational areas across the Greater Toronto Area.",
      "Programme venues, consultation arrangements, and academy activities are communicated directly to families and participants through official academy channels.",
    ],
  },
  mapNote:
    "Corporate office location: First Canadian Place, 100 King Street West, Toronto, Ontario. Academy training venues and operational areas across the GTA are confirmed directly with enrolled families.",
  hours: {
    title: "When We're Available",
    weekdays: siteConfig.contact.hours.weekdays,
    saturday: siteConfig.contact.hours.saturday,
    sunday: siteConfig.contact.hours.sunday,
  },
  beforeYouContact: {
    id: "before-you-contact",
    title: "Before You Contact Us",
    description: "To help us assist you more efficiently, we recommend:",
    bullets: [
      "Selecting the most appropriate department.",
      "Providing as much relevant information as possible.",
      "Including your preferred contact details.",
      "Allowing reasonable time for our team to respond.",
    ],
    paragraphs: [
      "We appreciate your interest in SpherEarth Football Academy and look forward to hearing from you.",
    ],
  },
  finalCta: {
    title: "Let's Start the Conversation",
    description:
      "Whether you're exploring opportunities for your child, considering sponsorship, discussing a strategic partnership, or simply learning more about the academy, our team is here to help. We look forward to connecting with you.",
    ctas: [
      { label: "Send an Enquiry", href: "#enquiry-form", variant: "primary" },
      { label: "Book Parent Consultation", href: "/parent-consultation/", variant: "secondary" },
      { label: "Apply Now", href: "/admissions/apply/", variant: "outline" },
    ],
  },
};
