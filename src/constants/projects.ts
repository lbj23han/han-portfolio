import type { I18nDict, Locale } from "@/lib/i18n";

export type ProjectStatus = "in-progress" | "done" | "legacy";
export type ProjectTier = "featured" | "other" | "private";

export const projectUiText: I18nDict<{
  openProject: string;
  viewMore: string;
  collapse: string;
  openMedia: string;
  openGithub: string;
  openNotes: string;
  featuredLabel: string;
  otherLabel: string;
  privateLabel: string;
  links: string;
  stack: string;
  highlights: string;
  docs: string;
}> = {
  ko: {
    openProject: "Live 보기",
    viewMore: "구조 자세히 보기",
    collapse: "접기",
    openMedia: "미디어 크게 보기",
    openGithub: "GitHub",
    openNotes: "메모",
    featuredLabel: "대표작",
    otherLabel: "기타 프로젝트",
    privateLabel: "비공개 자동화",
    links: "링크",
    stack: "구성",
    highlights: "핵심 포인트",
    docs: "기획 문서형 섹션",
  },
  en: {
    openProject: "Open live",
    viewMore: "View structure",
    collapse: "Collapse",
    openMedia: "Open media",
    openGithub: "GitHub",
    openNotes: "Notes",
    featuredLabel: "Featured",
    otherLabel: "Other",
    privateLabel: "Private automation",
    links: "Links",
    stack: "Stack",
    highlights: "Highlights",
    docs: "Planning sections",
  },
} as const;

export const statusLabel: I18nDict<Record<ProjectStatus, string>> = {
  ko: {
    "in-progress": "진행 중",
    done: "운영/완료",
    legacy: "이전 작업",
  },
  en: {
    "in-progress": "In progress",
    done: "Done",
    legacy: "Legacy",
  },
} as const;

export type ProjectMedia = {
  type: "image" | "gif";
  src: string;
  alt?: string;
};

export type ProjectLink = {
  type: "live" | "github" | "notes";
  label: Record<Locale, string>;
  href: string;
};

export type ProjectDocSection = {
  title: Record<Locale, string>;
  items: Array<Record<Locale, string>>;
};

