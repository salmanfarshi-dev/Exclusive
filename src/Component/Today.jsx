import React from 'react'

function Today({text}) {
  return (
    <div className='flex items-center gap-x-4'>
        <div className='w-[20px] h-10 bg-primary rounded-[4px]'></div>
        <p className='text-[16px] font-semibold text-primary'>{text}</p>
    </div>
  )
}

export default Today