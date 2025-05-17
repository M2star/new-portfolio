"use client";
import {
  ButtonBorder,
  HeaderLine,
  HeaderWhiteLine,
  LeftLine,
} from "@/asset/svg";
import { headerData } from "@/data/headerData";
import RustleEffect from "@/hook/RustlerEffect";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  return (
    <>
      <div className="absolute top-5 left-5 w-[calc((300/1920)*100*1vw)]">
        <ButtonBorder className="text-white" />
        <h1 className="text-white text-4xl font-alt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Tushar
        </h1>
      </div>
      <div className="fixed top-[5.7dvh] left-[36.9%] flex pointer-events-all z-5">
        <div className="flex w-max transition-opacity duration-500 ease-in-out">
          {headerData.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={cn(
                "relative h-full flex items-center justify-center ",
                " uppercase font-bold",
                "min-w-[calc(100/1920*100*1vw)]",
                "text-[calc(20/1920*100*1vw)]",
                "leading-[calc(20/1920*100*1vw)]",
                "tracking-[-0.01em]",
                pathname === item.link
                  ? "bg-white/20 text-white"
                  : "bg-white text-black"
              )}
              onMouseEnter={() => setHoveredItem(item.id)}  // Set hovered item on mouse enter
              onMouseLeave={() => setHoveredItem(null)} //
            >
              {pathname === item.link ? (
                <HeaderWhiteLine className="absolute bottom-0 right-0 w-[calc(100%-10/1920*100*1vw)] h-full pointer-events-none" />
              ) : (
                <HeaderLine className="absolute bottom-0 right-0 w-[calc(100%-10/1920*100*1vw)] h-full pointer-events-none" />
              )}

              {/* Text content */}
              <span className="relative z-10">
                {hoveredItem === item.id ? (
                  <RustleEffect text={item.name} /> // Rustling effect on hover
                ) : (
                  item.name // Original text after hover ends
                )}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute right-[calc(20/1920*100*1vw)] top-[2.8svh]"></div>
      <LeftLine className="absolute top-[11svh] left-[calc(60/1920*100*1vw)] z-50 color-white w-[calc(270/1920*100*1vw)] h-[8.4svh] pointer-events-none scale-x-[-1]" />
      <LeftLine className="absolute top-[11svh] right-[calc(60/1920*100*1vw)] z-50 color-white w-[calc(270/1920*100*1vw)] h-[8.4svh] pointer-events-none" />
    </>
  );
};

export default Header;
