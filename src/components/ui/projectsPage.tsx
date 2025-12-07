import type { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
};

export const UI = {
  Section: ({ children }: ChildrenProps) => (
    <section className="space-y-4">{children}</section>
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
};
