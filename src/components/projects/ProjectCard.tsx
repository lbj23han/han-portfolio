"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { UI } from "@/components/ui/cardUi";
import type { Project } from "@/constants/projects";
import { projectUiText, statusLabel } from "@/constants/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  const hasDetail = Boolean(project.detail?.length);
  const hasMedia = Boolean(project.media?.length);
  const canExpand = hasDetail || hasMedia;

  const toggleLabel = useMemo(
    () => (expanded ? projectUiText.collapse : projectUiText.viewMore),
    [expanded],
  );

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
          {canExpand && (
            <UI.CardButton
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls={`project-detail-${project.name}`}
            >
              {toggleLabel}
            </UI.CardButton>
          )}

          {/* URL 있을 때 외부 링크 버튼 */}
          {project.url && (
            <UI.CardButton onClick={() => window.open(project.url, "_blank")}>
              {projectUiText.openProject}
            </UI.CardButton>
          )}
        </div>
      </UI.CardRow>

      {/* 확장 영역 */}
      {canExpand && expanded && (
        <div id={`project-detail-${project.name}`} className="mt-4 space-y-3">
          {hasDetail && (
            <ul className="list-disc pl-5 text-sm opacity-90">
              {project.detail!.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          )}

          {hasMedia && <MediaSlider items={project.media!} />}
        </div>
      )}
    </UI.Card>
  );
}

type MediaItem = NonNullable<Project["media"]>[number];

function MediaSlider({ items }: { items: MediaItem[] }) {
  const [i, setI] = useState(0);
  const current = items[i];

  return (
    <div className="rounded-xl border p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm font-medium opacity-90">
          {current.alt ?? `미디어 ${i + 1}`}
        </div>

        <div className="flex gap-2">
          <button
            className="rounded-lg border px-3 py-1 text-sm"
            onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
            aria-label="이전"
            type="button"
          >
            ←
          </button>
          <button
            className="rounded-lg border px-3 py-1 text-sm"
            onClick={() => setI((v) => (v + 1) % items.length)}
            aria-label="다음"
            type="button"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-lg">
        <Image
          src={current.src}
          alt={current.alt ?? ""}
          width={1200}
          height={675}
          className="h-auto w-full"
          priority={i === 0} // 첫 이미지는 LCP 개선
          unoptimized={current.type === "gif"} // GIF는 최적화 끄는 게 안전
        />
      </div>

      {/* 점 네비게이션 */}
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full border ${
              idx === i ? "opacity-100" : "opacity-40"
            }`}
            aria-label={`미디어 ${idx + 1} 보기`}
          />
        ))}
      </div>
    </div>
  );
}
