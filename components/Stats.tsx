"use client";
import { useInView } from "motion/react";
import { useRef } from "react";
import CountUp from "react-countup";

const statsData = [
  { endCountNum: 99, endCountText: "%", text: "Client Satisfaction" },
  { endCountNum: 800, endCountText: "+", text: "Successful Projects" },
  { endCountNum: 32, endCountText: "k", text: "Happy Clients" },
  { endCountNum: 26, endCountText: "+", text: "Years of Experience" },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
      <div className="custom-container h-full">
        <div
          className="text-white flex flex-col xl:flex-row items-center justify-between gap-12 text-center 
        xl:text-left"
        >
          {statsData.map((item) => (
            <div key={item.endCountNum} className="w-full">
              <div className="text-5xl font-semibold">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.endCountNum}
                    delay={0.5}
                    duration={3}
                  />
                )}
                <span>{item.endCountText}</span>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
