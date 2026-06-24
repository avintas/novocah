import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  Cpu,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  Star,
  UserPlus,
} from "lucide-react";

/** Hero + section imagery (blob media ids). */
export const homeImages = {
  hero: 1019,
  whyChoose: 1017,
} as const;

export type SpecializedService = {
  title: string;
  image: number;
};

export const specializedServices: SpecializedService[] = [
  { title: "Bathing Nurses", image: 1053 },
  { title: "Wound Care Specialists", image: 1069 },
  { title: "Mobile Ultrasound", image: 1067 },
  { title: "Mobile X-Ray", image: 1068 },
  { title: "Mobile Physicians", image: 1065 },
  { title: "Mobile Podiatrist", image: 1066 },
  { title: "Medical Supplies", image: 1063 },
  { title: "Mobile Lab", image: 1064 },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChoose: Feature[] = [
  {
    icon: HeartHandshake,
    title: "Compassionate, Skilled Care",
    description:
      "Licensed nurses and therapists provide individualized attention with professionalism, dignity, and compassion.",
  },
  {
    icon: ShieldCheck,
    title: "Privately Owned & Trusted Since 2013",
    description:
      "A family-owned and locally operated agency with close, personal relationships with the families we serve.",
  },
  {
    icon: Award,
    title: "Trusted Expertise",
    description:
      "Years of proven results and Joint Commission accreditation reflect our commitment to high-quality care.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Services",
    description:
      "Care plans tailored to each patient's unique medical, emotional, and personal needs.",
  },
  {
    icon: BadgeCheck,
    title: "Quality & Peace of Mind",
    description:
      "Consistent patient satisfaction, careful coordination, and 24/7 support give families peace of mind.",
  },
  {
    icon: Cpu,
    title: "Advanced Tools & Technology",
    description:
      "Modern electronic health records and telehealth improve communication, efficiency, and patient outcomes.",
  },
];

export type ProcessStep = {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: ClipboardCheck,
    title: "Initial Assessment",
    description:
      "We conduct a comprehensive evaluation of your needs, medical history, and home environment to create a personalized care plan.",
    points: [
      "Medical history review",
      "Home safety assessment",
      "Care needs evaluation",
      "Insurance verification",
    ],
  },
  {
    step: 2,
    icon: UserPlus,
    title: "Care Team Assignment",
    description:
      "We match you with qualified healthcare professionals who have the right skills and experience for your needs.",
    points: [
      "Licensed nurse selection",
      "Therapist matching",
      "Background verification",
      "Experience validated",
    ],
  },
  {
    step: 3,
    icon: CalendarCheck,
    title: "Care Plan Implementation",
    description:
      "Your personalized care plan is put into action with scheduled visits, treatments, and ongoing monitoring of your progress.",
    points: [
      "Regular visit scheduling",
      "Treatment administration",
      "Progress monitoring",
      "Care coordination",
    ],
  },
  {
    step: 4,
    icon: HeartPulse,
    title: "Ongoing Support",
    description:
      "We provide continuous support and adjust your care plan as needed to ensure the best possible outcomes.",
    points: [
      "Regular assessments",
      "Care plan updates",
      "Family communication",
      "24/7 availability",
    ],
  },
];

export type ImpactStat = {
  value: string;
  label: string;
};

export const impactStats: ImpactStat[] = [
  { value: "10,000+", label: "Patients Served" },
  { value: "11+", label: "Years of Excellence" },
  { value: "5", label: "Counties Served" },
];

export type ExcellenceCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  meta: string;
  /** Optional blob image id to use instead of the icon. */
  image?: number;
};

export const excellenceCards: ExcellenceCard[] = [
  {
    icon: Award,
    title: "Joint Commission Accredited",
    description:
      "Recognized as one of the top-performing home health agencies in the state.",
    meta: "2013–2025",
    image: 1061,
  },
  {
    icon: ShieldCheck,
    title: "Medicare Certified",
    description:
      "Fully licensed and certified by Medicare and state health departments.",
    meta: "Since 2013",
  },
  {
    icon: Star,
    title: "High Quality Rating",
    description: "Consistently achieving the highest quality ratings from CMS.",
    meta: "Ongoing",
  },
];

export const qualityStandards: string[] = [
  "Licensed by California Department of Public Health",
  "Accredited by The Joint Commission",
  "Medicare and Medicaid certified",
  "HIPAA-compliant patient privacy protection",
  "Regular quality assurance audits",
  "Continuous staff training and development",
];

export const qualityHighlights: string[] = [
  "Experienced healthcare professionals with specialized training",
  "Personalized care plans tailored to individual needs",
  "24/7 availability for urgent care needs",
  "Comprehensive care coordination and communication",
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The skilled nursing care I received was outstanding. The nurses were always on time, professional, and went above and beyond to ensure my comfort and recovery. Highly recommend!",
    name: "Robert Thompson",
    role: "Skilled Nursing Patient",
    rating: 5,
  },
];
