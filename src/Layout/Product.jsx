import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Container from '../Component/Container'
import Today  from '../Component/Today'
import Subheading from '../Component/Subheading'
import Arrow from '../Component/Arrow'
import Cards from '../Component/Cards';
import Dogfood from '../assets/dogfood.png'
import Cameratwo from '../assets/cameratwp.png'
import Laptop from '../assets/laptop.png'
import Button  from '../Component/Button';
import Keyboardtwo from '../assets/keyboardtwo.png'
import Curology from '../assets/bo-removebg-preview.png'

function Product() {
  return (
    <section className='mb-[168px]'>
        <Container>
            <Today text="Our Products"/>
            <div className="flex justify-between items-center">
                <Subheading text="Explore Our Products" className="mt-5"/>
                <Arrow/>
            </div>

            <div className="mt-16 flex justify-between items-center">

            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={false}
        navigation={{
            prevEl:".product-prev",
            nextEl:".product-next",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
             <Cards ReclassName="hidden"
              listClassName="flex gap-x-2 items-center"
            src={Dogfood}
            tittle="Small BookSelf"
            regular=""
            discount="100"
            list="35"
            className="hidden"
          />
        </SwiperSlide>
        <SwiperSlide>
             <Cards ReclassName="hidden"
              listClassName="flex gap-x-2 items-center"
            src={Cameratwo}
            tittle="CANON EOS DSLR Camera"
            regular=""
            discount="325"
            list="95"
            className="hidden"
          />
        </SwiperSlide>
        <SwiperSlide>
             <Cards ReclassName="hidden"
              listClassName="flex gap-x-2 items-center"
            src={Laptop}
            tittle="ASUS FHD Gaming Laptop"
            regular=""
            discount="700"
            list="325"
            className="hidden"
          />
        </SwiperSlide>
        <SwiperSlide>
             <Cards ReclassName="hidden"
             listClassName="flex gap-x-2 items-center"
            src={Curology}
            tittle="Curology Product Set "
            regular=""
            discount="500"
            list="145"
            className="hidden"
          />
        </SwiperSlide>
        <SwiperSlide>
             <Cards ReclassName="hidden"
              listClassName="flex gap-x-2 items-center"
            src={Keyboardtwo}
            tittle="Computer keyboard Thermaltake Gamer"
            regular=""
            discount="450"
            list="320"
            className="hidden"
          />
        </SwiperSlide>
        
       
      </Swiper>

            </div>
            <div className="mt-16 text-center">
                <Button text="View All Products"/>
            </div>

        </Container>
    </section>
  )
}

export default Product