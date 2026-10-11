import { useTranslations } from "next-intl";
import {
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import { siteConfig, type SocialId } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons: Record<SocialId, typeof RiFacebookFill> = {
  facebook: RiFacebookFill,
  instagram: RiInstagramFill,
};

/**
 * Brand links. `tone` adapts the colour to the surface it sits on
 * (yellow top bar, dark header sheet, light footer).
 */
const Socials = ({
  tone = "dark-on-light",
  className,
}: {
  tone?: "dark-on-light" | "light-on-dark";
  className?: string;
}) => {
  const t = useTranslations("common.socials");

  return (
    <ul
      aria-label={t("aria")}
      className={cn("flex items-center gap-1", className)}
    >
      {siteConfig.socials.map(({ id, href }) => {
        const Icon = icons[id];

        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${t(id)} (${t("aria")})`}
              className={cn(
                "inline-flex size-9 items-center justify-center transition-colors duration-200",
                tone === "light-on-dark"
                  ? "text-white/65 hover:text-accent"
                  : "text-primary/70 hover:text-primary",
              )}
            >
              <Icon className="text-lg" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;

