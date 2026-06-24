import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { services } from "@/lib/site";
import { mediaUrl } from "@/lib/media";

export function CoreServices() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
            Comprehensive Home Health Care Services Tailored to Your Needs
          </h2>
          <p className="text-muted-foreground text-base leading-7">
            California Healthcare Management Group offers a full spectrum of
            home health care services designed to support your health and
            well-being. Our dedicated team of licensed professionals is
            committed to meeting your unique needs with the highest medical
            standards.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href="/services"
              className="group border-border bg-surface hover:border-brand/50 flex flex-col overflow-hidden rounded-2xl border transition-colors"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={mediaUrl(service.image)}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="bg-surface text-brand ring-border absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-full ring-1">
                  <Icon icon={service.icon} size={20} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-foreground text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mt-2 flex-1 text-sm leading-6">
                  {service.description}
                </p>
                <span className="text-brand mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                  Learn More
                  <Icon
                    icon={ArrowRight}
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
