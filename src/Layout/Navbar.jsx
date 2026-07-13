import React, { useState } from "react";
import Container from "../Component/Container";
import Image from "../Component/Image";
import Logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addbradcrumb } from "../Slices/bradcrumb";
import { BsPerson } from "react-icons/bs";
import Images from "../assets/monitor.png";
import {
  CardSlice,
  decrementcart,
  deletecart,
  incrementcart,
} from "../Slices/addToCartSlice";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const data = useSelector((state) => state.cartitem.cartvalue);

  

  const handleIncrement = (item) => {
    dispatch(incrementcart(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementcart(item));
  };
  const handledeletecart = (item) => {
    dispatch(deletecart(item));
  };

  let dispatch = useDispatch();
  const [dropdown, setDrodown] = useState(false);
  const [carddropdown, setCardDropDown] = useState(false);

  const handleBreadcrumb = (name) => {
    dispatch(addbradcrumb(name));
  };

  let total = 0;

  data.forEach((item) => {
    total += item.price * item.quantity;
  });
  
console.log(data);
console.log(Array.isArray(data));
  return (
    <nav className=" mt-[47px] mb-[23px] border-b pb-[16px] border-[#8282824d] ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-x-[48px]">
            <li className="font-normal text-[16px] list-none text-black hover:text-[#DB4444] font-poppins cursor-pointer list">
              {" "}
              <NavLink onClick={() => handleBreadcrumb("Home")} to="/home">
                Home
              </NavLink>{" "}
            </li>
            <li className="font-normal text-[16px] list-none text-black hover:text-[#DB4444] font-poppins cursor-pointer list">
              {" "}
              <NavLink
                onClick={() => handleBreadcrumb("Contact")}
                to="/contact"
              >
                Contact
              </NavLink>{" "}
            </li>
            <li className="font-normal text-[16px] list-none text-black hover:text-[#DB4444] font-poppins cursor-pointer list">
              {" "}
              <NavLink onClick={() => handleBreadcrumb("About")} to="/about">
                About
              </NavLink>{" "}
            </li>
            <li className="font-normal text-[16px] list-none text-black hover:text-[#DB4444] font-poppins cursor-pointer list">
              {" "}
              <NavLink onClick={() => handleBreadcrumb("Sign Up")} to="/signUp">
                Sign Up
              </NavLink>{" "}
            </li>
          </div>
          <div className="flex gap-x-6 items-center">
            <div className="input-group relative w-full">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="py-2 px-5 bg-[#F5F5F5] border border-transparent focus:outline-none hover:border-gray-300 rounded-[4px] duration-300 placeholder:text-[12px] pr-9"
              />
              <FiSearch className="absolute top-3 right-8" />
            </div>
            <AiOutlineHeart className="size-[38px]" />

            <div
              onClick={() => setCardDropDown(!carddropdown)}
              className="relative"
            >
              <GrCart className="size-[25px] cursor-pointer" />

              {carddropdown && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-10 w-[400px] z-20 -left-40 bg-gray-400 rounded-[10px] py-4 h-[78vh]"
                >
                  <ul className="grid grid-cols-12   pb-3 px-3  text-white font-semibold text-sm border-b">
                    <li className="col-span-3">Image</li>
                    <li className="col-span-3">Name</li>
                    <li className="col-span-3"> Quantity</li>
                    <li className="col-span-3">Subtotal</li>
                  </ul>
                  <div className="flex flex-col gap-y-3 w-full h-[65vh] scroll overflow-y-auto hide-scrollbar">
                    {data && data.map((item) => (
                      <ul
                        key={item.id}
                        className="grid grid-cols-12  mt-4 px-3  text-white font-normal text-xs items-center"
                      >
                        <li className="col-span-3 relative">
                          <img
                            src={item.image}
                            alt=""
                            className="w-16 h-16 object-cover "
                          />
                          <button
                            onClick={()=>handledeletecart(item)}
                            className="w-4 h-4 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition-all duration-300 absolute top-0 left-0"
                          >
                            <IoClose className="text-2xl" />
                          </button>
                        </li>
                        <li className="col-span-3 w-20 truncate">
                          {item.tittle}
                        </li>
                        <li className="col-span-3 border border-white px-3 py-1 w-fit mx-auto">
                          <button
                            onClick={() => handleDecrement(item)}
                            className="mr-2"
                          >
                            -
                          </button>
                          <button>{item.quantity}</button>
                          <button
                            onClick={() => handleIncrement(item)}
                            className="ml-2"
                          >
                            +
                          </button>
                        </li>
                        <li className="col-span-3 w-20 truncate">
                          $ {item.price * item.quantity}
                        </li>
                      </ul>
                    ))}

                    <h5 className="text-white font-semibold font-sans absolute right-4 bottom-3 ">
                      Total: $ {total}
                    </h5>

                  {data && 
                    data.length>0 ?
                    <div className="flex gap-x-3 justify-center pt-4">
                      <Link to="/card">
                      <button className="text-white bg-red-500 py-2 px-8 rounded">Cart</button>
                      </Link>
                      <Link to="/checkout">
                      <button className="text-white bg-red-500 py-2 px-8 rounded">Checkout</button>
                      </Link>
                    </div>
                    :
                    <h1 className="text-white h-full font-semibold flex justify-center items-center text-2xl">Cart Empty</h1>
                      
                  }
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => setDrodown(!dropdown)}
              className="relative h-[28px] w-[28px] p-1 flex justify-center items-center bg-red-500 rounded-full cursor-pointer"
            >
              <BsPerson className="text-white size-[22px]" />

              {dropdown && (
                <ul className="absolute top-9 -left-20 w-36 rounded bg-red-400 py-2 shadow-lg z-20">
                  <Link to="/login">
                    <li className="px-3 py-2 text-white hover:bg-red-500 cursor-pointer">
                      Login
                    </li>
                  </Link>
                  <Link to="/signUp">
                    <li className="px-3 py-2 text-white hover:bg-red-500 cursor-pointer">
                      Registration
                    </li>
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
