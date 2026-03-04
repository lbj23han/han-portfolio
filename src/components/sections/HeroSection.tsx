"use client";

import { UI } from "@/components/ui/home";
import { HOME_TEXT } from "@/constants/home";
import { useLocale } from "@/components/layout/LocaleProvider";
import { pick } from "@/lib/i18n";

export function HeroSection() {
  const { locale } = useLocale();
  const t = pick(locale, HOME_TEXT);

  return (
    <UI.HeroSection>
      <UI.HeroTitle>{t.title}</UI.HeroTitle>

      <UI.HeroMeta>{t.meta}</UI.HeroMeta>

      <UI.HeroDesc>{t.desc}</UI.HeroDesc>

      <UI.HeroTagRow>
        {t.stackTags.map((tag) => (
          <UI.HeroTagChip key={tag}>{tag}</UI.HeroTagChip>
        ))}
      </UI.HeroTagRow>

      <UI.HeroHighlightCard>
        <UI.HeroHighlightTitle>{t.recentTitle}</UI.HeroHighlightTitle>
        <UI.HeroHighlightDesc>{t.recentDesc}</UI.HeroHighlightDesc>
      </UI.HeroHighlightCard>
    </UI.HeroSection>
  );
}
