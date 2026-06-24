import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join our team of compassionate home health care professionals across Southern California.",
};

export default function CareersPage() {
  return (
    <PagePlaceholder
      title="Careers"
      description="Join a team of compassionate professionals delivering exceptional home health care."
    />
  );
}
