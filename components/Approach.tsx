import Image from "next/image";
import { useTranslations } from "next-intl";

import { approachStepIds } from "@/data/approach";

import Button from "./Button";
import Pretitle from "./Pretitle";
import Reveal from "./Reveal";

/**
 * "How we work" — a truthful, step-by-step description of the delivery
 * process. Replaces the template's testimonial carousel, which displayed
 * invented customer names and quotations. No fabricated social proof.
 */
const Approach = () => {
  const t = useTranslations("approach");

  return (
    <section id="approach" className="pt-16 xl:pt-32">
      <div className="custom-container">
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-16">
          <div className="flex-1">
            <Reveal>
              <Pretitle text={t("pretitle")} />
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mb-6">{t("title")}</h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mb-10 max-w-105">{t("description")}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <ol className="mb-10 border-t border-border">
                {approachStepIds.map((id, index) => (
                  <li
                    key={id}
                    className="flex gap-5 border-b border-border py-5 sm:gap-6"
                  >
                    <span
                      className="font-primary text-2xl font-bold text-accent tabular-nums"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="mb-1 text-lg">{t(`steps.${id}.title`)}</h3>
                      <p className="text-sm leading-relaxed text-secondary">
                        {t(`steps.${id}.description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.24}>
              <Button text={t("cta")} to="#contact-us" />
            </Reveal>
          </div>

          <div className="flex-1 xl:flex xl:justify-end">
            <div className="relative hidden w-full max-w-142 xl:flex xl:h-145">
              <Image
                src="/assets/img/testimonials/img.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1280px) 568px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
