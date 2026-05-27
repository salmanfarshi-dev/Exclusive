import React from 'react'
import Container from '../Component/Container'
import Image from '../Component/Image'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { GrCart } from "react-icons/gr";



function Navbar() {
  return (

   <nav className=" mt-[47px] mb-[23px]">
    <Container>
        <div className="flex justify-between items-center">
            <div className="">
                <Image src={Logo} alt="Logo"/>
            </div>
            <div className="flex items-center gap-x-[48px]">
                <li className="font-normal text-[16px] list-none text-black font-poppins cursor-pointer list"> <Link to="/home">Home</Link> </li>
                <li className="font-normal text-[16px] list-none text-black font-poppins cursor-pointer list"> <Link to="/contact">Contact</Link> </li>
                <li className="font-normal text-[16px] list-none text-black font-poppins cursor-pointer list"> <Link to="/about">About</Link> </li>
                <li className="font-normal text-[16px] list-none text-black font-poppins cursor-pointer list"> <Link to="/signUp">Sign Up</Link> </li>
            </div>
            <div className="flex gap-x-6 items-center">
                <div className="input-group relative w-full">
                    <input type="text" placeholder='What are you looking for?' className='py-2 px-5 bg-[#F5F5F5] border border-transparent focus:outline-none hover:border-gray-300 rounded-[4px] duration-300 placeholder:text-[12px] pr-9'/>
                    <FiSearch className='absolute top-3 right-8'/>

                </div>
                <AiOutlineHeart className='size-[32px]'/>
                <GrCart className='size-[32px]'/>


            </div>
           
        </div>
    </Container>
   </nav>

  )
}

export default Navbar