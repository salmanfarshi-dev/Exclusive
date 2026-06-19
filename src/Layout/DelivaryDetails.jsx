import React from "react";
import Container from "../Component/Container";
import Subheading from "../Component/Subheading";
import Input  from "../Component/Input";
import Image from '../Component/Image'
import Gamepad from '../assets/gamepad.png'
import Monitor from '../assets/monitor.png'
import Button from  '../Component/Button'
import Visacard from '../assets/visa.png'
import Bkash from '../assets/bkash.png'
import Nogat from '../assets/nogat.png'
import MasterCard from '../assets/mastercard.png'
import { useSelector } from "react-redux";
import Nextpage from '../Component/Nextpage'

function DelivaryDetails() {
    let prev = useSelector((state)=>(state.bradcrumb.previousvalue));
  let next = useSelector((state)=>(state.bradcrumb.currentvalue));
  return (
    <section className="mt-20 mb-[140px]">
      <Container>
          <Nextpage prev={prev} current={next} className="mt-20 mb-[140px]" />
        <Subheading text="Billing Details" />
        <div className="grid grid-cols-12 mt-12">
          <div className="col-span-6 w-[450px]">
            <div className="flex flex-col gap-y-8 justify-start">
              <div className="">
                <label className="relative text-[16px] text-black text-opacity-40 ">
                  First Name
                  <span className="absolute -top-0 -right-3 text-red-500">
                    *
                  </span>
                </label>
                  <Input className="bg-secondary mt-2 border-none py-2 px-4 text-black text-opacity-75 "/>
              </div>
              <div className="">
                <label className="relative text-[16px] text-black text-opacity-40 ">
                 Company Name
                </label>
                  <Input className="bg-secondary mt-2 border-none py-2 px-4 text-black text-opacity-75 "/>
              </div>
              <div className="">
                <label className="relative text-[16px] text-black text-opacity-40 ">
                  Street Address
                  <span className="absolute -top-0 -right-3 text-red-500">
                    *
                  </span>
                </label>
                  <Input className="bg-secondary mt-2 border-none py-2 px-4 text-black text-opacity-75 "/>
              </div>
              <div className="">
                <label className="relative text-[16px] text-black text-opacity-40 ">
                 Apartment, floor, etc. (optional)
                </label>
                  <Input className="bg-secondary mt-2 border-none py-2 px-4 text-black text-opacity-75 "/>
              </div>
              <div className="">
                <label className="relative text-[16px] text-black text-opacity-40 ">
                  Town/City
                  <span className="absolute -top-0 -right-3 text-red-500">
                    *
                  </span>
                </label>
                  <Input className="bg-secondary mt-2 border-none py-2 px-4 text-black text-opacity-75 "/>
              </div>
              <div className="">
                <label className="relative text-[16px] text-black text-opacity-40 ">
                 Phone Number
                  <span className="absolute -top-0 -right-3 text-red-500">
                    *
                  </span>
                </label>
                  <Input className="bg-secondary mt-2 border-none py-2 px-4 text-black text-opacity-75 "/>
              </div>
              <div className="">
                <label className="relative text-[16px] text-black text-opacity-40 ">
                 Email Address
                  <span className="absolute -top-0 -right-3 text-red-500">
                    *
                  </span>
                </label>
                  <Input className="bg-secondary mt-2 border-none py-2 px-4 text-black text-opacity-75 "/>
              </div>
             <div className=" flex gap-x-4 text-start  items-center">
                <input type="checkbox" />
                 <p className="text-[16px] text-black font-normal">Save this information for faster check-out next time</p>
             </div>
            </div>
          </div>
          <div className=" col-span-6">
            <div className="w-[500px]">
                <div className="flex flex-col gap-y-8">
                <div className="flex justify-between items-center">
                    <div className="flex gap-x-6 items-center">
                        <Image src={Gamepad} className="w-[54px] h-[54]"/>
                        <p className="text-[16px] font-normal text-black">Gamepad</p>
                    </div>
                    <p className="text-[16px]  font-normal text-black">$ 660</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-x-6 items-center">
                        <Image src={Monitor} className="w-[54px] h-[54]"/>
                        <p className="text-[16px] font-normal text-black">LCD Monitor</p>
                    </div>
                    <p className="text-[16px]  font-normal text-black">$ 1100</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-black border-opacity-75">
                    <div className="flex gap-x-6 items-center">
                        <p className="text-[16px] font-normal text-black">Subtotal:</p>
                    </div>
                    <p className="text-[16px]  font-normal text-black">$ 1100</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-black border-opacity-75">
                    <div className="flex gap-x-6 items-center">
                        <p className="text-[16px] font-normal text-black">Shipping:</p>
                    </div>
                    <p className="text-[16px]  font-normal text-black">Free</p>
                </div>
                <div className="flex justify-between items-center pb-4 ">
                    <div className="flex gap-x-6 items-center">
                        <p className="text-[16px] font-normal text-black">Total:</p>
                    </div>
                    <p className="text-[16px]  font-normal text-black">$1750</p>
                </div>
                <div className="flex justify-between  items-center">
                    <div className="flex gap-x-6 items-center">
                       <input name="payment" type="radio" className="scale-150 accent-black" />
                       <label htmlFor="" className="text-[16px] font-normal">Bank</label>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <Image src={Bkash} className="w-14 object-cover"/>
                        <Image src={MasterCard} className="w-14 object-cover"/>
                        <Image src={Visacard} className="w-14 object-cover"/>
                        <Image src={Nogat} className="w-14 object-cover"/>
                    </div>
                   
                   
                </div>
                <div className="flex justify-between  items-center  ">
                    <div className="flex gap-x-6 items-center">
                       <input  name="payment"  type="radio" className="scale-150 accent-black" />
                       <label htmlFor="" className="text-[16px] font-normal">Cash on delivery</label>
                    </div>
                   
                   
                </div>

                <div className="flex justify-between items-center gap-x-4">
                   <div> <Input placeholder="Coupon Code" className="border border-black rounded-[4px] py-4 px-6 text-opacity-50 text-black"/></div>

                    <Button text="Apply Coupon" className="!py-3"/>
                </div>
                <Button text="Place Order" className="w-fit"/>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DelivaryDetails;
