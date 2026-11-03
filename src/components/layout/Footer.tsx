import Link from "next/link";
import { profile } from "@/data/profile";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: profile.social.github },
  { label: "LinkedIn", href: profile.social.linkedin },
  { label: "LeetCode", href: profile.social.leetcode },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-display text-xl font-semibold tracking-tight">
              Mahi Patel
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-secondary">
              Software engineer building scalable systems and thoughtful digital experiences.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-secondary">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-secondary transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-secondary">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground-secondary transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-foreground-secondary transition-colors hover:text-foreground"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 text-xs text-foreground-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Mahi Patel. All rights reserved.</p>
          <p>Designed &amp; built with curiosity.</p>
        </div>
      </div>
    </footer>
  );
}
