export type Locale = "ko" | "en";

export type I18nDict<T> = {
  ko: T;
  en: T;
};

export function pick<T>(locale: Locale, dict: I18nDict<T>): T {
  return dict[locale];
}
