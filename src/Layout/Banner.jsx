import React, { useRef, useState } from "react";
import Container from "../Component/Container";
import Bannerlist from "../Component/Bannerlist";
import Bannerone from "../assets/bannerone.jpg";
import Bannertwo from "../assets/banner-two (1).jpg";
import Bannerthree from "../assets/banner-two (2).jpg";
import Bannerfour from "../assets/banner-two (2).jpg";
import Image from "../Component/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Banner() {
  return (
    <section className="pt-10 pb-[110px]">
      <Container>
        <div className="flex ">
          <div className="w-3/12 relative after:content-[''] after:w-[2px] after:bg-[#8282824d] after:h-[400px] after:absolute after:-top-[63px] after:right-10">
            <div className="flex flex-col gap-y-[16px]">
              <Bannerlist
                type="true"
                text="Woman’s Fashion"
                className="cursor-pointer"
              />
              <Bannerlist
                type="true"
                text="Men’s Fashion"
                classNameforicon="ml-[80px] c"
                className="cursor-pointer"
              />
              <Bannerlist text="Electronics" />
              <Bannerlist text="Home & Lifestyle" />
              <Bannerlist text="Medicine" />
              <Bannerlist text="Sports & Outdoor" />
              <Bannerlist text="Baby’s & Toys" />
              <Bannerlist text="Groceries & Pets" />
              <Bannerlist text="Health & Beauty" />
            </div>
          </div>

          <div className="w-9/12">
            <Swiper
              className="bannerswiper"
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              pagination={{ clickable: true }}
              navigation={false}
              loop={false}
              loopAdditionalSlides={1}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={Bannerone} className="w-full h-[330px]" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Bannertwo} className="w-full h-[330px]" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={Bannerthree} className="w-full h-[330px]" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
