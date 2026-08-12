"use client";

import Link from "next/link";
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { useLocale } from "@/components/layout/LocaleProvider";
import { otherProjects } from "@/constants/projects";
import { HOME_TEXT, LINKS } from "@/constants/home";
import { caseStudies, metrics, stack, strengths, YOUTUBE_VIDEO } from "@/constants/positioning";
import { pick } from "@/lib/i18n";

function VideoPreview() {
  const { locale } = useLocale();
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src="https://www.youtube-nocookie.com/embed/338z1IbviAc?autoplay=1&rel=0"
        title={locale === "ko" ? "일본 시니어 채널 대표 영상" : "Featured Japanese senior channel video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="h-full w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative h-full w-full overflow-hidden bg-zinc-950 text-left"
      aria-label={locale === "ko" ? "대표 영상 재생" : "Play featured video"}
    >
      {/* YouTube's static thumbnail avoids loading the player until the user asks. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://i.ytimg.com/vi/338z1IbviAc/maxresdefault.jpg"
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <span className="absolute bottom-5 left-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl text-zinc-950 shadow-lg transition group-hover:scale-105">
        ▶
      </span>
    </button>
  );
}

export function HomePage() {
  const { locale } = useLocale();
  const t = pick(locale, HOME_TEXT);

  return (
    <PageLayout>
      <section className="grid min-w-0 gap-10 lg:grid-cols-[1.42fr_0.58fr] lg:items-end">
        <div className="min-w-0 space-y-6">
          <p className="max-w-full break-all text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-sm sm:tracking-[0.24em]">{t.eyebrow}</p>
          <h1 className="max-w-full break-all text-[34px] font-semibold leading-[1.16] tracking-tight text-zinc-950 sm:break-keep sm:text-[56px]">{t.title}</h1>
          <p className="max-w-full break-all text-[16px] leading-8 text-zinc-700 sm:max-w-4xl sm:break-keep sm:text-[17px]">{t.meta}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#selected-projects" className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800">{t.projectsCta}</a>
            <a href={`mailto:${LINKS.email}`} className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50">{t.contactCta}</a>
          </div>
        </div>
        <aside className="border-l border-zinc-300 pl-6 text-sm leading-7 text-zinc-600">
          <p className="font-medium text-zinc-950">Han Lee</p>
          <p>{locale === "ko" ? "시장과 니즈를 읽고 직접 실행하는 프로덕트 빌더" : "Product builder finding demand and executing directly"}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-zinc-400">Seoul · Content · Product · Growth</p>
        </aside>
      </section>

      <section aria-labelledby="metrics-title" className="space-y-5">
        <h2 id="metrics-title" className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">{t.metricsTitle}</h2>
        <div className="grid grid-cols-2 overflow-hidden rounded-[28px] border border-zinc-200 bg-white lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <article key={metric.value} className={`min-h-40 p-5 sm:p-6 ${index % 2 === 0 ? "border-r border-zinc-200" : ""} ${index < 2 ? "border-b border-zinc-200 lg:border-b-0" : ""} ${index === 1 ? "lg:border-r" : ""} ${index === 2 ? "lg:border-r" : ""}`}>
              <strong className="block text-[30px] font-semibold tracking-tight text-zinc-950 sm:text-[38px]">{locale === "ko" ? metric.value : metric.enValue}</strong>
              <p className="mt-4 text-sm leading-6 text-zinc-600">{metric.label[locale]}</p>
              {"note" in metric && <p title={metric.note[locale]} className="mt-2 text-xs text-zinc-400">* {metric.note[locale]}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="grid overflow-hidden rounded-[28px] border border-zinc-200 bg-white lg:grid-cols-[1.2fr_0.8fr]">
        <div className="aspect-video min-h-0"><VideoPreview /></div>
        <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Featured Content</p>
            <h2 className="mt-4 break-keep text-[28px] font-semibold tracking-tight text-zinc-950">{t.videoTitle}</h2>
            <p className="mt-4 break-keep text-[15px] leading-7 text-zinc-600">{t.videoDesc}</p>
          </div>
          <a href={YOUTUBE_VIDEO} target="_blank" rel="noreferrer" className="w-fit rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50">{t.videoCta} ↗</a>
        </div>
      </section>

      <section id="selected-projects" className="scroll-mt-28 space-y-8">
        <header className="space-y-2">
          <h2 className="break-keep text-[32px] font-semibold tracking-tight text-zinc-950">{t.selectedTitle}</h2>
          <p className="max-w-3xl break-keep text-base leading-7 text-zinc-600">{t.selectedDesc}</p>
        </header>
        <div className="space-y-5">
          {caseStudies.map((project, index) => (
            <article key={project.slug} className="rounded-[28px] border border-zinc-200 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{String(index + 1).padStart(2, "0")} · {project.category[locale]}</p>
                  <h3 className="mt-2 text-[28px] font-semibold tracking-tight text-zinc-950">{project.name[locale]}</h3>
                </div>
                {project.resultValue && <strong className="text-lg font-semibold text-zinc-950">{project.resultValue}</strong>}
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {[
                  [t.needLabel, project.need[locale]],
                  [t.executionLabel, project.execution[locale]],
                  [t.resultLabel, project.result[locale]],
                ].map(([label, body]) => (
                  <section key={label}>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">{label}</h4>
                    <p className="mt-3 break-keep text-sm leading-7 text-zinc-700">{body}</p>
                  </section>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50">{link.label[locale]} ↗</a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-end"><Link href="/projects" className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800">{locale === "ko" ? "전체 프로젝트 보기" : "View all projects"}</Link></div>
      </section>

      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="max-w-4xl break-keep text-[32px] font-semibold tracking-tight text-zinc-950">{t.aboutTitle}</h2>
          <p className="max-w-3xl break-keep text-base leading-7 text-zinc-600">{t.aboutDesc}</p>
        </header>
        <div className="grid gap-4 lg:grid-cols-3">
          {strengths.map((strength, index) => (
            <article key={strength.title.ko} className="rounded-[28px] border border-zinc-200 bg-white p-6">
              <span className="text-xs font-semibold text-zinc-400">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-semibold text-zinc-950">{strength.title[locale]}</h3>
              <p className="mt-3 break-keep text-sm leading-7 text-zinc-600">{strength.desc[locale]}</p>
            </article>
          ))}
        </div>
        <div className="rounded-[28px] border border-zinc-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{t.stackTitle}</p>
          <div className="mt-4 flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs text-zinc-700">{item}</span>)}</div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <header className="space-y-3">
          <h2 className="break-keep text-[28px] font-semibold tracking-tight text-zinc-950">{t.archiveTitle}</h2>
          <p className="break-keep text-sm leading-7 text-zinc-600">{t.archiveDesc}</p>
        </header>
        <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-2">
          {otherProjects.map((project) => (
            <article key={project.slug} className="border-b border-zinc-200 py-4 last:border-0">
              <div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold text-zinc-950">{project.name[locale]}</h3><span className="text-xs text-zinc-400">{project.year}</span></div>
              <p className="mt-1 text-sm leading-6 text-zinc-600">{project.description[locale]}</p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
