"use client";

import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const variants = {
  /** Brand yellow — the primary action. */
  accent: "bg-accent text-primary",
  /** Solid white — used on dark surfaces such as the header. */
  light: "bg-white text-primary",
  /** Outlined — secondary action on imagery. */
  outline: "border border-white/35 text-white hover:border-white",
} as const;

const iconVariants = {
  accent: "bg-primary text-white",
  light: "bg-primary text-white",
  outline: "bg-accent text-primary",
} as const;

type ButtonProps = {
  text: string;
  /** `#section` scrolls in-page, any other value is treated as a route. */
  to: string;
  variant?: keyof typeof variants;
  className?: string;
};

/**
 * The single call-to-action used across the site. Anchor targets scroll
 * with the sticky-header offset, route targets use locale-aware navigation.
 */
const Button = ({ text, to, variant = "accent", className }: ButtonProps) => {
  const content = (
    <>
      <span className="tracked flex-1 text-center font-primary text-sm font-bold uppercase rtl:normal-case">
        {text}
      </span>
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center transition-colors duration-200",
          iconVariants[variant],
        )}
      >
        <RiArrowRightUpLine
          className="text-xl transition-transform duration-300 group-hover:rotate-45 rtl:-scale-x-100"
          aria-hidden="true"
        />
      </span>
    </>
  );

  const classes = cn(
    "group flex h-13.5 min-w-52.5 items-center justify-between gap-4 ps-4 pe-1.25",
    "transition-[background-color,border-color,transform] duration-200 active:scale-[0.99]",
    variants[variant],
    className,
  );

  if (to.startsWith("#")) {
    const id = to.slice(1);

    return (
      <ScrollLink
        to={id}
        href={to}
        smooth
        duration={500}
        offset={-siteConfig.headerOffset}
        className={classes}
      >
        {content}
      </ScrollLink>
    );
  }

  return (
    <Link href={to} className={classes}>
      {content}
    </Link>
  );
};

export default Button;

