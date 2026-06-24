"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { mainNav, siteConfig } from "@/lib/site";
import { brandAssets, mediaUrl } from "@/lib/media";
import { Icon } from "@/components/ui/icon";

function Wordmark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={mediaUrl(brandAssets.logo.id)}
        alt={`${siteConfig.name} logo`}
        width={brandAssets.logo.width}
        height={brandAssets.logo.height}
        className="h-14 w-auto"
        priority
      />
      <span className="flex flex-col leading-tight">
        <span className="text-brand text-base font-semibold tracking-tight sm:text-lg">
          {siteConfig.wordmark.line1}
        </span>
        <span className="text-foreground text-base font-semibold tracking-tight sm:text-lg">
          {siteConfig.wordmark.line2}
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-border bg-surface/95 supports-[backdrop-filter]:bg-surface/80 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-brand-muted text-brand"
                  : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="text-foreground hover:text-brand flex items-center gap-2 text-sm font-semibold transition-colors"
          >
            <Icon icon={Phone} size={16} className="text-brand" />
            {siteConfig.contact.phone}
          </a>
          <Link
            href="/contact"
            className="bg-accent text-accent-foreground inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors hover:opacity-90"
          >
            Request Care
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground hover:bg-surface-muted inline-flex items-center justify-center rounded-md p-2 transition-colors lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <Icon icon={open ? X : Menu} size={24} />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-border bg-surface border-t lg:hidden"
        >
          <nav
            className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-brand-muted text-brand"
                    : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-border mt-2 flex flex-col gap-3 border-t pt-4">
              <a
                href={siteConfig.contact.phoneHref}
                className="text-foreground flex items-center gap-2 text-base font-semibold"
              >
                <Icon icon={Phone} size={18} className="text-brand" />
                {siteConfig.contact.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-accent text-accent-foreground inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-semibold transition-colors hover:opacity-90"
              >
                Request Care
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
