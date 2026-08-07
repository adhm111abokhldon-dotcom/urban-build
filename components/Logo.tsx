import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import React from "react";

const Logo = () => {
  return (
    <ScrollLink to="home">
      <Image src="/assets/logo.svg" alt="logo" width={230} height={40} />
    </ScrollLink>
  );
};

export default Logo;
