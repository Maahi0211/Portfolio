import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { featuredProjects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="selected-work" className="py-28 md:py-36">
      <Container>
        <FadeIn className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              Selected Work
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Things I&apos;ve built.
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden shrink-0 items-center gap-1.5 text-sm text-foreground-secondary transition-colors hover:text-foreground md:flex"
          >
            View all projects
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </FadeIn>

        <div className="mt-20 flex flex-col gap-28">
          {featuredProjects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <FadeIn key={project.slug} delay={0.05}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <ProjectVisual name={project.name} index={i} image={project.image} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
                      {project.period}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-base text-foreground-secondary">{project.tagline}</p>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground-secondary">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-3 py-1 text-xs text-foreground-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                      View project
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
