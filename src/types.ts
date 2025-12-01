
import { ReactNode } from 'react';

export type Language = 'ar' | 'en' | 'ku';
export type LayoutStyle = 'minimal' | 'luxury' | 'tech' | 'bold' | 'standard' | '3d-portfolio' | 'agency-modern' | 'n8n-automation';

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  duration: string;
  features: string[];
  highlight?: boolean;
  badge?: string; // New optional property for custom badge text
}

export interface Service {
  id: string;
  title: string;
  icon: ReactNode;
  shortDescription: string;
  fullDescription: string;
  plans: PricingPlan[];
}

export interface Testimonial {
  id: number;
  name: string;
  stars: number;
  text: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Website' | 'Store';
  niche: string;
  gradient: string;
  icon: ReactNode;
  textColor?: string;
  accentColor: string; // Hex color for buttons/highlights in the mockup
  imageTheme: string; // Keyword for dynamic image generation
  imageId: string; // Specific Unsplash ID for reliable hero images
  layoutStyle: LayoutStyle; // Defines the visual structure of the mockup
}

// New Interface for the Bundle Packages
export interface ProfessionalPackage {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  description: string;
  features: string[];
  isComingSoon: boolean;
  highlight?: boolean;
}

// New Interface for FAQ Items
export interface FAQItem {
  question: string;
  answer: string;
}

export interface UiTranslation {
  nav: {
    home: string;
    services: string;
    pricing: string;
    faq: string; // Added FAQ
    portfolio: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    greeting: string;
    iam: string;
    role: string;
    cta_contact: string;
    cta_insta: string;
  };
  sections: {
    services_title: string;
    services_subtitle: string;
    portfolio_title: string;
    portfolio_link: string;
    faq_title: string; // Added FAQ Title
    faq_subtitle: string; // Added FAQ Subtitle
    testimonials_title: string;
    contact_title: string;
    contact_subtitle: string;
  };
  form: {
    name: string;
    email: string;
    message: string;
    send: string;
  };
  common: {
    most_popular: string;
    order_service: string;
    verified: string;
    footer_rights: string;
  };
}
