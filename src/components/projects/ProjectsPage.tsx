import { projects } from "@/constants/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold mb-2">Projects</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        실제 문제를 해결하기 위해 만들었던 프로젝트들과 현재 진행 중인
        작업들입니다.
      </p>

      <div className="space-y-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
