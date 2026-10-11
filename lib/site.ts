/**
 * Site-wide, non-translatable configuration (contact details, links, ids).
 * All user-facing copy lives in `messages/*.json`.
 *
 * ---------------------------------------------------------------------------
 * OWNER: verify every value below before going live.
 * ---------------------------------------------------------------------------
 * These details are carried over from the original template and must be
 * confirmed as official Urban Build contact points. Update them here — this
 * is the single source of truth consumed by the topbar, header, mobile menu,
 * contact section and footer.
 *
 * Placeholder destinations (the generic `youtube.com` / `x.com` homepages that
 * shipped with the template) have been removed. Add real profile URLs only
 * once they exist; leave an entry out entirely rather than linking a homepage.
 */
export const siteConfig = {
  name: "Urban Build",
  /**
   * Canonical origin used for metadata, canonicals and `hreflang`.
   * Set `NEXT_PUBLIC_SITE_URL` to the production domain at deploy time,
   * e.g. `NEXT_PUBLIC_SITE_URL=https://www.urbanbuild.example`.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  phone: {
    display: "+971 56 142 0262",
    href: "tel:+971561420262",
  },
  email: {
    display: "adham.aobeid@gmail.com",
    href: "mailto:adham.aobeid@gmail.com",
  },
  /** WhatsApp click-to-chat. Keep the number in sync with `phone`. */
  whatsapp: "https://wa.me/971561420262",

  /**
   * Social profiles. Only include channels with a real, business-relevant
   * destination. Each `id` must have a matching label in
   * `common.socials.<id>` and an icon in `components/Socials.tsx`.
   */
  socials: [
    { id: "facebook", href: "https://www.facebook.com/adhm.k.aobeid/" },
    { id: "instagram", href: "https://www.instagram.com/adhmaobeid/" },
  ] as const,

  /** Height of the sticky header — used as scroll offset for anchor links. */
  headerOffset: 72,
} as const;

export type SocialId = (typeof siteConfig.socials)[number]["id"];
