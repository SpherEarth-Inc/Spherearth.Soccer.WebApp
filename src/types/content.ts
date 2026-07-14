export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  disabled?: boolean;
}

export interface CtaLink {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

export interface ContentSection {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  paragraphs?: string[];
  bullets?: string[];
  trailingParagraphs?: string[];
  items?: { title: string; description: string }[];
  image?: string;
  cta?: CtaLink;
  ctas?: CtaLink[];
}

export interface ProgramCard {
  title: string;
  description: string;
  idealFor: string[];
  image?: string;
  cta: CtaLink;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

export interface ComparisonRow {
  traditional: string;
  academy: string;
}

export interface PillarItem {
  title: string;
  description: string;
}

export interface SearchEntry {
  title: string;
  href: string;
  excerpt: string;
  keywords?: string[];
}

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  heroImage?: string;
}
