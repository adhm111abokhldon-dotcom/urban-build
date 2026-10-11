import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DirectionProvider } from "@base-ui/react/direction-provider";
import { MotionConfig } from "motion/react";
import { Barlow, DM_Sans, IBM_Plex_Sans_Arabic, Noto_Sans_Arabic } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import "../globals.css";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * Latin families (English). Arabic families below have no Latin role —
 * they are activated for Arabic via the `html[dir="rtl"]` overrides in
 * `globals.css`, driven by the locale `dir` attribute on `<html>`.
 */
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-head-ar",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-body-ar",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<LocaleLayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: t("title"), template: `%s — ${siteConfig.name}` },
    description: t("description"),
    applicationName: siteConfig.name,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      locale: locale === "ar" ? "ar_AE" : "en_AE",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enables static rendering for this locale.
  setRequestLocale(locale);

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      className={cn(
        "h-full",
        dmSans.variable,
        barlow.variable,
        plexArabic.variable,
        notoArabic.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        {/* Keeps Base UI primitives (tabs, sheet, select) direction-aware. */}
        <DirectionProvider direction={direction}>
          <NextIntlClientProvider>
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
          </NextIntlClientProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
