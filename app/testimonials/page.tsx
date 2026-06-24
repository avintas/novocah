import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from patients and families about their experience with California Healthcare Management Group.",
};

export default function TestimonialsPage() {
  return (
    <PagePlaceholder
      title="Testimonials"
      description="Stories from the patients and families we have had the privilege to care for."
    />
  );
}
