import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="flex justify-center gap-12 items-center font-bold">
        <img
          className="rounded-full w-[300px] h-[300px]"
          src="https://swimswam.com/wp-content/uploads/2019/09/William-and-Mary_m_Kent-Codding.jpeg"
          alt=""
        />
        <div className="text-center">
          <h4 className="text-md text-slate-500">Hello, I'm</h4>
          <h2 className="text-5xl te capitalize text-slate-600">john doe</h2>
          <h3 className="text-3xl capitalize text-slate-500">
            frontend developer
          </h3>
          <div className="flex gap-5 items-center justify-center mt-4">
            <a
              href=""
              className="border-2 border-black py-2 hover:bg-black hover:text-white ease-in-out duration-200 rounded-full px-4"
            >
              Download CV
            </a>
            <a
              href=""
              className="border-2 border-black py-2 bg-black hover:bg-white hover:text-black text-white ease-in-out duration-200 rounded-full px-4"
            >
              Contact Info
            </a>
          </div>
          <div className="flex gap-5 items-center justify-center mt-4">
            <a
              href=""
              className="border-2 border-black py-2 hover:bg-black hover:text-white ease-in-out duration-200 rounded-full px-2"
            >
              <FaLinkedinIn />
            </a>
            <a
              href=""
              className="border-2 border-black py-2 bg-black hover:bg-white hover:text-black text-white ease-in-out duration-200 rounded-full px-2"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
