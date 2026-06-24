"use client";

import { useState } from "react";
import { Quote, Star, LayoutGrid } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import {
  patientTestimonials,
  serviceCategories,
  type Testimonial,
} from "@/lib/testimonials";

function Avatar({ initials }: { initials: string }) {
  return (
    <span
      className="bg-brand text-brand-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold"
      aria-hidden
    >
      {initials}
    </span>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          icon={Star}
          size={16}
          className={
            i < rating ? "fill-amber-400 text-amber-400" : "text-border"
          }
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="border-border bg-surface flex flex-col rounded-2xl border p-6">
      <Icon icon={Quote} size={24} className="text-brand/30" aria-hidden />
      <StarRating rating={testimonial.rating} />
      <blockquote className="text-foreground mt-4 flex-1 text-sm leading-7">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="border-border mt-5 flex items-center gap-3 border-t pt-5">
        <Avatar initials={testimonial.initials} />
        <div>
          <span className="text-foreground block font-semibold">
            {testimonial.name}
          </span>
          <span className="text-muted-foreground text-sm">
            {testimonial.role}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialBrowse() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const filtered =
    activeService === null
      ? patientTestimonials
      : patientTestimonials.filter((t) => t.service === activeService);

  return (
    <>
      <Section className="bg-surface-muted pt-0">
        <Container>
          <SectionHeading
            align="left"
            title="Browse Testimonials by Service"
            subtitle="Find reviews from patients who received specific types of care services."
            className="max-w-2xl"
          />
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <button
              type="button"
              onClick={() => setActiveService(null)}
              className={cn(
                "rounded-2xl border p-4 text-left transition-colors",
                activeService === null
                  ? "border-brand bg-brand-muted"
                  : "border-border bg-surface hover:border-brand/50",
              )}
            >
              <span className="bg-brand text-brand-foreground flex h-10 w-10 items-center justify-center rounded-xl">
                <Icon icon={LayoutGrid} size={20} />
              </span>
              <h3 className="text-foreground mt-3 font-semibold">
                All Reviews
              </h3>
              <p className="text-muted-foreground mt-1 text-sm">
                View every patient story
              </p>
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => setActiveService(category.slug)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-colors",
                  activeService === category.slug
                    ? "border-brand bg-brand-muted"
                    : "border-border bg-surface hover:border-brand/50",
                )}
              >
                <span className="bg-brand text-brand-foreground flex h-10 w-10 items-center justify-center rounded-xl">
                  <Icon icon={category.icon} size={20} />
                </span>
                <h3 className="text-foreground mt-3 font-semibold">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {category.description}
                </p>
              </button>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted pt-0">
        <Container>
          <SectionHeading
            title="What Our Patients Say"
            subtitle="Real stories from real patients about their experience with our home health care services."
          />
          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground mt-10 text-center">
              No reviews in this category yet.{" "}
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="text-brand hover:text-brand-hover font-semibold"
              >
                View all reviews
              </button>
            </p>
          )}
        </Container>
      </Section>
    </>
  );
}
