import { FadeIn } from "@/components/ui/FadeIn";

export interface TimelineItem {
  org: string;
  role: string;
  period: string;
  bullets: string[];
  tech?: string[];
}

export function ExperienceTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative flex flex-col gap-16 border-l border-border pl-8 md:pl-12">
      {items.map((item, i) => (
        <FadeIn as="div" key={`${item.org}-${i}`} delay={i * 0.06}>
          <li className="relative">
            <span className="absolute -left-[2.3rem] top-1.5 h-2.5 w-2.5 rounded-full border border-foreground bg-background md:-left-[3.3rem]" />
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              {item.period}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {item.role}
            </h3>
            <p className="mt-1 text-base text-foreground-secondary">{item.org}</p>
            <ul className="mt-5 flex max-w-2xl flex-col gap-3">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed text-foreground-secondary [text-wrap:pretty]"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            {item.tech && item.tech.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}
