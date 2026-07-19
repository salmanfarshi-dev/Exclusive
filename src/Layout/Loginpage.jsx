import React, { useState } from "react";
import LoginImage from "../assets/sideImage.png";
import Image from "../Component/Image";
import Container from "../Component/Container";
import Input from "../Component/Input";
import  Button  from '../Component/Button'
import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import {  Navigate, useNavigate } from "react-router-dom";


function Loginpage() {

  const auth = getAuth();
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [popup, setPopUp] = useState(false)
  let navigate = useNavigate()


let [eye, setEye] = useState(false);
 const handleeye = () => {
    setEye(!eye);
  };
  const handlelogin=(e)=>{
    if(!email || !password){
      toast.error("Please currect user Credential")
      return
    }

   e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      if(userCredential.user.emailVerified){

        toast.success("Login successfully")
        setTimeout(() => {
          navigate("/checkout")
          
        }, 2000);
      }else{
       toast.error("Please verify your email")
      }
    setEmail("")
    setPassword("")

  })
  .catch((error) => {
    const errorCode = error.code;
    toast.error(error.message)
    
  });
  }

  const handleforgetpass=()=>{
    setPopUp(true)
  }
  const handlecencel=()=>{
    setPopUp(false)
  }

  const handleEmail = () => {
  if(!email){
    toast.error("Please enter your email")
    return
  }
  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("Check your email")
      setPopUp(false)
    })
    .catch((error) => {
      toast.error(error.message) 
    })
}
  return (
    <>

    {
      popup?
      <section>
      <div className="w-full h-screen bg-gray-400 absolute top-0 left-0 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white w-[500px] px-10 py-10 rounded-[4px]">
          <h5 className=" font-semibold text-4xl">Forgot Your Password?</h5>
          <p className="text-[16px] mt-4 font-medium">We'll email you a link to reset your password.</p>
          <Input  placeholder="Email" className="border py-4 px-3 rounded-[4px] mt-5 text-gray-500"/>
          <div className="mt-10">
            <Button onClick={handleEmail}  text="Send me a password reset link" className="!bg-black w-full"/>
            <Button onClick={handlecencel} text="Cencel" className="!bg-gray-300 w-full !mt-3 !text-black"/>
          </div>
        </div>

      </div>
    </section>
      :
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
                <p onClick={handleforgetpass} className='text-primary text-[16px] font-normal cursor-pointer'>Forget Password?</p>
               
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
    }

    

    </>
  )
}

export default Loginpage