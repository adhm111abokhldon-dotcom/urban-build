/**
 * FAQ order + ids. Questions and answers live in `faq.items.<id>`
 * inside `messages/en.json` and `messages/ar.json`.
 */
export const faqIds = [
  "timeline",
  "permits",
  "materials",
  "changes",
  "cost",
  "safety",
] as const;

export type FaqId = (typeof faqIds)[number];

