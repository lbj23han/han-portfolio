export const HOME_LAYOUT = {
  outer:
    "flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black",
  main: "flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start",
};

export const HOME_TYPO = {
  heroWrapper:
    "flex flex-col items-center gap-6 text-center sm:items-start sm:text-left",
  title:
    "max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50",
  desc: "max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400",
  sub: "max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400",
};

export const HOME_CTA = {
  wrapper: "flex flex-col gap-4 text-base font-medium sm:flex-row",
  buttonBase:
    "flex h-12 w-full items-center justify-center px-5 rounded-full transition-colors md:w-[158px]",
  primary:
    "gap-2 bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
  secondary:
    "border border-solid border-black/[.08] hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]",
};

export const LINKS = {
  github: "https://github.com/lbj23han",
  projects: "/projects",
} as const;

export const HOME_TEXT = {
  title: "프론트엔드 개발자 Han 입니다 👋",
  desc: "현재 포트폴리오 웹사이트를 구축하면서, 실제 사용 목적의 프로젝트도 함께 개발 중입니다. Next.js · React · TypeScript 기반으로 UI와 사용자 경험에 집중하고 있습니다.",
  sub: "최근 작업: Cafe Ledger (카페 내부 예치금 관리 웹앱)",
};
