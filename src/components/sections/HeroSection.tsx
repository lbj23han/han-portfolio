import { UI } from "@/components/ui/home";
import { HOME_TEXT } from "@/constants/home";

export function HeroSection() {
  return (
    <UI.HeroSection>
      <UI.HeroTitle>{HOME_TEXT.title}</UI.HeroTitle>

      <UI.HeroDesc>{HOME_TEXT.desc}</UI.HeroDesc>

      <UI.HeroSub>
        <strong>{HOME_TEXT.sub}</strong>
      </UI.HeroSub>
    </UI.HeroSection>
  );
}
