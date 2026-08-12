"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/layout/LocaleProvider";
import { LINKS } from "@/constants/home";

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
        <header className="sticky top-0 z-20 mb-12 flex min-w-0 items-center justify-between gap-2 rounded-2xl border border-zinc-200 bg-white/92 px-3 py-3 shadow-sm backdrop-blur sm:px-4">
          <div className="flex min-w-0 items-center gap-1 sm:gap-2">
            <span className="hidden rounded-xl bg-zinc-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:inline-flex">
              Han
            </span>
            <nav className="flex min-w-0 items-center gap-0 sm:gap-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
            </nav>
          </div>

          <LocaleToggle />
        </header>

        <main className="flex-1 space-y-20 pb-16">{children}</main>

        <footer className="mt-8 grid gap-6 border-t border-zinc-200 py-8 text-sm text-zinc-600 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-semibold text-zinc-950">Han Lee</p>
            <a href={`mailto:${LINKS.email}`} className="mt-1 inline-block hover:text-zinc-950">{LINKS.email}</a>
          </div>
          <nav className="flex flex-wrap gap-4" aria-label="External links">
            <a href={LINKS.youtube} target="_blank" rel="noreferrer" className="hover:text-zinc-950">YouTube ↗</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:text-zinc-950">GitHub ↗</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-950">LinkedIn ↗</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
