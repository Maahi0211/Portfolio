import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { techExpertiseFlat } from "@/data/techStack";

export function TechExpertise() {
  return (
    <section className="border-t border-border py-28 md:py-36">
      <Container>
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
            Technical Expertise
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-10 flex flex-wrap gap-x-5 gap-y-3 md:gap-x-7">
          {techExpertiseFlat.map((tech) => (
            <span
              key={tech}
              className="font-display text-3xl font-medium tracking-tight text-foreground-secondary transition-colors duration-300 hover:text-foreground md:text-5xl"
            >
              {tech}
            </span>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}
