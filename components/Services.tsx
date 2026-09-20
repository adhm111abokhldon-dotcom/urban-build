"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import Button from "./Button";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";

const servicesData = [
  {
    name: "construction",
    icon: PiWallFill,
    title: "Construction Services",
    description: `We build with precision and innovation, ensuring that every structure is
     strong, reliable,and built to last. From foundayions to finishing touches, our 
     expertise transforms ideas into reality.`,
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Site Prep",
      "Farming & Roofing",
      "Interior Finish",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: PiPaintRollerFill,
    title: "Renovation Services",
    description: `Revitalizing spaces with modern designs and heigh-quality craftsmanship. Whether 
    upgrading a home or remodeling an office, we bring fresh life to every project.`,
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "restoration",
    icon: PiWrenchFill,
    title: "Restoration Services",
    description: `Bringing damaged or aging structures back to life. We specialize in restoring 
    historical landmarks, fire-damaged buildings, and water-damaged properties with meticulous care.`,
    serviceList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Hold Removal",
      "Roof Restore",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: PiUserGearFill,
    title: "Consulting Services",
    description: `Providing expert guiance for construction and renovation projects. From planning
    and budgeting to comliance and  sutainability, our cosulting service ensure project success.`,
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      "Sutainability",
      "Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-3.jpg" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");
  return (
    <section id="services" className="pt-16 xl:pt-32">
      <div className="custom-container">
        <div className="text-center max-w-135 mx-auto mb-20">
          <Pretitle text="Our Services" center={true} />
          <h2 className="mb-3">Solutios We Provide</h2>
          <p className="mb-11 max-w-120 mx-auto">
            Offering tailored construction solutions, from planning to
            completion, with a focus on quality and innovation.
          </p>
        </div>
        {/* tabs */}

        <Tabs
          defaultValue="construction"
          onValueChange={(value) => setActiveTab(value)}
          className={"flex! flex-col! xl:flex-row!"}
        >
          <TabsList
            className={
              "grid grid-cols-1 md:grid-cols-2 w-full xl:grid-cols-1 gap-7.5 p-0 xl:w-86.25 rounded-none bg-transparent h-full!"
            }
          >
            {servicesData.map((item) => (
              <TabsTrigger
                key={item.name}
                value={item.name}
                className={`w-full rounded-none h-25 flex 
              items-center relative shadow-custom p-0 outline-none`}
              >
                <div
                  className={`w-25 h-25 flex items-center justify-center absolute
                  left-0 
                   ${activeTab === item.name ? "bg-primary text-white" : "bg-accent text-primary"}`}
                >
                  <div className="w-9! h-9!">
                    <item.icon className="w-9! h-9!" />{" "}
                  </div>
                </div>
                <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-25 ms-16">
                  {item.name}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* tabs content */}
          <div className="flex-1 bg-white shadow-custom h-122.5 p-7.5">
            {servicesData.map((item) => (
              <TabsContent key={item.name} value={item.name} className={"m-0"}>
                <div className="flex flex-col md:flex-row gap-5 xl:gap-7.5">
                  {/* img */}
                  <div className="flex md:flex-col gap-5 xl:gap-7.5 ">
                    {item.thumbs.map((thumb, index) => (
                      <div
                        key={index}
                        className="relative w-35 xl:w-50 h-35 xl:h-50"
                      >
                        <Image src={thumb.url} alt="" fill />
                      </div>
                    ))}
                  </div>
                  {/* text & btn */}
                  <div>
                    <div>
                      <h3 className="mb-6 ">{item.title}</h3>
                      <p className="mb-10">{item.description}</p>
                      {/* services list */}
                      <ul className="grid  grid-cols-2 gap-4 mb-6">
                        {item.serviceList.map((service, index) => (
                          <li key={index} className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 bg-accent"></div>
                            <div className="capitalize font-medium text-primary">
                              {service}
                            </div>
                          </li>
                        ))}
                      </ul>
                      {/* btn */}
                      <Button text="Read more" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
