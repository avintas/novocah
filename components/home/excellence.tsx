import Image from "next/image";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { excellenceCards, impactStats } from "@/lib/home";
import { mediaUrl } from "@/lib/media";

export function Excellence() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <SectionHeading
          title="Excellence in Home Health Care"
          subtitle="Our commitment to quality, safety, and patient satisfaction has earned us recognition as one of the leading home health care agencies in Southern California."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {excellenceCards.map((card) => (
            <div
              key={card.title}
              className="border-border bg-surface flex flex-col items-center rounded-2xl border p-6 text-center"
            >
              {card.image ? (
                <div className="relative h-16 w-16">
                  <Image
                    src={mediaUrl(card.image)}
                    alt={card.title}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="bg-brand-muted text-brand flex h-16 w-16 items-center justify-center rounded-full">
                  <Icon icon={card.icon} size={30} />
                </span>
              )}
              <h3 className="text-foreground mt-4 font-semibold">
                {card.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-6">
                {card.description}
              </p>
              <span className="bg-brand-muted text-brand mt-3 rounded-full px-3 py-1 text-xs font-semibold">
                {card.meta}
              </span>
            </div>
          ))}
        </div>

        <div className="border-border bg-surface mt-8 rounded-2xl border p-8">
          <div className="text-center">
            <h3 className="text-foreground text-xl font-semibold">
              Our Impact in Numbers
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Delivering exceptional care across Southern California.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-brand text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mt-1 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
