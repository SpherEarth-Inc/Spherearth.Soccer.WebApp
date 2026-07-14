import { images } from "../assets";
import type { PageMeta } from "@/types/content";

export interface ApplyContent {
  meta: PageMeta;
  intro: {
    title: string;
    subtitle?: string;
    paragraphs: string[];
  };
  beforeYouBegin: {
    title: string;
    bullets: string[];
    estimatedTime: string;
  };
  thankYou: {
    loadingMessage: string;
    title: string;
    paragraphs: string[];
    ctas: { label: string; href: string }[];
  };
}

export const applyContent: ApplyContent = {
  meta: {
    title: "Start Your Admissions Journey",
    description:
      "Complete the SpherEarth Football Academy admissions application. Submitting an application begins a thoughtful review process designed to identify the best fit for both the player and the academy.",
    path: "/admissions/apply/",
    heroImage: images.admissionsHero,
  },
  intro: {
    title: "Start Your Admissions Journey",
    paragraphs: [
      "Completing this form is the first step in our admissions process. It allows our Admissions Team to learn about your child, understand your family's goals, and determine the most appropriate next steps.",
      "Submitting an application does not guarantee admission. It begins a thoughtful review process designed to identify the best fit for both the player and the academy.",
    ],
  },
  beforeYouBegin: {
    title: "Before You Begin",
    bullets: [
      "Parent or guardian contact information",
      "Player information",
      "Current football experience (if any)",
      "Preferred training location",
      "Questions you may have for our Admissions Team",
    ],
    estimatedTime: "Estimated completion time: 5–10 minutes.",
  },
  thankYou: {
    loadingMessage:
      "Thank you for your application. Your information is being securely submitted to our Admissions Team.",
    title: "Application Received",
    paragraphs: [
      "Thank you for submitting your admissions application to SpherEarth Football Academy.",
      "Our Admissions Team will review your information and contact you through verified SpherEarth communication channels regarding the next steps.",
      "If you have not already done so, you may wish to book a Parent Consultation to learn more about the academy while your application is under review.",
    ],
    ctas: [
      { label: "Book a Parent Consultation", href: "/parent-consultation/" },
      { label: "Explore Programs", href: "/programs/" },
      { label: "Enquiry Centre", href: "/enquiry/" },
    ],
  },
};
