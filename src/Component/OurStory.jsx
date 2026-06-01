import React from 'react'
import Container from '../Component/Container'
import Image from '../Component/Image'
import AboutImage from '../assets/AboutImage.png'

function OurStory({className}) {
  return (
    <div className={` flex justify-between items-center ${className}`}>
        <Container>

       <h3 className='text-inter font-semibold text-[54px] text-black leading-[64px] tracking-[6%]'>Our Story</h3>

       <p className='text-[16px] text-black leading-6 mt-10 mb-6 w-[525px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
       <p className="text-[16px] text-black leading-6 w-[525px]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </Container>
        <Image src={AboutImage}/>
    </div>
  )
}

export default OurStory