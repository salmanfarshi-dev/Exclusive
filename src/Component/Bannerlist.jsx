import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";

function Bannerlist({classNameforicon, className, text,type}) {
  return (
    <li className={`font-normal text-[16px] text-black list-none cur ${className}`}>{text} { type == 'true' &&  <RiArrowRightSLine className={`inline ml-[51px] ${classNameforicon}`}/>}</li>
  )
}

export default Bannerlist