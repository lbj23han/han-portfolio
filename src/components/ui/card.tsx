import type { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
};

export const UI = {
  Card: ({ children }: ChildrenProps) => (
    <article
      className="
        border border-zinc-200 dark:border-zinc-800 
        rounded-xl p-4 
        bg-white dark:bg-zinc-900/60
      "
    >
      {children}
    </article>
  ),

  CardHeader: ({ children }: ChildrenProps) => (
    <div className="flex items-center justify-between mb-1">{children}</div>
  ),

  CardTitle: ({ children }: ChildrenProps) => (
    <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
      {children}
    </h2>
  ),

  CardBadge: ({ children }: ChildrenProps) => (
    <span
      className="
        text-[11px] px-2 py-0.5 rounded-full 
        bg-zinc-100 dark:bg-zinc-800 
        text-zinc-500 dark:text-zinc-300
      "
    >
      {children}
    </span>
  ),

  CardDescription: ({ children }: ChildrenProps) => (
    <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">{children}</p>
  ),

  CardSubtext: ({ children }: ChildrenProps) => (
    <p className="text-xs text-zinc-500 dark:text-zinc-400">{children}</p>
  ),
};
