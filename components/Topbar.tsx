import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      id="home"
      className="py-4 xl:h-16 xl:py-0 bg-linear-to-t from-[#ffc221] to-[#ffd76e] flex items-center"
    >
      {" "}
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="hidden xl:flex items-center gap-8">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center">
                <RiPhoneFill />{" "}
              </div>
              <p className="font-medium text-primary">+971 56 142 0262</p>
            </div>
            {/* Mail */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center">
                <RiMailFill />{" "}
              </div>
              <p className="font-medium text-primary">adham.aobeid@gmail.com</p>
            </div>
          </div>

          <div>
            <Socials
              containerStyles="flex items-center gap-8 mx-auto xl:mx-8"
              forFooter={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
