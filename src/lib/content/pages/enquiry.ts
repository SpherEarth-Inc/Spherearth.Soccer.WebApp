import { siteConfig } from "../site";
import { images } from "../assets";
import type { ContentSection, PageMeta } from "@/types/content";

export interface EnquiryContent {
  meta: PageMeta;
  intro: ContentSection;
  formIntro: ContentSection;
  office: {
    title: string;
    company: string;
    address: string[];
    phone: string;
    email: string;
    privacyEmail: string;
  };
  mapNote: string;
  hours: {
    title: string;
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  beforeYouContact: ContentSection;
}

export const enquiryContent: EnquiryContent = {
  meta: {
    title: "Enquiry Centre",
    description:
      "We're here to help. Contact SpherEarth Football Academy for admissions, scholarships, sponsorship, partnerships, media, and general enquiries.",
    path: "/enquiry/",
    heroImage: images.enquiryHero,
  },
  intro: {
    title: "Enquiry Centre",
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
    subtitle: "Before You Contact Us",
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
};
