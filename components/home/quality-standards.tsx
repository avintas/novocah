import { CheckCircle2 } from "lucide-react";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { qualityHighlights, qualityStandards } from "@/lib/home";

export function QualityStandards() {
  return (
    <Section className="bg-surface-muted pt-0">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
              Quality Standards &amp; Certifications
            </h2>
            <p className="text-muted-foreground mt-3 text-base leading-7">
              We maintain the highest standards of care through rigorous quality
              assurance processes, continuous training, and adherence to
              industry best practices.
            </p>
            <ul className="mt-6 space-y-3">
              {qualityStandards.map((item) => (
                <li
                  key={item}
                  className="text-foreground flex items-start gap-3 text-sm"
                >
                  <Icon
                    icon={CheckCircle2}
                    size={18}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-muted rounded-2xl p-8">
            <h3 className="text-foreground text-lg font-semibold">
              Why Choose California Healthcare Management Group?
            </h3>
            <ul className="mt-5 space-y-3">
              {qualityHighlights.map((item) => (
                <li
                  key={item}
                  className="text-foreground flex items-start gap-3 text-sm"
                >
                  <Icon
                    icon={CheckCircle2}
                    size={18}
                    className="text-brand mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/about" variant="primary">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
