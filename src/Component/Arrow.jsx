import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Arrow({className}) {
  return (
   <div className={`flex gap-x-2 ${className}`}>
    
    <div className=" prev-btn browser-prev product-prev size-8 flex items-center justify-center  bg-secondary rounded-full hover:bg-gray-200 transition cursor-pointer">
        <FaArrowLeft className='text-black'/>

    </div>
    <div className=" next-btn browser-next product-next size-8 flex items-center justify-center  bg-secondary rounded-full hover:bg-gray-200 transition cursor-pointer">
        <FaArrowRight className='text-black'/>

    </div>

   </div>
  )
}

export default Arrow