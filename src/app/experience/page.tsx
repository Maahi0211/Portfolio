import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ExperienceTimeline, type TimelineItem } from "@/components/sections/ExperienceTimeline";
import { pageMetadata } from "@/lib/metadata";
import { experience, certifications } from "@/data/experience";

export const metadata: Metadata = pageMetadata(
  "Experience",
  "Professional experience — database migration, cloud infrastructure, and system reliability work at Cognizant Technology Solutions."
);

const FOCUS_AREAS = [
  {
    title: "Database Migration",
    detail:
      "Source-to-target analysis and validation across schemas, database size, and regions for international clients.",
  },
  {
    title: "Cross-Team Coordination",
    detail: "Working with DBA, AWS/Azure, OS, and architecture teams to track and unblock migration activities.",
  },
  {
    title: "Production Support",
    detail: "Managing tickets and workflows through ServiceNow to keep migrations visible and on schedule.",
  },
  {
    title: "Technical Documentation",
    detail: "Preparing migration plans, reports, and documentation for review and approval by application owners.",
  },
];

const timelineItems: TimelineItem[] = experience.map((e) => ({
  org: e.company,
  role: e.role,
  period: `${e.start} — ${e.end}`,
  bullets: e.responsibilities,
  tech: e.technologies,
}));

export default function ExperiencePage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Where I&apos;ve made an impact.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-foreground-secondary">
              Backend engineering, database migrations, cloud infrastructure, and the production
              support work that keeps systems reliable.
            </p>
          </FadeIn>

          <div className="mt-20 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {FOCUS_AREAS.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.05} className="border-t border-border pt-6">
                <span className="text-xs text-foreground-secondary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-secondary">
                  {area.detail}
                </p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              Professional Experience
            </p>
          </FadeIn>
          <div className="mt-14">
            <ExperienceTimeline items={timelineItems} />
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              Certifications
            </p>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-10 flex flex-col divide-y divide-border border-t border-border">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="text-base text-foreground">{cert.name}</p>
                <p className="text-sm text-foreground-secondary">{cert.year}</p>
              </div>
            ))}
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
