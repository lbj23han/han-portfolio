"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
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
      className="rounded-full border border-zinc-300 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-[0.16em] text-zinc-700 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
      aria-label="Toggle language"
    >
      {locale === "ko" ? "KOR" : "ENG"}
    </button>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-zinc-950 text-white"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
      }`}
    >
      {children}
    </Link>
  );
}

export function PageLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20 mb-12 flex items-center justify-between rounded-2xl border border-zinc-200 bg-white/92 px-4 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="rounded-xl bg-zinc-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Han
            </span>
            <nav className="flex items-center gap-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
            </nav>
          </div>

          <LocaleToggle />
        </header>

        <main className="flex-1 space-y-20 pb-16">{children}</main>
      </div>
    </div>
  );
}
