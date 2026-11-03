import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { profile } from "@/data/profile";

export function AboutTeaser() {
  return (
    <section className="border-t border-border py-28 md:py-36">
      <Container>
        <FadeIn className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
            A Little About Me
          </p>
          <div>
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
              {profile.bioShort}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
            >
              More about me
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
