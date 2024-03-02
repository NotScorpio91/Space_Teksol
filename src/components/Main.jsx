import React from "react";
import MainContent from "./MainContent";
import Video from '../assets/blackhole.webm'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src={Video}/>
      </video>
      <MainContent />
    </div>
  );
};

export default Hero;