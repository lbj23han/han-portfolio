import { UI } from "@/components/ui/home";
import { HOME_TEXT } from "@/constants/home";

export function HeroSection() {
  return (
    <UI.HeroSection>
      <UI.HeroTitle>{HOME_TEXT.title}</UI.HeroTitle>

      <UI.HeroMeta>{HOME_TEXT.meta}</UI.HeroMeta>

      <UI.HeroDesc>{HOME_TEXT.desc}</UI.HeroDesc>

      <UI.HeroTagRow>
        {HOME_TEXT.stackTags.map((tag) => (
          <UI.HeroTagChip key={tag}>{tag}</UI.HeroTagChip>
        ))}
      </UI.HeroTagRow>

      <UI.HeroHighlightCard>
        <UI.HeroHighlightTitle>{HOME_TEXT.recentTitle}</UI.HeroHighlightTitle>
        <UI.HeroHighlightDesc>{HOME_TEXT.recentDesc}</UI.HeroHighlightDesc>
      </UI.HeroHighlightCard>
    </UI.HeroSection>
  );
}
