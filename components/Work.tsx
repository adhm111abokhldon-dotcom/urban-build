import Image from "next/image";
import { useTranslations } from "next-intl";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

import { workItems } from "@/data/work";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Work = () => {
  const t = useTranslations("work");

  return (
    <section id="projects" className="pt-16 xl:pt-32">
      <div className="custom-container">
        <Reveal>
          <SectionHeading
            align="center"
            pretitle={t("pretitle")}
            title={<h2>{t("title")}</h2>}
            description={t("description")}
            className="mb-14 max-w-135 xl:mb-20"
          />
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workItems.map(({ id, img }, index) => {
          const name = t(`items.${id}.name`);

          return (
            <Reveal key={id} delay={index * 0.06}>
              <article className="group relative flex h-[26rem] w-full justify-center overflow-hidden bg-primary xl:h-123">
                <Image
                  src={img}
                  alt={t("imageAlt", { project: name })}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-x-4 bottom-4 flex items-stretch justify-between bg-primary text-white transition-transform duration-300 md:translate-y-[calc(100%+1.5rem)] md:group-focus-within:translate-y-0 md:group-hover:translate-y-0">
                  <div className="min-w-0 ps-6">
                    <h3 className="eyebrow py-4 text-base font-semibold text-white">
                      {name}
                    </h3>
                    <p className="flex items-center gap-1.5 pb-4 text-sm text-white/75">
                      <RiCheckboxCircleFill
                        className="shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className="truncate">
                        {t(`items.${id}.description`)}
                      </span>
                    </p>
                  </div>

                  <a
                    href="#contact-us"
                    aria-label={t("enquire", { project: name })}
                    className="flex w-12 shrink-0 items-center justify-center bg-accent text-2xl text-primary transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary xl:w-15"
                  >
                    <RiArrowRightUpLine
                      className="rtl:-scale-x-100"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Work;

