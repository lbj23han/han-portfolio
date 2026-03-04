import type { I18nDict } from "@/lib/i18n";

export const PROJECTS_PAGE_COPY: I18nDict<{
  title: string;
  description: string;
  backToHome: string;
}> = {
  ko: {
    title: "Projects",
    description:
      "실제 문제를 해결하기 위해 만들었던 프로젝트들과 현재 진행 중인 작업들입니다.",
    backToHome: "← 홈",
  },
  en: {
    title: "Projects",
    description:
      "Projects I've built to solve real problems—and what I'm working on now.",
    backToHome: "← Home",
  },
} as const;
