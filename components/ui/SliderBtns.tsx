"use client";
import { useSwiper } from "swiper/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const SliderBtns = () => {
  const swiper = useSwiper();

  return (
    <div className="w-max absolute bottom-2 right-2 flex gap-1 z-10">
      <button
        className="bg-accent hover:bg-[#d5a521] text-primary  text-[22px] w-12 h-12 flex
      justify-center items-center transition-all cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <RiArrowLeftLine />
      </button>
      <button
        className="bg-accent hover:bg-[#d5a521] text-primary  text-[22px] w-12 h-12 flex
      justify-center items-center transition-all cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
};

export default SliderBtns;
