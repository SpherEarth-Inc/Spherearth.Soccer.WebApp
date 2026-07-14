import type { ContentSection, CtaLink, PageMeta, StepItem } from "@/types/content";

export interface AdmissionsContent {
  meta: PageMeta;
  intro: ContentSection;
  philosophy: ContentSection;
  pathways: ContentSection;
  selectionCriteria: ContentSection;
  whoCanApply: ContentSection;
  steps: StepItem[];
  admissionsPriority: ContentSection;
  assessment: ContentSection;
  documents: ContentSection;
  tuition: ContentSection;
  paymentPlans: ContentSection;
  international: ContentSection;
  officialCommunications: ContentSection;
  finalCta: {
    title: string;
    description: string;
    ctas: CtaLink[];
  };
}

export const admissionsContent: AdmissionsContent = {
  meta: {
    title: "Admissions",
    description:
      "Learn about the SpherEarth Football Academy admissions process.",
    path: "/admissions/",
    heroImage: "/images/explore/academy.webp",
  },
  intro: {
    title: "Admissions",
    paragraphs: [
      "Admission to SpherEarth Football Academy is designed to identify athletes and families who share our commitment to personal growth, discipline, respect, and long-term development.",
      "Our admissions process helps determine whether the academy is the right fit for each player while ensuring every family clearly understands the commitment required to support the athlete's journey.",
    ],
    cta: { label: "Start Application", href: "/admissions/apply/", variant: "primary" },
  },
  philosophy: {
    id: "admission-philosophy",
    title: "Building the Right Community",
    subtitle: "Admission Philosophy",
    paragraphs: [
      "We believe successful player development begins with selecting not only talented athletes but also families who value discipline, commitment, teamwork, education, character, and continuous improvement.",
      "Admissions are designed to create an environment where players can thrive while families become active partners in their child's development.",
      "Applications are considered carefully to ensure each player joins a community that supports both individual growth and collective success.",
    ],
  },
  pathways: {
    id: "pathways",
    title: "Multiple Ways to Begin the Journey",
    subtitle: "Pathways to Admission",
    items: [
      {
        title: "Direct Application",
        description:
          "Families may submit an admissions inquiry through the academy website at any time.",
      },
      {
        title: "Advisor Invitation",
        description:
          "Approved SpherEarth Admissions Advisors may identify prospective players and families who appear well aligned with the academy's philosophy and invite them to begin the formal admissions process. An invitation to apply reflects an initial assessment of suitability and interest. It does not constitute an offer of admission, which remains subject to the academy's review process.",
      },
    ],
  },
  selectionCriteria: {
    id: "selection-criteria",
    title: "Looking Beyond Talent",
    subtitle: "Selection Criteria",
    description:
      "Admission decisions consider the overall suitability of the player and family rather than football ability alone.",
    bullets: [
      "Demonstrated commitment to development",
      "Coachability and willingness to learn",
      "Positive attitude and sportsmanship",
      "Family engagement and support",
      "Age-appropriate readiness",
      "Alignment with academy values",
      "Availability within the relevant program",
    ],
    paragraphs: ["Each application is reviewed holistically because every athlete develops differently."],
  },
  whoCanApply: {
    id: "who-can-apply",
    title: "Open to Ambitious Young Athletes",
    subtitle: "Who Can Apply?",
    paragraphs: [
      "Applications are welcomed from families seeking a structured, professional, and supportive football development environment.",
      "The academy welcomes applications from players across the Greater Toronto Area and surrounding communities who are prepared to commit to consistent participation, personal development, and respectful engagement within the academy.",
    ],
  },
  steps: [
    {
      step: 1,
      title: "Application or Advisor Invitation",
      description:
        "Families either submit an online inquiry or are invited by an authorized SpherEarth Admissions Advisor to begin the admissions process.",
    },
    {
      step: 2,
      title: "Admissions Review",
      description:
        "Our admissions team reviews the information provided to determine the next appropriate step.",
    },
    {
      step: 3,
      title: "Parent Conversation",
      description:
        "Selected families may be invited to participate in an introductory conversation to discuss the academy, expectations, player goals, and family commitment.",
    },
    {
      step: 4,
      title: "Player Assessment",
      description:
        "Where appropriate, players may participate in an assessment designed to better understand their current stage of development and identify the most suitable learning environment.",
    },
    {
      step: 5,
      title: "Admission Decision",
      description:
        "Families receive an admissions decision together with enrollment guidance where applicable.",
    },
    {
      step: 6,
      title: "Enrollment",
      description:
        "Successful applicants complete enrollment requirements before joining the academy.",
    },
  ],
  admissionsPriority: {
    id: "admissions-priority",
    title: "Building Each Intake Thoughtfully",
    subtitle: "Admissions Priority",
    description:
      "Applications are reviewed throughout each admissions period. Where demand exceeds available places, priority may be influenced by several factors, including:",
    bullets: [
      "Date of completed application",
      "Program capacity",
      "Overall suitability",
      "Readiness to begin the program",
      "Family commitment to supporting the athlete's development",
      "Completion of admissions requirements",
    ],
    paragraphs: [
      "Our goal is to build balanced player groups while providing every family with a fair and transparent admissions experience.",
    ],
  },
  assessment: {
    id: "assessment",
    title: "Understanding Every Player",
    subtitle: "Assessment Process",
    paragraphs: [
      "Assessments are intended to understand each athlete's current stage of development and identify the most appropriate learning environment.",
      "They are conducted within a supportive and respectful environment focused on future development rather than short-term performance.",
      "The academy's detailed evaluation methodology forms part of our proprietary admissions framework and is shared only where appropriate during the admissions process.",
    ],
  },
  documents: {
    id: "documents",
    title: "Preparing for Admission",
    subtitle: "Documents Required",
    description:
      "Depending on the stage of the admissions process, families may be asked to provide:",
    bullets: [
      "Parent or guardian information",
      "Player identification",
      "Emergency contact information",
      "Medical information where applicable",
      "Consent and participation forms",
      "Additional enrollment documentation",
    ],
    paragraphs: ["Specific requirements will be communicated by the admissions team."],
  },
  tuition: {
    id: "tuition",
    title: "Investing in Long-Term Development",
    subtitle: "Tuition & Investment",
    paragraphs: [
      "Joining SpherEarth Football Academy represents an investment in a young athlete's football, personal, and leadership development.",
      "Investment information is discussed during the admissions process, allowing families to receive guidance on the most appropriate program, available payment options, and enrollment expectations.",
      "This personalized approach helps ensure every family fully understands the commitment associated with academy participation before making an enrollment decision.",
    ],
  },
  paymentPlans: {
    id: "payment-plans",
    title: "Supporting Family Planning",
    subtitle: "Flexible Payment Options",
    paragraphs: [
      "We recognize that every family plans differently.",
      "Where available, flexible payment arrangements may be discussed during admissions to support responsible financial planning and long-term participation.",
      "Detailed investment information is provided to qualified families during the admissions process.",
    ],
  },
  international: {
    id: "international",
    title: "A Global Vision",
    subtitle: "International Students (Future)",
    paragraphs: [
      "As SpherEarth Football Academy grows, we intend to establish pathways that welcome talented young athletes from outside Canada through appropriate partnerships and development opportunities.",
      "Additional information will be published as international programs become available.",
    ],
  },
  officialCommunications: {
    id: "official-communications",
    title: "Your Security Matters",
    subtitle: "Official Communications",
    description:
      "To protect families and applicants, SpherEarth Football Academy communicates only through authorized representatives and official communication channels. Before making payments or sharing sensitive information, we encourage all families to verify the identity of anyone claiming to represent the academy.",
    ctas: [
      { label: "Verify Representative", href: "/trust-and-safety/#verify" },
      { label: "Fraud Prevention", href: "/trust-and-safety/#fraud-prevention" },
    ],
  },
  finalCta: {
    title: "Ready to Begin Your Journey?",
    description:
      "Every athlete's future begins with a first step. If you believe SpherEarth Football Academy could be the right environment for your child, we invite you to begin the admissions journey today. We look forward to learning more about your family, your aspirations, and how we may support your child's development.",
    ctas: [
      { label: "Start Application", href: "/admissions/apply/", variant: "primary" },
      { label: "Book a Parent Consultation", href: "/parent-consultation/", variant: "secondary" },
      {
        label: "Download Prospectus",
        href: "/enquiry/?department=Admissions",
        variant: "outline",
      },
    ],
  },
};
