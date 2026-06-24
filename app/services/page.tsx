import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive home health care services including skilled nursing, physical, occupational, and speech therapy.",
};

export default function ServicesPage() {
  return (
    <PagePlaceholder
      title="Our Services"
      description="Skilled nursing, physical therapy, occupational therapy, speech therapy, medical social services, and home health aides."
    />
  );
}
