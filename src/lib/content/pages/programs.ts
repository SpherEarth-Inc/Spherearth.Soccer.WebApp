import { images } from "../assets";
import type { ContentSection, CtaLink, PageMeta, ProgramCard } from "@/types/content";

export interface ProgramsContent {
  meta: PageMeta;
  intro: ContentSection;
  programCards: ProgramCard[];
  ageGroups: ContentSection;
  trainingPhilosophy: ContentSection;
  playerJourney: ContentSection;
  calendar: ContentSection;
  investment: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const programsContent: ProgramsContent = {
  meta: {
    title: "Programs",
    description:
      "Structured development. Purposeful progression. Meaningful opportunities. Explore Founding, Premier, and Signature programs at SpherEarth Football Academy.",
    path: "/programs/",
    heroImage: images.programsHero,
  },
  intro: {
    title: "Program Overview",
    paragraphs: [
      "Every athlete develops at a different pace. Our programs are designed to provide age-appropriate coaching, character development, and long-term player growth within a structured, supportive, and professional environment.",
      "Whether a player is taking the next step in their football journey or pursuing ambitious long-term goals, SpherEarth Football Academy provides an environment where potential can flourish.",
      "Every athlete is unique. Rather than offering a one-size-fits-all experience, SpherEarth Football Academy provides carefully designed programs that support players at different stages of development while maintaining consistent standards of coaching, professionalism, and care.",
      "Program placement may be influenced by factors such as age, experience, ability, commitment, and the academy's assessment process.",
    ],
    cta: { label: "Apply Now", href: "/admissions/apply/", variant: "primary" },
  },
  programCards: [
    {
      title: "Founding Program",
      image: "/images/programs/founding-program.webp",
      description:
        "The Founding Program is available to members of the academy's inaugural intake and represents a unique opportunity to become part of the first generation of SpherEarth Football Academy athletes. Players and families accepted into this program will contribute to establishing the culture, standards, and legacy upon which future generations of the academy will be built.",
      idealFor: [
        "Founding families",
        "Motivated young athletes",
        "Players seeking structured development",
        "Families who value long-term growth",
      ],
      cta: { label: "Apply for Founding Admission", href: "/admissions/apply/" },
    },
    {
      title: "Premier Program",
      image: "/images/programs/premier-program.webp",
      description:
        "The Premier Program is designed for players committed to improving through structured coaching, disciplined practice, teamwork, and continuous development. The program emphasizes technical progression, tactical understanding, physical preparation, leadership, and personal responsibility within a professional academy environment.",
      idealFor: [
        "Demonstrate commitment",
        "Enjoy structured coaching",
        "Seek continuous improvement",
        "Value teamwork and discipline",
      ],
      cta: { label: "Request More Information", href: "/enquiry/?department=Admissions" },
    },
    {
      title: "Signature Program",
      image: "/images/programs/signature-program.webp",
      description:
        "The Signature Program represents our highest level of academy experience and is designed for players seeking an enhanced development environment with additional opportunities and support. Participation is by invitation or selection where applicable. Further details are provided during the admissions process.",
      idealFor: [
        "Highly committed athletes",
        "Families seeking a premium academy experience",
        "Players pursuing long-term development opportunities",
      ],
      cta: { label: "Speak With Admissions", href: "/parents-and-families/consultation/" },
    },
  ],
  ageGroups: {
    id: "age-groups",
    title: "Age-Appropriate Development",
    subtitle: "Age Groups",
    description:
      "Player development is most effective when coaching reflects each athlete's stage of physical, technical, emotional, and cognitive growth. The academy offers structured age-group pathways designed to promote gradual progression while maintaining high coaching standards.",
    paragraphs: [
      "Specific age categories, training groups, and placement details are discussed during admissions and assessment.",
    ],
  },
  trainingPhilosophy: {
    id: "training-philosophy",
    title: "Developing Complete Athletes",
    subtitle: "Our Training Philosophy",
    paragraphs: [
      "Training at SpherEarth Football Academy extends beyond football techniques.",
      "Our approach promotes balanced development by encouraging technical improvement, tactical awareness, disciplined habits, leadership, teamwork, resilience, and respect for others.",
      "Every session is designed with purposeful progression and long-term player development in mind.",
      "Note: Our detailed training methodology forms part of the academy's proprietary development framework and is shared with enrolled families during the admissions process.",
    ],
  },
  playerJourney: {
    id: "player-journey",
    title: "Every Journey Begins With One Step",
    subtitle: "Player Journey",
    paragraphs: [
      "Each player's experience is unique.",
      "While development pathways vary according to age, ability, commitment, and individual goals, every athlete benefits from a structured admissions process, professional coaching, regular development opportunities, and ongoing family engagement.",
      "Detailed player progression pathways are introduced after admission.",
    ],
  },
  calendar: {
    id: "training-calendar",
    title: "A Structured Annual Experience",
    subtitle: "Training Calendar",
    paragraphs: [
      "The academy operates according to a carefully planned annual training calendar designed to provide consistency, progression, and appropriate periods for development throughout the year.",
      "Training schedules, seasonal activities, assessment periods, and academy events are communicated directly to enrolled families.",
      "Prospective families receive an overview during admissions.",
    ],
  },
  investment: {
    id: "investment",
    title: "Investing in Long-Term Development",
    subtitle: "Investment",
    paragraphs: [
      "Joining SpherEarth Football Academy represents an investment in a young athlete's personal and football development.",
      "Investment information, payment options, and available scholarship opportunities are discussed during the admissions process to ensure families receive clear, personalized guidance based on their circumstances and program eligibility.",
      "We believe important decisions are best made through conversation rather than assumptions.",
    ],
    cta: { label: "Book a Parent Consultation", href: "/parents-and-families/consultation/" },
  },
  finalCta: {
    title: "Every Great Journey Starts With a Decision",
    description:
      "If your family is looking for more than football training—if you're seeking structured development, positive mentorship, and an academy committed to long-term growth—we invite you to begin the admissions journey.",
    ctas: [
      { label: "Apply Now", href: "/admissions/apply/", variant: "primary" },
      { label: "Book a Parent Consultation", href: "/parents-and-families/consultation/", variant: "secondary" },
      {
        label: "Download Prospectus",
        href: "/enquiry/?department=Admissions",
        variant: "outline",
      },
    ],
  },
};
