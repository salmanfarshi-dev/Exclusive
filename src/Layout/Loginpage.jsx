import React, { useState } from "react";
import LoginImage from "../assets/sideImage.png";
import Image from "../Component/Image";
import Container from "../Component/Container";
import Input from "../Component/Input";
import  Button  from '../Component/Button'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import {  Navigate, useNavigate } from "react-router-dom";


function Loginpage() {

  const auth = getAuth();
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let navigate = useNavigate()


let [eye, setEye] = useState(false);
 const handleeye = () => {
    setEye(!eye);
  };
  const handlelogin=(e)=>{

   e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    toast.success("Registation successfully")
    setEmail("")
    setPassword("")
    navigate("/home")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
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
                <Input  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your Email " />
               <div className="relative">
                 <Input  type={eye ? "text" : "password"} value={password}  onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" />

                 <div
                    onClick={handleeye}
                    className="absolute top-1/2 right-0 -translate-y-1/2"
                  >
                    {eye ? <FiEye /> : <FiEyeOff />}
                  </div>
               </div>
              </div>
              <div className="flex justify-between items-center mt-10">
              <Button onClick={handlelogin} text="Log In" />
                <p className='text-primary text-[16px] font-normal cursor-pointer'>Forget Password?</p>
               
              </div>
              
            </form>
          </div>
        </Container>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  )
}

export default Loginpage