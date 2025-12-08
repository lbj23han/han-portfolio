import type { ReactNode } from "react";
import { UI } from "@/components/ui/layout";

type Props = {
  children: ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <UI.LayoutOuter>
      <UI.LayoutMain>{children}</UI.LayoutMain>
    </UI.LayoutOuter>
  );
}
