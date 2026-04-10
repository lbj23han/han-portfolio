"use client";

import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  featuredProjects,
  otherProjects,
  privateProjects,
} from "@/constants/projects";
import { PROJECTS_PAGE_COPY } from "@/constants/pages/projectsPage";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useLocale } from "@/components/layout/LocaleProvider";
import { pick } from "@/lib/i18n";

function CompactProjectLine({
  title,
  year,
  description,
}: {
  title: string;
  year: string;
  description: string;
}) {
  return (
    <article className="border-b border-zinc-200 py-4 last:border-b-0">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-base font-semibold text-zinc-950">{title}</h3>
        <span className="text-xs uppercase tracking-[0.16em] text-zinc-400">
          {year}
        </span>
      </div>
      <p className="mt-1 text-sm leading-6 text-zinc-600">{description}</p>
    </article>
  );
}

export function ProjectsPage() {
  const { locale } = useLocale();
  const copy = pick(locale, PROJECTS_PAGE_COPY);

  return (
    <PageLayout>
      <section className="space-y-16">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
            {copy.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-zinc-600">
            {copy.description}
          </p>
        </header>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              {copy.featuredTitle}
            </h2>
            <p className="text-base leading-7 text-zinc-600">
              {copy.featuredDesc}
            </p>
          </div>

          <div className="space-y-5">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                {copy.otherTitle}
              </h2>
              <p className="text-base leading-7 text-zinc-600">
                {copy.otherDesc}
              </p>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-2">
              {otherProjects.map((project) => (
                <CompactProjectLine
                  key={project.slug}
                  title={project.name[locale]}
                  year={project.year}
                  description={project.description[locale]}
                />
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                {copy.privateTitle}
              </h2>
              <p className="text-base leading-7 text-zinc-600">
                {copy.privateDesc}
              </p>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-2">
              {privateProjects.map((project) => (
                <CompactProjectLine
                  key={project.slug}
                  title={project.name[locale]}
                  year={project.year}
                  description={project.description[locale]}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="flex justify-end">
          <Link
            href="/"
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
          >
            {copy.backToHome}
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
