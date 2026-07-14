import type { ContentSection, CtaLink, PageMeta } from "@/types/content";

export interface PartnerCategory {
  id: string;
  subtitle: string;
  description: string;
  bullets?: string[];
}

export interface PartnershipsContent {
  meta: PageMeta;
  intro: ContentSection;
  whyPartner: ContentSection;
  categories: PartnerCategory[];
  principles: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const partnershipsContent: PartnershipsContent = {
  meta: {
    title: "Partner With Us",
    description:
      "Building stronger pathways through meaningful collaboration. Explore strategic partnership opportunities with SpherEarth Football Academy.",
    path: "/relations/partnerships/",
    heroImage: "/images/explore/partnerships.jpg",
  },
  intro: {
    title: "Partner With Us",
    paragraphs: [
      "At SpherEarth Football Academy, we believe lasting impact is created through strong partnerships.",
      "We welcome opportunities to collaborate with educational institutions, sporting organizations, municipalities, community organizations, healthcare providers, technology partners, research institutions, facility operators, international academies, and other organizations that share our commitment to youth development, education, innovation, and long-term community impact.",
      "Together, we can create opportunities that no organization could achieve alone.",
    ],
    cta: { label: "Request Partnership Meeting", href: "/enquiry/?department=Strategic%20Partnerships", variant: "primary" },
  },
  whyPartner: {
    id: "why-partner",
    title: "Better Together",
    subtitle: "Why Partner with SpherEarth Football Academy?",
    paragraphs: [
      "The development of young athletes requires more than excellent coaching. It requires collaboration between educators, sporting organizations, healthcare professionals, researchers, community leaders, technology innovators, businesses, families, and institutions working toward a shared purpose.",
      "We seek partnerships built on mutual respect, shared values, innovation, and measurable impact.",
      "Every collaboration should create value for both organizations while expanding opportunities for young people.",
    ],
  },
  categories: [
    {
      id: "educational",
      subtitle: "Educational Institutions",
      description:
        "Education plays an essential role in every young athlete's development. We welcome partnerships with elementary schools, secondary schools, independent schools, colleges, universities, and other educational institutions that share our commitment to developing well-rounded student-athletes.",
      bullets: [
        "Student development initiatives",
        "Leadership programmes",
        "Academic support initiatives",
        "School football programmes",
        "Research and innovation",
        "Shared facilities",
        "Internships and experiential learning",
        "Community engagement projects",
      ],
    },
    {
      id: "sporting",
      subtitle: "Football Clubs & Sporting Organizations",
      description:
        "We believe football organizations and sporting institutions achieve more through collaboration than competition. SpherEarth Football Academy welcomes partnerships with football clubs, leagues, governing bodies, multisport organizations, coaching associations, and other sporting institutions committed to player development, coaching excellence, and long-term athlete success.",
      bullets: [
        "Player development pathways",
        "Coach education",
        "Friendly matches",
        "Talent identification",
        "Joint community programmes",
        "Knowledge sharing",
        "Special events",
        "High-performance initiatives",
      ],
    },
    {
      id: "municipal",
      subtitle: "Municipalities & Community Organizations",
      description:
        "Healthy communities create healthier futures. We welcome collaboration with municipalities, recreation departments, youth organizations, charities, cultural associations, nonprofit organizations, and community groups committed to increasing access to sport, leadership development, and youth engagement.",
    },
    {
      id: "healthcare",
      subtitle: "Healthcare & Performance Partners",
      description:
        "Athlete development extends beyond technical training. We welcome collaboration with sports medicine professionals, physiotherapists, athletic therapists, physicians, nutrition specialists, psychologists, mental performance consultants, strength and conditioning providers, and other healthcare organizations whose expertise supports athlete well-being.",
      bullets: [
        "Injury prevention",
        "Player wellness",
        "Sports medicine",
        "Performance education",
        "Mental health awareness",
        "Nutrition education",
        "Rehabilitation support",
      ],
    },
    {
      id: "technology",
      subtitle: "Technology & Innovation Partners",
      description:
        "Innovation continues to transform sport. We welcome partnerships with technology companies, software providers, analytics specialists, wearable technology developers, AI innovators, media companies, and digital solution providers interested in advancing youth football development.",
      bullets: [
        "Player analytics",
        "Video analysis",
        "Athlete management systems",
        "Performance technology",
        "CRM and automation",
        "Artificial Intelligence",
        "Digital learning platforms",
        "Fan engagement",
      ],
    },
    {
      id: "research",
      subtitle: "Research & Knowledge Partners",
      description:
        "We believe continuous learning strengthens organizations. We welcome collaboration with universities, research institutes, educational organizations, policy groups, and subject matter experts whose work contributes to youth development, sport science, leadership, governance, education, or community impact.",
    },
    {
      id: "facilities",
      subtitle: "Facility & Infrastructure Partners",
      description:
        "High-quality facilities help create high-quality experiences. We welcome relationships with municipalities, private facility operators, sports complexes, schools, universities, stadium operators, and infrastructure partners interested in supporting football development throughout the Greater Toronto Area and beyond.",
    },
    {
      id: "international",
      subtitle: "International Partnerships",
      description:
        "Football connects people across cultures and continents. As SpherEarth Football Academy grows, we intend to establish relationships with reputable international academies, educational institutions, sporting organizations, and development partners that share our commitment to excellence.",
      bullets: [
        "Coach development",
        "Player development experiences",
        "Educational exchanges",
        "Knowledge sharing",
        "International training opportunities",
        "Cultural exchange",
        "Collaborative programmes",
      ],
    },
  ],
  principles: {
    id: "principles",
    subtitle: "Our Partnership Principles",
    description: "Every partnership should contribute to a stronger future for young athletes. We build relationships founded upon:",
    bullets: [
      "Shared purpose",
      "Mutual respect",
      "Integrity",
      "Professionalism",
      "Accountability",
      "Innovation",
      "Community impact",
      "Sustainability",
      "Long-term value creation",
    ],
    trailingParagraphs: ["We are interested in building relationships that endure—not simply transactions."],
  },
  finalCta: {
    title: "Let's Build the Future Together",
    description:
      "Great partnerships begin with shared purpose. Whether your organization represents education, sport, healthcare, technology, research, infrastructure, government, community development, or another area of expertise, we welcome the opportunity to explore how we can work together. Together, we can create opportunities that inspire young athletes, strengthen communities, and leave a lasting legacy.",
    ctas: [
      { label: "Request Partnership Meeting", href: "/enquiry/?department=Strategic%20Partnerships", variant: "primary" },
      { label: "Contact Our Partnerships Team", href: "/enquiry/?department=Strategic%20Partnerships", variant: "secondary" },
      {
        label: "Download Partnership Overview",
        href: "/enquiry/?department=Strategic%20Partnerships",
        variant: "outline",
      },
    ],
  },
};
