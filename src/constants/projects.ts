export type ProjectStatus = "in-progress" | "done" | "legacy";

export const projectUiText = {
  openProject: "링크로 이동",
  viewMore: "자세히 보기",
  collapse: "접기",
  openMedia: "미디어 크게 보기",
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
      "실사용 기반 모바일 퍼스트 UX: Bottom Nav, 터치 영역 최적화, 단순 입력 흐름",
      "Shop 단위 데이터 분리 + 역할 기반 권한(Owner/Admin/Staff/Viewer) 설계",
      "RLS(Row Level Security)로 서버 단 접근 제어 구현",
      "직원 초대(Invite) 토큰 플로우 및 초대 상태(pending/accepted/expired) 관리 UI",
      "예약/매출 캘린더 + 예약 완료 시 장부 자동 반영(중복 방지 unique index 포함)",
      "Repository 패턴 + 도메인 로직 분리로 모듈 경계/타입 안정성 강화",
      "AI Helper: 자연어 입력 → 미리보기 → 확인 → QueryString 프리필(‘AI가 직접 저장하지 않는’ 안전 정책)",
      "Quick Chips 등 입력 UX 개선으로 키보드 의존도 감소",
    ],
    // media: [
    //   { type: "gif", src: "/media/cafe-ledger/ai-prefill.gif", alt: "AI Helper 프리필(미리보기→확인→적용) 흐름" },
    // ],
  },
  {
    name: "FcSquadMeter",
    description: "fconline 데이터 비교 웹앱",
    tech: ["Next.js", "React", "Tailwind", "TypeScript"],
    status: "in-progress",
    url: "https://fcsquadmeter.vercel.app",
    detail: ["개인 흥미 기반 데이터 비교 기능 구현", "UI 컴포넌트화/상태 처리"],
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
        alt: "로그인 페이지 / 인증 플로우",
      },
      { type: "gif", src: "/media/holidays/flow-3.gif", alt: "매거진 페이지" },
      {
        type: "gif",
        src: "/media/holidays/flow-4.gif",
        alt: "광고 및 결제 유도 플로우",
      },
      { type: "gif", src: "/media/holidays/flow-5.gif", alt: "실서비스 화면" },
    ],
  },
  {
    name: "Toy Projects x4",
    description:
      "메뉴 계산/예약/툴 형태의 토이 프로젝트 4개 (구현/모듈화 경험)",
    tech: ["React", "TypeScript"],
    status: "done",
    detail: [
      "작은 문제를 빠르게 해결하는 미니 앱 제작 경험",
      "모듈화/재사용 가능한 유틸/컴포넌트 정리",
    ],
  },
];
