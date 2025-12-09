import type { ReactNode } from "react";
import Link from "next/link";

type ChildrenProps = {
  children: ReactNode;
};

export const UI = {
  Section: ({ children }: ChildrenProps) => (
    <section className="space-y-4 p-10">{children}</section>
  ),

  Header: ({ children }: ChildrenProps) => (
    <div className="space-y-2">{children}</div>
  ),

  Title: ({ children }: ChildrenProps) => (
    <h1 className="text-2xl font-bold mb-2">{children}</h1>
  ),

  Description: ({ children }: ChildrenProps) => (
    <p className="text-sm text-zinc-500 dark:text-zinc-400">{children}</p>
  ),

  List: ({ children }: ChildrenProps) => (
    <div className="space-y-3">{children}</div>
  ),

  BackButton: ({ href, children }: { href: string; children: ReactNode }) => (
    <Link
      href={href}
      className="
        inline-flex items-center justify-center
        px-3 py-1.5 rounded-md text-xs font-medium
        bg-zinc-200 text-zinc-700 
        hover:bg-zinc-300 
        dark:bg-zinc-800 dark:text-zinc-200 
        dark:hover:bg-zinc-700
        transition-colors
      "
    >
      {children}
    </Link>
  ),

  FooterRight: ({ children }: ChildrenProps) => (
    <div className="w-full flex justify-end">{children}</div>
  ),
};
