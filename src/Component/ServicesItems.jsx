import React from 'react'

function ServicesItems({src, tittle, pera}) {
  return (
    <div className='flex flex-col items-center text-center'>
        <img className='w-[80px] h-[80px] object-cover' src={src} alt="" />
        <h5 className='font-semibold text-[20px] text-black mt-6 mb-2'>{tittle}</h5>
        <p className='text-[14px] text-black'>{pera}</p>

    </div>
  )
}

export default ServicesItems