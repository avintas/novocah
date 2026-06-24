import Image from "next/image";

import { Container, Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { whyChoose, homeImages } from "@/lib/home";
import { mediaUrl } from "@/lib/media";

export function WhyChoose() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
              Why Choose California Healthcare Management Group?
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-7">
              We understand that choosing the right home health provider is one
              of the most important decisions you can make for yourself or a
              loved one. Here&apos;s why families and patients trust us.
            </p>

            <ul className="mt-8 space-y-6">
              {whyChoose.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <span className="bg-brand-muted text-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon icon={feature.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-foreground font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm leading-6">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-border relative aspect-[4/5] w-full overflow-hidden rounded-2xl border lg:sticky lg:top-24">
            <Image
              src={mediaUrl(homeImages.whyChoose)}
              alt="The California Healthcare Management Group care team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
