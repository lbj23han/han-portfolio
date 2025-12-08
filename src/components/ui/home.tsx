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
    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
      {children}
    </h1>
  ),

  HeroDesc: ({ children }: ChildrenProps) => (
    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  ),

  HeroSub: ({ children }: ChildrenProps) => (
    <p className="max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
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
