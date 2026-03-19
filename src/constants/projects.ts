import type { I18nDict, Locale } from "@/lib/i18n";

export type ProjectStatus = "in-progress" | "done" | "legacy";

export const projectUiText: I18nDict<{
  openProject: string;
  viewMore: string;
  collapse: string;
  openMedia: string;
  openGithub: string;
}> = {
  ko: {
    openProject: "링크로 이동",
    viewMore: "자세히 보기",
    collapse: "접기",
    openMedia: "미디어 크게 보기",
    openGithub: "GitHub Repo",
  },
  en: {
    openProject: "Open link",
    viewMore: "View details",
    collapse: "Collapse",
    openMedia: "Open media",
    openGithub: "GitHub Repo",
  },
} as const;

export const statusLabel: I18nDict<Record<ProjectStatus, string>> = {
  ko: {
    "in-progress": "진행 중",
    done: "완료",
    legacy: "과거 프로젝트",
  },
  en: {
    "in-progress": "In progress",
    done: "Done",
    legacy: "Legacy",
  },
} as const;

export type ProjectMedia = {
  type: "image" | "gif";
  src: string; // /public 기준 경로
  alt?: string;
};

export type Project = {
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  tech: string[];
  status: ProjectStatus;
  url?: string;
  github?: string;
  detail?: Array<Record<Locale, string>>;
  media?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    name: {
      ko: "Cafe Ledger",
      en: "Cafe Ledger",
    },
    description: {
      ko: "가족 운영 카페에서 실제 사용하는 내부 장부/예약 관리 PWA. 예치금·미수금·주문·예약 내역을 모바일에서 빠르게 기록/조회.",
      en: "A real internal ledger/reservation management PWA for a family-run café. Quickly record and review deposits, receivables, orders, and reservations on mobile.",
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PWA",
      "OpenAI API",
      "LLM",
    ],
    status: "in-progress",
    url: "https://nescafe-admin-pwa.vercel.app",
    detail: [
      {
        ko: "수기·분산된 카페 예약/장부 기록으로 누락·중복이 발생하던 운영 흐름을, 모바일 퍼스트 PWA + 권한/RLS + 예약→장부 자동반영(중복방지)으로 표준화·자동화했습니다.",
        en: "Standardized and automated café operations that suffered from missing/duplicate records by introducing a mobile-first PWA, role-based permissions/RLS, and reservation → ledger auto-sync with deduplication.",
      },
      {
        ko: "실사용 기반 모바일 퍼스트 UX: Bottom Nav, 터치 영역 최적화, 단순 입력 흐름",
        en: "Mobile-first UX for daily use: bottom navigation, optimized touch targets, simplified input flows.",
      },
      {
        ko: "Shop 단위 데이터 분리 + 역할 기반 권한(Owner/Admin/Staff/Viewer) 설계",
        en: "Shop-scoped data partitioning + role-based authorization (Owner/Admin/Staff/Viewer).",
      },
      {
        ko: "RLS(Row Level Security)로 서버 단 접근 제어 구현",
        en: "Implemented server-side access control with Supabase RLS (Row Level Security).",
      },
      {
        ko: "직원 초대(Invite) 토큰 플로우 및 초대 상태(pending/accepted/expired) 관리 UI",
        en: "Built an invite-token flow and UI to manage invite states (pending/accepted/expired).",
      },
      {
        ko: "예약/매출 캘린더 + 예약 완료 시 장부 자동 반영(중복 방지 unique index 포함)",
        en: "Reservation/sales calendar + automatic ledger posting on reservation completion (including unique index for deduplication).",
      },
      {
        ko: "Repository 패턴 + 도메인 로직 분리로 모듈 경계/타입 안정성 강화",
        en: "Strengthened module boundaries and type safety using a repository pattern and domain logic separation.",
      },
      {
        ko: "AI Helper: 자연어 입력 → 미리보기 → 확인 → QueryString 프리필(‘AI가 직접 저장하지 않는’ 안전 정책)",
        en: "AI Helper: natural language → preview → confirm → querystring prefill (a safety policy where AI never saves directly).",
      },
      {
        ko: "OpenAI API 기반 LLM을 활용해 예약 의도 파싱, 날짜/인원/메뉴/금액 구조화, 입력 전 미리보기 생성 흐름을 설계했습니다.",
        en: "Used an OpenAI API-based LLM to design a flow for parsing reservation intents, structuring date/party size/menu/amount fields, and generating a preview before submission.",
      },
      {
        ko: "Quick Chips 등 입력 UX 개선으로 키보드 의존도 감소",
        en: "Improved input UX with quick chips and reduced keyboard dependency.",
      },
      {
        ko: "우테코 프리코스에서 익힌 MVC/모듈화 패턴을 적용해, 도메인 로직(예약/결제/잔액 계산)과 UI를 분리하려고 설계",
        en: "Applied MVC/modularization patterns (from Woowacourse precourse) to separate domain logic (reservation/payment/balance) from UI.",
      },
      {
        ko: "예약 의도 파싱, 날짜 정규화 등 복잡한 비즈니스 로직을 별도 hooks/utils로 분리해 재사용성과 테스트 용이성 향상",
        en: "Moved complex business logic (intent parsing, date normalization) into hooks/utils for reuse and easier testing.",
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
        src: "/media/cafe/cafe-management.png",
        alt: "Cafe Ledger management",
      },
      {
        type: "image",
        src: "/media/cafe/cafe-ai.png",
        alt: "Cafe Ledger AI helper",
      },
    ],
  },
  {
    name: {
      ko: "나만의 영양코치",
      en: "My Nutrition Coach",
    },
    description: {
      ko: "GPT-4o Vision + Supabase Edge Functions 기반 AI 영양 관리 앱. 사진 촬영·텍스트 입력으로 식단을 기록하고 AI 코치와 실시간 채팅으로 개인화 식단 조언을 받는 크로스플랫폼 앱.",
      en: "An AI nutrition tracking app built on GPT-4o Vision and Supabase Edge Functions. Log meals by photo or text, and get personalized coaching via real-time AI chat — running on iOS, Android, and Web from a single codebase.",
    },
    tech: [
      "Expo",
      "React Native",
      "TypeScript",
      "Supabase",
      "OpenAI API",
      "React Native Web",
    ],
    status: "in-progress",
    url: "https://nutrition-coach-han.vercel.app",
    github: "https://github.com/lbj23han/nutrition-coach",
    detail: [
      {
        ko: "카메라로 음식을 찍으면 GPT-4o Vision이 음식 종류·중량·칼로리·단백질·탄수화물·지방을 자동 분석해 바로 기록하는 파이프라인을 설계했습니다.",
        en: "Designed a pipeline where GPT-4o Vision automatically identifies food type, portion, and full macro breakdown from a photo and logs it instantly.",
      },
      {
        ko: "OpenAI API 키를 Supabase Edge Function 서버 시크릿으로 격리해 클라이언트 번들에 노출되지 않도록 보안 구조를 설계했습니다.",
        en: "Secured the OpenAI API key by isolating it as a Supabase Edge Function secret, keeping it entirely out of the client bundle.",
      },
      {
        ko: "사용자당 AI 호출 10회 제한을 서버 사이드(api_usage 테이블 + HTTP 429)로 구현해 비용 제어 구조를 갖췄습니다.",
        en: "Implemented server-side per-user AI rate limiting (api_usage table + HTTP 429) to control costs without relying on the client.",
      },
      {
        ko: "Mifflin-St Jeor / Katch-McArdle 공식으로 BMR·TDEE를 계산하고 6가지 목표(다이어트/벌크업 등)에 따라 매크로 목표를 자동 설정하는 개인화 엔진을 구현했습니다.",
        en: "Built a personalization engine that calculates BMR/TDEE via Mifflin-St Jeor or Katch-McArdle and auto-sets macro targets based on 6 fitness goals.",
      },
      {
        ko: "FoodCamera를 .native.tsx / .tsx로 분리해 expo-camera를 웹 번들에서 완전히 제외하는 플랫폼 분기 번들링 구조를 적용했습니다.",
        en: "Split FoodCamera into .native.tsx/.tsx so expo-camera is fully excluded from the web bundle, using Metro's platform extension resolution.",
      },
      {
        ko: "Expo + React Native Web으로 iOS · Android · Web(Vercel PWA) 단일 코드베이스 배포를 구현했습니다.",
        en: "Delivered iOS, Android, and Web (Vercel PWA) from a single codebase using Expo and React Native Web.",
      },
      {
        ko: "12주 체중 예측 모델(TDEE 델타 기반)과 주간 칼로리 차트·매크로 분석을 통해 목표 달성 여정을 시각화했습니다.",
        en: "Visualized goal progress with a 12-week weight forecast model (TDEE delta–based) and weekly calorie/macro charts.",
      },
    ],
    media: [
      {
        type: "image",
        src: "/media/nutrition-coach/001.png",
        alt: "Nutrition Coach 001",
      },
      {
        type: "image",
        src: "/media/nutrition-coach/002.png",
        alt: "Nutrition Coach 002",
      },
      {
        type: "image",
        src: "/media/nutrition-coach/003.png",
        alt: "Nutrition Coach 003",
      },
      {
        type: "image",
        src: "/media/nutrition-coach/004.png",
        alt: "Nutrition Coach 004",
      },
      {
        type: "image",
        src: "/media/nutrition-coach/005.png",
        alt: "Nutrition Coach 005",
      },
      {
        type: "image",
        src: "/media/nutrition-coach/006.png",
        alt: "Nutrition Coach 006",
      },
      {
        type: "image",
        src: "/media/nutrition-coach/007.png",
        alt: "Nutrition Coach 007",
      },
      {
        type: "image",
        src: "/media/nutrition-coach/008.png",
        alt: "Nutrition Coach 008",
      },
      {
        type: "image",
        src: "/media/nutrition-coach/009.png",
        alt: "Nutrition Coach 009",
      },
    ],
  },
  {
    name: {
      ko: "FcSquadMeter",
      en: "FcSquadMeter",
    },
    description: {
      ko: "FIFA Online 스쿼드 성능을 비교하는 데이터 뷰어 웹앱",
      en: "A data viewer web app to compare FIFA Online squad performance.",
    },
    tech: ["Next.js", "React", "Tailwind", "TypeScript"],
    status: "in-progress",
    url: "https://fcsquadmeter.vercel.app",
    detail: [
      {
        ko: "체감에 의존하던 FC Online 전적 비교를, NEXON Open API 기반 데이터 조회·정규화 + 비교 UI/상태처리로 “데이터로 판단” 가능한 뷰어로 만들었습니다.",
        en: "Turned “feel-based” comparisons into a data-driven viewer by fetching/normalizing NEXON Open API data and building comparison UI with robust loading/error states.",
      },
      {
        ko: "NEXON Open API 연동으로 실제 선수/스쿼드 데이터를 조회·비교",
        en: "Integrated NEXON Open API to fetch and compare real player/squad data.",
      },
      {
        ko: "포지션/능력치 기반 스쿼드 비교 UI 설계 및 상태 관리",
        en: "Designed position/stat-based comparison UI and state management.",
      },
      {
        ko: "API 응답 캐싱 및 로딩/에러 상태 처리로 사용자 경험 개선",
        en: "Improved UX with response caching and solid loading/error handling.",
      },
    ],
    media: [
      {
        type: "image",
        src: "/media/fcsquadmeter/flow.png",
        alt: "FcSquadMeter main screen",
      },
    ],
  },
  {
    name: {
      ko: "Holidays",
      en: "Holidays",
    },
    description: {
      ko: "라이프스타일/커머스 PWA 팀 프로젝트(2023, 현재 링크 무효). 로그인/인증·결제·PWA 배포까지 실제 서비스 플로우를 구현.",
      en: "A lifestyle/commerce PWA team project (2023, link expired). Implemented real service flows including auth, payments, and PWA deployment.",
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "GraphQL",
      "REST API",
      "PWA",
      "AWS",
      "Docker",
      "Git",
    ],
    status: "done",
    github: "https://github.com/lbj23han/holidays_client",
    detail: [
      {
        ko: "팀 프로젝트에서 로그인 페이지,메인 페이지, 매거진 등의 페이지와 인증 시스템 전반(설계/구현) 담당",
        en: "Owned the login/main/magazine pages and the overall authentication system design & implementation.",
      },
      {
        ko: "간편로그인 도입 및 로그인 플로우(가입/연동/리다이렉트/보호 라우팅) 구성",
        en: "Introduced social login and built end-to-end login flows (sign-up/linking/redirect/protected routing).",
      },
      {
        ko: "결제 페이지 + 결제 플로우(성공/실패/취소 등 상태 처리) 구현",
        en: "Implemented the payment page and payment state handling (success/failure/cancel).",
      },
      {
        ko: "GraphQL 쿼리 직접 작성하여 화면 데이터 페칭/연동",
        en: "Wrote GraphQL queries to fetch and bind data to UI.",
      },
      {
        ko: "REST API 연동(필요 엔드포인트 기반 기능 연결)",
        en: "Integrated REST APIs as needed across features.",
      },
      {
        ko: "PWA 전체 세팅(단독) 및 Google Play 앱 출시까지 진행",
        en: "Set up the PWA end-to-end and proceeded through the Google Play release process.",
      },
      {
        ko: "AWS 환경에서 개발/배포 연동 경험(프로젝트 운영 환경 기반)",
        en: "Worked with AWS-based environments for development/deployment integration.",
      },
      {
        ko: "링크 대신 이미지로 핵심 사용자 플로우를 정리(메인→로그인→매거진→광고/결제유도→실서비스)",
        en: "Documented the core user flows with images (main → login → magazine → ads/payment prompt → service screens) since the live link expired.",
      },
    ],
    media: [
      { type: "gif", src: "/media/holidays/flow-1.gif", alt: "Main" },
      { type: "gif", src: "/media/holidays/flow-2.gif", alt: "Login / Auth" },
      { type: "gif", src: "/media/holidays/flow-3.gif", alt: "Magazine" },
      {
        type: "gif",
        src: "/media/holidays/flow-4.gif",
        alt: "Ads / Payment prompt",
      },
      {
        type: "gif",
        src: "/media/holidays/flow-5.gif",
        alt: "Service screens",
      },
      {
        type: "image",
        src: "/media/holidays/flow-6.png",
        alt: "Google Play review",
      },
    ],
  },
  {
    name: {
      ko: "우아한테크코스 프리코스 JavaScript 미션 x4",
      en: "Woowacourse Precourse · JavaScript Missions (x4)",
    },
    description: {
      ko: "우테코 프리코스에서 콘솔 기반 도메인 문제를 JS로 구현하며 MVC와 모듈화, 테스트를 집중적으로 연습한 과제 묶음",
      en: "A bundle of 4 JavaScript missions from Woowacourse precourse, focused on MVC, modularization, and testing for console-based domain problems.",
    },
    tech: ["JavaScript", "Node.js", "Jest"],
    status: "done",
    github: "https://github.com/lbj23han/javascript-christmas-6-lbj23han",
    detail: [
      {
        ko: "총 4개의 JavaScript 미션을 완수하며 요구사항 기반 설계와 단계별 기능 구현 경험",
        en: "Completed 4 JavaScript missions, practicing requirement-driven design and step-by-step implementation.",
      },
      {
        ko: "Model / View / Controller / constants / utils 레이어로 도메인 로직과 입력/출력을 분리",
        en: "Separated domain logic and I/O using Model/View/Controller/constants/utils layers.",
      },
      {
        ko: "크리스마스 프로모션 미션에서 DiscountManager + OrderCalculator 모듈로 할인 정책을 분리하는 구조 설계",
        en: "Designed a structure splitting discount policies via DiscountManager + OrderCalculator modules (Christmas promotion mission).",
      },
      {
        ko: "잘못된 입력에 대해 [ERROR] 형식으로 예외를 던지고, 해당 단계부터 재입력 받는 플로우 구현",
        en: "Implemented a re-entry flow throwing errors in a consistent [ERROR] format.",
      },
      {
        ko: "Jest로 도메인 로직 단위 테스트를 작성해 경계 케이스까지 검증하는 습관 형성",
        en: "Built unit tests with Jest to validate edge cases and strengthen correctness habits.",
      },
    ],
  },
];
