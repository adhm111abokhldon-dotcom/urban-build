import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

const About = () => {
  return (
    <div id="about" className="pt-16 xl:pt-32 ">
      <div className="custom-container ">
        <div className="flex flex-col gap-12 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <div className="max-w-135 ">
              <Pretitle text="About us" />
              <h2 className="mb-6">Focused On Excellence In Every Project</h2>
              <p className="mb-11">
                Our unweavering commitment to excellence drives every project we
                undertake. From concept to completion, we met`iculously craft
                solutions that embody quality, precision and innovation.
              </p>
              <div className="w-max flex-col flex text-right mb-10 ">
                <Image
                  src={"/assets/img/about/signature.svg"}
                  width={"154"}
                  height={"38"}
                  alt=""
                />
                <p>Company CEO</p>
              </div>
              {/* btn */}
              <Button text="Contact us" />
            </div>
          </div>
          {/* img */}
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="xl:w-110 xl:h-123.25 relative">
              {/* bg */}
              <div className="hidden xl:flex w-110 h-123.25 bg-accent absolute -top-4 -left-4 -z-10"></div>
              <Image
                src={"/assets/img/about/img.jpg"}
                alt=""
                className="object-cover"
                width={"444"}
                height={"493"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
