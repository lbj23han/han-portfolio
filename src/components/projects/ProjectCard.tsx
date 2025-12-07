import { UI } from "../ui/Card";
import type { Project } from "@/constants/projects";
import { statusLabel } from "@/constants/projects";

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

      <UI.CardSubtext>{project.tech.join(" · ")}</UI.CardSubtext>
    </UI.Card>
  );
}
