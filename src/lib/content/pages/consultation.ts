import { images } from "../assets";
import type { ContentSection, CtaLink, FaqItem, PageMeta } from "@/types/content";

export interface ConsultationContent {
  meta: PageMeta;
  intro: ContentSection;
  discussionTopics: ContentSection;
  whoShouldAttend: ContentSection;
  beforeYourCall: ContentSection;
  whatHappensNext: ContentSection;
  faqs: FaqItem[];
  finalCta: {
    title: string;
    description: string;
    cta: CtaLink;
  };
}

export const consultationContent: ConsultationContent = {
  meta: {
    title: "Book a Parent Consultation",
    description:
      "Let's talk about your child's football journey. Book a complimentary Parent Information Call with SpherEarth Football Academy.",
    path: "/parent-consultation/",
    heroImage: images.families,
  },
  intro: {
    title: "Book a Parent Consultation",
    paragraphs: [
      "Choosing the right football academy is an important decision for every family.",
      "Our Parent Information Call provides an opportunity to learn more about SpherEarth Football Academy, ask questions, understand our admissions process, and determine whether the academy is the right fit for your child and your family.",
      "There is no obligation to apply following the conversation.",
    ],
    cta: { label: "Select a Date & Time", href: "#calendly", variant: "primary" },
  },
  discussionTopics: {
    id: "discussion-topics",
    title: "What We'll Discuss",
    description: "Every conversation is tailored to your family's questions and aspirations. Topics may include:",
    bullets: [
      "The academy's philosophy and approach",
      "Program overview",
      "Admissions process",
      "Age-appropriate development",
      "Parent expectations",
      "Scholarships",
      "General investment information",
      "Next steps",
    ],
    paragraphs: ["We encourage you to ask questions and take the time you need to make an informed decision."],
  },
  whoShouldAttend: {
    id: "who-should-attend",
    title: "Who Should Attend?",
    paragraphs: [
      "We recommend that at least one parent or legal guardian participates in the call.",
      "Where appropriate, prospective players are also welcome to join the conversation.",
      "Our goal is to ensure everyone has a clear understanding of the academy before beginning the admissions process.",
    ],
  },
  beforeYourCall: {
    id: "before-your-call",
    title: "Before Your Call",
    description: "To help us make the most of our time together, please consider:",
    bullets: [
      "Your child's football experience",
      "Your family's goals and expectations",
      "Any questions you would like to discuss",
      "Preferred training region",
      "Preferred programme (if known)",
    ],
  },
  whatHappensNext: {
    id: "what-happens-next",
    title: "What Happens Next?",
    description:
      "After your Parent Consultation, our Admissions Team will advise you on the most appropriate next steps. Depending on your circumstances, these may include:",
    bullets: [
      "Beginning the admissions application",
      "Receiving additional academy information",
      "Scheduling a player assessment (where appropriate)",
      "Discussing scholarship opportunities",
      "Joining a future intake",
    ],
    paragraphs: ["Every family's journey is unique, and our team is here to guide you through the process."],
  },
  faqs: [
    {
      question: "Is there a cost for the Parent Consultation?",
      answer: "No. The consultation is complimentary.",
    },
    {
      question: "How long does the consultation last?",
      answer:
        "Most conversations take approximately 20 to 30 minutes, depending on your questions.",
    },
    {
      question: "Is this an admissions interview?",
      answer:
        "No. The purpose of the consultation is to provide information, answer questions, and help determine whether the academy is a suitable fit.",
    },
    {
      question: "Can my child attend the consultation?",
      answer:
        "Yes. Prospective players are welcome to participate alongside their parent or guardian where appropriate.",
    },
    {
      question: "What if I need to reschedule?",
      answer:
        "Your booking confirmation will include instructions for rescheduling or cancelling your appointment if necessary.",
    },
  ],
  finalCta: {
    title: "We Look Forward to Meeting You",
    description:
      "Every successful journey begins with a conversation. We would be delighted to learn more about your family, answer your questions, and help you explore whether SpherEarth Football Academy is the right environment for your child's development.",
    cta: { label: "Book a Parent Consultation", href: "#calendly", variant: "primary" },
  },
};
