import { HOME_TYPO, HOME_TEXT } from "@/constants/home";

export function HeroSection() {
  return (
    <section className={HOME_TYPO.heroWrapper}>
      <h1 className={HOME_TYPO.title}>{HOME_TEXT.title}</h1>

      <p className={HOME_TYPO.desc}>{HOME_TEXT.desc}</p>

      <p className={HOME_TYPO.sub}>
        <strong>{HOME_TEXT.sub}</strong>
      </p>
    </section>
  );
}
