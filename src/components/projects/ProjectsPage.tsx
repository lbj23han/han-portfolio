"use client";

import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useLocale } from "@/components/layout/LocaleProvider";
import { otherProjects, privateProjects } from "@/constants/projects";
import { caseStudies } from "@/constants/positioning";

export function ProjectsPage() {
  const { locale } = useLocale();
  const archive = [...otherProjects, ...privateProjects];

  return (
    <PageLayout>
      <section className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Portfolio</p>
        <h1 className="max-w-5xl break-keep text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[52px]">{locale === "ko" ? "수요를 발견하고, 직접 실행하고, 데이터로 검증한 프로젝트" : "Projects where I found demand, executed directly, and validated with data"}</h1>
        <p className="max-w-3xl break-keep text-lg leading-8 text-zinc-600">{locale === "ko" ? "기능 목록보다 시장의 신호를 어떻게 읽었고 실제 반응과 유료 전환까지 어떻게 연결했는지에 집중했습니다." : "Focused on how I read market signals and connected execution to real engagement and paid conversion, rather than listing features."}</p>
      </section>

      <section className="space-y-5">
        {caseStudies.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <header>
          <h2 className="text-[28px] font-semibold tracking-tight text-zinc-950">{locale === "ko" ? "아카이브" : "Archive"}</h2>
          <p className="mt-3 break-keep text-sm leading-7 text-zinc-600">{locale === "ko" ? "학습과 가설 검증을 위해 만든 이전 작업과 비공개 자동화 시스템입니다." : "Earlier work and private automation systems built for learning and hypothesis testing."}</p>
        </header>
        <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-2">
          {archive.map((project) => (
            <article key={project.slug} className="border-b border-zinc-200 py-5 last:border-0">
              <div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-semibold text-zinc-950">{project.name[locale]}</h3><span className="text-xs text-zinc-400">{project.year}</span></div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{project.description[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="flex justify-end"><Link href="/" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50">← {locale === "ko" ? "홈" : "Home"}</Link></div>
    </PageLayout>
  );
}
