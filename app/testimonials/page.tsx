import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";

import { Container, Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { TestimonialBrowse } from "@/components/testimonials/testimonial-browse";
import { ShareExperience } from "@/components/testimonials/share-experience";
import { featuredReview } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read patient and family reviews of California Healthcare Management Group home health care across Southern California.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Page header */}
      <Section className="bg-brand-muted py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-brand text-sm font-semibold tracking-wide uppercase">
              Testimonials
            </p>
            <h1 className="text-foreground mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Patient Testimonials &amp; Reviews
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              Read what our patients and their families have to say about their
              experience with our home health care services.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured review */}
      <Section className="bg-surface">
        <Container>
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured Review
          </h2>
          <figure className="border-brand/20 bg-brand-muted/50 mt-8 rounded-2xl border p-8 sm:p-10">
            <Icon
              icon={Quote}
              size={36}
              className="text-brand/40"
              aria-hidden
            />
            <div
              className="mt-4 flex gap-1"
              aria-label={`${featuredReview.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  icon={Star}
                  size={20}
                  className={
                    i < featuredReview.rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-border"
                  }
                />
              ))}
            </div>
            <blockquote className="text-foreground mt-5 text-lg leading-8 sm:text-xl">
              &ldquo;{featuredReview.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span
                className="bg-brand text-brand-foreground flex h-14 w-14 items-center justify-center rounded-full text-base font-bold"
                aria-hidden
              >
                {featuredReview.initials}
              </span>
              <div>
                <span className="text-foreground block text-lg font-semibold">
                  {featuredReview.name}
                </span>
                <span className="text-muted-foreground">
                  {featuredReview.role}
                </span>
              </div>
            </figcaption>
          </figure>
        </Container>
      </Section>

      <TestimonialBrowse />

      <ShareExperience />
    </>
  );
}
