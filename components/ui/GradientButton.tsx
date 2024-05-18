import Image, { StaticImageData } from "next/image";
import React from "react";

export default function GradientButton({ text, icon, height, width, className, alt, handleClick }: { text: string; icon?: StaticImageData; height: number; width: number; className: string; alt: string; handleClick: () => void; }) {
    return (
        <a href="#projects" className="hover:scale-105 transition-all">
            <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none mt-10">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-10 py-1 max-xs:text-xs xs:text-sm sm:text-lg md:text-sm font-medium text-slate-100 backdrop-blur-3xl tracking-wide">
                    {text}
                    {icon && <Image src={icon} alt={alt} className={`${className}`} width={width} height={height} />}
                </span>
            </button>
        </a>
    );
}
