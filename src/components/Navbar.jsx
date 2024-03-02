import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-around ">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <img
            src={Logo}
            alt="logo"
            className="cursor-pointer hover:animate-slowspin w-28"
          />
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a href="https://www.facebook.com/theteksol/" target="main">
            <FaFacebook size={25} className="text-purple-400" />
          </a>
          <a href="https://www.linkedin.com/company/theteksol/" target="main">
            <IoLogoLinkedin size={26} className="text-purple-400 rounded-xl" />
          </a>
          <a href="https://github.com/TekSol" target="main">
            <FaGithub size={25} className="text-purple-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
