/**
 * Company principles shown in the dark trust band. Copy lives in
 * `principles.items.<id>` inside `messages/*.json`; the matching icon is
 * mapped in `components/Principles.tsx`.
 *
 * Intentionally non-numerical: these describe how the company works rather
 * than claiming unverifiable figures (project counts, years, percentages).
 */
export const principleIds = [
  "planning",
  "communication",
  "workmanship",
  "coordination",
] as const;

export type PrincipleId = (typeof principleIds)[number];
