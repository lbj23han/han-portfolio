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

        <div className="flex items-baseline gap-2">
          <UI.CardButton
            onClick={() => {
              // TODO: 나중에 여기서 모달 열기 / 카드 확장 로직 추가
              console.log("자세히 보기:", project.name);
            }}
          >
            {"자세히 보기"}
          </UI.CardButton>

          {/* 🌐 URL 있을 때만 외부 링크 버튼 */}
          {project.url && (
            <UI.CardButton onClick={() => window.open(project.url, "_blank")}>
              {projectUiText.openProject}
            </UI.CardButton>
          )}
        </div>
      </UI.CardRow>
    </UI.Card>
  );
}
