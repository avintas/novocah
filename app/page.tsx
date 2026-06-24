import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <PagePlaceholder
      title={siteConfig.tagline}
      description={siteConfig.description}
    />
  );
}
