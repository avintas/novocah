import Image from "next/image";
import { MapPin } from "lucide-react";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/lib/site";
import { homeImages } from "@/lib/home";
import { mediaUrl } from "@/lib/media";

export function Hero() {
  return (
    <Section className="bg-surface pt-12 pb-0 sm:pt-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="text-muted-foreground mt-5 max-w-xl text-lg leading-8">
              {siteConfig.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/services" variant="primary" size="lg">
                View Our Services
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get Free Consultation
              </Button>
            </div>
          </div>

          <div className="border-border bg-brand-muted/60 rounded-2xl border p-6">
            <h2 className="text-brand text-sm font-semibold tracking-wide uppercase">
              Areas We Serve
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {siteConfig.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="text-foreground flex items-center gap-2 text-sm font-medium"
                >
                  <Icon icon={MapPin} size={16} className="text-brand" />
                  {area} County
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-border relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border sm:aspect-[16/7]">
          <Image
            src={mediaUrl(homeImages.hero)}
            alt="A California Healthcare Management Group caregiver assisting an elderly patient at home"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </Section>
  );
}
