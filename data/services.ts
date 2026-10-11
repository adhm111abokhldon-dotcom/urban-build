/**
 * Service tabs. Copy, descriptions and bullet lists live in
 * `services.items.<id>` inside `messages/*.json`.
 */
export const serviceIds = [
  "construction",
  "renovation",
  "restoration",
  "consulting",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export const serviceThumbs: Record<ServiceId, [string, string]> = {
  construction: [
    "/assets/img/services/thumb-1.jpg",
    "/assets/img/services/thumb-2.jpg",
  ],
  renovation: [
    "/assets/img/services/thumb-3.jpg",
    "/assets/img/services/thumb-4.jpg",
  ],
  restoration: [
    "/assets/img/services/thumb-4.jpg",
    "/assets/img/services/thumb-5.jpg",
  ],
  consulting: [
    "/assets/img/services/thumb-1.jpg",
    "/assets/img/services/thumb-3.jpg",
  ],
};
