"use client";

import { UI } from "@/components/ui/home";
import { CTA_TEXT, LINKS } from "@/constants/home";
import { useLocale } from "@/components/layout/LocaleProvider";
import { pick } from "@/lib/i18n";

export function CTASection() {
  const { locale } = useLocale();
  const cta = pick(locale, CTA_TEXT);

  return (
    <UI.CTAWrapper>
      <UI.CTAButtonPrimary href={LINKS.github}>
        <UI.CTAIcon />
        {cta.github}
      </UI.CTAButtonPrimary>

      <UI.CTAButtonSecondary href={LINKS.projects}>
        {cta.projects}
      </UI.CTAButtonSecondary>
    </UI.CTAWrapper>
  );
}
