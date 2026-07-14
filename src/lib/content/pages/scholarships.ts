import type { ContentSection, PageMeta } from "@/types/content";

export interface ScholarshipsContent {
  meta: PageMeta;
  intro: ContentSection;
  philosophy: ContentSection;
  merit: ContentSection;
  needsBased: ContentSection;
  eligibility: ContentSection;
  selectionProcess: ContentSection;
}

export const scholarshipsContent: ScholarshipsContent = {
  meta: {
    title: "Scholarships",
    description:
      "Talent deserves opportunity. Potential deserves support. Explore scholarship opportunities at SpherEarth Football Academy.",
    path: "/scholarships/",
    heroImage: "/images/explore/scholarships.webp",
  },
  intro: {
    title: "Scholarships",
    subtitle: "Talent deserves opportunity. Potential deserves support.",
    paragraphs: [
      "At SpherEarth Football Academy, we believe that exceptional potential should never go unnoticed because of financial circumstances alone.",
      "Through academy initiatives and valued partnerships with businesses, donors, and community organizations, we aim to expand opportunities for talented young athletes who demonstrate character, commitment, and promise.",
      "Scholarship opportunities are subject to availability, eligibility requirements, and the academy's selection process.",
    ],
    cta: { label: "Apply for Scholarship", href: "/admissions/apply/", variant: "primary" },
  },
  philosophy: {
    id: "philosophy",
    title: "Investing in Future Leaders",
    subtitle: "Our Scholarship Philosophy",
    paragraphs: [
      "A scholarship is more than financial support. It is an investment in a young person's future.",
      "Our scholarship program seeks to identify athletes who demonstrate dedication, integrity, leadership, and a genuine desire to grow both on and off the pitch.",
      "Every scholarship awarded represents a shared commitment between the player, the family, the academy, and the organizations that make these opportunities possible.",
    ],
  },
  merit: {
    id: "merit",
    title: "Recognizing Excellence",
    subtitle: "Merit Scholarships",
    description:
      "Merit Scholarships are intended for players who demonstrate outstanding commitment, work ethic, coachability, leadership, and football potential. Selection considers the whole athlete rather than performance alone.",
    bullets: [
      "Commitment to continuous improvement",
      "Positive attitude",
      "Leadership qualities",
      "Respect for teammates and coaches",
      "Character and sportsmanship",
      "Long-term development potential",
    ],
  },
  needsBased: {
    id: "needs-based",
    title: "Expanding Access",
    subtitle: "Needs-Based Scholarships",
    paragraphs: [
      "Every talented athlete deserves the opportunity to pursue their potential.",
      "Needs-Based Scholarships are intended to support families who demonstrate financial need while remaining fully committed to their child's football and personal development.",
      "Applications are reviewed carefully and confidentially.",
      "Financial need alone does not guarantee a scholarship, just as financial circumstances alone should never discourage a family from exploring available opportunities.",
    ],
  },
  eligibility: {
    id: "eligibility",
    title: "Who May Be Considered?",
    subtitle: "Eligibility",
    paragraphs: [
      "Additional eligibility requirements may apply depending on the scholarship program.",
      "Meeting the eligibility criteria does not guarantee the award of a scholarship.",
    ],
    bullets: [
      "Eligibility for academy admission",
      "Demonstrated commitment to development",
      "Character and sportsmanship",
      "Family engagement",
      "Scholarship category requirements",
      "Availability of scholarship funding",
    ],
  },
  selectionProcess: {
    id: "selection-process",
    title: "Fair, Respectful and Thoughtful",
    subtitle: "Selection Process",
    description:
      "Scholarship applications are reviewed through a structured process designed to ensure fairness, transparency, and responsible stewardship of available scholarship resources.",
    bullets: [
      "Player information",
      "Admissions materials",
      "Supporting documentation where appropriate",
      "Scholarship category requirements",
      "Available funding",
      "Overall alignment with the scholarship's objectives",
    ],
    trailingParagraphs: [
      "To protect the integrity of the process, detailed assessment criteria and internal evaluation methodologies are not published publicly.",
      "Applicants will be informed of decisions through official SpherEarth communication channels.",
    ],
  },
};
