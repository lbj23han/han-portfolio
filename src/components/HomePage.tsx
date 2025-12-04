import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";

export function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <CTASection />
    </PageLayout>
  );
}
