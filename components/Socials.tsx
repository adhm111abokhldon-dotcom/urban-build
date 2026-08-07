import Link from "next/link";

import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterXFill,
  RiInstagramFill,
} from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookFill />,
    path: "https://www.facebook.com/adhm.k.aobeid/",
    classname: "text-[#1877F2] hover:text-[#166FE5]",
  },
  {
    icon: <RiYoutubeFill />,
    path: "https://www.youtube.com/",
    classname: "text-[#FF0000] hover:text-[#CC0000",
  },
  {
    icon: <RiTwitterXFill />,
    path: "https://x.com/",
    classname: "text-[#000000] hover:text-[#1A1A1A",
  },
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/adhmaobeid/?hl=en",
    classname: "text-[#E4405F] hover:text-[#C14584",
  },
];

const Socials = ({
  containerStyles,
  forFooter,
}: {
  containerStyles: string;
  forFooter: boolean;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => (
        <Link
          target="_blank"
          href={social.path}
          key={social.path}
          className={`${forFooter ? social.classname : "text-primary"}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
