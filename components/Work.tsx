import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import Pretitle from "./Pretitle";

const workData = [
  {
    img: "/assets/img/work/restoration.jpg",
    name: "restoration",
    description: "Restore and renew  ",
    href: "",
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description: "Build with precision",
    href: "",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Transform your space ",
    href: "",
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Get expert guidance",
    href: "",
  },
];

const Work = () => {
  return (
    <div id="projects" className="pt-16 xl:pt-32">
      <div className="custom-container">
        <div className="text-center max-w-135 mx-auto xl:mb-20">
          <Pretitle text="Our Work" center={true} />
          <h2 className="mb-3">Discover Our Projects</h2>
          <p className="mb-11 mx-auto max-w-120">
            Providing expert services designer to deliver quality and innovation
            in every project we undertake.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workData.map((item) => (
          <div
            key={item.name}
            className="w-full h-123 flex-1 relative overflow-hidden group flex justify-center"
          >
            <Image
              src={item.img}
              alt=""
              fill
              className="object-cover"
              quality={100}
            />
            <div
              className="w-[90%] h-21 bg-primary absolute bottom-4 flex
            justify-between items-center text-white! md:translate-y-25 md:group-hover:translate-y-0
            transition-all duration-400"
            >
              <div className="ps-8">
                <h4 className="text-white! font-primary! tracking-[1px] uppercase font-semibold! text-base!">
                  {item.name}
                </h4>

                <div className="flex items-center gap-1">
                  <RiCheckboxCircleFill className="text-accent text-xl " />
                  <p>{item.description}</p>
                </div>
              </div>
              <Link
                href={item.href}
                className="w-11  xl:w-15 h-11  xl:h-15 bg-accent text-primary text-2xl
                flex justify-center items-center absolute right-3 "
              >
                <RiArrowRightUpLine />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
