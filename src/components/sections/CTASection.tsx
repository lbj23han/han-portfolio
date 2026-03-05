"use client";

import { UI } from "@/components/ui/home";
import { CTA_TEXT, LINKS } from "@/constants/home";
import { useLocale } from "@/components/layout/LocaleProvider";
import { pick } from "@/lib/i18n";

export function CTASection() {
  const { locale } = useLocale();
  const cta = pick(locale, CTA_TEXT);

  return (
    <UI.CTAStack>
      <UI.CTAWrapper>
        <UI.CTAButtonPrimary href={LINKS.projects} external>
          {cta.projects}
        </UI.CTAButtonPrimary>

        <UI.CTAButtonPrimary href={LINKS.github} external>
          <UI.CTAIcon />
          {cta.github}
        </UI.CTAButtonPrimary>

        <UI.CTAButtonPrimary href={LINKS.blog} external>
          {cta.blog}
        </UI.CTAButtonPrimary>
      </UI.CTAWrapper>

      <UI.CTAContact>
        <UI.CTAContactLabel>{cta.emailLabel}</UI.CTAContactLabel>
        <UI.CTAContactLink href={`mailto:${LINKS.email}`}>
          {LINKS.email}
        </UI.CTAContactLink>
      </UI.CTAContact>
    </UI.CTAStack>
  );
}
