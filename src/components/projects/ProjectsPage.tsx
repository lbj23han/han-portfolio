"use client";

import { UI } from "@/components/ui/projectsPage";
import { projects } from "@/constants/projects";
import { PROJECTS_PAGE_COPY } from "@/constants/pages/projectsPage";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useLocale } from "@/components/layout/LocaleProvider";
import { pick } from "@/lib/i18n";

export function ProjectsPage() {
  const { locale } = useLocale();
  const copy = pick(locale, PROJECTS_PAGE_COPY);

  return (
    <UI.Section>
      <UI.Header>
        <UI.Title>{copy.title}</UI.Title>
        <UI.Description>{copy.description}</UI.Description>
      </UI.Header>

      <UI.List>
        {projects.map((p) => (
          <ProjectCard key={p.name[locale]} project={p} />
        ))}
      </UI.List>

      <UI.FooterRight>
        <UI.BackButton href="/">{copy.backToHome}</UI.BackButton>
      </UI.FooterRight>
    </UI.Section>
  );
}
