import React from 'react'
import Container from '../Component/Container'
import Bannerlist from '../Component/Bannerlist'
import BannerImage from '../assets/bannerImage.jpg'
import CustomImage from '../Component/Image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
   <section className='pt-10 pb-[110px]'>
    <Container>
        <div className="flex ">
            <div className="w-3/12 relative after:content-[''] after:w-[2px] after:bg-[#8282824d] after:h-[400px] after:absolute after:-top-[63px] after:right-10">
    
        <div className="flex flex-col gap-y-[16px]">
            <Bannerlist type="true" text="Woman’s Fashion" className="cursor-pointer"/>
            <Bannerlist type="true" text="Men’s Fashion" classNameforicon="ml-[80px] c" className="cursor-pointer"/>
            <Bannerlist text="Electronics"/>
            <Bannerlist text="Home & Lifestyle"/>
            <Bannerlist text="Medicine"/>
            <Bannerlist text="Sports & Outdoor"/>
            <Bannerlist text="Baby’s & Toys"/>
            <Bannerlist text="Groceries & Pets"/>
            <Bannerlist text="Health & Beauty"/>
        </div>
        
        </div>


        <div className="w-9/12">
        
        
        
        </div>


        </div>
    </Container>
   </section>
  )
}

export default Banner;