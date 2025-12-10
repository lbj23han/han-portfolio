export type ProjectStatus = "in-progress" | "done" | "legacy";

export const projectUiText = {
  openProject: "링크로 이동",
};

export const statusLabel: Record<ProjectStatus, string> = {
  "in-progress": "진행 중",
  done: "완료",
  legacy: "과거 프로젝트",
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Cafe Ledger",
    description: "부서별 예치금/미수금 관리용 카페 내부 가계부 웹앱",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "in-progress",
  },
  {
    name: "FcSquadMeter",
    description: "fconline 데이터 비교 웹앱",
    tech: ["Next.js", "React", "Tailwind", "TypeScript"],
    status: "in-progress",
    url: "https://fcsquadmeter.vercel.app",
  },
  {
    name: "Holidays",
    description:
      "라이프스타일/커머스 PWA 프로젝트. 2023년에 진행한 메인 프로젝트",
    tech: ["Next.js", "React", "TypeScript"],
    status: "legacy",
  },
  {
    name: "Toy Projects x4",
    description:
      "메뉴 계산/예약/툴 형태의 토이 프로젝트 4개 (구현/모듈화 경험)",
    tech: ["React", "TypeScript"],
    status: "done",
  },
];
