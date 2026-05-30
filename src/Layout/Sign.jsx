import React from "react";
import SignupImage from "../assets/sideImage.png";
import Image from "../Component/Image";
import Container from "../Component/Container";
import Input from "../Component/Input";
import ButtonComp from "../Component/Button";
import { FcGoogle } from "react-icons/fc";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Sign() {
  return (
    <section className="mt-16 mb-[140px]">
      <div className="flex justify-between items-center">
        <Image src={SignupImage} className="h-[700px] object-cover" />
        <Container>
          <h5 className="font-medium text-[36px] tracking-[4%] text-black font-inter">
            Create an account
          </h5>
          <p className="text-[16px] font-normal text-black mt-6 mb-[48px]">
            Enter your details below
          </p>

          <div className="w-[370px]">
            <form action="" className="">
              <div className="gap-y-10 flex flex-col">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Enter Your Email " />
                <Input type="password" placeholder="Password" />
              </div>
              <div className="flex flex-col gap-y-[16px] mt-10">
                <ButtonComp text="Create Account" />
                <Button className="!text-black !capitalize !text-[16px] !border-black !border-opacity-30" variant="outlined" startIcon={<FcGoogle />}>
                 Sign up with Google
                </Button>
              </div>
              <p className="text-black text-opacity-70 text-[16px] font-normal text-center mt-9">Already have account? <Link className="font-medium underline pl-2" to="/login"> Log in</Link>  </p>
            </form>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Sign;
