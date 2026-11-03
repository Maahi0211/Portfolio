"use client";

import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section";
}

const baseTransition: Transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

export function FadeIn({ children, className, delay = 0, y = 24, as = "div" }: FadeInProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </MotionTag>
  );
}
