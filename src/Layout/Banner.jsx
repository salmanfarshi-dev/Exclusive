import Container from '../Component/Container'
import React from 'react'
import Bannerlist from '../Component/Bannerlist'
import BannerImage from '../assets/bannerImage.jpg'
import Image from '../Component/Image'

function Banner() {
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
        <Image src={BannerImage}/>

        </div>
        </div>
    </Container>
   </section>
  )
}

export default Banner