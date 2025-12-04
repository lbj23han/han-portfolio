import type { ReactNode } from "react";
import { HOME_LAYOUT } from "@/constants/home";

type Props = {
  children: ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <div className={HOME_LAYOUT.outer}>
      <main className={HOME_LAYOUT.main}>{children}</main>
    </div>
  );
}
