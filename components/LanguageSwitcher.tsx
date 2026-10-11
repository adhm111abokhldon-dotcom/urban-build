"use client";

import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { routing, type Locale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Two-state language control. Keeps the visitor on the same page (and the
 * same section) when switching, and exposes the current language to
 * assistive technology.
 */
const LanguageSwitcher = ({
  id = "header",
  className,
}: {
  /** Unique suffix for the animated indicator when rendered twice. */
  id?: string;
  className?: string;
}) => {
  const t = useTranslations("language");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);
  const sectionToRestore = useRef("");

  // Derived instead of a second state flag: once the locale matches the
  // requested one the transition is finished (no effect-driven setState).
  const isSwitching = pendingLocale !== null && pendingLocale !== locale;

  // Restore the section the visitor was reading once the new locale rendered.
  useEffect(() => {
    const section = sectionToRestore.current;
    sectionToRestore.current = "";
    if (!section) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [locale]);

  const switchTo = (next: Locale) => {
    if (next === locale || isSwitching) return;

    sectionToRestore.current = window.location.hash.slice(1);
    setPendingLocale(next);

    router.replace(`${pathname}${window.location.hash}`, { locale: next });
  };

  return (
    <div
      role="group"
      aria-label={t("groupLabel")}
      className={cn(
        "flex items-center border border-white/20 p-0.5",
        className,
      )}
    >
      {routing.locales.map((code) => {
        const isActive = code === locale;

        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => switchTo(code)}
            disabled={isSwitching}
            aria-current={isActive ? "true" : undefined}
            aria-label={
              isActive
                ? t("current", { language: t(code) })
                : t("switchTo", { language: t(code) })
            }
            className={cn(
              "relative px-2.5 py-1 font-primary text-xs font-medium transition-colors duration-200",
              "disabled:cursor-default",
              isActive ? "text-primary" : "text-white/70 hover:text-white",
              pendingLocale === code && "opacity-70",
            )}
          >
            {isActive ? (
              <motion.span
                layoutId={`language-indicator-${id}`}
                className="absolute inset-0 bg-accent"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                aria-hidden="true"
              />
            ) : null}
            <span className="relative">{t(code)}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
