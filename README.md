# Urban Build — Bilingual Construction Website

A production-ready marketing website for **Urban Build**, a construction business
offering construction, renovation, restoration and consulting services. Built
with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**
and **next-intl**, with complete **English (LTR)** and **Arabic (RTL)** support.

---

## Highlights

- **Full bilingual experience (LTR & RTL)**
  - Route-based localization at `/en` and `/ar` via `next-intl`. The root `/`
    redirects to the default locale (`/en`); unknown paths fall back to the
    default locale or the localized 404.
  - `<html lang>` and `dir` are set per locale, and `@base-ui/react`'s
    `DirectionProvider` keeps overlays, tabs and selects direction-aware.
  - Arabic typography uses **IBM Plex Sans Arabic**; Latin uses **DM Sans** and
    **Barlow**. RTL-specific rules adjust line-height, letter-spacing and casing.
  - Logical CSS properties (`ps-*`, `pe-*`, `ms-*`, `me-*`, `start-*`, `end-*`)
    throughout, plus a `bidi-ltr` utility for phone numbers and emails.
  - Visible, accessible language switcher that preserves the current section.

- **Honest, production-minded content**
  - No fabricated statistics, years of experience, project counts or customer
    satisfaction figures.
  - No invented testimonials. The former testimonial slider is replaced by a
    truthful "How we work" process section.
  - The "numbers" band is a principles/trust band describing how the company
    operates (planning, communication, workmanship, coordination).

- **Design system**
  - Square geometry (`--radius-*: 0px`) matching the construction brand.
  - Palette: deep navy primary (`#121325`), warm yellow accent (`#ffca3b`),
    neutral surfaces. Consistent spacing, buttons and section rhythm.
  - Respects `prefers-reduced-motion` across all animation layers.

- **Performance & accessibility**
  - `next/image` with responsive `sizes`, correct aspect ratios and priority
    loading for the hero (LCP).
  - Both `/en` and `/ar` are statically prerendered (SSG) at build time.
  - Semantic landmarks, a single `<h1>` per page, skip link, visible focus
    states, accessible names on icon-only controls, and accessible form
    validation.

