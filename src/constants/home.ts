import type { I18nDict } from "@/lib/i18n";

export const LINKS = {
  github: "https://github.com/lbj23han",
  projects: "/projects",
  blog: "https://velog.io/@creyon0215/",
  email: "ljhan0215@gmail.com",
  linkedin: "https://www.linkedin.com/in/lbj23han/",
} as const;

export const HOME_TEXT: I18nDict<{
  eyebrow: string;
  title: string;
  meta: string;
  desc: string;
  stackTags: readonly string[];
  recentTitle: string;
  recentDesc: string;
  capabilityCards: {
    title: string;
    desc: string;
  }[];
  selectedTitle: string;
  selectedDesc: string;
  otherTitle: string;
  otherDesc: string;
  privateTitle: string;
  privateDesc: string;
  writingTitle: string;
  writingDesc: string;
  aboutLabel: string;
}> = {
  ko: {
    eyebrow: "Product Builder × AI Automation",
    title: "웹 애플리케이션과 자동화 시스템으로 실제 운영 문제를 해결하는 Han입니다.",
    meta: "서울 기반 · 프론트엔드/풀스택 경계에서 서비스 구조와 운영 흐름을 함께 설계합니다.",
    desc:
      "예쁜 화면만 만드는 사람보다는, 반복되는 운영 문제를 서비스 구조로 바꾸는 개발자로 보이고 싶습니다. " +
      "문제 정의, 정책 설계, 예외 처리, 데이터 흐름, AI 보조 레이어까지 실제로 이어 붙이는 방식으로 프로젝트를 만들고 있습니다.",
    stackTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "AI Automation",
      "Apps in Toss",
      "Mobile-first UX",
    ],
    recentTitle: "최근 초점",
    recentDesc:
      "대표작을 중심으로 운영 구조, 추천 로직, AI 보조 레이어, 미니앱 수익화 경험이 드러나는 포트폴리오 형태로 다시 정리하고 있습니다.",
    capabilityCards: [
      {
        title: "문제 정의",
        desc: "실사용자와 운영 흐름을 먼저 보고, 어떤 마찰을 줄여야 하는지부터 정리합니다.",
      },
      {
        title: "구조 설계",
        desc: "권한, 데이터 경계, 자동화 파이프라인, 예외 케이스를 코드 구조와 함께 설계합니다.",
      },
      {
        title: "AI 활용",
        desc: "AI는 장식이 아니라 입력 보조, 구조화, 추천, 운영 효율화에 쓰는 보조 레이어로 다룹니다.",
      },
    ],
    selectedTitle: "Selected Projects",
    selectedDesc:
      "대표작은 문제 정의, 운영 로직, AI 활용, 수익화, 실제 실행 구조가 드러나도록 더 깊게 정리했습니다.",
    otherTitle: "Other Projects",
    otherDesc: "대표작을 가리지 않도록, 역할과 핵심만 짧게 정리한 작업들입니다.",
    privateTitle: "Private Automation",
    privateDesc:
      "공개 레포는 아니지만, 반복 제작 업무를 재사용 가능한 워크플로우로 바꾼 자동화 시스템도 함께 다루고 있습니다.",
    writingTitle: "Writing & Links",
    writingDesc:
      "구현 과정과 판단 기준은 GitHub와 블로그에 남깁니다. 포트폴리오는 서비스 구조를 빠르게 파악할 수 있게 정리했습니다.",
    aboutLabel: "How I work",
  },
  en: {
    eyebrow: "Product Builder × AI Automation",
    title: "I build web apps and automation systems that solve real operational problems.",
    meta: "Based in Seoul · working across frontend, product structure, and operational systems.",
    desc:
      "I want to be seen less as someone who only ships interfaces and more as someone who turns repeated operational pain into service structure. " +
      "My work connects problem framing, policy design, data flow, edge cases, and AI assistance into something executable.",
    stackTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "AI Automation",
      "Apps in Toss",
      "Mobile-first UX",
    ],
    recentTitle: "Current focus",
    recentDesc:
      "I am restructuring this portfolio around featured projects so that operating logic, recommendation design, AI assistance, and mini-app monetization are easier to read.",
    capabilityCards: [
      {
        title: "Problem framing",
        desc: "I start from user friction and operational pain, then decide what actually needs to be simplified.",
      },
      {
        title: "System design",
        desc: "I design permissions, data boundaries, automation pipelines, and edge cases together with the code structure.",
      },
      {
        title: "AI usage",
        desc: "I treat AI as an assistive layer for input support, structuring, recommendation, and operations efficiency.",
      },
    ],
    selectedTitle: "Selected Projects",
    selectedDesc:
      "These projects are structured to show problem definition, operating logic, AI usage, monetization, and real execution.",
    otherTitle: "Other Projects",
    otherDesc: "Smaller supporting projects, summarized briefly so they do not overshadow the main work.",
    privateTitle: "Private Automation",
    privateDesc:
      "Not public, but still representative of how I turn repeated production work into reusable workflows.",
    writingTitle: "Writing & Links",
    writingDesc:
      "I document implementation and decision-making on GitHub and my blog. This portfolio focuses on service structure and execution.",
    aboutLabel: "How I work",
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
    projects: "Projects",
    linkedin: "LinkedIn",
    emailLabel: "Email",
  },
  en: {
    github: "GitHub",
    blog: "Blog",
    projects: "Projects",
    linkedin: "LinkedIn",
    emailLabel: "Email",
  },
} as const;
