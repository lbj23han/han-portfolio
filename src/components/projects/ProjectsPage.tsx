import { UI } from "@/components/ui/projectsPage";
import { projects } from "@/constants/projects";
import { PROJECTS_PAGE_COPY } from "@/constants/pages/projectsPage";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsPage() {
  return (
    <UI.Section>
      <UI.Header>
        <UI.Title>{PROJECTS_PAGE_COPY.title}</UI.Title>
        <UI.Description>{PROJECTS_PAGE_COPY.description}</UI.Description>
      </UI.Header>

      <UI.List>
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </UI.List>

      <UI.FooterRight>
        <UI.BackButton href="/">{PROJECTS_PAGE_COPY.backToHome}</UI.BackButton>
      </UI.FooterRight>
    </UI.Section>
  );
}
