"use client";

import { useEffect, useState } from "react";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FeedbackDialog } from "@/components/testimonials/feedback-form";
import { siteConfig } from "@/lib/site";

export function ShareExperience() {
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
      <Section className="bg-brand">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-brand-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
              Share Your Experience
            </h2>
            <p className="text-brand-foreground/90 mt-4 text-base leading-7">
              We value your feedback. Drop us a note or give us a call — we read
              every message and publish selected stories here after review.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setDialogOpen(true)}
                className="text-brand inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold transition-colors hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Drop Us a Note
              </button>
              <Button
                href={siteConfig.contact.phoneHref}
                variant="outlineOnDark"
                size="lg"
              >
                Call Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <FeedbackDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
