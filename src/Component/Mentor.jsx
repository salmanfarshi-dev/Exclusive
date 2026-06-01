import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Mentor({ name, identifier, src }) {
  return (
    <div className="flex flex-col w-[370px] bg-white ">
      <div className="bg-secondary relative  w-full h-[430px] flex justify-center">
        <img className=" absolute bottom-0 w-[290px] h-[390px] " src={src} alt="image" />
      </div>
      <h6 className="font-medium text-[32px] font-inter tracking-[4%] mt-8 mb-2 text-black">{name}</h6>
      <p className="text-[16px] text-black font-normal mb-[16px]">{identifier}</p>
      <div className="flex gap-x-[16px]">
  <FiTwitter className="text-black size-6 hover:scale-105 duration-300 cursor-pointer" />
  <FaInstagram className="text-black size-6 hover:scale-105 duration-300 cursor-pointer" />
  <FaLinkedinIn className="text-black size-6 hover:scale-105 duration-300 cursor-pointer" />
</div>
    </div>
  );
}

export default Mentor;
