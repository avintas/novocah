import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A Home Care Elite Agency since 2013, serving Southern California with compassionate, expert home health care.",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      title="About Us"
      description="A Home Care Elite Agency since 2013, dedicated to compassionate, expert home health care across Southern California."
    />
  );
}
