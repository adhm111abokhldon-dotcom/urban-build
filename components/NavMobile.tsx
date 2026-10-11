"use client";

import { useDirection } from "@base-ui/react/direction-provider";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  RiArrowRightUpLine,
  RiMailFill,
  RiMenu3Line,
  RiPhoneFill,
} from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/data/links";
import { fadeUp, stagger } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import LanguageSwitcher from "./LanguageSwitcher";
import Socials from "./Socials";

const NavMobile = ({ activeSection }: { activeSection: string | null }) => {
  const t = useTranslations("nav");
  const common = useTranslations("common");
  const direction = useDirection();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        aria-label={common("openMenu")}
        className="flex size-11 items-center justify-center text-white transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <RiMenu3Line className="text-2xl" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent
        side={direction === "rtl" ? "left" : "right"}
        closeLabel={common("close")}
        className="flex w-[min(88vw,400px)] flex-col bg-primary p-6 text-white sm:p-8 [&>button]:top-6 [&>button]:end-6 [&>button]:text-white/70 [&>button]:hover:text-white"
      >
        <SheetHeader className=" p-0 pb-5">
          <SheetTitle className="sr-only">{common("menuTitle")}</SheetTitle>
          <SheetDescription className="sr-only">
            {common("menuDescription")}
          </SheetDescription>
        </SheetHeader>

        <nav aria-label={t("aria")} className="flex-1   py-6">
          <motion.ul
            variants={stagger(0.05)}
            initial="hidden"
            animate="show"
            className="space-y-1"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.to;

              return (
                <motion.li key={item.key} variants={fadeUp}>
                  <ScrollLink
                    to={item.to}
                    href={`#${item.to}`}
                    smooth
                    duration={500}
                    offset={-siteConfig.headerOffset}
                    onClick={close}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block cursor-pointer py-2.5 font-primary text-xl transition-colors duration-200",
                      isActive
                        ? "text-accent"
                        : "text-white/80 hover:text-white",
                    )}
                  >
                    {t(item.key)}
                  </ScrollLink>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>

        <div className="space-y-5 border-t border-white/10 pt-5">
          <ScrollLink
            to="contact-us"
            href="#contact-us"
            smooth
            duration={500}
            offset={-siteConfig.headerOffset}
            onClick={close}
            className="group flex h-12 w-full cursor-pointer items-center justify-between gap-4 bg-white ps-5 pe-1 transition-colors duration-200 hover:bg-accent"
          >
            <span className="tracked font-primary text-sm font-bold uppercase text-primary rtl:normal-case">
              {common("startProject")}
            </span>
            <span className="flex size-10 shrink-0 items-center justify-center bg-primary text-white">
              <RiArrowRightUpLine
                className="text-xl transition-transform duration-300 group-hover:rotate-45 rtl:-scale-x-100"
                aria-hidden="true"
              />
            </span>
          </ScrollLink>

          <div className="flex items-center justify-between gap-4">
            <LanguageSwitcher id="menu" />
            <Socials tone="light-on-dark" />
          </div>

          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href={siteConfig.phone.href}
                className="flex items-center gap-3 text-white/70 transition-colors duration-200 hover:text-accent"
              >
                <RiPhoneFill aria-hidden="true" />
                <span className="bidi-ltr">{siteConfig.phone.display}</span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.email.href}
                className="flex items-center gap-3 text-white/70 transition-colors duration-200 hover:text-accent"
              >
                <RiMailFill aria-hidden="true" />
                <span className="bidi-ltr">{siteConfig.email.display}</span>
              </a>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
