import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-145 h-50">
      {/* slider 1 */}
      <SwiperSlide>
        <div className=" px-12 md:ps-15 flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-22.5 h-22.5 ">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              alt=""
              quality={100}
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-85 flex flex-col gap-2 ">
            <p>
              Exceeded expectations. On time, witjin budget and top quality
              work. High recommend!
            </p>
            <p className="font-primary font-semibold text-primary">Alex</p>
          </div>
        </div>
      </SwiperSlide>
      {/* slider 2 */}
      <SwiperSlide>
        <div className=" px-12 md:ps-15 flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-22.5 h-22.5 ">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              alt=""
              quality={100}
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-85 flex flex-col gap-2 ">
            <p>
              Exceeded expectations. On time, witjin budget and top quality
              work. High recommend!
            </p>
            <p className="font-primary font-semibold text-primary">Alex</p>
          </div>
        </div>
      </SwiperSlide>
      {/* slider 3 */}
      <SwiperSlide>
        <div className=" px-12 md:ps-15 flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-22.5 h-22.5 ">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              alt=""
              quality={100}
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-85 flex flex-col gap-2 ">
            <p>
              Exceeded expectations. On time, witjin budget and top quality
              work. High recommend!
            </p>
            <p className="font-primary font-semibold text-primary">Alex</p>
          </div>
        </div>
      </SwiperSlide>
      {/* slider btns */}
      <div>
        <SliderBtns />
      </div>
    </Swiper>
  );
};

export default Slider;
