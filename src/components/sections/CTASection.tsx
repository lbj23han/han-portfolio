import Image from "next/image";
import { HOME_CTA, LINKS } from "@/constants/home";

export function CTASection() {
  return (
    <div className={HOME_CTA.wrapper}>
      <a
        className={`${HOME_CTA.buttonBase} ${HOME_CTA.primary}`}
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="dark:invert"
          src="/github-mark.svg"
          alt="GitHub"
          width={16}
          height={16}
        />
        GitHub
      </a>

      <a
        className={`${HOME_CTA.buttonBase} ${HOME_CTA.secondary}`}
        href={LINKS.projects}
      >
        View Projects
      </a>
    </div>
  );
}
