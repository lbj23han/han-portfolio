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
    description: "부서별 예치금/미수금 관리용 카페 내부 가계부 웹앱",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "in-progress",
    url: "https://nescafe-admin-pwa.vercel.app",
    detail: [
      "PWA 기반 모바일 퍼스트 UI",
      "AI Assistant 입력 파싱/프리필 플로우 설계",
      "리팩토링 중심으로 모듈 경계/타입 안정성 개선",
    ],
    // media: [
    //   { type: "gif", src: "/media/cafe-ledger/ai-prefill.gif", alt: "AI 프리필 흐름" },
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
      "라이프스타일/커머스 PWA 프로젝트. 2023년에 진행한 메인 프로젝트 (현재 링크 무효)",
    tech: ["Next.js", "React", "TypeScript"],
    status: "legacy",
    detail: ["팀 협업 개발 경험", "링크 대신 GIF로 핵심 플로우를 정리"],
    media: [
      { type: "gif", src: "/media/holidays/flow-1.gif", alt: "메인 화면" },
      { type: "gif", src: "/media/holidays/flow-2.gif", alt: "로그인 페이지" },
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
