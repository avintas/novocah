import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with California Healthcare Management Group to request home health care services.",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      title="Contact Us"
      description="Reach out to request care or ask a question. We are here to help across Southern California."
    />
  );
}
