import Image from "next/image";
import { useTranslations } from "next-intl";

import { navItems } from "@/data/links";
import { serviceIds } from "@/data/services";
import { siteConfig } from "@/lib/site";

import Socials from "./Socials";

const Footer = () => {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const services = useTranslations("services");
  const contact = useTranslations("contact");
  const common = useTranslations("common");

  return (
    <footer className="mt-16 bg-primary text-white/70 xl:mt-32">
      <div className="custom-container py-14 xl:py-20">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/assets/logo.svg"
              alt={siteConfig.name}
              width={231}
              height={48}
              className="h-10 w-auto"
              style={{ width: "auto" }}
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {t("description")}
            </p>
            <Socials tone="light-on-dark" className="mt-6 -ms-2" />
          </div>

          {/* Explore (in-page navigation) */}
          <nav aria-label={nav("aria")}>
            <h2 className="eyebrow mb-5 text-sm font-semibold text-white">
              {t("explore")}
            </h2>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={`#${item.to}`}
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    {nav(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h2 className="eyebrow mb-5 text-sm font-semibold text-white">
              {t("services")}
            </h2>
            <ul className="space-y-3 text-sm">
              {serviceIds.map((id) => (
                <li key={id}>{services(`items.${id}.title`)}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="eyebrow mb-5 text-sm font-semibold text-white">
              {t("contact")}
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.phone.href}
                  className="bidi-ltr transition-colors duration-200 hover:text-accent"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.email.href}
                  className="bidi-ltr transition-colors duration-200 hover:text-accent"
                >
                  {siteConfig.email.display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-accent"
                >
                  {contact("channels.whatsapp")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>{t("rights", { year: new Date().getFullYear() })}</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-accent"
          >
            {common("backToTop")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
