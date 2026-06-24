import { CalendarCheck, Mail, Phone } from "lucide-react";

import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/lib/site";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us Today",
    subtitle: "Speak with our care coordinators",
    action: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "Send us a message anytime",
    action: siteConfig.contact.email,
    href: siteConfig.contact.emailHref,
  },
  {
    icon: CalendarCheck,
    title: "Schedule Consultation",
    subtitle: "Free in-home assessment",
    action: "Book Now",
    href: "/contact",
  },
];

const trustStats = [
  { value: "24/7", label: "Emergency Support" },
  { value: "100%", label: "Licensed Professionals" },
  { value: "High Quality", label: "Rating" },
];

export function FinalCta() {
  return (
    <Section className="bg-navy text-navy-foreground">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to Get Started with Home Health Care?
          </h2>
          <p className="text-navy-muted mt-4">
            Don&apos;t wait to get the care you or your loved one deserves. Our
            team is ready to help you navigate the home health care process and
            provide the highest quality services.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                <Icon icon={card.icon} size={22} />
              </span>
              <h3 className="mt-4 font-semibold">{card.title}</h3>
              <p className="text-navy-muted mt-1 text-sm">{card.subtitle}</p>
              <span className="mt-3 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
                {card.action}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-8 text-center">
          <h3 className="text-xl font-semibold">
            Free Consultation &amp; Assessment
          </h3>
          <p className="text-navy-muted mx-auto mt-2 max-w-2xl text-sm">
            Take the first step towards better health care at home. Our
            experienced team will conduct a comprehensive assessment and create
            a personalized care plan tailored to your specific needs.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="white">
              Get Free Consultation
            </Button>
            <Button href="/services" variant="outlineOnDark">
              View Our Services
            </Button>
          </div>
          <div className="mt-8 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-navy-muted mt-1 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-navy-muted text-sm">
            Serving {siteConfig.serviceAreas.join(", ")} Counties
          </p>
          <p className="text-navy-muted mt-1 text-xs">
            Medicare, Medicaid, and most private insurance accepted.
          </p>
        </div>
      </Container>
    </Section>
  );
}
