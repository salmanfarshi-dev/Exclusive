import React, { useEffect } from "react";
import Container from "../Component/Container";
import Image from "../Component/Image";
import Gamepadone from "../assets/gamepad1 (1).png";
import Gamepadtwo from "../assets/gamepad1 (2).png";
import Gamepadthree from "../assets/gamepad1 (3).png";
import Gamepadfour from "../assets/gamepad1 (4).png";
import Gamepadd from "../assets/gamepadd.png";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Button from "../Component/Button";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Icondelivary from '../assets/icon-return.png'
import { useParams } from "react-router-dom";


function ItemsProducts() {
  const [size, setSize] = useState("");
  const [singleproduct, setSingleProduct] = useState([])
  let param = useParams()

useEffect(() => {
  fetch(`https://dummyjson.com/products/${param.id}`)
    .then((res) => res.json())
    .then((data) => setSingleProduct([data]));
}, [param.id]);
console.log(singleproduct);










  return (
    <section className="mt-20 mb-[140px]">
      <Container>
       {
        singleproduct.map(item=>(
           <div className="flex gap-x-[100px] ">
          <div className="flex gap-x-8">
            <div className=" flex flex-col gap-y-4 ">
           {
  item.images?.map((item2, index) => (
    <div
      key={index}
      className="w-[170px] h-[138px] flex justify-center items-center px-6 py-3 bg-secondary rounded-[4px]"
    >
      <Image src={item2} alt="image" />
    </div>
  ))
}
             
             
            </div>
            <div className=" ">
              <div className="w-[500px] h-[600px] flex justify-center items-center bg-secondary rounded-[4px]">
                <Image src={item.thumbnail} alt="image" />
              </div>
            </div>
          </div>

          <div className="">
            <div className="">
              <h4 className="font-semibold font-inter text-[24px] tracking-[3%] text-black leading-6">
               {item.title} {" "}
              </h4>
              <div className="flex my-4 gap-x-2">
                <div className="flex gap-x-1">
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-gray-400" />
                </div>
                <p className="text-[14px] font-normal text-black text-opacity-40 border-r-2 pr-4">
                  (150 Reviews)
                </p>

                <span className="text-[14px] text-[#00FF66] font-normal pl-2">
                  In Stock {item.stock}
                </span>
              </div>

              <p className="text-[24px] font-normal font-inter tracking-[3%] text-black">
                ${item.discountPercentage}
              </p>

              <p className="text-[14px] leading-5 text-black font-normal py-6 border-b-2 border-black border-opacity-50">
                {item.description}
              </p>

              <p className="flex items-center text-xl my-6 ">
                Colours:
                <label className="pl-6 cursor-pointer">
                  <input type="radio" name="color" className="sr-only peer" />

                  <div className="w-5 h-5 rounded-full bg-[#A0BCE0] peer-checked:ring-2 peer-checked:ring-black peer-checked:ring-offset-2"></div>
                </label>
                <label className="pl-3 cursor-pointer">
                  <input type="radio" name="color" className="sr-only peer" />

                  <div className="w-5 h-5 rounded-full bg-[#E07575] peer-checked:ring-2 peer-checked:ring-black peer-checked:ring-offset-2"></div>
                </label>
              </p>

              <div className="flex items-center gap-4">
                <h4 className="text-xl">Size:</h4>

                {["XS", "S", "M", "L", "XL"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setSize(item)}
                    className={`w-8 h-8 rounded border text-sm font-medium
            ${
              size === item
                ? "bg-primary text-white border-primary"
                : "bg-white text-black border-gray-300"
            }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-6 mb-10 flex items-center gap-x-2">
                <div className="flex">
                  <div className="border border-black border-opacity-50 w-10  flex items-center justify-center rounded-l hover:bg-primary hover:text-white duration-300 hover:border-transparent text-[30px] cursor-pointer">-</div>
                  <div className="text-[30px] w-16  border border-black border-opacity-50 flex items-center justify-center">0</div>
                  <div className="border border-black border-opacity-50 w-10  flex items-center justify-center rounded-r hover:bg-primary hover:text-white duration-300 hover:border-transparent text-[30px] cursor-pointer">+</div>
                </div>
                <Button text="Buy Now" className="!py-[10px]"/>
                <div className="w-10 h-10 border border-black rounded-[4px] flex justify-center items-center">
                  <FaRegHeart className="text-[20px]"/>

                </div>
              </div>

              <div className="mt-10 border border-black border-opacity-50 rounded-[4px]">
                <div className="pl-4 py-6 border-b border-black border-opacity-50 flex gap-x-4 items-center">
                  <TbTruckDelivery className="text-[35px]"/>
                  <div className="">
                    <h6 className="font-medium text-[16px] text-black">Free Delivery</h6>
                    <p className="font-medium text-[12px] text-black mt-2">Enter your postal code for Delivery Availability</p>
                  </div>


                </div>

                 <div className="pl-4 py-6 border-b border-black border-opacity-50 flex gap-x-4 items-center">
                  <img src={Icondelivary} alt="image" />
                  <div className="">
                    <h6 className="font-medium text-[16px] text-black">Return Delivery</h6>
                    <p className="font-medium text-[12px] text-black mt-2">Free 30 Days Delivery Returns. Details</p>
                  </div>


                </div>

              </div>
            </div>
          </div>
        </div>
        ))
       }
      </Container>
    </section>
  );
}

export default ItemsProducts;
