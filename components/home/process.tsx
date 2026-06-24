import { CheckCircle2 } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { processSteps } from "@/lib/home";

export function Process() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          title="How Our Home Health Care Process Works"
          subtitle="From initial contact to ongoing care, we make the process simple and transparent. Here's how we deliver exceptional home health care services."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="border-border bg-surface relative flex flex-col rounded-2xl border p-6"
            >
              <span className="bg-brand text-brand-foreground absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold">
                {step.step}
              </span>
              <span className="bg-brand-muted text-brand flex h-11 w-11 items-center justify-center rounded-xl">
                <Icon icon={step.icon} size={22} />
              </span>
              <h3 className="text-foreground mt-4 font-semibold">
                {step.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-6">
                {step.description}
              </p>
              <ul className="mt-4 space-y-2">
                {step.points.map((point) => (
                  <li
                    key={point}
                    className="text-muted-foreground flex items-center gap-2 text-sm"
                  >
                    <Icon
                      icon={CheckCircle2}
                      size={16}
                      className="text-accent shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
