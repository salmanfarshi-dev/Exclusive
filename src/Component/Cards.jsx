import React, { useState } from "react";
import Button from "../Component/Button";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CardSlice } from "../Slices/addToCartSlice";
import { addwishlist } from "../Slices/Wishlist";


function Cards({id,src, alt,badge, tittle, discount, regular,list, className,ReclassName, listClassName}) {

let data= useSelector(state=>state.cartitem.cartvalue)


const wishlistData = useSelector(state => state.Wishlist.value)


const isWishlisted = wishlistData.some(item => item.id === id)


let dispatch = useDispatch()

const handleAddCart=()=>{
   
  dispatch(CardSlice({
    
    tittle:tittle,
    image:src,
    price: discount,
    quantity:1
  }))

 
}

const handleheart=()=>{
 

   dispatch(addwishlist({
    id:id,
    tittle:tittle,
    image:src
    
  }))
}

  return (
    <div>
      
      <div className="w-[270px] group  cursor-pointer">
        <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative rounded-[4px] overflow-hidden">
         <Link to={`/products/${id}`}>
          <img src={src} alt={alt} />
         
         </Link>
          <p className={`bg-primary text-secondary py-1 px-3 text-xs font-normal rounded-[4px] absolute top-3 left-3 ${className}`}>
          {badge}
          </p>
          <div className="absolute flex flex-col gap-y-2 top-3 right-3">


            <p onClick={handleheart} className="size-[34px] rounded-full bg-white flex justify-center items-center">


             {
  isWishlisted ?
  <FaHeart className="size-6 text-red-500"/>
  :
  <FaRegHeart className="size-6"/>
}
            </p>



           
          </div>
          <div onClick={handleAddCart} className="w-full bg-black rounded-b-[4px] absolute bottom-[-40px] left-0 text-center group-hover:bottom-0 duration-300">
            <p className="text-white py-2">Add To Cart</p>
          </div>
        </div>
       <Link to={`/products/${id}`}>
        <h3 className="text-[16px] font-medium text-black mt-4">{tittle}</h3>
       </Link>
       <div className={`${listClassName}`}>
         <p className="text-primary text-[16px] font-medium my-2">${discount} <span className={`line-through text-black text-opacity-50 ml-3 ${ReclassName}`}>${regular}</span></p>

        <div className="flex items-center gap-x-2 ">
           <div className="flex items-center gap-x-2">
             <FaStar className="text-[#FFAD33]"/>
            <FaStar className="text-[#FFAD33]"/>
            <FaStar className="text-[#FFAD33]"/>
            <FaStar className="text-[#FFAD33]"/>
            <FaStar className="text-[#FFAD33]"/>
           </div>
      <p className="text-black text-opacity-50 text-[14px] font-semibold">({list})</p>
        </div>
       </div>
      </div>
      
    </div>
  );
}

export default Cards;
