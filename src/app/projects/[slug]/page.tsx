import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, GitBranch } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { projects, getProjectBySlug } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return pageMetadata("Project", "Project not found.");
  return pageMetadata(project.name, project.description);
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            All projects
          </Link>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              {project.period}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-3 max-w-lg text-lg text-foreground-secondary">{project.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-foreground/50"
            >
              <GitBranch size={14} strokeWidth={1.5} />
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-85"
              >
                Live Demo
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-16">
          <ProjectVisual
            name={project.name}
            index={index}
            image={project.image}
            aspectClassName="aspect-video"
          />
        </FadeIn>

        <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              The Problem
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground-secondary">
              {project.problem}
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              My Contribution
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground-secondary">
              {project.contribution}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-20 border-t border-border pt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
            Technology Stack
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs text-foreground-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-28 flex flex-col items-start gap-6 border-t border-border pt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
            Next Project
          </p>
          <MagneticButton
            href={`/projects/${next.slug}`}
            className="font-display text-3xl font-semibold tracking-tight transition-opacity hover:opacity-70 md:text-5xl"
          >
            {next.name} →
          </MagneticButton>
        </FadeIn>
      </Container>
    </article>
  );
}
