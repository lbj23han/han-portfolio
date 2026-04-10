"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

export function ProjectCard({ project }: Props) {
  const { locale } = useLocale();
  const ui = pick(locale, projectUiText);
  const status = pick(locale, statusLabel);
  const [expanded, setExpanded] = useState(false);

  const toggleLabel = useMemo(
    () => (expanded ? ui.collapse : ui.viewMore),
    [expanded, ui.collapse, ui.viewMore],
  );

  const title = project.name[locale];
  const detailId = `project-detail-${toSafeId(title)}`;
  const sectionCount = project.sections?.length ?? 0;

  return (
    <article className="rounded-[28px] border border-zinc-200 bg-white px-6 py-7">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
          {project.tier === "featured"
            ? ui.featuredLabel
            : project.tier === "private"
              ? ui.privateLabel
              : ui.otherLabel}
        </span>
        <span className="text-zinc-300">·</span>
        <span className="text-xs text-zinc-500">
          {status[project.status]}
        </span>
        <span className="text-zinc-300">·</span>
        <span className="text-sm text-zinc-500">{project.year}</span>
      </div>

      <div className="mt-5 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-5">
          <div className="space-y-3">
            <h2 className="text-[30px] font-semibold tracking-tight text-zinc-950">
              {title}
            </h2>
            <p className="text-sm font-medium text-zinc-500">
              {project.tagline[locale]}
            </p>
            <p className="text-[15px] leading-7 text-zinc-700">
              {project.description[locale]}
            </p>
            <p className="text-sm text-zinc-500">{project.role[locale]}</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
              {ui.highlights}
            </p>
            <ul className="space-y-2.5 text-sm leading-6 text-zinc-700">
              {project.highlights.slice(0, 2).map((highlight) => (
                <li key={highlight.ko} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{highlight[locale]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
              {ui.stack}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-3 py-1 text-xs text-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.links?.length ?? 0) > 0 && (
            <div className="rounded-2xl bg-zinc-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                {ui.links}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
                  >
                    {link.label[locale]}
                  </a>
                ))}
              </div>
            </div>
          )}

          {sectionCount > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls={detailId}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              {toggleLabel}
            </button>
          )}
        </div>
      </div>

      {expanded && sectionCount > 0 && (
        <div id={detailId} className="mt-8 space-y-6 border-t border-zinc-200 pt-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
              {ui.docs}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {project.sections?.map((section) => (
                <section
                  key={section.title.ko}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
                >
                  <h3 className="text-sm font-semibold text-zinc-950">
                    {section.title[locale]}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                    {section.items.map((item) => (
                      <li key={item.ko} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                        <span>{item[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>

          {(project.media?.length ?? 0) > 0 && <MediaSlider items={project.media!} />}
        </div>
      )}
    </article>
  );
}

type MediaItem = NonNullable<Project["media"]>[number];

function MediaSlider({ items }: { items: MediaItem[] }) {
  const { locale } = useLocale();
  const ui = pick(locale, projectUiText);
  const [index, setIndex] = useState(0);
  const current = items[index];

  const fallbackAlt =
    locale === "ko" ? `프로젝트 미디어 ${index + 1}` : `Project media ${index + 1}`;
  const prevAria = locale === "ko" ? "이전 이미지" : "Previous image";
  const nextAria = locale === "ko" ? "다음 이미지" : "Next image";

  return (
    <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-zinc-700">
          {current.alt ?? fallbackAlt}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={prevAria}
            onClick={() => setIndex((value) => (value - 1 + items.length) % items.length)}
            className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-700 transition hover:bg-zinc-100"
          >
            ←
          </button>
          <button
            type="button"
            aria-label={nextAria}
            onClick={() => setIndex((value) => (value + 1) % items.length)}
            className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-700 transition hover:bg-zinc-100"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl bg-white">
        <div className="relative h-[320px] w-full sm:h-[420px]">
          <Image
            src={current.src}
            alt={current.alt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-contain"
            priority={index === 0}
            unoptimized={current.type === "gif"}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item, itemIndex) => (
          <button
            key={`${item.src}-${itemIndex}`}
            type="button"
            onClick={() => setIndex(itemIndex)}
            title={ui.openMedia}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              itemIndex === index
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-300 bg-white text-zinc-500"
            }`}
          >
            {itemIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
