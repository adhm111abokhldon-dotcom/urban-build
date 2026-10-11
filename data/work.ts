/**
 * Project showcase. Names and descriptions live in `work.items.<id>`
 * inside `messages/*.json`.
 */
export const workItems = [
  { id: "restoration", img: "/assets/img/work/restoration.jpg" },
  { id: "construction", img: "/assets/img/work/construction.jpg" },
  { id: "renovation", img: "/assets/img/work/renovation.jpg" },
  { id: "consulting", img: "/assets/img/work/consulting.jpg" },
] as const;

export type WorkId = (typeof workItems)[number]["id"];