export type Project = {
  slug: string;
  tier: ProjectTier;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  role: Record<Locale, string>;
  tech: string[];
  status: ProjectStatus;
  year: string;
  links?: ProjectLink[];
  highlights: Array<Record<Locale, string>>;
  sections?: ProjectDocSection[];
  media?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    slug: "public-policy-finder",
    tier: "featured",
    name: {
      ko: "Public Policy Finder",
      en: "Public Policy Finder",
    },
    tagline: {
      ko: "흩어진 정책 정보를, 신청 가능성과 실용성 중심의 추천 경험으로 다시 묶은 서비스",
      en: "A recommendation service that reframes scattered public-policy data around eligibility and practical value.",
    },
    description: {
      ko: "정책 목록을 나열하는 대신, 누가 실제로 신청할 가능성이 높은지와 어떤 혜택이 지금 더 실용적인지를 함께 우선순위화하는 모바일 PWA입니다.",
      en: "Instead of listing benefits, this mobile PWA prioritizes which policies are likely claimable and practically useful for each user.",
    },
    role: {
      ko: "문제 정의, 추천 로직, 데이터 자동화, 설명 가능한 UI 흐름 설계",
      en: "Problem framing, recommendation logic, data automation, and explainable UI design.",
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS v4",
      "GitHub Actions",
      "Claude Haiku",
      "복지로 API",
      "정부24 API",
      "PWA",
    ],
    status: "in-progress",
    year: "2026",
    links: [
      {
        type: "live",
        label: { ko: "서비스 보기", en: "Live" },
        href: "https://findmymoney.vercel.app",
      },
      {
        type: "github",
        label: { ko: "GitHub", en: "GitHub" },
        href: "https://github.com/lbj23han/benefit-finder",
      },
      {
        type: "notes",
        label: { ko: "기획 문서", en: "Planning Doc" },
        href: "https://comet-abacus-ba7.notion.site/3292c7548137807b82d9d06d400bdd17?pvs=74",
      },
    ],
    highlights: [
      {
        ko: "정책 4,500건 이상을 매일 자동 수집하고, 사용자 프로필 맥락에 맞춰 추천 순서를 재계산합니다.",
        en: "Collects 4,500+ policies daily and re-ranks them based on user profile context.",
      },
      {
        ko: "단순 검색이 아니라 `신청 가능성 × 실용성 × 혜택가치` 조합으로 explainable recommendation을 만들었습니다.",
        en: "Uses `eligibility × practicality × value` to build an explainable recommendation flow.",
      },
      {
        ko: "지역/구 단위 하드블록, 특수직군 필터, 신청 가능성 배지 등 오추천을 줄이는 운영 규칙을 함께 설계했습니다.",
        en: "Includes region hard-blocks, niche-target filters, and eligibility badges to reduce false positives.",
      },
    ],
    sections: [
      {
        title: { ko: "Overview", en: "Overview" },
        items: [
          {
            ko: "정부 지원 정책은 많지만, 개인이 실제로 신청 가능한 정책을 빠르게 파악하기 어렵다는 문제에서 출발했습니다.",
            en: "Started from the problem that public support exists, but individuals struggle to identify what they can actually claim.",
          },
          {
            ko: "정책 검색 서비스가 아니라, 신청 우선순위를 정리해주는 탐색 도구로 설계했습니다.",
            en: "It was designed not as a search tool, but as a prioritization layer for policy discovery.",
          },
        ],
      },
      {
        title: { ko: "Problem", en: "Problem" },
        items: [
          {
            ko: "정책 정보가 복지로·정부24·지자체에 흩어져 있어 진입 비용이 높습니다.",
            en: "Policy information is fragmented across national and local sources, making entry costly.",
          },
          {
            ko: "자격 조건이 복잡해서, 리스트를 봐도 내가 실제 대상인지 판단하기 어렵습니다.",
            en: "Eligibility rules are complex enough that a plain list still leaves users unsure if they qualify.",
          },
        ],
      },
      {
        title: { ko: "Target User", en: "Target User" },
        items: [
          {
            ko: "정책을 처음 탐색하는 일반 사용자, 특히 저소득·청년·재직자·자영업자처럼 조건이 자주 갈리는 사용자",
            en: "General users exploring benefits for the first time, especially profiles where eligibility diverges often.",
          },
        ],
      },
      {
        title: { ko: "Core Hypothesis", en: "Core Hypothesis" },
        items: [
          {
            ko: "정책을 많이 보여주는 것보다, 신청 가능성이 높은 순서와 설명 가능한 이유를 함께 보여주는 편이 더 도움이 됩니다.",
            en: "Showing fewer but more likely claimable policies with reasons is more useful than showing everything.",
          },
        ],
      },
      {
        title: { ko: "Key Features", en: "Key Features" },
        items: [
          {
            ko: "프로필 5개 입력만으로 추천 목록, 카테고리 필터, 북마크, 정책 상세를 제공",
            en: "Five profile inputs unlock ranked recommendations, filters, bookmarks, and policy detail views.",
          },
          {
            ko: "시도 + 구/시/군 2단계 지역 필터와 마감/금액 정렬",
            en: "Supports province + district filtering and closing-date/value sorting.",
          },
        ],
      },
      {
        title: { ko: "Policy / Operating Logic", en: "Policy / Operating Logic" },
        items: [
          {
            ko: "추천 점수는 적격성, 실용성, 혜택가치를 조합해 계산합니다.",
            en: "Recommendation scores combine eligibility, practicality, and benefit value.",
          },
          {
            ko: "군인·농업인·특정 지역 대상처럼 하드블록이 필요한 케이스는 보수적으로 걸러 false positive를 줄였습니다.",
            en: "Hard-block rules are used conservatively to reduce false positives for niche groups or regions.",
          },
        ],
      },
      {
        title: { ko: "AI Usage", en: "AI Usage" },
        items: [
          {
            ko: "Claude Haiku는 정책 원문을 읽어 대상 특성, 예상 혜택, 일반 관련도를 보강하는 배치 레이어로만 사용합니다.",
            en: "Claude Haiku is used only as a batch enrichment layer to extract target traits, estimated value, and general relevance.",
          },
          {
            ko: "최종 추천 자체는 규칙과 점수 구조가 담당하고, AI는 설명 가능한 입력 보조 역할을 맡습니다.",
            en: "Final ranking comes from explicit rules and scores; AI stays as an explainable assistive layer.",
          },
        ],
      },
      {
        title: {
          ko: "Edge Cases / Operational Considerations",
          en: "Edge Cases / Operational Considerations",
        },
        items: [
          {
            ko: "API 실패 시에도 기존 정책 데이터를 유지해 서비스가 비지 않도록 했습니다.",
            en: "Keeps the previous data snapshot when APIs fail so the service does not go blank.",
          },
          {
            ko: "지역명이 불완전하거나 조건이 애매한 정책은 과감히 점수를 낮춰 노출을 보수적으로 제어합니다.",
            en: "Policies with ambiguous conditions are deliberately down-ranked to keep recommendations conservative.",
          },
        ],
      },
      {
        title: { ko: "KPI / What to measure", en: "KPI / What to measure" },
        items: [
          {
            ko: "추천 클릭률, 상세 조회 전환률, 북마크율, 프로필별 추천 정확도",
            en: "Recommendation CTR, detail conversion, bookmark rate, and profile-based recommendation accuracy.",
          },
        ],
      },
      {
        title: { ko: "Future Expansion", en: "Future Expansion" },
        items: [
          {
            ko: "향후에는 더 정교한 eligibility simulation, 질문형 보완 입력, 추천 설명 개선으로 확장할 계획입니다.",
            en: "Future work includes richer eligibility simulation, guided follow-up questions, and clearer recommendation explanations.",
          },
        ],
      },
    ],
    media: [
      {
        type: "image",
        src: "/media/benefit-finder/1.jpeg",
        alt: "Public Policy Finder screen",
      },
      {
        type: "image",
        src: "/media/benefit-finder/4.jpeg",
        alt: "Public Policy Finder detail",
      },
      {
        type: "image",
        src: "/media/benefit-finder/UserFlow.jpeg",
        alt: "Public Policy Finder flow",
      },
    ],
  },
  {
    slug: "cafe-ledger",
    tier: "featured",
    name: {
      ko: "Cafe Ledger",
      en: "Cafe Ledger",
    },
    tagline: {
      ko: "실제 가족 운영 카페에서 쓰는 예약·장부 운영 툴을, 모바일 중심의 안전한 내부 시스템으로 만든 프로젝트",
      en: "A mobile-first internal operations tool used in a real family-run café for reservations and ledgers.",
    },
    description: {
      ko: "수기 기록과 메신저 전달에 의존하던 예약·예치금·미수금 흐름을, 모바일에서 빠르게 입력하고 실수 없이 확인할 수 있는 운영 도구로 바꿨습니다.",
      en: "Turns handwritten and chat-based reservation/deposit flows into a mobile tool that is faster to use and safer to confirm.",
    },
    role: {
      ko: "실사용자 인터뷰, 모바일 운영 UX, 권한/RLS 구조, AI 입력 보조 흐름 설계",
      en: "Real-user workflow design, mobile ops UX, RBAC/RLS structure, and AI-assisted input flows.",
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PWA",
      "OpenAI API",
      "PostgreSQL RLS",
    ],
    status: "in-progress",
    year: "2025-2026",
    links: [
      {
        type: "live",
        label: { ko: "서비스 보기", en: "Live" },
        href: "https://nescafe-admin-pwa.vercel.app",
      },
    ],
    highlights: [
      {
        ko: "가족이 실제로 사용하는 운영 툴이라, 추상적인 대시보드보다 실수 방지와 터치 입력 흐름이 더 중요했습니다.",
        en: "Because it is used in real operations, mistake prevention and touch-first flows mattered more than dashboards.",
      },
      {
        ko: "예약 완료 시 장부 자동 반영, invite 기반 직원 초대, 역할별 접근 제어까지 운영 단위를 서비스 구조로 정리했습니다.",
        en: "Structured reservation posting, staff invites, and role-based access around actual operational units.",
      },
      {
        ko: "AI는 자연어를 바로 저장하지 않고, 미리보기와 사용자 확인을 거친 뒤 프리필만 해주는 안전한 입력 보조로 설계했습니다.",
        en: "AI is intentionally used as a safe prefill layer: preview first, user confirmation next, no direct write.",
      },
    ],
    sections: [
      {
        title: { ko: "Overview", en: "Overview" },
        items: [
          {
            ko: "실제 가족 운영 카페에서 사용하는 내부 관리 도구이며, 모바일에서 예약·장부를 바로 처리할 수 있도록 설계했습니다.",
            en: "This is an internal tool used by a real family café, designed for reservation and ledger work on mobile.",
          },
        ],
      },
      {
        title: { ko: "Problem", en: "Problem" },
        items: [
          {
            ko: "기존에는 예약과 장부 기록이 흩어져 있어 누락, 중복, 확인 지연이 반복됐습니다.",
            en: "Reservations and ledger entries were previously fragmented, causing omissions, duplication, and delay.",
          },
          {
            ko: "실사용자인 어머니가 헷갈리지 않도록, 복잡한 기능보다 단순한 흐름과 확인 가능한 상태가 중요했습니다.",
            en: "The real operator needed simple flows and clear confirmation states more than feature density.",
          },
        ],
      },
      {
        title: { ko: "Target User", en: "Target User" },
        items: [
          {
            ko: "가족 운영 소규모 매장, 특히 스마트폰으로 빠르게 기록해야 하는 운영자와 직원",
            en: "Small business operators and staff who need to record operations quickly on mobile.",
          },
        ],
      },
      {
        title: { ko: "Core Hypothesis", en: "Core Hypothesis" },
        items: [
          {
            ko: "운영 툴은 많은 정보보다, 지금 필요한 입력을 빨리 하고 실수 없이 저장하는 구조가 더 중요합니다.",
            en: "In operations tools, speed and error prevention matter more than information density.",
          },
        ],
      },
      {
        title: { ko: "Key Features", en: "Key Features" },
        items: [
          {
            ko: "예약 캘린더, 예치금/미수금 관리, 예약 완료 시 장부 자동 반영",
            en: "Reservation calendar, deposit/receivable management, and auto-posting to the ledger.",
          },
          {
            ko: "직원 초대, 역할 기반 권한, Bottom navigation 기반 모바일 퍼스트 UX",
            en: "Staff invite flow, role-based permissions, and a bottom-navigation mobile UX.",
          },
        ],
      },
      {
        title: { ko: "Policy / Operating Logic", en: "Policy / Operating Logic" },
        items: [
          {
            ko: "Shop 단위로 데이터를 분리하고, Owner/Admin/Staff/Viewer 역할에 따라 접근 범위를 제어합니다.",
            en: "Data is shop-scoped, with Owner/Admin/Staff/Viewer roles controlling access.",
          },
          {
            ko: "예약에서 장부로 넘어갈 때는 중복 반영을 막기 위해 unique index와 source_type/source_id 기준을 함께 사용합니다.",
            en: "Ledger posting from reservations uses unique constraints plus source identifiers to prevent duplicate writes.",
          },
        ],
      },
      {
        title: { ko: "AI Usage", en: "AI Usage" },
        items: [
          {
            ko: "AI helper는 자연어 예약/장부 입력을 구조화된 프리필로 바꾸는 입력 보조 레이어입니다.",
            en: "The AI helper transforms natural-language input into structured prefills.",
          },
          {
            ko: "의도 파싱 → 미리보기 → 사용자 확인 → 안전 반영 순서를 지켜, AI가 직접 DB를 쓰지 않도록 설계했습니다.",
            en: "It follows intent parsing → preview → user confirm → safe apply, and never writes directly to the DB.",
          },
        ],
      },
      {
        title: {
          ko: "Edge Cases / Operational Considerations",
          en: "Edge Cases / Operational Considerations",
        },
        items: [
          {
            ko: "예약 시간 입력, 직원 권한 오남용, 예치금 차감 중복 같은 운영 실수를 먼저 막는 쪽에 무게를 뒀습니다.",
            en: "Priority was given to preventing operational mistakes around time input, staff permissions, and duplicate ledger changes.",
          },
        ],
      },
      {
        title: { ko: "KPI / What to measure", en: "KPI / What to measure" },
        items: [
          {
            ko: "예약 입력 시간, 장부 누락 건수, 권한 관련 오류, AI 프리필 후 실제 저장 전환율",
            en: "Reservation entry time, missed ledger entries, permission errors, and AI-prefill conversion rate.",
          },
        ],
      },
      {
        title: { ko: "Future Expansion", en: "Future Expansion" },
        items: [
          {
            ko: "AI 프리필 품질 개선, 스크롤 포커스, 알림/마감 운영 기능을 더 붙일 계획입니다.",
            en: "Future work includes stronger AI prefills, better focus handling, and more scheduling/notification support.",
          },
        ],
      },
    ],
    media: [
      {
        type: "image",
        src: "/media/cafe/cafe-main.png",
        alt: "Cafe Ledger main",
      },
      {
        type: "image",
        src: "/media/cafe/cafe-reservation.png",
        alt: "Cafe Ledger reservation",
      },
      {
        type: "image",
        src: "/media/cafe/cafe-ai.png",
        alt: "Cafe Ledger AI helper",
      },
    ],
  },
  {
    slug: "hellinimap-ecosystem",
    tier: "featured",
    name: {
      ko: "헬린이맵 + 몸매체크",
      en: "Hellinimap + MomeCheck",
    },
    tagline: {
      ko: "운동 입문자의 탐색을 돕는 지도 서비스와, 관심을 빠르게 끌어오는 모바일 도구를 하나의 흐름으로 묶은 프로젝트",
      en: "A gym-discovery map service paired with a lightweight mobile entry tool for attention and conversion.",
    },
    description: {
      ko: "헬린이맵은 운동시설 탐색 서비스이고, 몸매체크는 운동 관심 유저가 가볍게 결과를 받아보며 유입되는 보조 도구입니다. 두 서비스를 하나의 탐색-전환 구조로 보고 있습니다.",
      en: "Hellinimap is the main discovery product, while MomeCheck is a lighter companion tool that attracts and routes interested users into the ecosystem.",
    },
    role: {
      ko: "지도 탐색 UX, 실데이터 조회 구조, 제보/커뮤니티 흐름, AI 보조 운영 정책 설계",
      en: "Map UX, viewport data loading, report/community flows, and AI-assisted operations policy.",
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "Kakao Maps",
      "Kakao Local API",
      "Naver Search API",
      "OpenAI",
    ],
    status: "in-progress",
    year: "2026",
    links: [
      {
        type: "live",
        label: { ko: "헬린이맵", en: "Hellinimap" },
        href: "https://헬린이맵.com",
      },
      {
        type: "live",
        label: { ko: "몸매체크", en: "MomeCheck" },
        href: "https://momecheck.vercel.app/",
      },
      {
        type: "notes",
        label: { ko: "기획 문서", en: "Planning Doc" },
        href: "https://comet-abacus-ba7.notion.site/33e2c7548137801f808bfaacd26051a5",
      },
    ],
    highlights: [
      {
        ko: "초기 UI 탐색 단계에서는 거지맵의 overlay map 구조를 참고했지만, 현재 제품 로직과 데이터 구조는 운동시설 탐색 목적에 맞게 별도로 설계하고 있습니다.",
        en: "The early UI exploration referenced the overlay-map structure of another service, but the product logic and data policy are being designed independently for gym discovery.",
      },
      {
        ko: "지도 위에서 시설을 찾고, 리뷰·제보·외부 텍스트를 통해 데이터를 보강하는 운영형 서비스로 보고 있습니다.",
        en: "The product is framed as an operational service that enriches map data through reviews, reports, and external text.",
      },
      {
        ko: "몸매체크는 메인 서비스가 아니라, 운동 관심 유저가 빠르게 들어와 결과를 보고 헬린이맵으로 이어질 수 있게 돕는 유입 도구입니다.",
        en: "MomeCheck is not the main product; it acts as a lightweight entry point that can funnel users into Hellinimap.",
      },
    ],
    sections: [
      {
        title: { ko: "Overview", en: "Overview" },
        items: [
          {
            ko: "헬린이맵은 지도 기반 운동시설 탐색 서비스이고, 몸매체크는 그 주변의 관심 환기/유입 도구로 연결됩니다.",
            en: "Hellinimap is the main map-based gym discovery service, while MomeCheck acts as a companion attention funnel.",
          },
        ],
      },
      {
        title: { ko: "Problem", en: "Problem" },
        items: [
          {
            ko: "운동 입문자는 시설 가격, 분위기, 초보자 친화도 같은 정보를 지도 위에서 한 번에 보기 어렵습니다.",
            en: "Beginners struggle to see price, vibe, and beginner-friendliness together on a map.",
          },
          {
            ko: "운영자 입장에서는 후기·제보·가격 정보가 흩어져 있어, 어떤 정보를 먼저 구조화할지 판단하기 어렵습니다.",
            en: "From an operator perspective, reviews, reports, and pricing are fragmented and hard to prioritize.",
          },
        ],
      },
      {
        title: { ko: "Target User", en: "Target User" },
        items: [
          {
            ko: "새 운동시설을 찾는 입문자, PT 영업이나 분위기에 민감한 사용자, 가격 정보를 비교하고 싶은 사용자",
            en: "Beginners looking for new gyms, users sensitive to sales pressure or atmosphere, and price-conscious explorers.",
          },
        ],
      },
      {
        title: { ko: "Core Hypothesis", en: "Core Hypothesis" },
        items: [
          {
            ko: "운동시설 탐색은 리스트보다 지도 + 보조 설명 + 운영 검수 구조가 더 잘 맞습니다.",
            en: "Gym discovery works better as map + supporting explanations + operator review rather than as a flat list.",
          },
        ],
      },
      {
        title: { ko: "Key Features", en: "Key Features" },
        items: [
          {
            ko: "full-screen map + overlay panel, viewport 기반 조회, 상세 lazy fetch, 커뮤니티/제보 연계",
            en: "Full-screen map + overlay panels, viewport loading, lazy detail fetch, and community/report integration.",
          },
          {
            ko: "가격·후기·운영정보를 구조화하고, 향후 배지/점수 정책으로 이어질 수 있게 설계",
            en: "Structures price, reviews, and facility data so it can evolve into badges and scoring policies.",
          },
        ],
      },
      {
        title: { ko: "Policy / Operating Logic", en: "Policy / Operating Logic" },
        items: [
          {
            ko: "초기 UI 탐색에서 거지맵의 overlay map 구조를 참고했지만, 제품 로직·데이터 파이프라인·운영 정책은 별도로 설계합니다.",
            en: "The overlay map UI was referenced early, but logic, pipelines, and operations are designed independently.",
          },
          {
            ko: "리뷰와 제보는 즉시 공개하지 않고, 관리자 검토와 보수적 노출 원칙을 전제로 반영합니다.",
            en: "Reviews and reports are not treated as immediately public truth; they pass through conservative exposure and operator review.",
          },
        ],
      },
      {
        title: { ko: "AI Usage", en: "AI Usage" },
        items: [
          {
            ko: "AI는 시설/가격/후기/제보를 읽기 쉬운 형태로 구조화하는 보조 레이어입니다.",
            en: "AI is used as an assistive layer to structure prices, reports, and text into readable summaries.",
          },
          {
            ko: "한 줄 요약 생성, 시설 특성 설명 보강, 운영자 검토 우선순위 제안처럼 운영 효율을 높이는 방향으로 씁니다.",
            en: "It supports one-line summaries, facility characterization, and review-priority suggestions for operators.",
          },
          {
            ko: "AI는 최종 판단 주체가 아니며, 근거 없는 단정이나 평판형 표현은 피하는 정책을 둡니다.",
            en: "AI is not the final decision-maker; unsupported or reputation-sensitive claims are intentionally avoided.",
          },
        ],
      },
      {
        title: {
          ko: "Edge Cases / Operational Considerations",
          en: "Edge Cases / Operational Considerations",
        },
        items: [
          {
            ko: "실제 시설에 불리한 단정형 표현을 피하고, 근거가 약하면 배지를 미부여하는 구조를 우선합니다.",
            en: "To avoid harmful claims, labels are withheld when evidence is weak.",
          },
          {
            ko: "지도 응답은 가볍게 유지하고, 무거운 상세 정보는 lazy fetch로 분리합니다.",
            en: "Map responses stay light, while heavier detail is loaded lazily.",
          },
        ],
      },
      {
        title: { ko: "KPI / What to measure", en: "KPI / What to measure" },
        items: [
          {
            ko: "지도 클릭률, 상세 진입률, 제보 전환, 커뮤니티/몸매체크에서 헬린이맵으로 넘어오는 유입 비율",
            en: "Map click-through, detail open rate, report conversion, and funnel traffic from MomeCheck/community into Hellinimap.",
          },
        ],
      },
      {
        title: { ko: "Future Expansion", en: "Future Expansion" },
        items: [
          {
            ko: "헬린이 친화, 가성비, 내향인 친화 같은 기준을 점수·배지·정렬 로직으로 더 정교하게 확장할 계획입니다.",
            en: "Future work will deepen scoring and badge policies around beginner-friendliness, value, and introvert-friendly discovery.",
          },
        ],
      },
    ],
  },
  {
    slug: "nutrition-coach",
    tier: "other",
    name: {
      ko: "Nutrition Coach",
      en: "Nutrition Coach",
    },
    tagline: {
      ko: "사진 기반 식단 기록과 개인화 코칭을 결합한 크로스플랫폼 영양 앱",
      en: "A cross-platform nutrition app combining photo logging and personalized coaching.",
    },
    description: {
      ko: "식단 기록, GPT 기반 분석, 목표별 영양 코칭을 모바일 중심으로 묶은 AI 영양 관리 앱입니다.",
      en: "An AI nutrition app that combines meal logging, GPT analysis, and goal-based coaching.",
    },
    role: {
      ko: "AI 입력 구조와 모바일 앱 플로우 실험",
      en: "An experiment in AI input structure and mobile app UX.",
    },
    tech: ["Expo", "React Native", "Supabase", "OpenAI API"],
    status: "in-progress",
    year: "2025",
    links: [
      {
        type: "live",
        label: { ko: "서비스 보기", en: "Live" },
        href: "https://nutrition-coach-han.vercel.app",
      },
      {
        type: "github",
        label: { ko: "GitHub", en: "GitHub" },
        href: "https://github.com/lbj23han/nutrition-coach",
      },
    ],
    highlights: [
      {
        ko: "사진·텍스트 입력을 구조화된 영양 데이터로 바꾸는 AI 파이프라인을 다뤘습니다.",
        en: "Explores AI pipelines that turn photo and text input into structured nutrition data.",
      },
    ],
  },
  {
    slug: "fcsquadmeter",
    tier: "other",
    name: {
      ko: "FcSquadMeter",
      en: "FcSquadMeter",
    },
    tagline: {
      ko: "체감 위주의 전적 비교를 데이터 기반으로 바꾼 FC Online 뷰어",
      en: "A data viewer that turns casual FC Online comparisons into measurable records.",
    },
    description: {
      ko: "친구들의 FC Online 전적을 수집·정리하고, 랭킹과 배지로 비교할 수 있게 만든 데이터 뷰어입니다.",
      en: "A data viewer for collecting and comparing FC Online records with rankings and badges.",
    },
    role: {
      ko: "API 데이터 정규화와 비교 UI 구성",
      en: "Focused on API normalization and comparison UI.",
    },
    tech: ["Next.js", "TypeScript", "Nexon Open API"],
    status: "in-progress",
    year: "2025",
    links: [
      {
        type: "live",
        label: { ko: "서비스 보기", en: "Live" },
        href: "https://fcsquadmeter.vercel.app",
      },
    ],
    highlights: [
      {
        ko: "외부 API rate limit을 고려한 캐싱 전략과 비교 UI를 실험한 프로젝트입니다.",
        en: "A project centered on cache-aware API usage and comparison UI design.",
      },
    ],
  },
  {
    slug: "holidays",
    tier: "other",
    name: {
      ko: "Holidays",
      en: "Holidays",
    },
    tagline: {
      ko: "인증·결제·PWA 배포까지 다뤘던 라이프스타일/커머스 팀 프로젝트",
      en: "A lifestyle-commerce team project covering auth, payments, and PWA delivery.",
    },
    description: {
      ko: "로그인, 인증 흐름, 결제, PWA 배포까지 실제 서비스의 기본 흐름을 팀 프로젝트로 경험한 작업입니다.",
      en: "A team project where I handled the core flows of auth, payments, and PWA deployment.",
    },
    role: {
      ko: "로그인/인증과 주요 페이지 구현",
      en: "Handled auth and core page implementation.",
    },
    tech: ["Next.js", "TypeScript", "GraphQL", "AWS", "PWA"],
    status: "done",
    year: "2023",
    links: [
      {
        type: "github",
        label: { ko: "GitHub", en: "GitHub" },
        href: "https://github.com/lbj23han/holidays_client",
      },
    ],
    highlights: [
      {
        ko: "실서비스 플로우를 팀 단위로 구현했던 초기 프로젝트입니다.",
        en: "An earlier team project focused on implementing real service flows.",
      },
    ],
  },
  {
    slug: "private-video-automation",
    tier: "private",
    name: {
      ko: "Private Video Automation",
      en: "Private Video Automation",
    },
    tagline: {
      ko: "반복 제작 업무를 실패 복구 가능한 워크플로우로 바꾼 비공개 자동화 시스템",
      en: "A private automation system that turns repeated production work into a recoverable workflow.",
    },
    description: {
      ko: "스크립트, 씬 프롬프트, 메타데이터, 설정 파일만 교체하면 새 영상을 제작할 수 있도록 이미지 생성, TTS, BGM, 썸네일, 렌더링, 업로드 흐름을 자동화한 비공개 시스템입니다.",
      en: "A private system that automates image generation, TTS, BGM, thumbnails, rendering, and upload from a small set of input files.",
    },
    role: {
      ko: "반복 제작 플로우 구조화와 실패 복구 흐름 설계",
      en: "Focused on workflow automation and failure recovery.",
    },
    tech: ["Python", "FFmpeg", "TTS", "Image Generation", "Workflow Automation"],
    status: "in-progress",
    year: "2026",
    highlights: [
      {
        ko: "단계별 skip, 특정 씬 재생성, 재믹싱/복구 플로우를 지원합니다.",
        en: "Supports step-skipping, per-scene regeneration, and remix/recovery flows.",
      },
      {
        ko: "반복적인 제작 업무를 사람이 매번 수동 조립하지 않아도 되는 구조로 바꿨습니다.",
        en: "Turns repetitive production tasks into a reusable workflow instead of manual assembly each time.",
      },
    ],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.tier === "featured",
);

export const otherProjects = projects.filter(
  (project) => project.tier === "other",
);

export const privateProjects = projects.filter(
  (project) => project.tier === "private",
);
