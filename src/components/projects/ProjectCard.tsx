"use client";

import { UI } from "@/components/ui/cardUi";
import type { Project } from "@/constants/projects";
import { projectUiText, statusLabel } from "@/constants/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <UI.Card>
      <UI.CardHeader>
        <UI.CardTitle>{project.name}</UI.CardTitle>
        <UI.CardBadge>{statusLabel[project.status]}</UI.CardBadge>
      </UI.CardHeader>

      <UI.CardDescription>{project.description}</UI.CardDescription>

      <UI.CardRow>
        <UI.CardSubtext>{project.tech.join(" · ")}</UI.CardSubtext>

        {project.url && (
          <UI.CardButton onClick={() => window.open(project.url, "_blank")}>
            {projectUiText.openProject}
          </UI.CardButton>
        )}
      </UI.CardRow>
    </UI.Card>
  );
}
