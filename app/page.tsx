import { Hero } from "@/components/home/hero";
import { CoreServices } from "@/components/home/core-services";
import { SpecializedServices } from "@/components/home/specialized-services";
import { WhyChoose } from "@/components/home/why-choose";
import { Process } from "@/components/home/process";
import { MidCta } from "@/components/home/mid-cta";
import { Testimonials } from "@/components/home/testimonials";
import { Excellence } from "@/components/home/excellence";
import { QualityStandards } from "@/components/home/quality-standards";
import { DifferenceCta } from "@/components/home/difference-cta";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreServices />
      <SpecializedServices />
      <WhyChoose />
      <Process />
      <MidCta />
      <Testimonials />
      <Excellence />
      <QualityStandards />
      <DifferenceCta />
      <FinalCta />
    </>
  );
}
