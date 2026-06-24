import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/lib/site";
import {
  differentiators,
  homeCareServices,
  nursingSpecialties,
} from "@/lib/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A Home Care Elite Agency since 2013, serving Southern California with compassionate, expert home health care.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <Section className="bg-brand-muted py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-brand text-sm font-semibold tracking-wide uppercase">
              About Us
            </p>
            <h1 className="text-foreground mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Compassionate, expert care in the comfort of home
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              {siteConfig.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Our Mission */}
      <Section className="bg-surface">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <div className="text-muted-foreground mt-5 space-y-4 text-base leading-7">
              <p>
                We are committed to delivering exceptional home health care
                services that enhance the quality of life for our patients and
                their families. Our team of skilled professionals works
                tirelessly to ensure that every individual receives
                personalized, compassionate care in the comfort of their own
                home.
              </p>
              <p>
                With years of experience in the healthcare industry, we
                understand the unique challenges that families face when caring
                for loved ones. Our comprehensive approach addresses not only
                the physical needs of our patients but also their emotional and
                social well-being.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What Makes Us Different */}
      <Section className="bg-surface-muted">
        <Container>
          <SectionHeading
            align="left"
            title="What Makes Us Different"
            className="max-w-2xl"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="border-border bg-brand-muted/60 rounded-2xl border p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-brand text-brand-foreground flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon icon={item.icon} size={22} />
                  </span>
                  <h3 className="text-foreground text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mt-4 text-sm leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Full Continuum of Care */}
      <Section className="bg-surface">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
              Full Continuum of Care
            </h2>
            <p className="text-muted-foreground mt-5 text-base leading-7">
              At California Healthcare Management Group, we provide a full
              continuum of care designed to meet both short- and long-term
              health needs in the comfort of home. Our licensed nurses and
              therapists deliver compassionate, skilled services with
              professionalism and dignity, drawing on decades of experience in
              hospital and home health settings. As a family-owned agency
              trusted since 2013, we bring a personal touch and consistency,
              with many of our clinicians joining us from the very beginning.
              Backed by Medicare certification and Joint Commission
              accreditation, we combine trusted expertise with innovative tools
              such as electronic health records and telehealth to enhance
              safety, communication, and outcomes. In addition to skilled
              nursing and therapy, we assist with arranging medical equipment,
              lab tests, mobile radiology, podiatry, and other healthcare
              services to ensure all patient needs are met. We also work closely
              with physicians to coordinate care, giving families peace of mind
              that their loved ones are fully supported at every step.
            </p>
          </div>
        </Container>
      </Section>

      {/* Nursing Specialties */}
      <Section className="bg-surface-muted">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
              Nursing Specialties
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-7">
              California Healthcare Management Group specializes in Home Care
              for patients with the following diagnoses:
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {nursingSpecialties.map((item) => (
              <li
                key={item}
                className="text-foreground flex items-center gap-3 text-sm"
              >
                <Icon
                  icon={CheckCircle2}
                  size={18}
                  className="text-accent shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Home Care Services Include */}
      <Section className="bg-surface">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
              Home Care Services Include
            </h2>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {homeCareServices.map((item) => (
              <li
                key={item}
                className="text-foreground flex items-center gap-3 text-sm"
              >
                <Icon
                  icon={CheckCircle2}
                  size={18}
                  className="text-brand shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Our Commitment */}
      <Section className="bg-brand">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <h2 className="text-brand-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
                Our Commitment
              </h2>
              <div className="text-brand-foreground/90 mt-5 space-y-4 text-base leading-7">
                <p>
                  We believe that everyone deserves access to high-quality
                  healthcare in the comfort of their own home. Our commitment to
                  excellence drives everything we do, from the initial
                  assessment to ongoing care coordination.
                </p>
                <p>
                  As a Home Care Elite Agency, we have earned the trust of
                  thousands of families who needed help after a hospital stay or
                  during an extended illness. We&apos;re here to ensure you
                  receive these services with the quality associated with the
                  highest medical standards.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/contact" variant="white" size="lg">
                Get Free Consultation
              </Button>
              <Button href="/services" variant="outlineOnDark" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
