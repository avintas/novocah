import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ServiceSections } from "@/components/services/service-sections";
import { SpecializedServices } from "@/components/home/specialized-services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive home health care services including skilled nursing, physical, occupational, and speech therapy, IV therapy, medical social services, and home health aides across Southern California.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <Section className="bg-brand-muted py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-brand text-sm font-semibold tracking-wide uppercase">
              Our Services
            </p>
            <h1 className="text-foreground mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Expert home health care tailored to your needs
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              {siteConfig.description} We serve families across{" "}
              {siteConfig.serviceAreas.join(", ")} Counties with licensed,
              compassionate care in the comfort of home.
            </p>
          </div>
        </Container>
      </Section>

      <ServiceSections />

      <SpecializedServices className="bg-surface-muted" />

      {/* Areas we serve */}
      <Section className="bg-surface-muted pt-0">
        <Container>
          <div className="border-border bg-surface rounded-2xl border p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
                  Areas We Serve
                </h2>
                <p className="text-muted-foreground mt-3 text-base leading-7">
                  California Healthcare Management Group provides home health
                  care services throughout Southern California. Contact us to
                  confirm coverage for your area.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:min-w-[280px]">
                {siteConfig.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="text-foreground flex items-center gap-2 text-sm font-medium"
                  >
                    <Icon icon={MapPin} size={18} className="text-brand" />
                    {area} County
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-brand-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to get started with home health care?
            </h2>
            <p className="text-brand-foreground/90 mt-4 text-base leading-7">
              Our care coordinators are available to answer your questions and
              help you understand which services may be right for you or your
              loved one.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="white" size="lg">
                Get Free Consultation
              </Button>
              <Button href="/about" variant="outlineOnDark" size="lg">
                Learn About Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
