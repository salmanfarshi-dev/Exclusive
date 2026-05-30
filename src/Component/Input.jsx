import React from 'react'

function Input({type, placeholder}) {
  return (
    <input type={type} placeholder={placeholder} className='focus:outline-none  border-b-2 pb-2 w-full border-black border-opacity-30 placeholder:text-black placeholder:text-opacity-40 '/>
  )
}

export default Input