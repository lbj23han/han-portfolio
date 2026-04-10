"use client";

import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  featuredProjects,
  otherProjects,
  privateProjects,
  type Project,
} from "@/constants/projects";
import { CTA_TEXT, HOME_TEXT, LINKS } from "@/constants/home";
import { useLocale } from "@/components/layout/LocaleProvider";
import { pick } from "@/lib/i18n";

function ProjectPreviewCard({ project }: { project: Project }) {
  const { locale } = useLocale();

  return (
    <article className="rounded-[28px] border border-zinc-200 bg-white px-6 py-7">
      <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
        <span className="text-xs font-semibold uppercase tracking-[0.16em]">
          {project.year}
        </span>
        <span>·</span>
        <span>{project.role[locale]}</span>
      </div>

      <div className="mt-4 space-y-2.5">
        <h3 className="text-[28px] font-semibold tracking-tight text-zinc-950">
          {project.name[locale]}
        </h3>
        <p className="text-sm font-medium text-zinc-500">
          {project.tagline[locale]}
        </p>
        <p className="text-[15px] leading-7 text-zinc-700">
          {project.description[locale]}
        </p>
      </div>

      <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-700">
        {project.highlights.slice(0, 1).map((highlight) => (
          <li key={highlight.ko} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>{highlight[locale]}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {(project.links ?? []).slice(0, 2).map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
          >
            {link.label[locale]}
          </a>
        ))}
      </div>
    </article>
  );
}

function CompactProjectRow({ project }: { project: Project }) {
  const { locale } = useLocale();

  return (
    <article className="border-b border-zinc-200 py-4 last:border-b-0">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-base font-semibold text-zinc-950">
          {project.name[locale]}
        </h3>
        <span className="text-xs uppercase tracking-[0.16em] text-zinc-400">
          {project.year}
        </span>
      </div>
      <p className="mt-1 text-sm leading-6 text-zinc-600">
        {project.description[locale]}
      </p>
    </article>
  );
}

export function HomePage() {
  const { locale } = useLocale();
  const t = pick(locale, HOME_TEXT);
  const cta = pick(locale, CTA_TEXT);

  return (
    <PageLayout>
      <section className="grid gap-10 lg:grid-cols-[1.45fr_0.7fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
            {t.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-950 sm:text-[54px]">
            {t.title}
          </h1>
          <p className="text-base font-medium text-zinc-500 sm:text-[17px]">
            {t.meta}
          </p>
          <p className="max-w-3xl text-[17px] leading-8 text-zinc-700">
            {t.desc}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={LINKS.projects}
              className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              {cta.projects}
            </Link>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              {cta.github}
            </a>
            <a
              href={LINKS.blog}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              {cta.blog}
            </a>
          </div>
        </div>

        <aside className="rounded-[28px] border border-zinc-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
            {t.aboutLabel}
          </p>
          <div className="mt-5 space-y-5">
            {t.capabilityCards.map((card) => (
              <div key={card.title} className="space-y-1.5">
                <h2 className="text-base font-semibold text-zinc-950">{card.title}</h2>
                <p className="text-sm leading-6 text-zinc-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-[30px] font-semibold tracking-tight text-zinc-950">
            {t.selectedTitle}
          </h2>
          <p className="max-w-3xl text-base leading-7 text-zinc-600">
            {t.selectedDesc}
          </p>
        </div>

        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <ProjectPreviewCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-[28px] font-semibold tracking-tight text-zinc-950">
              {t.otherTitle}
            </h2>
            <p className="text-base leading-7 text-zinc-600">{t.otherDesc}</p>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-2">
            {otherProjects.map((project) => (
              <CompactProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-[28px] border border-zinc-200 bg-white p-6">
            <div className="space-y-2">
              <h2 className="text-[28px] font-semibold tracking-tight text-zinc-950">
                {t.privateTitle}
              </h2>
              <p className="text-base leading-7 text-zinc-600">
                {t.privateDesc}
              </p>
            </div>
            <div className="mt-4">
              {privateProjects.map((project) => (
                <CompactProjectRow key={project.slug} project={project} />
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-zinc-200 bg-white p-6">
            <div className="space-y-2">
              <h2 className="text-[28px] font-semibold tracking-tight text-zinc-950">
                {t.writingTitle}
              </h2>
              <p className="text-base leading-7 text-zinc-600">
                {t.writingDesc}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={LINKS.blog}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
              >
                {cta.blog}
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
              >
                {cta.linkedin}
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
              >
                {cta.emailLabel}
              </a>
            </div>
          </section>
        </div>
      </section>
    </PageLayout>
  );
}
