"use client";
import { DashedLine, ProjectLine } from "@/asset/svg";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Project = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // TranslateY from 0px to -100px as scroll progresses
  const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);

  return (
    <div className="relative h-full flex justify-center w-full">
      <div className="relative z-0 overflow-hidden">
        <div
          
          className="relative flex justify-center w-screen h-screen p-0"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute flex h-full left-[calc(330/1920*100*1vw)]">
              <DashedLine className="absolute top-[calc(211/1920*100*1vh)] left-0 w-[calc(17/1920*100*1vw)] h-[71.6svh]" />
              <ProjectLine className="absolute top-[calc(29/1920*100*1vh)] left-[calc(42/1920*100*1vw)] w-[calc(23/1920*100*1vw)] h-[94.6svh]" />
            </div>
            <div className="absolute flex h-full right-[calc(330/1920*100*1vw)]">
              <ProjectLine className="absolute top-[calc(29/1920*100*1vh)] right-[calc(42/1920*100*1vw)] rotate-180 w-[calc(23/1920*100*1vw)] h-[94.6svh]" />
              <DashedLine className="absolute top-[calc(211/1920*100*1vh)] left-0 w-[calc(17/1920*100*1vw)] h-[71.6svh]" />
            </div>
          </div>

          <div className="relative flex max-h-screen" ref={containerRef}>
            <div  className="static w-[calc(1070/1920*100*1vw)] ">
              <div
                 
                className="flex flex-col h-max"
              >
                <motion.div
                  style={{ translateY }}
                  className="flex-none w-full h-full visible opacity-[1]"
                >
                  {Array.from({ length: 10 }).map((_, index) => (
                    <Image
                    key={index}
                      src={
                        "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt="project"
                      width={400}
                      height={400}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
