type Project = {
  name: string;
  description: string;
  tech: string[];
  status: "in-progress" | "done" | "legacy";
};

const projects: Project[] = [
  {
    name: "Cafe Ledger",
    description: "부서별 예치금/미수금 관리용 카페 내부 가계부 웹앱",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "in-progress",
  },
  {
    name: "Holidays",
    description:
      "라이프스타일/커머스 PWA 프로젝트. 2023년에 진행한 메인 프로젝트",
    tech: ["Next.js", "React"],
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

const statusLabel: Record<Project["status"], string> = {
  "in-progress": "진행 중",
  done: "완료",
  legacy: "과거 프로젝트",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold mb-2">Projects</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        실제 문제를 해결하기 위해 만들었던 프로젝트들과 현재 진행 중인
        작업들입니다.
      </p>

      <div className="space-y-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-white dark:bg-zinc-900/60"
          >
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {p.name}
              </h2>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-300">
                {statusLabel[p.status]}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">
              {p.description}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {p.tech.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
