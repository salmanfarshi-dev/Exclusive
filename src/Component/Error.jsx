
import Container from './Container'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button  from './Button'

function Error() {
   let Navigate = useNavigate()
   const handleclick = () =>{
    Navigate("/home")
   }
  return (
    <>
     <Container >
         <div className='mt-[80px]'>
       <p className="font-normal text-[14px] text-black"> <span className='text-black text-opacity-50 '>Home</span> / 404 Error</p>

       <div className="text-center flex flex-col items-center justify-center mt-[100px] mb-[140px]">
        <p className='text-[110px] font-medium text-black'> 404 Not Found</p>
        <p className='text-[18px] font-normal text-black mt-10 mb-20'>Your visited page not found. You may go home page.</p>
        <Button onClick={handleclick} text="Back to home page"/>


       </div>
      </div>
     </Container>
    </>
  )
}

export default Error