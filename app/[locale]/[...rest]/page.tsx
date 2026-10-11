import { notFound } from "next/navigation";

/**
 * Catch-all for unknown paths inside a locale (e.g. `/en/does-not-exist`).
 * Without this segment Next.js cannot associate the missing route with the
 * `[locale]` layout, so the localized `not-found.tsx` would never render and
 * visitors would see the framework's default 404 instead.
 */
export default function LocaleCatchAllPage() {
  notFound();
}
