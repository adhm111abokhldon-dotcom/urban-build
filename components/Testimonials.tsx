import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./ui/Slider";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <div className="flex-1 max-w-121 xl:pt-13.5 mb-12 xl:mb-0">
            <Pretitle text="Testimonials" />
            <h2 className="mb-6">Built on Trust , Proven By Results</h2>
            <p className="mb-10 max-w-105">
              From homes to commercial spaces, our clients share their
              experinces of working with us. See how we&apos;ve helped them
              bring their dreams to live with expert craftsmanship.
            </p>
            <Button text="Work with us" />
          </div>
          {/* img & slider */}
          <div className="flex-1 flex flex-col md:flex-row xl:justify-end">
            <div className="relative hidden xl:flex xl:w-142 xl:h-145">
              <Image
                src="/assets/img/testimonials/img.jpg"
                alt=""
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            {/* slider */}
            <div className="xl:absolute xl:bottom-0 xl:right-20 relative max-w-max ">
              {/* icon img */}
              <Image
                src="/assets/img/testimonials/quote.svg"
                alt=""
                width={54}
                height={36}
                className="absolute z-20 -top-4 left-15"
              />
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
