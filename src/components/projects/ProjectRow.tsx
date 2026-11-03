import Link from "next/link";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import type { Project } from "@/types";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <FadeIn>
      <article
        className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Link href={`/projects/${project.slug}`} className="group block">
          <ProjectVisual name={project.name} index={index} image={project.image} />
        </Link>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
            {project.period}
          </p>
          <Link href={`/projects/${project.slug}`} className="group inline-block">
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight transition-opacity group-hover:opacity-70 md:text-5xl">
              {project.name}
            </h2>
          </Link>
          <p className="mt-2 text-base text-foreground-secondary">{project.tagline}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground-secondary">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs text-foreground-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
            >
              View Project
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary transition-colors hover:text-foreground"
            >
              <GitBranch size={14} strokeWidth={1.5} />
              GitHub
            </a>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
