import Link from "next/link";
import type { ReactNode } from "react";

interface AnimatedUnderlineLinkProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
  external?: boolean;
}

export function AnimatedUnderlineLink({
  href,
  children,
  active = false,
  className = "",
  external = false,
}: AnimatedUnderlineLinkProps) {
  const base =
    "relative inline-block pb-1 text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-foreground after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";
  const scale = active ? "after:scale-x-100" : "after:scale-x-0";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${scale} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${scale} ${className}`}>
      {children}
    </Link>
  );
}
