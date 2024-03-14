import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-20">
        <h4 className="text-sm text-slate-700 capitalize">Get in Touch</h4>
        <h2 className="text-5xl font-bold capitalize">Contact Me</h2>
      </div>
      <div className="flex justify-center  text-xl">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12  flex items-center gap-8 border border-black py-7 px-10 rounded-3xl">
          <a
            href=""
            className="border-2 border-black py-2 hover:bg-black hover:text-white ease-in-out duration-200 rounded-full px-2"
          >
            <IoMdMail />
          </a>
          <p className="hover:text-red-500">Example@gmail.com</p>
          <a
            href=""
            className="border-2 border-black py-2 bg-black hover:bg-white hover:text-black text-white ease-in-out duration-200 rounded-full px-2"
          >
            <FaLinkedinIn />
          </a>
          <p className="hover:text-red-500">Linkedin</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
