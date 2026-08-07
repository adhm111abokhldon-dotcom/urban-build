"use client";

import { useEffect, useRef, useState } from "react";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Topbar from "@/components/Topbar";
import Work from "@/components/Work";
import { Contact } from "lucide-react";

export default function Home() {
  // const [headerActive, setHeaderActive] = useState(false);

  // const lastScroll = useRef(0);
  // useEffect(() => {
  //   lastScroll.current = window.scrollY;
  //   const handleActive = () => {
  //     const currentScroll = window.scrollY;
  //     if (currentScroll > lastScroll.current + 10) {
  //       console.log(currentScroll, lastScroll);
  //       setHeaderActive(false);
  //     } else {
  //       console.log(currentScroll, lastScroll);
  //       setHeaderActive(true);
  //     }
  //   };
  //   window.addEventListener("scroll", handleActive);

  //   return () => {
  //     window.removeEventListener("scroll", handleActive);
  //   };
  // }, []);
  // console.log(headerActive);
  return (
    <div>
      <Topbar />

      <Header />

      <Hero />
      <About />
      <Testimonials />
      <Work />
      <Faq />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
