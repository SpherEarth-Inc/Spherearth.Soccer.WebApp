import { images } from "../assets";
import type { ContentSection, PageMeta } from "@/types/content";

export interface OverviewPartnersSponsorsContent {
  meta: PageMeta;
  intro: ContentSection;
  sections: ContentSection[];
}

export const overviewPartnersSponsorsContent: OverviewPartnersSponsorsContent = {
  meta: {
    title: "Partnership & Sponsorship",
    description:
      "Investing in young athletes. Building stronger communities. Creating lasting impact. Explore partnership and sponsorship opportunities with SpherEarth Football Academy.",
    path: "/relations/",
    heroImage: images.sponsorship,
  },
  intro: {
    title: "Partnership & Sponsorship",
    paragraphs: [
      "SpherEarth Football Academy believes meaningful partnerships create meaningful opportunities.",
      "We invite businesses, organizations, foundations, educational institutions, and community leaders to join us in developing the next generation of athletes, leaders, and responsible citizens through structured football development.",
      "Together, we can create opportunities that extend far beyond the football pitch.",
    ],
  },
  sections: [
    {
      id: "why-sponsor",
      subtitle: "Why Sponsor?",
      paragraphs: [
        "Sponsorship is about more than logos and marketing. It is about investing in young people, strengthening communities, and creating opportunities that positively influence lives for years to come.",
        "By partnering with SpherEarth Football Academy, sponsors become part of a long-term vision to develop talented athletes while promoting education, leadership, character, inclusion, and community engagement.",
        "Every partnership contributes to something bigger than football.",
      ],
    },
    {
      id: "benefits",
      subtitle: "Partnership Benefits",
      description:
        "Our sponsorship philosophy is built around mutual value. Sponsors benefit through meaningful community engagement while helping create opportunities for aspiring young athletes.",
      bullets: [
        "Positive brand visibility",
        "Community engagement",
        "Corporate social responsibility (CSR) initiatives",
        "Youth development impact",
        "Networking opportunities",
        "Event participation",
        "Digital and media recognition",
        "Long-term partnership opportunities",
      ],
      paragraphs: ["Benefits vary depending on the nature of each partnership."],
    },
    {
      id: "opportunities",
      subtitle: "Partnership Opportunities",
      description:
        "Recognizing that every organization has different goals, SpherEarth Football Academy offers partnership opportunities designed to support both community impact and business objectives.",
      bullets: [
        "Academy Partnerships",
        "Community Partnerships",
        "Event Partnerships",
        "Equipment & Resource Partnerships",
        "Scholarship Partnerships",
        "Program Partnerships",
        "Strategic Collaborations",
      ],
      paragraphs: ["Specific partnership proposals are developed through direct discussions with prospective sponsors."],
    },
    {
      id: "community-impact",
      subtitle: "Community Impact",
      description: "Every sponsorship helps create opportunities that extend beyond sport. Your partnership contributes to:",
      bullets: [
        "Youth development",
        "Leadership development",
        "Character building",
        "Community engagement",
        "Family support",
        "Increased access to structured football development",
        "Scholarship opportunities",
        "Long-term positive social impact",
      ],
      paragraphs: [
        "Together, we can help young people develop confidence, discipline, resilience, teamwork, and leadership that will benefit them throughout their lives.",
      ],
    },
    {
      id: "player-sponsorship",
      subtitle: "Player Sponsorship",
      paragraphs: [
        "Player Sponsorship allows organizations and supporters to contribute directly toward the development of individual athletes through approved academy initiatives.",
        "These opportunities may assist with participation costs, development opportunities, scholarships, equipment, or other approved academy programs.",
        "Player Sponsorship creates a direct and meaningful investment in the future of young people.",
        "Additional information is provided through our Sponsorship Team.",
      ],
    },
    {
      id: "corporate-sponsorship",
      subtitle: "Corporate Sponsorship",
      paragraphs: [
        "Corporate Sponsorship is designed for organizations seeking long-term community engagement while supporting structured youth development.",
        "Whether your organization wishes to support scholarships, academy programs, events, community initiatives, or broader development activities, our team will work with you to create a partnership aligned with your objectives.",
        "Every partnership is designed to deliver value for both the sponsor and the communities we serve.",
      ],
    },
    {
      id: "naming-rights",
      subtitle: "Naming Rights (Future)",
      paragraphs: [
        "As SpherEarth Football Academy grows, future opportunities may become available for naming rights associated with academy facilities, programs, events, scholarships, or major initiatives.",
        "These opportunities are intended for organizations seeking long-term strategic partnerships that leave a lasting legacy within the academy and the communities we serve.",
        "Additional information will be announced as these opportunities become available.",
      ],
    },
    {
      id: "success-stories",
      subtitle: "Success Stories (Future)",
      paragraphs: [
        "As our academy grows, we look forward to sharing stories that demonstrate the positive impact created through collaboration with our sponsors, community partners, and supporters.",
        "These stories will highlight the lives changed, opportunities created, and communities strengthened through partnership.",
        "Every success story begins with a shared commitment to investing in young people.",
      ],
    },
    {
      id: "why-partner",
      subtitle: "Why Partner with SpherEarth?",
      description: "When organizations partner with SpherEarth Football Academy, they are joining an academy committed to:",
      bullets: [
        "Professional governance",
        "Responsible stewardship",
        "Community impact",
        "Transparency",
        "Long-term sustainability",
        "Youth development",
        "Meaningful collaboration",
      ],
      paragraphs: [
        "We believe successful partnerships are built on shared values, mutual respect, and a commitment to creating measurable impact.",
      ],
    },
  ],
};
