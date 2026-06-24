import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { brandAssets, mediaUrl } from "@/lib/media";

type WordmarkProps = {
  size?: "header" | "footer";
  className?: string;
};

export function Wordmark({ size = "header", className }: WordmarkProps) {
  const isHeader = size === "header";

  return (
    <Link
      href="/"
      className={cn("flex shrink-0 items-center gap-3 sm:gap-4", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={mediaUrl(brandAssets.logo.id)}
        alt=""
        width={brandAssets.logo.width}
        height={brandAssets.logo.height}
        className={cn(
          "w-auto",
          isHeader ? "h-12 w-auto sm:h-14" : "h-16 w-auto sm:h-20",
        )}
        priority={isHeader}
      />
      <span
        className={cn(
          "flex flex-col leading-tight tracking-tight",
          isHeader
            ? "text-lg font-bold sm:text-xl lg:text-2xl"
            : "text-base font-bold sm:text-lg",
        )}
      >
        <span className="text-brand">{siteConfig.wordmark.line1}</span>
        <span className="text-navy">{siteConfig.wordmark.line2}</span>
      </span>
    </Link>
  );
}
