import { images } from "../assets";
import type { ContentSection, CtaLink, PageMeta } from "@/types/content";

export interface AdvisorContent {
  meta: PageMeta;
  intro: ContentSection;
  role: ContentSection;
  responsibilities: ContentSection;
  qualifications: ContentSection;
  process: ContentSection;
  commissionNote: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const advisorContent: AdvisorContent = {
  meta: {
    title: "Become an Admissions Advisor",
    description:
      "Join the SpherEarth Football Academy Admissions Advisor network. Help identify talented players and guide families through the admissions journey.",
    path: "/admissions-advisor/",
    heroImage: images.becomeAnAdvisor,
  },
  intro: {
    title: "Become an Admissions Advisor",
    paragraphs: [
      "SpherEarth Football Academy welcomes authorized Admissions Advisors who share our commitment to youth development, integrity, and long-term player growth.",
      "Admissions Advisors play an important role in identifying prospective players and families who appear well aligned with the academy's philosophy and inviting them to begin the formal admissions process.",
      "An invitation to apply reflects an initial assessment of suitability and interest. It does not constitute an offer of admission, which remains subject to the academy's review process.",
    ],
    cta: { label: "Apply to Become an Advisor", href: "/enquiry/?department=Admissions", variant: "primary" },
  },
  role: {
    id: "role",
    title: "The Admissions Advisor Role",
    paragraphs: [
      "Admissions Advisors serve as trusted representatives of SpherEarth Football Academy within their communities.",
      "They help connect motivated young athletes and families with structured football development opportunities while maintaining the academy's standards of professionalism, transparency, and respect.",
      "All Advisors must be authorized by the academy before representing SpherEarth in any official capacity.",
    ],
  },
  responsibilities: {
    id: "responsibilities",
    title: "Key Responsibilities",
    bullets: [
      "Identify prospective players and families aligned with the academy's values",
      "Introduce the academy and its programmes professionally and accurately",
      "Invite suitable families to begin the formal admissions process",
      "Support families in understanding next steps and official communication channels",
      "Maintain confidentiality and respect throughout all interactions",
      "Represent the academy only through authorized channels and approved materials",
    ],
  },
  qualifications: {
    id: "qualifications",
    title: "Who We're Looking For",
    bullets: [
      "Passion for youth development and football",
      "Strong communication and interpersonal skills",
      "Integrity, professionalism, and accountability",
      "Existing connections within football, education, or community networks (preferred)",
      "Commitment to the academy's values and long-term vision",
      "Willingness to complete authorization and training requirements",
    ],
  },
  process: {
    id: "process",
    title: "Authorization Process",
    description: "Becoming an authorized Admissions Advisor typically involves:",
    bullets: [
      "Submitting an expression of interest",
      "Review by the academy's Admissions Team",
      "Background and suitability assessment",
      "Completion of authorization and training requirements",
      "Ongoing compliance with academy policies and communication standards",
    ],
    paragraphs: [
      "Only authorized Advisors may represent SpherEarth Football Academy in admissions and recruitment matters.",
    ],
  },
  commissionNote: {
    id: "commission",
    title: "Advisor Attribution",
    paragraphs: [
      "Where families are referred by an Admissions Advisor, attribution is recorded during the application process to support appropriate recognition.",
      "Detailed compensation and commission arrangements are communicated directly to authorized Advisors as part of the onboarding process.",
    ],
  },
  finalCta: {
    title: "Ready to Make a Difference?",
    description:
      "If you are passionate about youth football development and believe you can help connect talented young athletes with meaningful opportunities, we invite you to explore becoming an authorized SpherEarth Admissions Advisor.",
    ctas: [
      { label: "Apply to Become an Advisor", href: "/enquiry/?department=Admissions", variant: "primary" },
      { label: "Verify a Representative", href: "/trust-and-safety/#verify", variant: "secondary" },
    ],
  },
};
