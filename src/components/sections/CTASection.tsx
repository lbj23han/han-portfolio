import { UI } from "@/components/ui/home";
import { CTA_TEXT, LINKS } from "@/constants/home";

export function CTASection() {
  return (
    <UI.CTAWrapper>
      <UI.CTAButtonPrimary href={LINKS.github}>
        <UI.CTAIcon />
        {CTA_TEXT.github}
      </UI.CTAButtonPrimary>

      <UI.CTAButtonSecondary href={LINKS.projects}>
        {CTA_TEXT.projects}
      </UI.CTAButtonSecondary>
    </UI.CTAWrapper>
  );
}
