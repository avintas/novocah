import Image from "next/image";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { services, siteConfig } from "@/lib/site";
import { mediaUrl } from "@/lib/media";
import { cn } from "@/lib/utils";

export function ServiceSections() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
            Comprehensive Home Health Care Services
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-7">
            California Healthcare Management Group offers a full spectrum of
            home health care services designed to support your health and
            well-being. Our dedicated team of licensed professionals is
            committed to meeting your unique needs with the highest medical
            standards.
          </p>
        </div>

        <div className="mt-14 space-y-16 lg:space-y-20">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-28 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
              >
                <div
                  className={cn(
                    "border-border relative aspect-[4/3] overflow-hidden rounded-2xl border",
                    reversed && "lg:order-2",
                  )}
                >
                  <Image
                    src={mediaUrl(service.image)}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="bg-brand text-brand-foreground absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon icon={service.icon} size={24} />
                  </span>
                </div>

                <div className={cn(reversed && "lg:order-1")}>
                  <h3 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-brand mt-3 text-base font-medium">
                    {service.blurb}
                  </p>
                  <p className="text-muted-foreground mt-4 text-base leading-7">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button href="/contact" variant="primary">
                      Request Care
                    </Button>
                    <Button
                      href={siteConfig.contact.phoneHref}
                      variant="outline"
                    >
                      Call {siteConfig.contact.phone}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
