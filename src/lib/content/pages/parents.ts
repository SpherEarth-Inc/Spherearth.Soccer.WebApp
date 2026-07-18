import type { ContentSection, CtaLink, PageMeta } from "@/types/content";

export interface ParentsContent {
  meta: PageMeta;
  intro: ContentSection;
  promise: ContentSection;
  partnership: ContentSection;
  communication: ContentSection;
  safety: ContentSection;
  expectations: ContentSection;
  attendance: ContentSection;
  nutrition: ContentSection;
  academicSupport: ContentSection;
  travel: ContentSection;
  matchDays: ContentSection;
  payments: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const parentsContent: ParentsContent = {
  meta: {
    title: "Parents & Families",
    description:
      "Every great athlete has a great support team. Learn how SpherEarth Football Academy partners with parents and families throughout the academy journey.",
    path: "/parents-and-families/",
    heroImage: "/images/explore/family.webp",
  },
  intro: {
    title: "Parents & Families",
    paragraphs: [
      "At SpherEarth Football Academy, we believe player development is most successful when athletes, families, and coaches work together with shared expectations and open communication.",
      "Parents are valued partners throughout the academy journey, and we are committed to providing a safe, structured, and supportive environment where young athletes can grow with confidence.",
    ],
    cta: { label: "Book a Parent Consultation", href: "/parents-and-families/consultation/", variant: "primary" },
  },
  promise: {
    id: "our-promise",
    title: "Our Promise to Families",
    subtitle: "Our Promise to Families",
    description:
      "Families are central to everything we do. We believe successful player development requires genuine partnership between coaches, parents, and athletes.",
    paragraphs: ["Your child is more than a player. They are part of our community."],
    bullets: [
      "Professional communication",
      "Structured coaching",
      "Safe learning environments",
      "Transparent admissions",
      "Respect for every player",
      "Long-term development over short-term results",
    ],
  },
  partnership: {
    id: "partnership",
    title: "Developing Players Together",
    subtitle: "Our Partnership with Families",
    paragraphs: [
      "Football development extends far beyond the training ground.",
      "The encouragement, guidance, and support provided at home play an important role in every athlete's growth. Our academy values respectful collaboration with parents to ensure players receive consistent encouragement, clear expectations, and positive mentorship both on and off the field.",
      "Together, we create an environment where young people can develop as athletes, students, leaders, and responsible members of their communities.",
    ],
  },
  communication: {
    id: "communication",
    title: "Clear. Professional. Consistent.",
    subtitle: "Communication",
    paragraphs: [
      "We believe effective communication builds trust.",
      "Parents can expect timely updates regarding training schedules, academy activities, important announcements, and player-related information through official SpherEarth communication channels.",
      "Where appropriate, families may communicate directly with the academy's Admissions Team, coaching staff, or administrative personnel through approved channels.",
      "We encourage respectful, constructive communication that supports the best interests of every player.",
    ],
  },
  safety: {
    id: "safety",
    title: "Player Well-being Comes First",
    subtitle: "Safety",
    paragraphs: [
      "Creating a safe, respectful, and positive learning environment is one of our highest priorities.",
      "SpherEarth Football Academy is committed to promoting safeguarding practices that support the physical, emotional, and psychological well-being of every athlete.",
      "We strive to foster an environment built on respect, inclusion, accountability, and responsible supervision.",
      "Additional safeguarding policies and procedures are provided to enrolled families.",
    ],
  },
  expectations: {
    id: "expectations",
    title: "Family Expectations",
    subtitle: "Family Expectations",
    description: "Families play an essential role in supporting each player's development. We encourage parents and guardians to:",
    bullets: [
      "Promote respect for teammates, coaches, officials, and opponents.",
      "Encourage effort, discipline, and continuous improvement.",
      "Support regular attendance and punctuality.",
      "Maintain positive sideline behaviour.",
      "Communicate openly and respectfully with academy staff.",
      "Help create a positive environment for every participant.",
    ],
    trailingParagraphs: ["Our goal is to develop not only excellent football players but also outstanding young people."],
  },
  attendance: {
    id: "attendance",
    title: "Consistency Supports Development",
    subtitle: "Attendance",
    paragraphs: [
      "Regular participation allows players to benefit fully from the academy's structured development model.",
      "Families are encouraged to notify the academy whenever attendance may be affected by illness, school commitments, or other unavoidable circumstances.",
      "Consistent attendance helps players develop skills, confidence, teamwork, and long-term progress.",
    ],
  },
  nutrition: {
    id: "nutrition",
    title: "Fueling Performance",
    subtitle: "Nutrition",
    paragraphs: [
      "Healthy nutrition supports learning, recovery, and athletic performance.",
      "While nutritional decisions remain the responsibility of each family, the academy encourages balanced eating habits and healthy lifestyles appropriate for growing athletes.",
      "Educational guidance and general wellness resources may be shared with families throughout the season.",
    ],
  },
  academicSupport: {
    id: "academic-support",
    title: "Education Matters",
    subtitle: "Academic Support",
    paragraphs: [
      "At SpherEarth Football Academy, academic achievement is viewed as an important part of every athlete's development.",
      "We encourage players to demonstrate commitment both in the classroom and on the pitch while developing the time management, responsibility, and discipline required for long-term success.",
      "Our philosophy supports balanced personal development rather than athletic achievement alone.",
    ],
  },
  travel: {
    id: "travel",
    title: "Planning for Academy Activities",
    subtitle: "Travel",
    paragraphs: [
      "From time to time, players may participate in training sessions, matches, tournaments, community events, or other academy activities at different locations.",
      "Families will receive advance communication whenever travel arrangements, schedules, or additional planning are required.",
      "Future opportunities may include regional, national, and international development experiences as the academy grows.",
    ],
  },
  matchDays: {
    id: "match-days",
    title: "Learning Beyond the Scoreboard",
    subtitle: "Match Days",
    paragraphs: [
      "Match days provide valuable opportunities for players to apply what they learn during training while demonstrating teamwork, discipline, resilience, and sportsmanship.",
      "Families are encouraged to support all participants positively and respectfully, remembering that long-term player development remains more important than short-term results.",
      "Winning is rewarding, but growth remains our priority.",
    ],
  },
  payments: {
    id: "payments",
    title: "Investing in Your Child's Development",
    subtitle: "Tuition & Payments",
    paragraphs: [
      "Joining SpherEarth Football Academy represents an investment in structured coaching, professional support, and long-term player development.",
      "Detailed investment information, payment options, and enrollment requirements are discussed during the admissions process to ensure families receive clear and personalized guidance.",
      "Where available, flexible payment arrangements may be discussed with the Admissions Team.",
    ],
  },
  finalCta: {
    title: "Let's Start the Conversation",
    description:
      "Choosing the right academy is an important decision for every family. We invite you to learn more about SpherEarth Football Academy, ask questions, and discover how we can support your child's development journey. Our Admissions Team looks forward to meeting you.",
    ctas: [
      { label: "Book a Parent Consultation", href: "/parents-and-families/consultation/", variant: "primary" },
      { label: "Apply Now", href: "/admissions/apply/", variant: "secondary" },
      {
        label: "Download Prospectus",
        href: "/enquiry/?department=Admissions",
        variant: "outline",
      },
    ],
  },
};
