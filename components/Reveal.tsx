"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { fadeUp, revealViewport } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Parent variants — pass `stagger()` to animate direct children instead. */
  variants?: Variants;
  delay?: number;
};

/**
 * Small wrapper for scroll-triggered entrances. Animates once, keeps the
 * layout stable and respects the user's reduced-motion preference
 * (handled globally by `MotionConfig`).
 */
export default function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
