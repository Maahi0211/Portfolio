import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectRow } from "@/components/projects/ProjectRow";
import { pageMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";

export const metadata: Metadata = pageMetadata(
  "Projects",
  "A collection of things Mahi Patel has built, experimented with, and learned from."
);

export default function ProjectsPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Selected work.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-foreground-secondary">
            A collection of things I&apos;ve built, experimented with, and learned from.
          </p>
        </FadeIn>

        <div className="mt-24 flex flex-col gap-28">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