---
## Tech stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack,
  `proxy.ts` middleware convention)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **i18n**: [next-intl](https://next-intl.dev/)
- **Primitives**: [@base-ui/react](https://base-ui.com/) (Tabs, Sheet, Select,
  DirectionProvider)
- **Animation**: [Motion](https://motion.dev/) (`motion/react`)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Smooth scroll**: [react-scroll](https://github.com/fisshy/react-scroll)

---

## Getting started

### Prerequisites

- Node.js 20+ (Node 22 LTS recommended)
- npm 10+

### Install & run

```bash
npm install
npm run dev
```

Visit <http://localhost:3000>. The proxy negotiates the locale from the URL and
`Accept-Language`, so `/` redirects to `/en` (or `/ar` if Arabic is preferred).

### Production build

```bash
npm run build
npm start
```

Static HTML is generated for both `/en` and `/ar`.

---

## Scripts

```bash
npm run dev            # Start the dev server
npm run build          # Production build
npm start              # Serve the production build
npm run typecheck      # tsc --noEmit
npm run lint           # ESLint
npm run check:messages # Verify en/ar message-key parity
npm run assets:optimize  # Re-encode raw images in public/assets (sharp)
```

---

## Configuration the owner must review

All non-translatable, business-specific values live in **`lib/site.ts`** — the
single source of truth for contact details and social links:

- `siteConfig.url` — canonical origin. Set the `NEXT_PUBLIC_SITE_URL`
  environment variable to the production domain (used for metadata, canonicals
  and `hreflang`).
- `siteConfig.phone` / `siteConfig.email` — the displayed and linked contact
  details (`tel:` / `mailto:`). **Verify these are official Urban Build details.**
- `siteConfig.whatsapp` — click-to-chat link; keep the number in sync with phone.
- `siteConfig.socials` — only real, business-relevant profiles. The generic
  placeholder `youtube.com` / `x.com` homepages were removed; add entries only
  once the real profile URLs exist.

### Contact form

The project has **no backend or email provider** configured, so the form does
not pretend to deliver a message to a server. On a valid submission it composes
a ready-to-send enquiry and hands the visitor off to their **own email client**
(`mailto:`) or **WhatsApp** — an honest, dependency-free handoff.

To make it submit server-side instead, replace the handoff in
**`components/Contact.tsx`** (`handleSubmit` + the `ready` panel) with a call to
a real provider (e.g. a Route Handler that emails via Resend/SMTP, or a form
service). Keep validation, loading state and success/error feedback. **Never
expose API keys in client-side code** — put them in server-only environment
variables used by a Route Handler.

---

## Localization approach

- **Routing**: `i18n/routing.ts` defines `locales: ["en", "ar"]`, default `en`,
  with `localePrefix: "always"` so both versions are indexable and shareable.
  `proxy.ts` (Next.js 16's renamed middleware) applies the locale strategy.
- **Request config**: `i18n/request.ts` loads `messages/<locale>.json`.
- **Navigation**: `i18n/navigation.ts` exposes locale-aware `Link`, `usePathname`,
  `useRouter`, etc. In-page anchors use `react-scroll` with the header offset.
- **Content**: user-facing copy lives entirely in `messages/en.json` and
  `messages/ar.json`. Locale-independent data (section ids, service ids, process
  step ids, image paths) lives in `data/`. Components read copy via
  `next-intl`'s `useTranslations` / `getTranslations`.
- **Parity**: `npm run check:messages` guarantees both dictionaries expose the
  same key hierarchy. Add new keys to **both** files.
- **Metadata**: `app/[locale]/layout.tsx` generates localized titles,
  descriptions, canonicals and `hreflang` alternates (`en`, `ar`, `x-default`).

Arabic copy is written as original Arabic marketing text, not a literal
translation of the English.

---

## Project structure

```
urbanbuild/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx         # Locale layout: <html lang/dir>, fonts, DirectionProvider, metadata
│   │   ├── not-found.tsx      # Localized 404
│   │   └── page.tsx           # Home page assembling all sections
│   ├── favicon.ico
│   └── globals.css            # Tailwind v4 theme, tokens, RTL utilities
├── components/
│   ├── ui/                    # Base UI primitives (button, input, select, sheet, tabs, textarea)
│   ├── About.tsx              # Brand story + image
│   ├── Approach.tsx           # "How we work" process (replaces fake testimonials)
│   ├── Button.tsx             # CTA with in-page scroll + locale routes
│   ├── Contact.tsx            # Contact channels + mailto/WhatsApp handoff form
│   ├── Faq.tsx                # Accessible accordion
│   ├── Footer.tsx             # Brand, links, contact, copyright
│   ├── Header.tsx             # Desktop nav, scroll-spy, language switcher
│   ├── Hero.tsx               # LCP hero
│   ├── LanguageSwitcher.tsx   # Accessible EN/AR switcher
│   ├── Logo.tsx               # Brand mark
│   ├── NavMobile.tsx          # Base UI Sheet drawer
│   ├── Pretitle.tsx           # Eyebrow label
│   ├── Principles.tsx         # Trust/principles band (replaces fake stats)
│   ├── Reveal.tsx             # Motion entrance wrapper
│   ├── SectionHeading.tsx     # Reusable section intro
│   ├── Services.tsx           # Direction-aware service tabs
│   ├── Socials.tsx            # Social channel links
│   ├── Topbar.tsx             # Contact bar
│   └── Work.tsx               # Project-type grid
├── data/                      # Typed ids + asset paths (links, services, principles, approach, work, faq)
├── hooks/                     # useActiveSection (IntersectionObserver scroll-spy)
├── i18n/                      # routing, request config, navigation helpers
├── lib/                       # site config (contact/socials), motion variants, cn()
├── messages/
│   ├── en.json                # English copy
│   └── ar.json                # Arabic copy
├── proxy.ts                   # next-intl middleware (Next.js 16 proxy convention)
└── scripts/
    ├── check-messages.mjs     # Dictionary parity checker
    └── optimize-images.mjs    # Sharp asset optimization
```

---

## License

Private project. All rights reserved.

