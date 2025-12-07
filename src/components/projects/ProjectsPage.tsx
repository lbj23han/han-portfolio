import { UI } from "@/components/ui/projectsPage";
import { projects } from "@/constants/projects";
import { PROJECTS_PAGE_COPY } from "@/constants/pages/projectsPage";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsPage() {
  return (
    <UI.Section>
      <UI.Title>{PROJECTS_PAGE_COPY.title}</UI.Title>
      <UI.Description>{PROJECTS_PAGE_COPY.description}</UI.Description>

      <UI.List>
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </UI.List>
    </UI.Section>
  );
}
