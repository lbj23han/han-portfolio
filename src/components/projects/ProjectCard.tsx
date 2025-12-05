import type { Project } from "@/constants/projects";
import { statusLabel } from "@/constants/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-white dark:bg-zinc-900/60">
      <div className="flex items-center justify-between mb-1">
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
          {project.name}
        </h2>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-300">
          {statusLabel[project.status]}
        </span>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">
        {project.description}
      </p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        {project.tech.join(" · ")}
      </p>
    </article>
  );
}
