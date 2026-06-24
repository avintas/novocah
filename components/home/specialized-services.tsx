import Image from "next/image";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { specializedServices } from "@/lib/home";
import { mediaUrl } from "@/lib/media";
import { cn } from "@/lib/utils";

export function SpecializedServices({ className }: { className?: string }) {
  return (
    <Section className={cn("bg-surface", className)}>
      <Container>
        <SectionHeading
          title="Additional Specialized Services"
          subtitle="Beyond our core services, we offer specialized care solutions to meet diverse healthcare needs."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {specializedServices.map((item) => (
            <div
              key={item.title}
              className="border-border bg-surface hover:border-brand/50 flex flex-col items-center gap-3 rounded-xl border p-6 text-center transition-colors"
            >
              <div className="relative h-12 w-12">
                <Image
                  src={mediaUrl(item.image)}
                  alt={item.title}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="text-foreground text-sm font-medium">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
