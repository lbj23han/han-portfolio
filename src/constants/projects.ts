export type ProjectStatus = "in-progress" | "done" | "legacy";

export const projectUiText = {
  openProject: "링크로 이동",
  viewMore: "자세히 보기",
  collapse: "접기",
  openMedia: "미디어 크게 보기",
  openGithub: "GitHub Repo",
};

export const statusLabel: Record<ProjectStatus, string> = {
  "in-progress": "진행 중",
  done: "완료",
  legacy: "과거 프로젝트",
};

export type ProjectMedia = {
  type: "image" | "gif";
  src: string; // /public 기준 경로
  alt?: string;
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  url?: string;
  github?: string;
  detail?: string[]; // 자세히 보기 펼쳤을 때 bullet
  media?: ProjectMedia[]; // 자세히 보기 펼쳤을 때 넘겨볼 GIF/이미지
};

export const projects: Project[] = [
  {
    name: "Cafe Ledger",
    description:
      "가족 운영 카페에서 실제 사용하는 내부 장부/예약 관리 PWA. 예치금·미수금·주문·예약 내역을 모바일에서 빠르게 기록/조회.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PWA",
      "OpenAI API",
    ],
    status: "in-progress",
    url: "https://nescafe-admin-pwa.vercel.app",
    detail: [
      "수기·분산된 카페 예약/장부 기록으로 누락·중복이 발생하던 운영 흐름을, 모바일 퍼스트 PWA + 권한/RLS + 예약→장부 자동반영(중복방지)으로 표준화·자동화했습니다.",
      "실사용 기반 모바일 퍼스트 UX: Bottom Nav, 터치 영역 최적화, 단순 입력 흐름",
      "Shop 단위 데이터 분리 + 역할 기반 권한(Owner/Admin/Staff/Viewer) 설계",
      "RLS(Row Level Security)로 서버 단 접근 제어 구현",
      "직원 초대(Invite) 토큰 플로우 및 초대 상태(pending/accepted/expired) 관리 UI",
      "예약/매출 캘린더 + 예약 완료 시 장부 자동 반영(중복 방지 unique index 포함)",
      "Repository 패턴 + 도메인 로직 분리로 모듈 경계/타입 안정성 강화",
      "AI Helper: 자연어 입력 → 미리보기 → 확인 → QueryString 프리필(‘AI가 직접 저장하지 않는’ 안전 정책)",
      "Quick Chips 등 입력 UX 개선으로 키보드 의존도 감소",
      "우테코 프리코스에서 익힌 MVC/모듈화 패턴을 적용해, 도메인 로직(예약/결제/잔액 계산)과 UI를 분리하려고 설계",
      "예약 의도 파싱, 날짜 정규화 등 복잡한 비즈니스 로직을 별도 hooks/utils로 분리해 재사용성과 테스트 용이성 향상",
    ],
    media: [
      {
        type: "image",
        src: "/media/cafe/cafe-main.png",
        alt: "Cafe Ledger 메인 화면",
      },
      {
        type: "image",
        src: "/media/cafe/cafe-reservation.png",
        alt: "Cafe Ledger 예약 화면",
      },
      {
        type: "image",
        src: "/media/cafe/cafe-management.png",
        alt: "Cafe Ledger 관리 화면",
      },
      {
        type: "image",
        src: "/media/cafe/cafe-ai.png",
        alt: "Cafe Ledger ai helper",
      },
    ],
  },
  {
    name: "FcSquadMeter",
    description: "FIFA Online 스쿼드 성능을 비교하는 데이터 뷰어 웹앱",
    tech: ["Next.js", "React", "Tailwind", "TypeScript"],
    status: "in-progress",
    url: "https://fcsquadmeter.vercel.app",
    detail: [
      "체감에 의존하던 FC Online 전적 비교를, NEXON Open API 기반 데이터 조회·정규화 + 비교 UI/상태처리로 “데이터로 판단” 가능한 뷰어로 만들었습니다.",
      "NEXON Open API 연동으로 실제 선수/스쿼드 데이터를 조회·비교",
      "포지션/능력치 기반 스쿼드 비교 UI 설계 및 상태 관리",
      "API 응답 캐싱 및 로딩/에러 상태 처리로 사용자 경험 개선",
    ],
    // media: [{ type: "image", src: "/media/fcsquadmeter/shot-1.png", alt: "메인 화면" }],
  },
  {
    name: "Holidays",
    description:
      "라이프스타일/커머스 PWA 팀 프로젝트(2023, 현재 링크 무효). 로그인/인증·결제·PWA 배포까지 실제 서비스 플로우를 구현.",
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
      "팀 프로젝트에서 로그인 페이지,메인 페이지, 매거진 등의 페이지와 인증 시스템 전반(설계/구현) 담당",
      "간편로그인 도입 및 로그인 플로우(가입/연동/리다이렉트/보호 라우팅) 구성",
      "결제 페이지 + 결제 플로우(성공/실패/취소 등 상태 처리) 구현",
      "GraphQL 쿼리 직접 작성하여 화면 데이터 페칭/연동",
      "REST API 연동(필요 엔드포인트 기반 기능 연결)",
      "PWA 전체 세팅(단독) 및 Google Play 앱 출시까지 진행",
      "AWS 환경에서 개발/배포 연동 경험(프로젝트 운영 환경 기반)",
      "링크 대신 이미지로 핵심 사용자 플로우를 정리(메인→로그인→매거진→광고/결제유도→실서비스)",
    ],
    media: [
      { type: "gif", src: "/media/holidays/flow-1.gif", alt: "메인 화면" },
      {
        type: "gif",
        src: "/media/holidays/flow-2.gif",
        alt: "로그인 페이지 / 인증",
      },
      { type: "gif", src: "/media/holidays/flow-3.gif", alt: "매거진 페이지" },
      {
        type: "gif",
        src: "/media/holidays/flow-4.gif",
        alt: "광고 및 결제 유도",
      },
      { type: "gif", src: "/media/holidays/flow-5.gif", alt: "실서비스 화면" },
      {
        type: "image",
        src: "/media/holidays/flow-6.png",
        alt: "구글플레이 출시 심사",
      },
    ],
  },
  {
    name: "우아한테크코스 프리코스 JavaScript 미션 x4",
    description:
      "우테코 프리코스에서 콘솔 기반 도메인 문제를 JS로 구현하며 MVC와 모듈화, 테스트를 집중적으로 연습한 과제 묶음",
    tech: ["JavaScript", "Node.js", "Jest"],
    status: "done",
    detail: [
      "총 4개의 JavaScript 미션을 완수하며 요구사항 기반 설계와 단계별 기능 구현 경험",
      "Model / View / Controller / constants / utils 레이어로 도메인 로직과 입력/출력을 분리",
      "크리스마스 프로모션 미션에서 DiscountManager + OrderCalculator 모듈로 할인 정책을 분리하는 구조 설계",
      "잘못된 입력에 대해 [ERROR] 형식으로 예외를 던지고, 해당 단계부터 재입력 받는 플로우 구현",
      "Jest로 도메인 로직 단위 테스트를 작성해 경계 케이스까지 검증하는 습관 형성",
    ],
    github: "https://github.com/lbj23han/javascript-christmas-6-lbj23han",
  },
];
