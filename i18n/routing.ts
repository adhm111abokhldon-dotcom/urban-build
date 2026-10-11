import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // English is the default, Arabic is the second supported locale.
  locales: ["en", "ar"],
  defaultLocale: "en",
  // Keep the locale in the URL ("/en", "/ar") so both versions are
  // shareable, indexable and easy to switch between.
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
