import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Droplet,
  Hand,
  Heart,
  MessageCircle,
  Stethoscope,
  Users,
} from "lucide-react";

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
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday & Sunday", time: "Closed" },
  ],
  emergency: {
    note: "For after-hours emergencies, please call our 24/7 hotline",
    phone: "818-783-4427",
    phoneHref: "tel:+18187834427",
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
  description: string;
  icon: LucideIcon;
  image: number;
};

export const services: Service[] = [
  {
    slug: "skilled-nursing",
    title: "Skilled Nursing",
    blurb:
      "Professional nursing care including wound care, medication management, and health monitoring.",
    description:
      "Registered nurses provide medication administration, wound care, and comprehensive medical care in the comfort of your home.",
    icon: Stethoscope,
    image: 1001,
  },
  {
    slug: "physical-therapy",
    title: "Physical Therapy",
    blurb:
      "Specialized physical therapy to help patients regain strength, mobility, and independence.",
    description:
      "Licensed physical therapists help patients regain mobility, strength, and independence after injury, surgery, or illness.",
    icon: Activity,
    image: 1002,
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    blurb: "Help patients develop skills for daily living and work activities.",
    description:
      "Therapists help patients rebuild the fine motor and daily-living skills needed for everyday activities and independence.",
    icon: Hand,
    image: 1003,
  },
  {
    slug: "speech-therapy",
    title: "Speech Therapy",
    blurb:
      "Improve communication, swallowing, and cognitive-linguistic skills.",
    description:
      "Speech-language pathologists treat communication, swallowing, voice, and cognitive-linguistic challenges.",
    icon: MessageCircle,
    image: 1004,
  },
  {
    slug: "medical-social-services",
    title: "Medical Social Services",
    blurb:
      "Support with care coordination, community resources, and emotional support.",
    description:
      "Medical social workers provide care coordination, connect families to community resources, and offer emotional support.",
    icon: Users,
    image: 1005,
  },
  {
    slug: "iv-therapy",
    title: "IV Therapy",
    blurb:
      "In-home IV therapy delivering fluids, medications, and treatments by skilled nurses.",
    description:
      "Skilled registered nurses administer in-home IV therapy for hydration, medications, immune support, and recovery.",
    icon: Droplet,
    image: 1006,
  },
  {
    slug: "home-health-aides",
    title: "Home Health Aides",
    blurb: "Personal care assistance with daily activities and companionship.",
    description:
      "Compassionate aides assist with bathing, grooming, mobility, and daily activities while providing companionship.",
    icon: Heart,
    image: 1011,
  },
];
