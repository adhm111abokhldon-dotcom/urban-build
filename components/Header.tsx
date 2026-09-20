"use client";

import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const Header = () => {
  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="bg-primary py-4 z-50 sticky top-0">
      <div className="px-5 md:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <Logo />

          {/* nav Desktop*/}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link) => (
                <li
                  key={link.name}
                  className="text-white text-sm font-primary font-medium tracking-[1.2px] 
                  after:content-['/'] after:mx-4 last:after:content-none after:text-accent"
                >
                  {
                    <ScrollLink
                      to={link.to}
                      smooth
                      spy
                      className="cursor-pointer"
                      activeClass="text-accent"
                    >
                      {link.name}
                    </ScrollLink>
                  }
                </li>
              ))}
            </ul>
            {/* btn */}
            <button
              className="w-50 h-13.5 py-1.25 bg-white
           ps-4 pe-1.25 flex items-center justify-between min-w-50 group"
            >
              <div
                className=" flex-1 text-center tracking-[1.2px]
             text-primary  font-bold text-sm "
              >
                Get a quote
              </div>
              <div className="w-11 h-11  bg-primary flex items-center justify-center">
                <RiArrowRightUpLine
                  className="text-white text-xl group-hover:rotate-45
                  transition-transform duration-200"
                />
              </div>
            </button>
          </nav>

          {/* nav Mobile */}
          <nav className="xl:hidden">
            <NavMobile />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
