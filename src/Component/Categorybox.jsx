import React from 'react'

function Categorybox({icon, text, className}) {
  return (
    <div className={`w-[170px] h-[145px] rounded-[4px] flex flex-col justify-center items-center border border-black border-opacity-20 cursor-pointer group hover:bg-primary duration-300 hover:border-transparent ${className}`}>
        <p className=' mb-[16px] text-[50px] group-hover:text-white transition'>{icon}</p>
        <p className='font-normal text-[16px] text-black group-hover:text-white transition'>{text}</p>

    </div>
  )
}

export default Categorybox