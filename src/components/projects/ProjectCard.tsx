"use client";

import type { CaseStudy } from "@/constants/positioning";
import { HOME_TEXT } from "@/constants/home";
import { useLocale } from "@/components/layout/LocaleProvider";
import { pick } from "@/lib/i18n";

export function ProjectCard({ project, index }: { project: CaseStudy; index: number }) {
  const { locale } = useLocale();
  const t = pick(locale, HOME_TEXT);

  return (
    <article id={project.slug} className="scroll-mt-28 rounded-[28px] border border-zinc-200 bg-white p-6 sm:p-8">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-200 pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{String(index + 1).padStart(2, "0")} · {project.category[locale]}</p>
          <h2 className="mt-3 text-[30px] font-semibold tracking-tight text-zinc-950 sm:text-[36px]">{project.name[locale]}</h2>
        </div>
        {project.resultValue && <strong className="text-xl font-semibold tracking-tight text-zinc-950">{project.resultValue}</strong>}
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {[
          [t.needLabel, project.need[locale]],
          [t.executionLabel, project.execution[locale]],
          [t.resultLabel, project.result[locale]],
        ].map(([label, content]) => (
          <section key={label} className="lg:border-r lg:border-zinc-200 lg:pr-6 lg:last:border-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">{label}</h3>
            <p className="mt-3 break-keep text-sm leading-7 text-zinc-700">{content}</p>
          </section>
        ))}
      </div>

      <footer className="mt-7 flex flex-wrap gap-2">
        {project.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50">{link.label[locale]} ↗</a>
        ))}
      </footer>
    </article>
  );
}
