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

function MetorDetails() {
  return (
    <section>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
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
              name="JEmma Watson"
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
        </Swiper>
      </Container>
    </section>
  );
}

export default MetorDetails;
