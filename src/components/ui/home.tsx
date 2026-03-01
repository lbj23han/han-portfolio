import type { ReactNode } from "react";
import Image from "next/image";

type ChildrenProps = {
  children: ReactNode;
};

export const UI = {
  // Layout
  LayoutOuter: ({ children }: ChildrenProps) => (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {children}
    </div>
  ),

  LayoutMain: ({ children }: ChildrenProps) => (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      {children}
    </main>
  ),

  // Hero
  HeroSection: ({ children }: ChildrenProps) => (
    <section className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      {children}
    </section>
  ),

  HeroTitle: ({ children }: ChildrenProps) => (
    <h1
      className="
      max-w-[22ch]
      text-3xl font-semibold leading-tight tracking-tight
      text-black dark:text-zinc-50
      break-keep whitespace-pretty
    "
    >
      {children}
    </h1>
  ),

  HeroMeta: ({ children }: ChildrenProps) => (
    <p
      className="
      text-sm font-medium
      text-zinc-500 dark:text-zinc-400
      break-keep whitespace-pretty
    "
    >
      {children}
    </p>
  ),

  HeroDesc: ({ children }: ChildrenProps) => (
    <p
      className="
      max-w-[60ch]
      text-lg leading-relaxed
      text-zinc-600 dark:text-zinc-400
      break-keep whitespace-pretty
    "
    >
      {children}
    </p>
  ),

  HeroTagRow: ({ children }: ChildrenProps) => (
    <div className="flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
      {children}
    </div>
  ),

  HeroTagChip: ({ children }: ChildrenProps) => (
    <span className="rounded-full border border-zinc-800/10 bg-zinc-900/5 px-3 py-1 dark:border-zinc-50/10 dark:bg-zinc-50/5">
      {children}
    </span>
  ),

  HeroHighlightCard: ({ children }: ChildrenProps) => (
    <div className="w-full max-w-[60ch] rounded-2xl border border-zinc-800/10 bg-zinc-900/[0.02] p-4 text-left shadow-sm dark:border-zinc-50/10 dark:bg-zinc-50/[0.03]">
      {children}
    </div>
  ),

  HeroHighlightTitle: ({ children }: ChildrenProps) => (
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
      {children}
    </p>
  ),

  HeroHighlightDesc: ({ children }: ChildrenProps) => (
    <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 break-keep whitespace-pretty">
      {children}
    </p>
  ),

  HeroSub: ({ children }: ChildrenProps) => (
    <p
      className="
      max-w-[60ch]
      text-base leading-relaxed
      text-zinc-500 dark:text-zinc-400
      break-keep whitespace-pretty
    "
    >
      {children}
    </p>
  ),

  // CTA
  CTAWrapper: ({ children }: ChildrenProps) => (
    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
      {children}
    </div>
  ),

  CTAButtonBase: ({ children }: ChildrenProps) => (
    <span className="flex h-12 w-full items-center justify-center px-5 rounded-full transition-colors md:w-[158px]">
      {children}
    </span>
  ),

  CTAButtonPrimary: ({ children, href }: ChildrenProps & { href: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-full items-center justify-center px-5 rounded-full transition-colors md:w-[158px]
                 gap-2 bg-foreground text-background hover:bg-[#383838] 
                 dark:hover:bg-[#ccc]"
    >
      {children}
    </a>
  ),

  CTAButtonSecondary: ({
    children,
    href,
  }: ChildrenProps & { href: string }) => (
    <a
      href={href}
      className="flex h-12 w-full items-center justify-center px-5 rounded-full transition-colors md:w-[158px]
                 border border-solid border-black/[.08] hover:border-transparent 
                 hover:bg-black/[.04] dark:border-white/[.145] 
                 dark:hover:bg-[#1a1a1a]"
    >
      {children}
    </a>
  ),

  CTAIcon: () => (
    <Image
      className="dark:invert"
      src="/github-mark.svg"
      alt="GitHub"
      width={16}
      height={16}
    />
  ),
};
