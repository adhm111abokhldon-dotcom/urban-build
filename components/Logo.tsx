"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/lib/site";

const Logo = () => {
  const t = useTranslations("common");

  return (
    <ScrollLink
      to="home"
      href="#home"
      smooth
      duration={500}
      offset={-siteConfig.headerOffset}
      aria-label={t("logoLabel")}
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src="/assets/logo.svg"
        alt=""
        width={231}
        height={48}
        priority
        className="h-10 w-auto"
        style={{ width: "auto" }}
      />
    </ScrollLink>
  );
};

export default Logo;

