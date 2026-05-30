import React from 'react'
import LoginImage from "../assets/sideImage.png";
import Image from "../Component/Image";
import Container from "../Component/Container";
import Input from "../Component/Input";
import  Button  from '../Component/Button'

function Loginpage() {
  return (
     <section className="mt-16 mb-[140px]">
      <div className="flex justify-between items-center">
        <Image src={LoginImage} className="h-[700px] object-cover" />
        <Container>
          <h5 className="font-medium text-[36px] tracking-[4%] text-black font-inter">
           Log in to Exclusive
          </h5>
          <p className="text-[16px] font-normal text-black mt-6 mb-[48px]">
            Enter your details below
          </p>

          <div className="w-[370px]">
            <form action="" className="">
              <div className="gap-y-10 flex flex-col">
                <Input type="email" placeholder="Enter Your Email " />
                <Input type="password" placeholder="Password" />
              </div>
              <div className="flex justify-between items-center mt-10">
                <Button text="Log In" />
                <p className='text-primary text-[16px] font-normal cursor-pointer'>Forget Password?</p>
               
              </div>
              
            </form>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Loginpage