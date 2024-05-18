import React from "react";
import { FlipWords } from "./FlipWords";
import GradientButton from "./GradientButton";
import arrow from '../../public/icons/arrows.png';

const words = ["thoughts", "designs", "creativity", "ideas"];

const handleClick = ()=>{

}

export default function GridBackground() {
    return (
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className="flex flex-col justify-center items-center gap-10">
                <div className="uppercase tracking-widest max-xs:text-xl xs:text-[26px] sm: xs:leading-[40px] text-center md:bg-clip-text md:text-transparent md:bg-gradient-to-b md:from-neutral-50 md:to-neutral-400 md:bg-opacity-50">
                    Hello, I'm Utkarsh Sarkari
                </div>
                <div className="flex justify-center items-center text-center">
                    <div className="max-xs:text-4xl xs:text-6xl lg:text-7xl font-semibold text-neutral-200 max-xs:leading-[55px] xs:leading-[70px] md:leading-[90px]">
                        I Convert
                        <FlipWords words={words} /> <br />
                        <span className="text-wrap">Into Impactful Code Blocks</span>
                    </div>
                </div>
                
                <GradientButton text="EXPLORE WORK" icon={arrow} height={35} width={35} className={"ml-2"} alt="icon" handleClick={handleClick} />
            </div>


        </div>
    );
}
