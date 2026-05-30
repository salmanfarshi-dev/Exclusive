import Subheading from "../Component/Subheading";
import Today from "../Component/Today";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Cards from "../Component/Cards";
import Keyboard from "../assets/keyboard.png";
import Button from "../Component/Button";
import Container from "../Component/Container";
import Arrow from "../Component/Arrow";
import Gapmepad from '../assets/gamepad.png'
import Monitor from '../assets/monitor.png'
import Chair from '../assets/chair.png'
import Mouse from '../assets/red-computer-mouse.png'

function FlashSales() {
  return (
    <section className="mb-20">
      <Container>
        <Today text="Today’s" />
       <div className="flex items-center justify-between">
         <Subheading text="Flash Sales" className="mt-6" />
        <Arrow />
       </div>

        <div className="mt-10 flex justify-between items-center">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={false}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Cards
                src={Gapmepad}
                alt="Image"
                tittle="HAVIT HV-G92 Gamepad"
                badge="-40%"
                discount="120"
                regular="160"
                list="88"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                src={Keyboard}
                alt="Image"
                tittle="AK-900 Wired Keyboard"
                badge="-35%"
                discount="960"
                regular="1160"
                list="75"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                src={Monitor}
                alt="Image"
                tittle="IPS LCD Gaming Monitor"
                badge="-30%"
                discount="370"
                regular="400"
                list="99"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                src={Chair}
                alt="Image"
                tittle="S-Series Comfort Chair "
                badge="-25%"
                discount="375"
                regular="400"
                list="99"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                src={Mouse}
                alt="Image"
                tittle="S-Series Comfort Chair "
                badge="-28%"
                discount="300"
                regular="450"
                list="90"
              />
            </SwiperSlide>
          
          
            
          
            
           
          </Swiper>
        </div>
        <div className="text-center mt-16 pb-16 border-b border-[#8282824d]">
          <Button text="View All Products" />
        </div>
      </Container>
    </section>
  );
}

export default FlashSales;
