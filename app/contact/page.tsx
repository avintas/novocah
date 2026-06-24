import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";

import { Container, Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact California Healthcare Management Group in Encino, CA. Call 818-783-4427, email info@cahmgt.com, or send us a message.",
};

const mapQuery = encodeURIComponent(
  `${siteConfig.contact.addressLine}, ${siteConfig.contact.cityLine}`,
);
const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <Section className="bg-brand-muted py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-brand text-sm font-semibold tracking-wide uppercase">
              Contact Us
            </p>
            <h1 className="text-foreground mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              We&apos;re here to help
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              Have a question about our home health care services or ready to
              get started? Reach out and a member of our care team will respond
              promptly.
            </p>
          </div>
        </Container>
      </Section>

      {/* Info + form */}
      <Section className="bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Contact information */}
            <div>
              <h2 className="text-foreground text-2xl font-semibold tracking-tight">
                Contact Information
              </h2>

              <dl className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <span className="bg-brand-muted text-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon icon={MapPin} size={22} />
                  </span>
                  <div>
                    <dt className="text-foreground text-sm font-semibold">
                      Address
                    </dt>
                    <dd className="text-muted-foreground mt-1 text-sm leading-6">
                      {siteConfig.contact.addressLine}
                      <br />
                      {siteConfig.contact.cityLine}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="bg-brand-muted text-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon icon={Phone} size={22} />
                  </span>
                  <div>
                    <dt className="text-foreground text-sm font-semibold">
                      Phone
                    </dt>
                    <dd className="mt-1 text-sm leading-6">
                      <a
                        href={siteConfig.contact.phoneHref}
                        className="text-brand hover:text-brand-hover"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="bg-brand-muted text-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon icon={Mail} size={22} />
                  </span>
                  <div>
                    <dt className="text-foreground text-sm font-semibold">
                      Email
                    </dt>
                    <dd className="mt-1 text-sm leading-6">
                      <a
                        href={siteConfig.contact.emailHref}
                        className="text-brand hover:text-brand-hover"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="bg-brand-muted text-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon icon={Clock} size={22} />
                  </span>
                  <div>
                    <dt className="text-foreground text-sm font-semibold">
                      Hours of Operation
                    </dt>
                    <dd className="text-muted-foreground mt-1 space-y-1 text-sm leading-6">
                      {siteConfig.hours.map((h) => (
                        <p key={h.days}>
                          <span className="text-foreground">{h.days}:</span>{" "}
                          {h.time}
                        </p>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-red-200 bg-red-50 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <Icon icon={Siren} size={22} />
                  </span>
                  <div>
                    <dt className="text-foreground text-sm font-semibold">
                      Emergency Contact
                    </dt>
                    <dd className="text-muted-foreground mt-1 text-sm leading-6">
                      {siteConfig.emergency.note}
                      <br />
                      <a
                        href={siteConfig.emergency.phoneHref}
                        className="font-semibold text-red-600 hover:text-red-700"
                      >
                        {siteConfig.emergency.phone}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Form */}
            <ContactForm />
          </div>

          {/* Map */}
          <div className="border-border mt-12 overflow-hidden rounded-2xl border">
            <iframe
              title={`Map to ${siteConfig.name}`}
              src={mapSrc}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full sm:h-[420px]"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
