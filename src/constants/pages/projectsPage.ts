import type { I18nDict } from "@/lib/i18n";

export const PROJECTS_PAGE_COPY: I18nDict<{
  eyebrow: string;
  title: string;
  description: string;
  featuredTitle: string;
  featuredDesc: string;
  otherTitle: string;
  otherDesc: string;
  privateTitle: string;
  privateDesc: string;
  backToHome: string;
}> = {
  ko: {
    eyebrow: "Portfolio",
    title: "문제 정의와 운영 구조가 보이도록 정리한 프로젝트들",
    description:
      "대표작은 단순 기능 소개가 아니라, 왜 만들었는지와 어떻게 운영 가능한 구조로 연결했는지까지 읽히게 구성했습니다.",
    featuredTitle: "대표작",
    featuredDesc:
      "UpDown Brief, Public Policy Finder, Cafe Ledger, 헬린이맵 + 몸매체크를 중심으로 문제 정의, 정책/운영 로직, AI 활용 방식을 정리했습니다.",
    otherTitle: "기타 프로젝트",
    otherDesc:
      "대표작을 보조하는 성격의 프로젝트들입니다. 역할과 핵심만 짧게 정리했습니다.",
    privateTitle: "Private Automation",
    privateDesc:
      "공개할 수 없는 프로젝트이지만, 반복 작업을 자동화 가능한 워크플로우로 만든 경험도 함께 소개합니다.",
    backToHome: "← 홈",
  },
  en: {
    eyebrow: "Portfolio",
    title: "Projects organized around problem framing and operating structure",
    description:
      "The featured work is presented not just as features, but as service structure: why it exists, how it operates, and where AI fits.",
    featuredTitle: "Featured projects",
    featuredDesc:
      "UpDown Brief, Public Policy Finder, Cafe Ledger, and Hellinimap + MomeCheck are structured around problem, policy/operations, monetization, and AI usage.",
    otherTitle: "Other projects",
    otherDesc:
      "Supporting projects summarized briefly so the main work stays legible.",
    privateTitle: "Private automation",
    privateDesc:
      "A short section for non-public systems where the main point is workflow automation and recovery.",
    backToHome: "← Home",
  },
} as const;
