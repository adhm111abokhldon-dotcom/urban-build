"use client";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Services", to: "services" },
  { name: "Contact", to: "contact" },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        onClick={() => setIsOpen(true)}
        className={
          "text-white flex items-center justify-center text-3xl sm:text-4xl md:text-5xl"
        }
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className={"bg-primary border-none text-white"}>
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className={"sr-only"}>
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className="flex w-full flex-col gap-10 justify-center text-center">
            {links.map((link) => (
              <li
                key={link.name}
                className="text-white font-primary font-medium tracking-[1.2px]"
              >
                <ScrollLink
                  smooth
                  spy
                  duration={500}
                  to={link.to}
                  activeClass="text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
          {/* socials */}
          <Socials
            containerStyles="text-white text-xl flex gap-6"
            forFooter={true}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
