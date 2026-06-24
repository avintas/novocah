import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Briefcase, DollarSign, MapPin } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/lib/site";
import { mediaUrl } from "@/lib/media";
import {
  applicationSteps,
  careerBenefits,
  careersImages,
  jobOpenings,
} from "@/lib/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join California Healthcare Management Group — compassionate home health careers across the Los Angeles area with growth, support, and competitive pay.",
};

const resumeMailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
  "Resume Submission",
)}&body=${encodeURIComponent(
  "Hello,\n\nI am interested in future opportunities with California Healthcare Management Group. Please find my resume attached.\n\nThank you.",
)}`;

export default function CareersPage() {
  return (
    <>
      {/* Page header */}
      <Section className="bg-brand-muted py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-brand text-sm font-semibold tracking-wide uppercase">
              Careers
            </p>
            <h1 className="text-foreground mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Build a career that makes a difference
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              Join a team of compassionate professionals delivering exceptional
              home health care across Southern California.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why Work With Us */}
      <Section className="bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground mt-4 text-base leading-7">
                We&apos;re committed to creating a supportive work environment
                where our team members can thrive and make a real impact in the
                community.
              </p>
              <div className="mt-8 space-y-6">
                {careerBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <span className="bg-brand-muted text-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                      <Icon icon={benefit.icon} size={22} />
                    </span>
                    <div>
                      <h3 className="text-foreground font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground mt-1 text-sm leading-6">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-border relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
              <Image
                src={mediaUrl(careersImages.team)}
                alt="The California Healthcare Management Group care team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Open Positions */}
      <Section className="bg-surface-muted">
        <Container>
          <SectionHeading
            align="left"
            title="Open Positions"
            subtitle="Explore current opportunities to join our team and make a difference in home health care."
            className="max-w-2xl"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {jobOpenings.map((job) => (
              <article
                key={job.slug}
                className="border-border bg-surface flex flex-col rounded-2xl border p-6"
              >
                <h3 className="text-foreground text-lg font-semibold">
                  {job.title}
                </h3>
                <p className="text-muted-foreground mt-3 flex-1 text-sm leading-6">
                  {job.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="bg-brand-muted text-foreground inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                    <Icon icon={Briefcase} size={14} className="text-brand" />
                    {job.schedule}
                  </li>
                  <li className="bg-brand-muted text-foreground inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                    <Icon icon={MapPin} size={14} className="text-brand" />
                    {job.location}
                  </li>
                  <li className="bg-brand-muted text-foreground inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                    <Icon icon={DollarSign} size={14} className="text-brand" />
                    {job.compensation}
                  </li>
                </ul>
                <Button
                  href={`/contact?position=${job.slug}`}
                  variant="primary"
                  className="mt-6 w-full sm:w-auto"
                >
                  Apply Now
                  <Icon icon={ArrowRight} size={16} />
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* How to Apply */}
      <Section className="bg-surface">
        <Container>
          <SectionHeading
            title="How to Apply"
            subtitle="Follow these simple steps to join our team and start making a difference in people's lives."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applicationSteps.map((step) => (
              <div
                key={step.step}
                className="border-border bg-surface-muted/60 relative flex flex-col rounded-2xl border p-6 text-center"
              >
                <span className="bg-brand text-brand-foreground absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full text-xs font-bold">
                  {step.step}
                </span>
                <span className="bg-brand text-brand-foreground mx-auto flex h-11 w-11 items-center justify-center rounded-xl">
                  <Icon icon={step.icon} size={22} />
                </span>
                <h3 className="text-foreground mt-4 font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-6">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Don't See the Right Position? */}
      <Section className="bg-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-brand-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
              Don&apos;t See the Right Position?
            </h2>
            <p className="text-brand-foreground/90 mt-4 text-base leading-7">
              We&apos;re always looking for talented individuals to join our
              team. Send us your resume and we&apos;ll keep you in mind for
              future opportunities.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="white" size="lg">
                Contact Us
              </Button>
              <a
                href={resumeMailto}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Send Resume
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
