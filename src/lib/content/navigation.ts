import type { NavItem } from "@/types/content";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Programs",
    href: "/programs/",
    children: [
      { label: "Overview", href: "/programs/" },
      { label: "Choose Program", href: "/programs/choose-program/" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions/",
    children: [
      { label: "Admissions Overview", href: "/admissions/" },
      { label: "Apply Now", href: "/admissions/apply/" },
    ],
  },
  { label: "Scholarships", href: "/scholarships/" },
  { label: "Parents & Families", href: "/parents/" },
  {
    label: "Partners & Sponsors",
    href: "/relations/",
    children: [
      { label: "Overview", href: "/relations/" },
      { label: "Sponsorship", href: "/relations/sponsorship/" },
      { label: "Strategic Partnerships", href: "/relations/partnerships/" },
      { label: "Become an Advisor", href: "/admissions-advisor/" },
    ],
  },
  { label: "FAQ", href: "/faq/" },
  { label: "About", href: "/about/" },
  {
    label: "More",
    href: "/locations/",
    menuOnly: true,
    children: [
      { label: "News", href: "/news/" },
      { label: "Locations", href: "/locations/" },
      { label: "Success Stories", href: "/success-stories/" },
      { label: "Trust & Safety", href: "/trust-and-safety/" },
      { label: "Enquiry Centre", href: "/enquiry/" },
      { label: "Careers", href: "/careers/" },
    ],
  },
];

export const utilityNavigation: NavItem[] = [
  { label: "Apply Now", href: "/admissions/apply/" },
  { label: "Book Parent Consultation", href: "/parent-consultation/" },
  { label: "Login", href: "#", disabled: true },
];

export const footerNavigation = {
  academy: [
    { label: "Programs", href: "/programs/" },
    { label: "Admissions", href: "/admissions/" },
    { label: "Apply Now", href: "/admissions/apply/" },
    { label: "Parents & Families", href: "/parents/" },
    { label: "Scholarships", href: "/scholarships/" },
    { label: "Locations", href: "/locations/" },
  ],
  partners: [
    { label: "Sponsorship", href: "/relations/sponsorship/" },
    { label: "Partnerships", href: "/relations/partnerships/" },
    { label: "Become an Advisor", href: "/admissions-advisor/" },
    { label: "Careers", href: "/careers/" },
  ],
  trust: [
    { label: "Trust & Safety", href: "/trust-and-safety/" },
    { label: "Success Stories", href: "/success-stories/" },
    { label: "News & Insights", href: "/news/" },
    { label: "Enquiry Centre", href: "/enquiry/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms & Conditions", href: "/terms/" },
    { label: "Safeguarding", href: "/safeguarding/" },
    { label: "Accessibility", href: "/accessibility/" },
  ],
  corporate: [
    { label: "SpherEarth Inc.", href: "https://www.spherearth.ca" },
    { label: "Book Consultation", href: "/parent-consultation/" },
  ],
};

export const enquiryDepartments = [
  "Admissions",
  "Scholarships",
  "Sponsorship",
  "Strategic Partnerships",
  "Media & Communications",
  "General Enquiries",
] as const;

export const trainingLocations = [
  "Toronto Core",
  "North York",
  "Scarborough",
  "Vaughan",
  "Markham",
  "Mississauga",
  "Brampton",
  "Hamilton",
  "Niagara",
  "Barrie",
  "Newmarket",
  "Other",
] as const;

export const gtaCommunities = [
  "Toronto", "North York", "Etobicoke", "Scarborough", "Vaughan", "Richmond Hill",
  "Markham", "Mississauga", "Brampton", "Pickering", "Ajax", "Whitby",
  "Oakville", "Burlington", "Aurora", "Newmarket", "Milton",
] as const;
