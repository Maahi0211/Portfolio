import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">404</p>
        <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-6 max-w-md text-lg text-foreground-secondary">
          The page you&apos;re looking for may have moved or never existed.
        </p>
        <MagneticButton
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Back to Home
        </MagneticButton>
      </Container>
    </section>
  );
}
