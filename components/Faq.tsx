"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { RiAddLine } from "react-icons/ri";

import { faqIds } from "@/data/faqItems";
import { fadeUp, revealViewport, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

import Button from "./Button";
import Pretitle from "./Pretitle";
import Reveal from "./Reveal";

const Faq = () => {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 xl:py-32">
      <div className="custom-container">
        <div className="grid gap-12 xl:grid-cols-[0.85fr_1.5fr] xl:gap-24">
          <div className="xl:sticky xl:top-32 xl:self-start">
            <Reveal>
              <Pretitle text={t("pretitle")} />
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mb-5 max-w-xl">
                {t.rich("title", { br: () => <br /> })}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="max-w-lg">{t("description")}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 border border-border bg-surface p-6">
                <h3 className="mb-2 text-lg">{t("cta.title")}</h3>
                <p className="mb-6 text-sm">{t("cta.description")}</p>
                <Button
                  text={t("cta.action")}
                  to="#contact-us"
                  className="h-12 min-w-48"
                />
              </div>
            </Reveal>
          </div>

          <motion.ul
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="border-t border-border"
          >
            {faqIds.map((id, index) => {
              const isOpen = openIndex === index;
              const buttonId = `faq-button-${id}`;
              const panelId = `faq-panel-${id}`;

              return (
                <motion.li
                  key={id}
                  variants={fadeUp}
                  className="border-b border-border"
                >
                  <h3 className="text-lg sm:text-xl">
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-6 py-6 text-start"
                    >
                      <span
                        className={cn(
                          "font-primary font-semibold leading-7 transition-colors duration-200",
                          isOpen
                            ? "text-primary"
                            : "text-primary/80 hover:text-primary",
                        )}
                      >
                        {t(`items.${id}.question`)}
                      </span>

                      <span
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center border transition-colors duration-200",
                          isOpen
                            ? "border-primary bg-primary text-white"
                            : "border-border text-primary",
                        )}
                        aria-hidden="true"
                      >
                        <RiAddLine
                          className={cn(
                            "text-xl transition-transform duration-300",
                            isOpen && "rotate-45",
                          )}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeOut" },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pe-12">
                          {t(`items.${id}.answer`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
