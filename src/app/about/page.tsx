import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ExperienceTimeline, type TimelineItem } from "@/components/sections/ExperienceTimeline";
import { pageMetadata } from "@/lib/metadata";
import { profile } from "@/data/profile";
import { experience, education, achievements } from "@/data/experience";
import { techStack } from "@/data/techStack";

export const metadata: Metadata = pageMetadata(
  "About",
  "Software engineer background, journey, and the technologies I work with — from Mahi Patel's portfolio."
);

const CAPABILITIES = [
  {
    title: "Backend Engineering",
    detail:
      "Building reliable APIs and services with Spring Boot and .NET — from Pockit's expense-tracking backend to FoodEase's real-time order management system.",
  },
  {
    title: "System Design",
    detail:
      "Thinking in terms of data flow, failure modes, and scale, informed by hands-on database migration work across environments at Cognizant.",
  },
  {
    title: "Database Architecture",
    detail:
      "Designing schemas and performing source-to-target analysis across MongoDB, MySQL, and enterprise database migrations.",
  },
  {
    title: "Full Stack Development",
    detail:
      "Shipping complete products end to end — Next.js and React Native front ends paired with Spring Boot and Flask backends.",
  },
  {
    title: "Cloud & Infrastructure",
    detail:
      "Working across AWS and Azure, coordinating migration activities, and contributing to cloud workshops as a GDSC Cloud Core team member.",
  },
];

const BEYOND = [
  {
    title: "Cloud Community",
    detail: "GDSC-AITR Cloud Core team member — contributing to cloud workshops and technical sessions.",
  },
  {
    title: "Technical Writing",
    detail: "IEEE-AITR technical content creator — authoring articles on software engineering topics.",
  },
  {
    title: "Competitive Programming",
    detail: "LeetCode Knight badge holder with a contest rating of 1914.",
  },
];

const timelineItems: TimelineItem[] = [
  ...experience.map((e) => ({
    org: e.company,
    role: e.role,
    period: `${e.start} — ${e.end}`,
    bullets: e.responsibilities,
    tech: e.technologies,
  })),
  ...education.map((e) => ({
    org: e.institution,
    role: e.degree,
    period: `${e.start} — ${e.end}`,
    bullets: [e.detail],
  })),
];

export default function AboutPage() {
  return (
    <>
      <section className="pb-20 pt-20 md:pb-28 md:pt-28">
        <Container>
          <FadeIn>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              More than just lines of code.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10 grid gap-6 md:grid-cols-2 md:gap-16">
            {profile.bioLong.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-foreground-secondary"
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <FadeIn className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              My Journey
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground-secondary">
              My path into engineering started in the classroom at Acropolis Institute of
              Technology and Research, but it was community that shaped most of it — joining
              GDSC as a Cloud Core team member and writing for IEEE pulled me into cloud
              infrastructure and technical communication early. That same curiosity carried into
              a string of self-directed projects before landing at Cognizant, where I now work on
              database migration and modernization for international clients.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              What I Do
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {CAPABILITIES.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.05} className="border-t border-border pt-6">
                <span className="text-xs text-foreground-secondary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {cap.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-secondary">
                  {cap.detail}
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
              Beyond Engineering
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BEYOND.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="flex h-full flex-col justify-between border border-border p-8">
                  <span className="font-display text-4xl font-semibold tracking-tight text-foreground/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-10">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          {achievements.length > 0 && (
            <FadeIn delay={0.2} className="mt-10 max-w-2xl text-xs text-foreground-secondary">
              Also: {achievements.map((a) => a.title).join(" · ")}.
            </FadeIn>
          )}
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              Tech Stack
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {techStack.map((group, i) => (
              <FadeIn key={group.label} delay={i * 0.04} className="border-t border-border pt-6">
                <h3 className="text-sm font-medium text-foreground">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs text-foreground-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              Experience Timeline
            </p>
          </FadeIn>
          <div className="mt-14">
            <ExperienceTimeline items={timelineItems} />
          </div>
        </Container>
      </section>
    </>
  );
}
