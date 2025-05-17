import { LeftLine2, RightStrap } from "@/asset/svg";
import React from "react";

const SideIndicator = () => {
  return (
    <div className="h-[100svh] w-full">
      <div
        className="absolute top-0 left-[calc(10/1920*100*1vh)] h-[calc(30/1920*100*1vw)] transform origin-top-left "
        style={{
          transform: "rotate(270deg) translateX(-121.6%)",
        }}
      >
        <div className="relative flex justify-between w-[77.8vh]">
          <p className="ml-[-0.5svh] mr-[-2.3svh] text-nowrap uppercase font-sans text-[calc(16/1920*100*1vw)] leading-[calc(16/1920*100*1vw)] tracking-[-0.01em]">
            Vancouver
          </p>
          <p className=" mr-[19.6svh] text-nowrap uppercase font-sans text-[calc(16/1920*100*1vw)] leading-[calc(16/1920*100*1vw)] tracking-[-0.01em]">
            GMT-7
          </p>
          <div className="flex justify-between w-[19svh] mr-[10.7svh]">
            <p className=" mr-[-4.3svh] ml-[-1svh] text-nowrap uppercase font-sans text-[calc(16/1920*100*1vw)] leading-[calc(16/1920*100*1vw)] tracking-[-0.01em]">
              9
            </p>
            <p className=" mr-0 text-nowrap uppercase font-sans text-[calc(16/1920*100*1vw)] leading-[calc(16/1920*100*1vw)] tracking-[-0.01em]">
              5
            </p>
          </div>
          <LeftLine2
            className="absolute top-0 left-0 h-[83.9svh] w-[calc(60/1920*100*1vw)] origin-top-left"
            style={{
              transform: "rotate(90deg) translateY(-95.5%)",
            }}
          />
        </div>
        <div className="relative flex items-center justify-center h-full">
          <div
            className="relative overflow-hidden bg-transparent"
            style={{
              width: "calc(7 / 1920 * 100 * 1vw)",
              height: "90svh",
              perspective: "62svh",
              transform:
                "rotate(90deg) translate(calc(4 / 1920 * 100 * 1vw), calc(18 / 1920 * 100 * 1vw)) scale3d(3, 1.31, 1)",
            }}
          >
            <div
              className="absolute w-full m-0 p-0"
              style={{
                top: "40.9%",
                height: "14.8svh",
                transform: "rotateX(62.5053deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {Array.from({ length: 100 }).map((_, idx) => (
                <div
                  key={idx}
                  className="absolute left-[44%] top-[44%] flex flex-col items-center justify-center text-white transition-opacity duration-1000 ease-in-out bg-white"
                  style={{
                    transform: `rotateX(${idx * 3.6}deg) translateZ(27svh)`,
                    width: "calc(4 / 1920 * 100 * 1vw)",
                    height: "1.612svh",
                    maxWidth: "calc(95vw - 20 / 1920 * 100 * 1vw)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 right-[calc(8/1920*100*1vh)] h-[calc(30/1920*100*1vw)] transform origin-top-right "
        style={{
          transform: "rotate(90deg) translateX(122%)",
        }}
      >
        <div className="relative flex justify-between w-[77.8vh]">
          <p className="ml-[-.6svh] mr-[6.5svh] text-nowrap uppercase font-sans text-[calc(16/1920*100*1vw)] leading-[calc(16/1920*100*1vw)] tracking-[-0.01em]">
            N
          </p>

          <div className="relative flex justify-between w-[17svh]">
            <RightStrap className="absolute top-[calc(-4.7/1920*100*1vw)] h-[46.7svh] left-[161%] w-[2.8vw] transform rotate-90 rotate-y-180 origin-top-right" />
            <p className="ml-[calc(5/1920*100*1vw)] mr-0 text-nowrap uppercase font-sans text-[calc(16/1920*100*1vw)] leading-[calc(16/1920*100*1vw)] tracking-[-0.01em]">
              N
            </p>
          </div>
          <p className=" mr-[-12.5svh] text-nowrap uppercase font-sans text-[calc(16/1920*100*1vw)] leading-[calc(16/1920*100*1vw)] tracking-[-0.01em]">
            5
          </p>
          <p className=" mr-0 text-nowrap uppercase font-sans text-[calc(16/1920*100*1vw)] leading-[calc(16/1920*100*1vw)] tracking-[-0.01em]">
            5
          </p>
          <LeftLine2
            className="absolute top-0 left-0 h-[83.9svh] w-[calc(60/1920*100*1vw)] origin-top-left"
            style={{
              transform: "rotate(90deg) translateY(-95.5%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SideIndicator;
