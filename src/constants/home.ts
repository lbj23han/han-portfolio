import type { I18nDict } from "@/lib/i18n";

export const LINKS = {
  github: "https://github.com/lbj23han",
  projects: "/projects",
  // blog: "/blog",
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
    title: "프론트엔드 개발자 Han입니다 👋",
    meta: "서울 기반 · 프론트엔드 포지션 지원 중입니다.",
    desc:
      "가족/소규모 비즈니스처럼 실제 운영에 쓰이는 PWA를 설계·구현합니다.\n" +
      "Next.js · React · TypeScript 기반으로 모바일 우선 UX와 인증/권한(RLS)에 맞춘 안정적인 데이터 흐름을 설계하고,\n" +
      "복잡한 입력을 ‘미리보기 → 확인’ 플로우로 안전하게 단순화하는 제품 경험을 만듭니다.",
    stackTags: ["Next.js", "React", "TypeScript", "PWA"],
    recentTitle: "최근 작업 · nescafe-ledger",
    recentDesc:
      "가족 운영 카페에서 실제 사용하는 예치금/미수금/예약 장부 PWA에\n" +
      "AI Helper(prefill type)를 도입해 예약 메시지를 구조화된 폼 데이터로 변환하고 있습니다.",
  },
  en: {
    title: "I'm Han, a Frontend Engineer 👋",
    meta: "Based in Seoul · Open to frontend roles.",
    desc:
      "I design and build PWAs used in real operations—like family-run and small businesses.\n" +
      "With Next.js · React · TypeScript, I focus on mobile-first UX and reliable data flows aligned with auth/permissions (RLS),\n" +
      "and turn complex inputs into a safe “Preview → Confirm” product experience.",
    stackTags: ["Next.js", "React", "TypeScript", "PWA"],
    recentTitle: "Recent work · nescafe-ledger",
    recentDesc:
      "For a real café deposit/receivables/reservation ledger PWA,\n" +
      "I'm adding an AI Helper (prefill type) that converts natural-language reservation messages into structured form data.",
  },
} as const;

export const CTA_TEXT: I18nDict<{
  github: string;
  projects: string;
}> = {
  ko: {
    github: "GitHub",
    projects: "프로젝트 보기",
  },
  en: {
    github: "GitHub",
    projects: "View Projects",
  },
} as const;
