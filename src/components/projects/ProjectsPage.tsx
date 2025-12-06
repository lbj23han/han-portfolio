import { projects } from "@/constants/projects";
import { PROJECTS_PAGE_COPY } from "@/constants/pages/projectsPage";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold mb-2">{PROJECTS_PAGE_COPY.title}</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {PROJECTS_PAGE_COPY.description}
      </p>

      <div className="space-y-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
