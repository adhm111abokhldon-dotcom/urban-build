import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="w-52.5 h-13.5 py-1.25 pe-1.25 ps-2.5 flex items-center
     justify-between min-w-52.5 group bg-accent"
    >
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
        {text}
      </div>
      <div className="flex items-center justify-center w-11 h-11 bg-primary">
        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-transform " />
      </div>
    </button>
  );
};

export default Button;
