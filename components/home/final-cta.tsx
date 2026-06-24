"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, Mail, Phone } from "lucide-react";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ConsultationDialog } from "@/components/consultation/consultation-form";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const trustStats = [
  { value: "24/7", label: "Emergency Support" },
  { value: "100%", label: "Licensed Professionals" },
  { value: "High Quality", label: "Rating" },
];

export function FinalCta() {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (!dialogOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [dialogOpen]);

  useEffect(() => {
    if (!dialogOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setDialogOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [dialogOpen]);

  return (
    <>
      <Section className="bg-navy text-navy-foreground">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to Get Started with Home Health Care?
            </h2>
            <p className="text-navy-muted mt-4">
              Don&apos;t wait to get the care you or your loved one deserves.
              Our team is ready to help you navigate the home health care
              process and provide the highest quality services.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                <Icon icon={Phone} size={22} />
              </span>
              <h3 className="mt-4 font-semibold">Call Us Today</h3>
              <p className="text-navy-muted mt-1 text-sm">
                Speak with our care coordinators
              </p>
              <span className="mt-3 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
                {siteConfig.contact.phone}
              </span>
            </a>

            <a
              href={siteConfig.contact.emailHref}
              className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                <Icon icon={Mail} size={22} />
              </span>
              <h3 className="mt-4 font-semibold">Email Us</h3>
              <p className="text-navy-muted mt-1 text-sm">
                Send us a message anytime
              </p>
              <span className="mt-3 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
                {siteConfig.contact.email}
              </span>
            </a>

            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                <Icon icon={CalendarCheck} size={22} />
              </span>
              <h3 className="mt-4 font-semibold">Schedule Consultation</h3>
              <p className="text-navy-muted mt-1 text-sm">
                Free in-home assessment
              </p>
              <span className="mt-3 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
                Book Now
              </span>
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-8 text-center">
            <h3 className="text-xl font-semibold">
              Free Consultation &amp; Assessment
            </h3>
            <p className="text-navy-muted mx-auto mt-2 max-w-2xl text-sm">
              Take the first step towards better health care at home. Our
              experienced team will conduct a comprehensive assessment and
              create a personalized care plan tailored to your specific needs.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setDialogOpen(true)}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                  "text-brand bg-white hover:bg-white/90 focus-visible:ring-white",
                )}
              >
                Get Free Consultation
              </button>
              <Button href="/services" variant="outlineOnDark">
                View Our Services
              </Button>
            </div>
            <div className="mt-8 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-navy-muted mt-1 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-navy-muted text-sm">
              Serving {siteConfig.serviceAreas.join(", ")} Counties
            </p>
            <p className="text-navy-muted mt-1 text-xs">
              Medicare, Medicaid, and most private insurance accepted.
            </p>
          </div>
        </Container>
      </Section>

      <ConsultationDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}
