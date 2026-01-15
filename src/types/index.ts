export interface Module {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  longDescription: string;
  targetAudience: string[];
  icon: string;
  color: string;
  features: Feature[];
  pricing: PricingPlan[];
  benefits: string[];
  cta: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  type: "individual" | "corporate" | "institution";
}
