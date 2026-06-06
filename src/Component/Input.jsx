import React from 'react'

function Input({type, placeholder,onChange,value,className}) {
  return (
    <input  value={value} type={type} placeholder={placeholder} onChange={onChange} className={`focus:outline-none  border-b-2 pb-2 w-full border-black border-opacity-30 placeholder:text-black placeholder:text-opacity-40 ${className}`}/>
  )
}

export default Input