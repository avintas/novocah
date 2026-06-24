import type { LucideIcon } from "lucide-react";
import { Activity, Award, Handshake, ShieldCheck } from "lucide-react";

export type Differentiator = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    icon: Activity,
    title: "Full Continuum of Care",
    description:
      "At California Healthcare Management Group, we meet both short- and long-term health needs in the comfort of home. Our licensed nurses and therapists deliver compassionate, skilled care with professionalism and dignity.",
  },
  {
    icon: Award,
    title: "Experience You Can Trust",
    description:
      "Family-owned since 2013, we bring a personal touch and continuity of care—many of our clinicians have been with us from the very beginning.",
  },
  {
    icon: ShieldCheck,
    title: "Accredited, Safe & Connected",
    description:
      "Backed by Medicare certification and Joint Commission accreditation, we use electronic health records and telehealth to enhance safety, communication, and outcomes.",
  },
  {
    icon: Handshake,
    title: "Seamless Care Coordination",
    description:
      "Beyond skilled nursing and therapy, we arrange medical equipment, lab tests, mobile radiology, podiatry, and other services. We work closely with physicians so every need is covered—and families have peace of mind.",
  },
];

export const nursingSpecialties: string[] = [
  "Spinal Cord Injury",
  "Brain Injury",
  "Cerebral Palsy",
  "Epilepsy/Seizure Disorder",
  "Muscular Dystrophy",
  "Chromosomal Disorders",
  "Chronic Respiratory Diseases",
  "Cancer",
  "Multiple Sclerosis",
  "Lou Gehrig Disease",
  "Parkinson's Disease",
  "Stroke Aftercare",
  "Diabetes",
  "Heart Disease",
  "Alzheimer's",
  "Aids/HIV Positive",
  "Autism",
  "Down Syndrome",
  "Failure to Thrive",
];

export const homeCareServices: string[] = [
  "Assessment",
  "Medication Administration",
  "Ventilator Care",
  "Tracheostomy Care",
  "Suctioning",
  "G-Tube Feedings and Care",
  "Monitor Vital Signs",
  "Check Blood Sugars",
  "Provide Wound Care",
];
