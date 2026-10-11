import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "./Button";
import Reveal from "./Reveal";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative isolate flex min-h-[34rem] items-center overflow-hidden bg-primary py-16 xl:min-h-[76vh] xl:py-24">
      <Image
        src="/assets/img/hero/bg.jpg"
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="custom-container relative z-10">
        <div className="flex max-w-150 flex-col items-center text-center xl:items-start xl:text-start">
          <Reveal>
            <h1 className="mb-5 text-white">
              {t.rich("title", {
                accent: (chunks) => <span className="text-accent">{chunks}</span>,
              })}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mb-9 text-white/80">{t("description")}</p>
          </Reveal>

          <Reveal delay={0.16} className="w-full max-w-105 xl:w-auto">
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button text={t("primaryCta")} to="#projects" />
              <Button
                text={t("secondaryCta")}
                to="#services"
                variant="outline"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;

