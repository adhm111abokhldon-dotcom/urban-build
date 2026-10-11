/**
 * Delivery process steps shown in the "How we work" section. Copy lives in
 * `approach.steps.<id>` inside `messages/*.json`.
 */
export const approachStepIds = [
  "consult",
  "estimate",
  "build",
  "handover",
] as const;

export type ApproachStepId = (typeof approachStepIds)[number];
