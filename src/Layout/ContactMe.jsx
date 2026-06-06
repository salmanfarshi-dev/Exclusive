import React from "react";
import Container from "../Component/Container";
import Nextpage from "../Component/Nextpage";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Input from '../Component/Input'
import Button from '../Component/Button'

function ContactMe() {
  return (
    <section className="mt-20">
      <Container>
        <Nextpage prev="Home" current="Contact" />

        <div className="grid grid-cols-12 gap-x-8 mt-20 mb-[140px]">
          <div className="col-span-4 ">
            <div className="bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.2)] px-[35px] py-[40px] rounded-[4px] flex-1">
              <div className="flex items-center gap-x-[16px]">
                <div className="size-10 rounded-full bg-primary flex justify-center items-center text-white text-[20px]">
                  <IoCallOutline />
                </div>
                <h6 className="text-[16px] text-black font-medium">
                  Call To Us
                </h6>
              </div>
              <p className="text-[14px] text-black mt-6 font-normal">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-[14px] text-black mt-4 font-normal border-b-2 border-black border-opacity-40 pb-8 ">
                Phone: +8801611112222
              </p>

              <div className=" mt-8 flex items-center gap-x-[16px]">
                <div className="size-10 rounded-full bg-primary flex justify-center items-center text-white text-[20px]">
                  <MdOutlineEmail />
                </div>
                <h6 className=" text-[16px] text-black font-medium">
                  Write To US
                </h6>
              </div>
              <p className="text-[14px] text-black mt-6 font-normal">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-[14px] text-black mt-4 font-normal">
                Emails: customer@exclusive.com
              </p>
              <p className="text-[14px] text-black mt-4 font-normal">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>

          <div className="col-span-8 ">
            <div className="bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.2)] px-[35px] py-[40px] rounded-[4px] flex-1">
              <div className="flex gap-x-4 items-center">
                <Input  type="text" placeholder="Your name" className="border-none bg-secondary py-[13px] px-4 rounded-[4px]"/>
                <Input  type="email" placeholder="Your Email" className="border-none bg-secondary py-[13px] px-4 rounded-[4px]"/>
                <Input  type="tel" placeholder="Your Phone" className="border-none bg-secondary py-[13px] px-4 rounded-[4px]"/>
              </div>
              <textarea name="" id="" className="w-full bg-secondary mt-8 px-4 pt-3 h-44 resize-none focus:outline-none" placeholder="Enter Message"></textarea>
             <div className="text-end mt-12">
               <Button className="" text="Send Massage"/>
             </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactMe;
