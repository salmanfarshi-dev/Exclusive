import React from "react";
import Container from "../Component/Container";
import { Link } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";

function HeadingTop() {
  return (
    <div className="bg-black">
      <Container>
        <div className="flex justify-between items-center">
          <p className="text-secondary  text-sm font-poppins font-normal py-[15px] ml-[20%]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% !
            <Link className="font-semibold ml-2 underline" to="/">
              ShopNow
            </Link>
          </p>
          <button className="text-secondary font-normal font-poppins text-sm flex gap-x-2 items-center">
            English <MdKeyboardArrowDown className="text-xl"/>
          </button>
        </div>
      </Container>
    </div>
  );
}

export default HeadingTop;
