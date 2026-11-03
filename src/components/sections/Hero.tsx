"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";

const lineVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 64]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden"
    >
      <Container className="w-full">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            {profile.available && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-foreground-secondary"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/60 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
                </span>
                Available for opportunities
              </motion.div>
            )}

            <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.98] tracking-tight text-foreground">
              {profile.heroHeadline.map((line, i) => (
                <motion.span
                  key={line}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="block overflow-hidden"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-foreground-secondary"
            >
              {profile.heroSupport}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Explore My Work
              </MagneticButton>
              <MagneticButton
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/50"
              >
                Get In Touch
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mx-auto w-full max-w-xs lg:max-w-none"
          >
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl border border-border bg-background-secondary">
              <motion.div style={{ y: parallaxY }} className="absolute inset-0 -top-8">
                <Image
                  src="/mahi-patel.jpg"
                  alt="Mahi Patel"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </motion.div>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-foreground-secondary">
              Mahi Patel — {profile.location}
            </p>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-foreground-secondary"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
