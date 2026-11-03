import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ClosingCTA() {
  return (
    <section className="border-t border-border py-28 md:py-40">
      <Container>
        <FadeIn className="flex flex-col items-start gap-10">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Have something interesting in mind? Let&apos;s build it.
          </h2>
          <MagneticButton
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Get In Touch
          </MagneticButton>
        </FadeIn>
      </Container>
    </section>
  );
}
