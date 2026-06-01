import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Container from "../Component/Container";
import Mentor from "../Component/Mentor";
import Cruise from "../assets/cruise.png";
import Watson from "../assets/watson.png";
import Smith from "../assets/smith.png";
import Rafik from "../assets/rafik.png";
import '../index.css'

function MetorDetails() {
  return (
    <section className="mb-[136px] ">
      <Container>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwipers relative !pb-[70px] "
        >
          <SwiperSlide>
            <Mentor
              src={Cruise}
              name="Tom Cruise"
              identifier="Founder & Chairman"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Mentor
              src={Watson}
              name="Emma Watson"
              identifier="Managing Director"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Mentor
              src={Smith}
              name="Will Smith"
              identifier="Product Designer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Mentor
              src={Rafik}
              name="Rafik"
              identifier="Product Manager"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}

export default MetorDetails;
