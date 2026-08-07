import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-hero relative bg-no-repeat bg-cover bg-center">
      {/* overLay */}
      <div className="inset-0 absolute bg-linear-to-l from-black/0 via-black/50 to-black/70 z-10"></div>
      <div className="custom-container relative z-20 flex items-center h-full">
        <div
          className="text-white z-20 text-center xl:text-start mx-auto xl:mx-0 flex
        flex-col items-center xl:items-start max-w-150 "
        >
          <h1 className="text-white! mb-4">
            <span className="text-accent">Building</span>
            robust lasting solutions
          </h1>
          <p className="mb-9">
            From concept to completion, we ensure every details is optimized for
            strength and endurance, creating solutions that inspire confidence
            and stand firm for years.
          </p>
          {/* btn */}
          <div>
            <Button text="See our work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
