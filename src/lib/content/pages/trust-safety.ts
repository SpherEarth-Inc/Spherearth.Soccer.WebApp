import { images } from "../assets";
import type { ContentSection, CtaLink, FaqItem, PageMeta } from "@/types/content";

export interface TrustCommitment {
  label: string;
  description: string;
}

export interface TrustSafetyContent {
  meta: PageMeta;
  intro: ContentSection;
  trustCentre: ContentSection;
  commitments: TrustCommitment[];
  communicationChannels: ContentSection;
  authorizedRepresentatives: ContentSection;
  protectingYourself: ContentSection;
  paymentSecurity: ContentSection;
  privacy: ContentSection;
  reporting: ContentSection;
  faqs: FaqItem[];
  promise: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const trustSafetyContent: TrustSafetyContent = {
  meta: {
    title: "Official Communications & Fraud Prevention",
    description:
      "Building trust through transparency, professionalism, and accountability. Learn how SpherEarth Football Academy protects families and maintains secure communications.",
    path: "/trust-and-safety/",
    heroImage: images.verifyRepresentative,
  },
  intro: {
    title: "Official Communications & Fraud Prevention",
    subtitle: "Building Trust Through Transparency, Professionalism, and Accountability.",
    paragraphs: [
      "At SpherEarth Football Academy, trust is the foundation of every relationship we build.",
      "We are committed to protecting our players, families, partners, sponsors, and community through clear communication, responsible governance, secure processes, and professional standards.",
      "This page explains how we communicate, how to identify authorized representatives, and how to help maintain a safe and trusted academy environment.",
    ],
    cta: { label: "Verify a Representative", href: "#verify", variant: "primary" },
  },
  trustCentre: {
    id: "trust-centre",
    title: "Our Commitment to Every Family",
    subtitle: "Trust & Safety Centre",
    paragraphs: [
      "Choosing a football academy means placing trust in an organization that will influence your child's development. We take that responsibility seriously.",
      "Our commitment extends beyond football coaching to creating an environment built upon integrity, professionalism, safeguarding, transparency, and responsible governance.",
      "Our Trust & Safety Centre reflects the principles that guide every interaction with our academy.",
    ],
  },
  commitments: [
    {
      label: "Transparent Admissions",
      description: "Every family receives clear, honest information throughout the admissions journey.",
    },
    {
      label: "Professional Governance",
      description:
        "We maintain structured processes designed to support fairness, accountability, and responsible decision-making.",
    },
    {
      label: "Official Communications",
      description:
        "Families are encouraged to communicate through verified academy channels and authorized representatives.",
    },
    {
      label: "Privacy & Data Protection",
      description:
        "Personal information is handled responsibly and in accordance with applicable privacy obligations.",
    },
    {
      label: "Child Safeguarding",
      description: "Player well-being remains central to every academy activity.",
    },
    {
      label: "Responsible Financial Practices",
      description:
        "Admissions, payments, and academy transactions are conducted through approved processes designed to protect families and the academy.",
    },
  ],
  communicationChannels: {
    id: "communication-channels",
    title: "How We Communicate",
    subtitle: "Official Communication Channels",
    description: "Official academy communications may be provided through approved SpherEarth channels, including:",
    bullets: [
      "Official academy email addresses",
      "Official academy telephone numbers",
      "The official SpherEarth website",
      "Authorized Admissions Advisors",
      "Authorized academy personnel",
      "Official academy social media accounts",
      "Scheduled consultations and meetings",
      "Written academy correspondence",
    ],
    paragraphs: [
      "Families should exercise caution when receiving communications from unfamiliar or unofficial sources claiming to represent the academy.",
    ],
  },
  authorizedRepresentatives: {
    id: "verify",
    title: "Know Who You're Speaking With",
    subtitle: "Authorized Representatives",
    description: "Only individuals authorized by SpherEarth Football Academy may represent the academy in admissions, recruitment, partnerships, sponsorships, or other official matters.",
    bullets: [
      "Admissions Advisors",
      "Admissions Coordinators",
      "Academy Management",
      "Approved Coaches",
      "Administrative Personnel",
    ],
    paragraphs: [
      "Whenever you are uncertain about someone's identity or authority, we encourage you to verify their status before continuing any discussion.",
    ],
    cta: { label: "Verify a Representative", href: "#verify" },
  },
  protectingYourself: {
    id: "fraud-prevention",
    title: "Simple Steps That Help Keep Everyone Safe",
    subtitle: "Protecting Yourself",
    description:
      "We encourage families and partners to remain cautious whenever they receive unexpected communications involving admissions, payments, or requests for personal information. Please pause and contact us if anyone:",
    bullets: [
      "Requests payment through unofficial methods.",
      "Promises guaranteed admission or scholarships.",
      "Creates unnecessary pressure to make immediate decisions.",
      "Requests confidential information unexpectedly.",
      "Uses unofficial contact details.",
      "Provides information that differs from official academy communications.",
      "Claims to represent SpherEarth Football Academy without verifiable authorization.",
    ],
    paragraphs: ["When in doubt, verify first."],
    image: images.fraudPrevention,
  },
  paymentSecurity: {
    id: "payment-security",
    title: "Making Payments with Confidence",
    subtitle: "Payment Security",
    description: "Where applicable, payment instructions will only be communicated through approved academy processes.",
    bullets: [
      "Confirm they are communicating with an authorized representative.",
      "Carefully review all payment instructions.",
      "Retain payment confirmations and receipts.",
      "Contact the academy immediately if anything appears unusual.",
    ],
    paragraphs: [
      "Our goal is to ensure every financial transaction is handled professionally, securely, and transparently.",
    ],
  },
  privacy: {
    id: "privacy",
    title: "Respecting Your Information",
    subtitle: "Privacy & Personal Information",
    paragraphs: [
      "Protecting personal information is an important part of our commitment to families.",
      "We encourage applicants and parents to provide personal information only through approved academy systems and authorized representatives.",
      "Our Privacy Policy explains how information is collected, used, stored, and protected.",
    ],
    cta: { label: "Privacy Policy", href: "/privacy/" },
  },
  reporting: {
    id: "reporting",
    title: "Help Protect Our Community",
    subtitle: "Reporting Concerns",
    description:
      "If you believe someone is impersonating SpherEarth Football Academy or using our name inappropriately, we encourage you to notify us promptly. Reports may include:",
    bullets: [
      "Name of the individual",
      "Contact information used",
      "Date and time of communication",
      "Supporting screenshots or documents",
      "Description of the incident",
    ],
    paragraphs: [
      "Every report is reviewed professionally and confidentially. Helping us identify suspicious activity helps protect other families and strengthens the integrity of our academy.",
    ],
    cta: { label: "Report Suspicious Activity", href: "/enquiry/?department=General%20Enquiries" },
  },
  faqs: [
    {
      question: "Why should I verify a representative?",
      answer:
        "Verification helps ensure you are communicating with an individual who is authorized to represent SpherEarth Football Academy.",
    },
    {
      question: "Can Admissions Advisors contact families?",
      answer:
        "Yes. Authorized Admissions Advisors may contact prospective families regarding academy programmes and admissions opportunities. If you are ever uncertain, please verify the representative.",
    },
    {
      question: "Will the academy request payments through personal accounts?",
      answer:
        "Payments are conducted only through approved academy processes. If you receive an unexpected payment request, contact us before proceeding.",
    },
    {
      question: "What should I do if I receive suspicious communication?",
      answer:
        "Stop the conversation and contact SpherEarth Football Academy through our official communication channels. We will be pleased to assist you.",
    },
    {
      question: "Can I report suspicious activity?",
      answer:
        "Yes. We encourage reports whenever you believe something appears unusual or inconsistent with official academy communications.",
    },
  ],
  promise: {
    id: "promise",
    title: "Trust Is Earned Every Day",
    subtitle: "Our Promise",
    paragraphs: [
      "At SpherEarth Football Academy, safeguarding trust is not simply a policy—it is part of our culture.",
      "We continuously work to strengthen our systems, improve transparency, protect families, and uphold the highest standards of professionalism in everything we do.",
      "Together, we can build an academy community founded on confidence, integrity, and respect.",
    ],
  },
  finalCta: {
    title: "Need to Verify Something?",
    description:
      "If you have questions about a communication, payment request, representative, or academy process, we encourage you to contact us before taking further action. Our team is always happy to help.",
    ctas: [
      { label: "Verify a Representative", href: "#verify", variant: "primary" },
      { label: "Report Suspicious Activity", href: "/enquiry/?department=General%20Enquiries", variant: "secondary" },
      { label: "Enquiry Centre", href: "/enquiry/", variant: "outline" },
    ],
  },
};
