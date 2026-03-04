"use client";

import type { ReactNode } from "react";
import { UI } from "@/components/ui/layout";
import { useLocale } from "@/components/layout/LocaleProvider";

type Props = {
  children: ReactNode;
};

function LocaleToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="rounded-full border px-3 py-1 text-xs font-medium opacity-80 hover:opacity-100"
      aria-label="Toggle language"
    >
      {locale === "ko" ? "KOR" : "ENG"}
    </button>
  );
}

export function PageLayout({ children }: Props) {
  return (
    <UI.LayoutOuter>
      <UI.LayoutMain>
        <div className="w-full flex justify-end pb-6">
          <LocaleToggle />
        </div>

        {children}
      </UI.LayoutMain>
    </UI.LayoutOuter>
  );
}
