import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Printer } from "lucide-react";

import { mainNav, services, siteConfig } from "@/lib/site";
import { brandAssets, mediaUrl } from "@/lib/media";
import { Icon } from "@/components/ui/icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-surface-muted border-t">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="bg-surface ring-border inline-flex rounded-lg p-3 ring-1">
              <Image
                src={mediaUrl(brandAssets.logo.id)}
                alt={`${siteConfig.name} logo`}
                width={brandAssets.logo.width}
                height={brandAssets.logo.height}
                className="h-28 w-auto"
                priority
              />
            </div>
            <p className="text-muted-foreground text-sm leading-6">
              {siteConfig.description}
            </p>
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-medium">Serving:</span>{" "}
              {siteConfig.serviceAreas.join(", ")} Counties
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-brand text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-brand text-sm transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
              Contact
            </h3>
            <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <Icon icon={MapPin} size={18} className="text-brand mt-0.5" />
                <span>
                  {siteConfig.contact.addressLine}
                  <br />
                  {siteConfig.contact.cityLine}
                </span>
              </li>
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-brand flex items-center gap-3 transition-colors"
                >
                  <Icon icon={Phone} size={18} className="text-brand" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon icon={Printer} size={18} className="text-brand" />
                Fax: {siteConfig.contact.fax}
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailHref}
                  className="hover:text-brand flex items-center gap-3 transition-colors"
                >
                  <Icon icon={Mail} size={18} className="text-brand" />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border mt-12 flex flex-col items-start gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="border-border bg-surface flex items-center gap-3 rounded-lg border px-4 py-3">
            <Image
              src={mediaUrl(brandAssets.jointCommissionSeal.id)}
              alt={`${siteConfig.certification.label} ${siteConfig.certification.detail}`}
              width={brandAssets.jointCommissionSeal.width}
              height={brandAssets.jointCommissionSeal.height}
              className="h-12 w-12 shrink-0"
            />
            <div className="leading-tight">
              <p className="text-foreground text-sm font-semibold">
                {siteConfig.certification.label}
              </p>
              <p className="text-muted-foreground text-xs">
                {siteConfig.certification.detail} &middot;{" "}
                {siteConfig.certification.status}
              </p>
            </div>
          </div>
          <p className="text-muted-foreground text-xs">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
