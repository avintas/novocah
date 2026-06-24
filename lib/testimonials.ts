import type { LucideIcon } from "lucide-react";
import { Activity, Hand, MessageCircle, Stethoscope } from "lucide-react";

export type Testimonial = {
  quote: string;
  initials: string;
  name: string;
  role: string;
  rating: number;
  /** Used for browse-by-service filtering. Omit for general/family reviews. */
  service?: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const featuredReview: Testimonial = {
  quote:
    "The care my mother received from California Healthcare Management Group was exceptional. The nurses were not only professional but also compassionate and understanding. They treated her with dignity and respect, making her recovery journey much more comfortable.",
  initials: "MJ",
  name: "Mary Johnson",
  role: "Daughter of Patient",
  rating: 5,
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "skilled-nursing",
    title: "Skilled Nursing",
    description: "Reviews from patients who received nursing care",
    icon: Stethoscope,
  },
  {
    slug: "physical-therapy",
    title: "Physical Therapy",
    description: "Feedback from physical therapy patients",
    icon: Activity,
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    description: "Testimonials from OT patients",
    icon: Hand,
  },
  {
    slug: "speech-therapy",
    title: "Speech Therapy",
    description: "Reviews from speech therapy patients",
    icon: MessageCircle,
  },
];

export const patientTestimonials: Testimonial[] = [
  {
    quote:
      "The physical therapy I received at home was excellent. My therapist was knowledgeable and encouraging, helping me regain strength and mobility after my surgery.",
    initials: "RS",
    name: "Robert Smith",
    role: "Physical Therapy Patient",
    rating: 5,
    service: "physical-therapy",
  },
  {
    quote:
      "I'm so grateful for the occupational therapy services. The therapist helped me adapt my home and learn new ways to do everyday tasks independently.",
    initials: "ED",
    name: "Elizabeth Davis",
    role: "Occupational Therapy Patient",
    rating: 5,
    service: "occupational-therapy",
  },
  {
    quote:
      "The speech therapy sessions were incredibly helpful. My communication skills improved significantly, and I feel more confident in social situations.",
    initials: "MW",
    name: "Michael Wilson",
    role: "Speech Therapy Patient",
    rating: 5,
    service: "speech-therapy",
  },
  {
    quote:
      "The medical social worker provided invaluable support during my recovery. They helped me navigate insurance and connected me with community resources.",
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Medical Social Services Patient",
    rating: 5,
    service: "medical-social-services",
  },
  {
    quote:
      "The skilled nursing care was outstanding. The nurses were professional, caring, and always available when we needed them.",
    initials: "TB",
    name: "Thomas Brown",
    role: "Skilled Nursing Patient",
    rating: 5,
    service: "skilled-nursing",
  },
  {
    quote:
      "As a family member, I appreciate how the team kept us informed and involved in the care plan. The communication was excellent.",
    initials: "LM",
    name: "Lisa Martinez",
    role: "Family Member",
    rating: 5,
  },
];
