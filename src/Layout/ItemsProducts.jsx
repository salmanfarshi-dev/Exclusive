import React from "react";
import Container from "../Component/Container";
import Image from "../Component/Image";
import Gamepadone from "../assets/gamepad1 (1).png";
import Gamepadtwo from "../assets/gamepad1 (2).png";
import Gamepadthree from "../assets/gamepad1 (3).png";
import Gamepadfour from "../assets/gamepad1 (4).png";
import Gamepadd from "../assets/gamepadd.png";
import { FaStar } from "react-icons/fa";


function ItemsProducts() {
  return (
    <section>
      <Container>
        <div className="flex gap-x-[100px] " >
          <div className="flex gap-x-8">
            <div className=" flex flex-col gap-y-4 ">
            <div className="w-[170px] h-[138px] flex justify-center items-center px-6 py-3 bg-secondary rounded-[4px]">
              <Image src={Gamepadone} alt="image" />
            </div>
            <div className="w-[170px] h-[138px] flex justify-center items-center px-6 py-3 bg-secondary rounded-[4px]">
              <Image src={Gamepadtwo} alt="image" />
            </div>
            <div className="w-[170px] h-[138px] flex justify-center items-center px-6 py-3 bg-secondary rounded-[4px]">
              <Image src={Gamepadthree} alt="image" />
            </div>
            <div className="w-[170px] h-[138px] flex justify-center items-center px-6 py-3 bg-secondary rounded-[4px]">
              <Image src={Gamepadfour} alt="image" />
            </div>
          </div>
          <div className=" ">
            <div className="w-[500px] h-[600px] flex justify-center items-center bg-secondary rounded-[4px]">
              <Image src={Gamepadd} alt="image" />
            </div>
          </div>
          </div>

          <div className="">
            <div className="">
              <h4 className="font-semibold font-inter text-[24px] tracking-[3%] text-black leading-6">
                Havic HV G-92 Gamepad </h4>
              <div className="flex my-4 gap-x-2">
                <div className="flex gap-x-1">
                    <FaStar className="text-[#FFAD33]"/>
                    <FaStar className="text-[#FFAD33]"/>
                    <FaStar className="text-[#FFAD33]"/>
                    <FaStar className="text-[#FFAD33]"/>
                    <FaStar className="text-gray-400"/>



                </div>
                <p className="text-[14px] font-normal text-black text-opacity-40 border-r-2 pr-4">(150 Reviews)</p>

                <span className="text-[14px] text-[#00FF66] font-normal pl-2">In Stock</span>
              </div>

              <p className="text-[24px] font-normal font-inter tracking-[3%] text-black">$192.00</p>

              <p className="text-[14px] leading-5 text-black font-normal py-6 border-b-2 border-black border-opacity-50">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

              <p>Colours: 
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ItemsProducts;
