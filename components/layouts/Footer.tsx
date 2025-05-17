import { LeftLine } from "@/asset/svg";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[calc(100%-125/1920*100*1vw)] pb-[2.2svh] self-center flex justify-between ">
      <div className="relative">
        <LeftLine className="w-[calc(228/1920*100*1vw)] h-[calc(17/1920*100*1vw)]" />
        <div className="flex justify-between">
        <Link href="mailto:info@vancouvershow.com" target="_blank" className="text-sm font-mono">
            _Mail
        </Link>
        <Link href="https://linkedin.com/in/tushar-bawane-2291a921a" target="_blank" className="text-sm font-mono">
            _Linkdin
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
