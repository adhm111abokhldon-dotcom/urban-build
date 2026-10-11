import type { Variants } from "motion/react";

/**
 * Shared motion vocabulary: subtle fades with a small amount of travel.
 * Durations stay inside 0.3s–0.7s so the page never feels slow.
 */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

/** Parent variant that staggers its children (use together with `fadeUp`). */
export const stagger = (staggerChildren = 0.08, delayChildren = 0.05): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Viewport settings used by every scroll-triggered reveal. */
export const revealViewport = { once: true, amount: 0.2 } as const;
