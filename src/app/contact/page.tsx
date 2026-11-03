import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { CopyEmail } from "@/components/contact/CopyEmail";
import { pageMetadata } from "@/lib/metadata";
import { profile } from "@/data/profile";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Get in touch with Mahi Patel — email, LinkedIn, GitHub, or LeetCode."
);

const LINKS = [
  { label: "GitHub", href: profile.social.github },
  { label: "LinkedIn", href: profile.social.linkedin },
  { label: "LeetCode", href: profile.social.leetcode },
];

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Let&apos;s make something meaningful.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-foreground-secondary">
            Have an interesting idea, opportunity, or just want to talk about technology? My
            inbox is always open.
          </p>
        </FadeIn>

        <div className="mt-20 flex flex-col gap-14">
          <FadeIn delay={0.08}>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">Email</p>
            <div className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl">
              <CopyEmail email={profile.email} />
            </div>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              Elsewhere
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-display text-2xl font-medium tracking-tight text-foreground-secondary transition-colors hover:text-foreground md:text-3xl"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
