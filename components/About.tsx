import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "./Button";
import Pretitle from "./Pretitle";
import Reveal from "./Reveal";

const About = () => {
  const t = useTranslations("about");

  return (
    <section id="about" className="pt-16 xl:pt-32">
      <div className="custom-container">
        <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-20">
          <div className="flex-1">
            <div className="max-w-135">
              <Reveal>
                <Pretitle text={t("pretitle")} />
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="mb-6">{t("title")}</h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mb-10">{t("description")}</p>
              </Reveal>

              <Reveal delay={0.18}>
                <Button text={t("cta")} to="#contact-us" />
              </Reveal>
            </div>
          </div>

          <div className="flex-1 xl:flex xl:justify-center">
            <div className="relative w-full max-w-110">
              {/* Accent frame sits behind the photograph, on the start side. */}
              <div
                className="absolute -top-4 -start-4 hidden size-full bg-accent xl:block"
                aria-hidden="true"
              />
              <Image
                src="/assets/img/about/img.jpg"
                alt={t("imageAlt")}
                width={444}
                height={493}
                sizes="(min-width: 1280px) 440px, 100vw"
                className="relative h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

