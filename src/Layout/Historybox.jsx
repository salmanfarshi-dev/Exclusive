import React from 'react'
import Container from '../Component/Container'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { CiDollar } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";





function Historybox() {
  return (
    <section className="py-[140px]">
        <Container>
            <div className="flex justify-between items-center">
                <div className="w-[270px] h-[230px] flex flex-col text-center justify-center items-center border border-black border-opacity-30 rounded-[4px] group hover:bg-primary hover:border-transparent duration-300">
                    <div className="bg-gray-400 w-[80px] h-[80px] rounded-full flex justify-center items-center group-hover:bg-gray-300 duration-300">
                        <div className="w-[58px] h-[58px] rounded-full bg-black flex justify-center items-center group-hover:bg-white duration-300">
                            <SiHomeassistantcommunitystore className="text-white text-[30px] group-hover:text-black duration-300"/>

                        </div>
                    </div>
                    <h5 className="text-[32px] font-bold font-inter tracking-[4%] mt-6 mb-3 group-hover:text-white duration-300">10.5k </h5>
                    <p className="text-[16px] text-black group-hover:text-white duration-300">Sallers active our site</p>
                </div>
                <div className="w-[270px] h-[230px] flex flex-col text-center justify-center items-center border border-black border-opacity-30 rounded-[4px] group hover:bg-primary hover:border-transparent duration-300">
                    <div className="bg-gray-400 w-[80px] h-[80px] rounded-full flex justify-center items-center group-hover:bg-gray-300 duration-300">
                        <div className="w-[58px] h-[58px] rounded-full bg-black flex justify-center items-center group-hover:bg-white duration-300">
                            <CiDollar  className="text-white text-[40px] group-hover:text-black duration-300"/>

                        </div>
                    </div>
                    <h5 className="text-[32px] font-bold font-inter tracking-[4%] mt-6 mb-3 group-hover:text-white duration-300">33k </h5>
                    <p className="text-[16px] text-black group-hover:text-white duration-300">Mopnthly Produduct Sale</p>
                </div>
                <div className="w-[270px] h-[230px] flex flex-col text-center justify-center items-center border border-black border-opacity-30 rounded-[4px] group hover:bg-primary hover:border-transparent duration-300">
                    <div className="bg-gray-400 w-[80px] h-[80px] rounded-full flex justify-center items-center group-hover:bg-gray-300 duration-300">
                        <div className="w-[58px] h-[58px] rounded-full bg-black flex justify-center items-center group-hover:bg-white duration-300">
                            <IoBagHandleOutline  className="text-white text-[30px] group-hover:text-black duration-300"/>

                        </div>
                    </div>
                    <h5 className="text-[32px] font-bold font-inter tracking-[4%] mt-6 mb-3 group-hover:text-white duration-300">45.5k </h5>
                    <p className="text-[16px] text-black group-hover:text-white duration-300">Customer active in our site</p>
                </div>
                <div className="w-[270px] h-[230px] flex flex-col text-center justify-center items-center border border-black border-opacity-30 rounded-[4px] group hover:bg-primary hover:border-transparent duration-300">
                    <div className="bg-gray-400 w-[80px] h-[80px] rounded-full flex justify-center items-center group-hover:bg-gray-300 duration-300">
                        <div className="w-[58px] h-[58px] rounded-full bg-black flex justify-center items-center group-hover:bg-white duration-300">
                            <FaSackDollar className="text-white text-[30px] group-hover:text-black duration-300"/>

                        </div>
                    </div>
                    <h5 className="text-[32px] font-bold font-inter tracking-[4%] mt-6 mb-3 group-hover:text-white duration-300">25k </h5>
                    <p className="text-[16px] text-black group-hover:text-white duration-300">Anual gross sale in our site</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Historybox