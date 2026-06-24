import { Quote, Star } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { testimonials } from "@/lib/home";

export function Testimonials() {
  return (
    <Section className="bg-brand-muted/40">
      <Container>
        <SectionHeading
          title="What Our Patients Say"
          subtitle="Don't just take our word for it. Here's what families across Southern California are saying about our home health care services."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-1">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border-border bg-surface rounded-2xl border p-8 text-center"
            >
              <Icon
                icon={Quote}
                size={32}
                className="text-brand/30 mx-auto"
                aria-hidden
              />
              <div
                className="mt-4 flex justify-center gap-1"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    icon={Star}
                    size={18}
                    className={
                      i < t.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-border"
                    }
                  />
                ))}
              </div>
              <blockquote className="text-foreground mt-4 text-lg leading-8 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <span className="text-foreground block font-semibold">
                  {t.name}
                </span>
                <span className="text-muted-foreground text-sm">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Join thousands of satisfied families who trust California Healthcare
            Management Group for their home health care needs.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/testimonials" variant="outline">
              Read More Reviews
            </Button>
            <Button href="/contact" variant="primary">
              Get Started Today
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
