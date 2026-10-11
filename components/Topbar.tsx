import { useTranslations } from "next-intl";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";

import { siteConfig } from "@/lib/site";

import Socials from "./Socials";

const Topbar = () => {
  const t = useTranslations("topbar");

  return (
    <section
      id="home"
      aria-label={t("aria")}
      className="flex items-center bg-linear-to-t from-[#ffc221] to-[#ffd76e] py-3 xl:h-16 xl:py-0"
    >
      <div className="custom-container">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <ul className="hidden items-center gap-8 xl:flex">
            <li className="flex items-center gap-3">
              <span
                className="flex size-8 items-center justify-center bg-primary text-white"
                aria-hidden="true"
              >
                <RiPhoneFill />
              </span>
              <a
                href={siteConfig.phone.href}
                aria-label={t("callLabel", { phone: siteConfig.phone.display })}
                className="bidi-ltr font-medium text-primary transition-colors hover:text-primary/70"
              >
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="flex size-8 items-center justify-center bg-primary text-white"
                aria-hidden="true"
              >
                <RiMailFill />
              </span>
              <a
                href={siteConfig.email.href}
                aria-label={t("emailLabel", { email: siteConfig.email.display })}
                className="bidi-ltr font-medium text-primary transition-colors hover:text-primary/70"
              >
                {siteConfig.email.display}
              </a>
            </li>
          </ul>

          <Socials className="xl:ms-8" />
        </div>
      </div>
    </section>
  );
};

export default Topbar;

