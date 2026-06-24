import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  ClipboardList,
  HeartHandshake,
  PhoneCall,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

export type CareerBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const careerBenefits: CareerBenefit[] = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Join a team that truly cares about patients and their families, providing personalized care that makes a difference.",
  },
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description:
      "Continuous learning opportunities, certifications, and career advancement paths to help you grow professionally.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    description:
      "Work alongside experienced professionals who support each other and share a common goal of improving patient outcomes.",
  },
];

export type JobOpening = {
  slug: string;
  title: string;
  description: string;
  schedule: string;
  location: string;
  compensation: string;
};

export const jobOpenings: JobOpening[] = [
  {
    slug: "registered-nurse",
    title: "Registered Nurse (RN)",
    description:
      "We're seeking experienced RNs to provide skilled nursing care in patients' homes. Full-time and part-time positions available.",
    schedule: "Full-time / Part-time",
    location: "Los Angeles Area",
    compensation: "Competitive Salary",
  },
  {
    slug: "physical-therapist",
    title: "Physical Therapist",
    description:
      "Join our team as a Physical Therapist and help patients regain mobility and independence in their homes.",
    schedule: "Full-time",
    location: "Los Angeles Area",
    compensation: "Competitive Salary",
  },
  {
    slug: "home-health-aide",
    title: "Home Health Aide",
    description:
      "Provide personal care and companionship to patients in their homes. Training and certification support available.",
    schedule: "Full-time / Part-time",
    location: "Los Angeles Area",
    compensation: "Competitive Salary",
  },
  {
    slug: "care-coordinator",
    title: "Care Coordinator",
    description:
      "Help coordinate patient care and manage relationships with healthcare providers and families.",
    schedule: "Full-time",
    location: "Los Angeles Area",
    compensation: "Competitive Salary",
  },
];

export type ApplicationStep = {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const applicationSteps: ApplicationStep[] = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Submit Application",
    description:
      "Complete our online application form with your resume and cover letter.",
  },
  {
    step: 2,
    icon: Briefcase,
    title: "Initial Review",
    description:
      "Our HR team will review your application and contact you within 48 hours.",
  },
  {
    step: 3,
    icon: PhoneCall,
    title: "Interview Process",
    description: "Participate in phone and in-person interviews with our team.",
  },
  {
    step: 4,
    icon: UserCheck,
    title: "Join Our Team",
    description: "Complete onboarding and start your journey with us!",
  },
];

export const careersImages = {
  team: 1017,
} as const;
