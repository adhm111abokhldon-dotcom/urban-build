"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  PiPaintRollerFill,
  PiUserGearFill,
  PiWallFill,
  PiWrenchFill,
} from "react-icons/pi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { serviceIds, serviceThumbs, type ServiceId } from "@/data/services";
import { fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

import Button from "./Button";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons: Record<ServiceId, typeof PiWallFill> = {
  construction: PiWallFill,
  renovation: PiPaintRollerFill,
  restoration: PiWrenchFill,
  consulting: PiUserGearFill,
};

const Services = () => {
  const t = useTranslations("services");
  const [activeTab, setActiveTab] = useState<ServiceId>("construction");

  return (
    <section id="services" className="pt-16 xl:pt-32">
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

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as ServiceId)}
          className="flex! flex-col! gap-7.5 xl:flex-row!"
        >
          {/* Icon rail */}
          <TabsList className="grid h-auto! w-full grid-cols-1 gap-6 bg-transparent p-0 md:grid-cols-2 xl:h-full! xl:w-86.25 xl:grid-cols-1">
            {serviceIds.map((id) => {
              const Icon = icons[id];
              const isActive = activeTab === id;

              return (
                <TabsTrigger
                  key={id}
                  value={id}
                  className="group relative flex h-25 w-full items-center overflow-hidden rounded-none p-0 shadow-custom"
                >
                  <span
                    className={cn(
                      "absolute start-0 flex size-25 items-center justify-center transition-colors duration-300",
                      isActive
                        ? "bg-primary text-white"
                        : "bg-accent text-primary",
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="size-9" />
                  </span>
                  <span
                    className={cn(
                      "eyebrow ms-29 text-base font-semibold transition-colors duration-300",
                      isActive
                        ? "text-primary"
                        : "text-primary/70 group-hover:text-primary",
                    )}
                  >
                    {t(`items.${id}.tab`)}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Panel */}
          <div className="flex-1 bg-white p-6 shadow-custom sm:p-7.5 xl:min-h-122.5">
            {serviceIds.map((id) => {
              const title = t(`items.${id}.title`);
              const features = t.raw(`items.${id}.list`) as string[];

              return (
                <TabsContent key={id} value={id} className="m-0!">
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-6 md:flex-row xl:gap-7.5"
                  >
                    <div className="flex gap-5 md:flex-col xl:gap-7.5">
                      {serviceThumbs[id].map((url) => (
                        <div
                          key={url}
                          className="relative h-35 w-35 xl:size-50"
                        >
                          <Image
                            src={url}
                            alt=""
                            fill
                            sizes="(min-width: 1280px) 200px, 140px"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="mb-4">{title}</h3>
                      <p className="mb-8">{t(`items.${id}.description`)}</p>

                      <ul
                        aria-label={t("listAria", { service: title })}
                        className="mb-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
                      >
                        {features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <span
                              className="size-1.5 shrink-0 bg-accent"
                              aria-hidden="true"
                            />
                            <span className="font-medium text-primary">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button text={t("cta")} to="#contact-us" />
                    </div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
