import React, { useState } from "react";
import SignupImage from "../assets/sideImage.png";
import Image from "../Component/Image";
import Container from "../Component/Container";
import Input from "../Component/Input";
import ButtonComp from "../Component/Button";
import { FcGoogle } from "react-icons/fc";
import Button from "@mui/material/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";



function Sign() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [nameerror, setNameError] = useState("");
  let [emailerror, setEamilError] = useState("");
  let [passworderror, setPasswordError] = useState("");
  let [eye, setEye] = useState(false);

  let navigate = useNavigate()

  let emailvalid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let lowercase = /[a-z]/;
  let uppercase = /[A-Z]/;
  let digit = /\d/;
  let specialCharacter = /[@$!%*?&]/;
  let length = /^.{8,}$/;

  const handleeye = () => {
    setEye(!eye);
  };

  const handlename = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleemail = (e) => {
    setEmail(e.target.value);
    setEamilError("");
  };

  const handlepassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handlesignup = () => {
    if (!name) {
      setNameError("please enter this field");
    }

    if (!email) {
      setEamilError("please enter this field");
    } else {
      if (!emailvalid.test(email)) {
        setEamilError("please enter valid email");
      }
    }
    if (!password) {
      setPasswordError("Please enter this field");
    } else if (!lowercase.test(password)) {
      setPasswordError("Please use at least one lowercase letter");
    } else if (!uppercase.test(password)) {
      setPasswordError("Please use at least one uppercase letter");
    } else if (!digit.test(password)) {
      setPasswordError("Please use at least one digit");
    } else if (!specialCharacter.test(password)) {
      setPasswordError("Please use at least one special character");
    } else if (!length.test(password)) {
      setPasswordError("Password must be at least 8 characters");
    }

    if( name && email && emailvalid.test(email) && password && lowercase.test(password) && uppercase.test(password) && digit.test(password) && specialCharacter.test(password) && length.test(password)){

      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    toast.success("Registation successfully")
    setName("")
    setEmail("")
    setPassword("")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode.includes("auth/email-already-in-use")){
      toast.error("Email already used")
    }
    const errorMessage = error.message;
  
  });
    }



  };

  const handlegoogle=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
   navigate("/home")
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
  }

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
                <div className="">
                  <Input
                    value={name}
                    onChange={handlename}
                    type="text"
                    placeholder="Name"
                  />
                  {nameerror && (
                    <p className="text-red-400 pt-1 text-[14px]">{nameerror}</p>
                  )}
                </div>

                <div className="">
                  <Input
                    value={email}
                    onChange={handleemail}
                    type="email"
                    placeholder="Enter Your Email "
                  />
                  {emailerror && (
                    <p className="text-red-400 pt-1 text-[14px]">
                      {emailerror}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <Input
                    value={password}
                    onChange={handlepassword}
                    type={eye ? "text" : "password"}
                    placeholder="Password"
                  />
                  {passworderror && (
                    <p className="text-red-400 text-[14px]">{passworderror}</p>
                  )}
                  <div
                    onClick={handleeye}
                    className="absolute top-1/2 right-0 -translate-y-1/2"
                  >
                    {eye ? <FiEye /> : <FiEyeOff />}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-[16px] mt-10">
                <ButtonComp onClick={handlesignup} text="Create Account" />

                <Button
                onClick={handlegoogle}
                  className="!text-black !capitalize !text-[16px] !border-black !border-opacity-30"
                  variant="outlined"
                  startIcon={<FcGoogle />}
                >
                  Sign up with Google
                </Button>
              </div>
              <p className="text-black text-opacity-70 text-[16px] font-normal text-center mt-9">
                Already have account?{" "}
                <Link className="font-medium underline pl-2" to="/login">
                  
                  Log in
                </Link>
              </p>
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
  );
}

export default Sign;
