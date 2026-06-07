import Subheading from "../Component/Subheading";
import Today from "../Component/Today";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Cards from "../Component/Cards";
import Button from "../Component/Button";
import Container from "../Component/Container";
import Arrow from "../Component/Arrow";
import ApiData from '../ApiData'


function FlashSales() {

  let [show, setShow] = useState(4)
  return (
    <section className="mb-20">
      <Container>
        <Today text="Today’s" />
       <div className="flex items-center justify-between">
         <Subheading text="Flash Sales" className="mt-6" />
       
       </div>

        <div className="mt-10 flex justify-between items-center">
        <div className="flex justify-between flex-wrap gap-6">
  {ApiData.slice(0, show).map((item) => (
    <Cards
      key={item.id}
      src={item.image}
      tittle={item.tittle}
      badge={item.badge}
      discount={item.discount}
      regular={item.regular}
      list={item.list}
    />
  ))}
</div>
        </div>
        <div className="text-center mt-16 pb-16 border-b border-[#8282824d]">
         {
          show < ApiData.length &&  <Button onClick={()=>setShow(show + 4)} text="View All Products" />
         }
        </div>
      </Container>
    </section>
  );
}

export default FlashSales;
