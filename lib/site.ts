export const siteConfig = {
  name: "California Healthcare Management Group",
  shortName: "CAHMGT",
  wordmark: {
    line1: "California Healthcare",
    line2: "Management Group",
  },
  tagline: "Expert Home Health Care Services Across Southern California",
  description:
    "A Home Care Elite Agency since 2013, California Healthcare Management Group provides comprehensive home health care services across Southern California.",
  serviceAreas: [
    "Los Angeles",
    "Orange",
    "Ventura",
    "San Bernardino",
    "Riverside",
  ],
  contact: {
    addressLine: "17337 Ventura Blvd, Suite 202",
    cityLine: "Encino, CA 91316",
    phone: "818-783-4427",
    phoneHref: "tel:+18187834427",
    fax: "818-906-9101",
    email: "info@cahmgt.com",
    emailHref: "mailto:info@cahmgt.com",
    website: "www.cahmgt.com",
  },
  certification: {
    label: "The Joint Commission",
    detail: "National Quality Approval",
    status: "Certified",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  blurb: string;
};

export const services: Service[] = [
  {
    slug: "skilled-nursing",
    title: "Skilled Nursing",
    blurb:
      "Professional nursing care including wound care, medication management, and health monitoring.",
  },
  {
    slug: "physical-therapy",
    title: "Physical Therapy",
    blurb:
      "Specialized physical therapy to help patients regain strength, mobility, and independence.",
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    blurb: "Help patients develop skills for daily living and work activities.",
  },
  {
    slug: "speech-therapy",
    title: "Speech Therapy",
    blurb:
      "Improve communication, swallowing, and cognitive-linguistic skills.",
  },
  {
    slug: "medical-social-services",
    title: "Medical Social Services",
    blurb:
      "Support with care coordination, community resources, and emotional support.",
  },
  {
    slug: "home-health-aides",
    title: "Home Health Aides",
    blurb: "Personal care assistance with daily activities and companionship.",
  },
];
