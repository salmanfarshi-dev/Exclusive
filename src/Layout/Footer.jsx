import React from 'react'
import Container from '../Component/Container'
import Footerlogo from '../assets/footerLogo.png'
import Image from '../Component/Image'
import { AiOutlineSend } from "react-icons/ai";
import FooterList from '../Component/FooterList';
import QR from '../assets/Qr Code.png'
import Playstore from '../assets/GooglePlay.png'
import Downloadstore from '../assets/download-appstore.png'


function Footer() {
  return (
   <footer className='bg-black pt-[80px] pb-[60px]'>
    <Container>
        <div className="flex items-start justify-between">
            <div className="">
              <Image src={Footerlogo} alt="Logo"/>
              <h3 className="text-secondary text-xl font-medium py-6">Subscribe</h3>
              <p className="text-[16px] font-normal text-secondary ">Get 10% off your first order</p> 
              <div className="mt-[16px] w-[210px] relative border-2 border-secondary rounded-[4px]">
                <input type="email"  placeholder='Enter your email' className='py-3 pl-4  text-white placeholder:text-secondary placeholder:text-[16px] placeholder:text-opacity-40  bg-transparent  focus:outline-none w-[150px]'/>

                <AiOutlineSend  className='size-6 text-secondary absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer'/>
              </div>
            </div>
            <div className="">
            <div className="flex flex-col">
                 <strong className='text-secondary font-medium text-[20px] '>Support</strong>
             <ul className='flex flex-col mt-6 gap-y-[16px]'>
               <FooterList text="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh."/>
               <FooterList text="exclusive@gmail.com"/>
               <FooterList text="+88015-88888-9999"/>
             </ul>
            </div>
            </div>
            <div className="">
            <div className="flex flex-col">
                 <strong className='text-secondary font-medium text-[20px] '>Account</strong>
             <ul className='flex flex-col mt-6 gap-y-[16px]'>
               <FooterList text="My Account"/>
               <FooterList text="Login / Register"/>
               <FooterList text="Cart"/>
               <FooterList text="Wishlist"/>
               <FooterList text="Shop"/>
             </ul>
            </div>
            </div>
            <div className="">
            <div className="flex flex-col">
                 <strong className='text-secondary font-medium text-[20px] '>Quick Link</strong>
             <ul className='flex flex-col mt-6 gap-y-[16px]'>
               <FooterList text="Privacy Policy"/>
               <FooterList text="Terms Of Use"/>
               <FooterList text="FAQ"/>
               <FooterList text="Contactv"/>
               
             </ul>
            </div>
            </div>
            <div className="">
            <div className="flex flex-col">
                 <strong className='text-secondary font-medium text-[20px] '>Download App</strong>
                 <p className="text-secondary text-sm font-medium text-opacity-70 mt-6 mb-2">Save $3 with App New User Only</p>
                 <div className="flex gap-x-3">
                    <Image src={QR}/>
                    <div className="flex flex-col gap-y-1">
                        <Image src={Playstore} alt=""/>
                        <Image src={Downloadstore} alt=""/>
                    </div>
                    
                 </div>
             
            </div>
            </div>
           
        </div>
    </Container>
   </footer>
  )
}

export default Footer