import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const UI = {
  LayoutOuter: ({ children }: Props) => (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {children}
    </div>
  ),

  LayoutMain: ({ children }: Props) => (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      {children}
    </main>
  ),
};
