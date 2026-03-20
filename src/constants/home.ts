import type { I18nDict } from "@/lib/i18n";

export const LINKS = {
  github: "https://github.com/lbj23han",
  projects: "/projects",
  blog: "https://velog.io/@creyon0215/",
  email: "ljhan0215@gmail.com",
  linkedin: "https://www.linkedin.com/in/lbj23han/",
} as const;

export const HOME_TEXT: I18nDict<{
  title: string;
  meta: string;
  desc: string;
  stackTags: readonly string[];
  recentTitle: string;
  recentDesc: string;
}> = {
  ko: {
    title: "운영 문제를 서비스 구조로 풀어내는 Han입니다 👋",
    meta: "서울 기반 · 서비스 운영/개발 관련 포지션에 지원 중입니다.",
    desc:
      "실제 운영 환경에서 반복적으로 발생하는 문제를 발견하고,\n" +
      "사용자 흐름과 데이터 구조를 함께 고려해 더 단순하고 안정적인 서비스로 개선하는 데 집중해 왔습니다.\n" +
      "기술 구현 자체보다, 서비스가 실제로 더 잘 작동하도록 만드는 구조 설계에 관심이 많습니다.",
    stackTags: ["Next.js", "React", "TypeScript", "PWA"],
    recentTitle: "최근 작업 · nescafe-ledger",
    recentDesc:
      "가족 운영 카페에서 실제 사용하는 예약·예치금·미수금 관리 PWA를 운영 관점에서 개선하며,\n" +
      "자연어 예약 입력을 구조화된 데이터로 바꾸는 AI 기능과 검증 흐름을 설계했습니다.",
  },
  en: {
    title:
      "I'm Han, turning operational problems into better service structures 👋",
    meta: "Based in Seoul · Open to service operations/development related roles.",
    desc:
      "I focus on identifying recurring problems in real operations and improving them through better user flows and data structures.\n" +
      "More than just building features, I care about designing services that work more clearly, safely, and effectively in practice.",
    stackTags: ["Next.js", "React", "TypeScript", "PWA"],
    recentTitle: "Recent work · nescafe-ledger",
    recentDesc:
      "For a reservation/deposit/receivables PWA used in a real family-run café,\n" +
      "I designed an AI-assisted flow that converts natural-language reservation input into structured data with a verification step.",
  },
} as const;

export const CTA_TEXT: I18nDict<{
  github: string;
  blog: string;
  projects: string;
  linkedin: string;
  emailLabel: string;
}> = {
  ko: {
    github: "GitHub",
    blog: "Blog",
    projects: "My Projects",
    linkedin: "LinkedIn",
    emailLabel: "Email",
  },
  en: {
    github: "GitHub",
    blog: "Blog",
    projects: "My Projects",
    linkedin: "LinkedIn",
    emailLabel: "Email",
  },
} as const;
