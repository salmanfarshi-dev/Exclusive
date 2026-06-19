import React from 'react'
import Container from '../Component/Container'
import Nextpage from '../Component/Nextpage'
import Input  from '../Component/Input'
import Button from '@mui/material/Button';
import Buttontwo from '../Component/Button'
import { useSelector } from 'react-redux';

function Profile() {
    let prev = useSelector((state)=>(state.bradcrumb.previousvalue));
     let next = useSelector((state)=>(state.bradcrumb.currentvalue));
  return (
    <section className='mt-20 mb-[140px]'>
        <Container>
            <div className="flex justify-between items-center mb-20">
                 <Nextpage prev={prev} current={next} />

                <p className='text-[14px] font-normal text-black'>Welcome !<span className='text-primary'>Shifa Islam Srity</span></p>
            </div>

            <div className="grid grid-cols-12 gap-x-24">
                <div className="col-span-3">
                    <h4 className='text-[16px] font-medium text-black mb-4'>Manage My Account</h4>
                    <div className="flex flex-col gap-y-2 ml-10">
                        <p className='font-normal text-[16px] text-black text-opacity-50 cursor-pointer hover:text-primary duration-300'>My Profile</p>
                        <p className='font-normal text-[16px] text-black text-opacity-50 cursor-pointer hover:text-primary duration-300'>Address Book</p>
                        <p className='font-normal text-[16px] text-black text-opacity-50 cursor-pointer hover:text-primary duration-300'>My Payment Options</p>
                    </div>
                     <h4 className='text-[16px] font-medium text-black mt-6'>My Orders</h4>
                    <div className="flex flex-col gap-y-2 ml-10 mt-4">
                        <p className='font-normal text-[16px] text-black text-opacity-50 cursor-pointer hover:text-primary duration-300'>My Returns</p>
                        <p className='font-normal text-[16px] text-black text-opacity-50 cursor-pointer hover:text-primary duration-300'>My Cancellations</p>
                       
                    </div>
                     <h4 className='text-[16px] font-medium text-black mt-4'>My WishList</h4>
                </div>

                
                <div className="col-span-9">
                    <div className="bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.2)] py-10 px-20 rounded-[4px]">
                        <h4 className='text-xl font-medium text-primary'>Edit Your Profile</h4>

                        <div className="flex flex-wrap justify-between mt-4 gap-6">
                            <label htmlFor="">
                                First Name 
                                <Input placeholder="Enter your first name" className="border-none bg-secondary py-3 px-4 rounded-[4px] text-black text-opacity-50 mt-2"/>
                            </label>
                            <label htmlFor="">
                                Last Name
                                <Input placeholder="Enter your last name" className="border-none bg-secondary py-3 px-4 rounded-[4px] text-black text-opacity-50 mt-2"/>
                            </label>
                            <label htmlFor="">
                                Email 
                                <Input placeholder="Enter your email" className="border-none bg-secondary py-3 px-4 rounded-[4px] text-black text-opacity-50 mt-2"/>
                            </label>
                            <label htmlFor="">
                                Address
                                <Input placeholder="Enter your address" className="border-none bg-secondary py-3 px-4 rounded-[4px] text-black text-opacity-50 mt-2"/>
                            </label>
                        </div>
                       <div className="mt-6">
                         <label htmlFor="">
                                Password Changes
                                <div className="flex flex-col gap-y-4 mt-2">
                                    <Input placeholder="Current Password" className="border-none bg-secondary py-3 px-4 rounded-[4px] text-black text-opacity-50 mt-2"/>
                                <Input placeholder="New Password" className="border-none bg-secondary py-3 px-4 rounded-[4px] text-black text-opacity-50 mt-2"/>
                                <Input placeholder="Confirm New Password" className="border-none bg-secondary py-3 px-4 rounded-[4px] text-black text-opacity-50 mt-2"/>
                                </div>
                
                            </label>
                       </div>
                       <div className="flex items-center justify-end gap-x-8 mt-6">
                        <Button variant="text" className='!text-black !capitalize !text-[16px]'>Cencel</Button>
                        <Buttontwo text="Save Changes"/>
                             

                       </div>


                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Profile