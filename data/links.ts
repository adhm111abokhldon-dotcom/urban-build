/**
 * In-page navigation. `key` maps to `nav.*` in `messages/*.json`
 * and `to` is the id of the section to scroll to.
 */
export const navItems = [
  { key: "home", to: "home" },
  { key: "about", to: "about" },
  { key: "services", to: "services" },
  { key: "projects", to: "projects" },
  { key: "contact", to: "contact-us" },
] as const;

export type NavItem = (typeof navItems)[number];

/** Section ids used for scroll-spy + `aria-current`. */
export const sectionIds = navItems.map((item) => item.to);

