import { HeaderWhiteLine } from "@/asset/svg";
import { headerData } from "@/data/headerData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
    absolute flex flex-col justify-between items-center
    w-screen
    h-[calc(7.78px*100)]
    px-[calc(76/1920*100*1vw)]
    pt-[15.5dvh]
    pb-[0.7dvh]
    opacity-100 pointer-events-none
    transition-opacity duration-500 ease-in-out
    z-50
  "
    >
      <div className="flex justify-between w-full h-full">
        <div className="w-[calc(260/1920*100*1vw)] flex-col flex justify-start ">
          <div className="inline-flex justify-between w-full mb-[1.2dvh] uppercase font-sans text-[calc(14/1920*100*1vw)] leading-[calc(14/1920*100*1vw)] tracking-[-0.01em]">
            Service
          </div>
          <div className="w-full flex flex-col gap-5">
            {headerData.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="uppercase relative text-[var(--white)]  [font-family:var(--primary-font)] text-[calc(16/1920*100*1vw)] leading-[calc(16/1920*100*1vw)] tracking-[-0.01em] mb-[calc(9/1920*100*1vw)]  px-[calc(20/1920*100*1vw)]  py-[calc(14/1920*100*1vw)]"
              >
                <HeaderWhiteLine className="absolute top-0 left-0 w-full pointer-events-none" />

                {/* Text content */}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
