import Today from "../Component/Today";
import Container from "../Component/Container";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Subheading from "../Component/Subheading";
import Arrow from "../Component/Arrow";
import Categorybox from "../Component/Categorybox";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { TbDeviceWatchStats } from "react-icons/tb";
import { MdOutlineCameraAlt } from "react-icons/md";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import { MdCable } from "react-icons/md";

function BrowseCategory() {
  return (
    <Container>
      <Today text="Categories" />
      <div className="flex items-center justify-between">
        <Subheading text="Browse By Category" />
        <Arrow />
      </div>

      <div className="mt-16 flex justify-between items-center pb-[70px] border-b border-black border-opacity-20 mb-[70px]">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          pagination={false}
          navigation={{
            prevEl: ".browser-prev",
            nextEl: ".browser-next",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Categorybox icon={<MdOutlinePhoneAndroid />} text="Phones" />
          </SwiperSlide>
          <SwiperSlide>
            <Categorybox icon={<RiComputerLine />} text="Computers" />
          </SwiperSlide>
          <SwiperSlide>
            <Categorybox icon={<TbDeviceWatchStats />} text="SmartWatch" />
          </SwiperSlide>
          <SwiperSlide>
            <Categorybox icon={<MdOutlineCameraAlt />} text="Camera" />
          </SwiperSlide>
          <SwiperSlide>
            <Categorybox icon={<CiHeadphones />} text="HeadPhones" />
          </SwiperSlide>
          <SwiperSlide>
            <Categorybox icon={<LuGamepad />} text="Gaming" />
          </SwiperSlide>
          <SwiperSlide>
            <Categorybox icon={<MdCable />} text="MdCable" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}

export default BrowseCategory;
