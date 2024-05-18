import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import GridBackground from "./ui/GridBackground";

export function Hero() {
  return (
    <div className="h-screen">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 left-52"
        fill="purple"
      />
      <Spotlight
        className="-top-40 left-full"
        fill="white"
      />
      <Spotlight
        className="-top-40 right-52"
        fill="purple"
      />
      
      <GridBackground />
    
    </div>
  );
}




// text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50
