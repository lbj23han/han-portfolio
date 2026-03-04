"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { UI } from "@/components/ui/cardUi";
import type { Project } from "@/constants/projects";
import { projectUiText, statusLabel } from "@/constants/projects";
import { useLocale } from "@/components/layout/LocaleProvider";
import { pick } from "@/lib/i18n";

type Props = {
  project: Project;
};

function toSafeId(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "") // 한글/영문/숫자/공백/- 외 제거
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

export function ProjectCard({ project }: Props) {
  const { locale } = useLocale();
  const ui = pick(locale, projectUiText);
  const status = pick(locale, statusLabel);

  const [expanded, setExpanded] = useState(false);

  const hasDetail = Boolean(project.detail?.length);
  const hasMedia = Boolean(project.media?.length);
  const canExpand = hasDetail || hasMedia;

  const toggleLabel = useMemo(
    () => (expanded ? ui.collapse : ui.viewMore),
    [expanded, ui.collapse, ui.viewMore],
  );

  const title = project.name[locale];
  const description = project.description[locale];
  const detail = project.detail?.map((d) => d[locale]) ?? [];

  const detailId = `project-detail-${toSafeId(title)}`;

  return (
    <UI.Card>
      <UI.CardHeader>
        <UI.CardTitle>{title}</UI.CardTitle>
        <UI.CardBadge>{status[project.status]}</UI.CardBadge>
      </UI.CardHeader>

      <UI.CardDescription>{description}</UI.CardDescription>

      <UI.CardRow>
        <UI.CardSubtext>{project.tech.join(" · ")}</UI.CardSubtext>

        <div className="flex items-baseline gap-2">
          {canExpand && (
            <UI.CardButton
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls={detailId}
            >
              {toggleLabel}
            </UI.CardButton>
          )}

          {project.url && (
            <UI.CardButton onClick={() => window.open(project.url, "_blank")}>
              {ui.openProject}
            </UI.CardButton>
          )}
        </div>
      </UI.CardRow>

      {canExpand && expanded && (
        <div id={detailId} className="mt-4 space-y-3">
          {hasDetail && (
            <ul className="list-disc pl-5 text-sm opacity-90">
              {detail.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          )}

          {project.github && (
            <div className="pt-2 flex justify-end">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline underline-offset-2 opacity-80 hover:opacity-100"
              >
                {ui.openGithub}
              </a>
            </div>
          )}

          {hasMedia && <MediaSlider items={project.media!} />}
        </div>
      )}
    </UI.Card>
  );
}

type MediaItem = NonNullable<Project["media"]>[number];

function MediaSlider({ items }: { items: MediaItem[] }) {
  const { locale } = useLocale();
  const ui = pick(locale, projectUiText);

  const [i, setI] = useState(0);
  const current = items[i];

  const fallbackAlt = locale === "ko" ? `미디어 ${i + 1}` : `Media ${i + 1}`;
  const prevAria = locale === "ko" ? "이전" : "Previous";
  const nextAria = locale === "ko" ? "다음" : "Next";
  const dotAria =
    locale === "ko" ? `미디어 ${i + 1} 보기` : `View media ${i + 1}`;

  return (
    <div className="rounded-xl border p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm font-medium opacity-90">
          {current.alt ?? fallbackAlt}
        </div>

        <div className="flex gap-2">
          <button
            className="rounded-lg border px-3 py-1 text-sm"
            onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
            aria-label={prevAria}
            type="button"
          >
            ←
          </button>
          <button
            className="rounded-lg border px-3 py-1 text-sm"
            onClick={() => setI((v) => (v + 1) % items.length)}
            aria-label={nextAria}
            type="button"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-lg">
        <div className="relative mx-auto w-[80vw] max-w-full h-[45vh] max-h-[480px]">
          <Image
            src={current.src}
            alt={current.alt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-contain"
            priority={i === 0}
            unoptimized={current.type === "gif"}
          />
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full border ${
              idx === i ? "opacity-100" : "opacity-40"
            }`}
            aria-label={dotAria}
            title={ui.openMedia}
          />
        ))}
      </div>
    </div>
  );
}
