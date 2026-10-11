"use client";

import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import {
  RiCompass3Line,
  RiMessage2Line,
  RiToolsLine,
  RiUserStarLine,
} from "react-icons/ri";

import { principleIds, type PrincipleId } from "@/data/principles";
import { fadeUp, stagger } from "@/lib/motion";

const icons: Record<PrincipleId, typeof RiCompass3Line> = {
  planning: RiCompass3Line,
  communication: RiMessage2Line,
  workmanship: RiToolsLine,
  coordination: RiUserStarLine,
};

/**
 * Trust band. Replaces the template's numeric counters with truthful,
 * non-numerical statements about how the company works — no invented project
 * counts, years of experience or satisfaction percentages.
 */
const Principles = () => {
  const t = useTranslations("principles");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      aria-label={t("aria")}
      className="mt-16 bg-primary py-12 xl:mt-32 xl:py-16"
    >
      <div className="custom-container">
        <motion.ul
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-x-6 gap-y-10 text-white sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-0"
        >
          {principleIds.map((id) => {
            const Icon = icons[id];

            return (
              <motion.li
                key={id}
                variants={fadeUp}
                className="flex flex-col gap-3 xl:border-s xl:border-white/10 xl:px-8 xl:first:border-s-0 xl:first:ps-0"
              >
                <span
                  className="flex size-12 items-center justify-center bg-accent text-primary"
                  aria-hidden="true"
                >
                  <Icon className="text-2xl" />
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {t(`items.${id}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {t(`items.${id}.description`)}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default Principles;
