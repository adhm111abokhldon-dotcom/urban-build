"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import { navItems, sectionIds } from "@/data/links";
import { useActiveSection } from "@/hooks/useActiveSection";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const Header = () => {
  const t = useTranslations("nav");
  const common = useTranslations("common");
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-scrolled={isScrolled}
      className="sticky top-0 z-50 bg-primary py-3 transition-shadow duration-300 data-[scrolled=true]:shadow-[0_12px_32px_-20px_rgb(0_0_0/0.8)]"
    >
      <div className="custom-container flex items-center justify-between gap-6">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label={t("aria")} className="hidden items-center gap-8 xl:flex">
          <ul className="flex items-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.to;

              return (
                <li
                  key={item.key}
                  className="after:mx-3.5 after:font-primary after:text-accent/50 after:content-['/'] last:after:content-none"
                >
                  <ScrollLink
                    to={item.to}
                    href={`#${item.to}`}
                    smooth
                    duration={500}
                    offset={-siteConfig.headerOffset}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative inline-block py-1 font-primary text-sm font-medium tracked transition-colors duration-200",
                      isActive ? "text-accent" : "text-white hover:text-accent",
                    )}
                  >
                    {t(item.key)}
                    <motion.span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent rtl:origin-right"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </ScrollLink>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-6">
            <LanguageSwitcher id="header" />
            <Button
              text={common("getQuote")}
              to="#contact-us"
              variant="light"
              className="h-12 min-w-45"
            />
          </div>
        </nav>

        {/* Mobile navigation */}
        <div className="xl:hidden">
          <NavMobile activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
};

export default Header;

