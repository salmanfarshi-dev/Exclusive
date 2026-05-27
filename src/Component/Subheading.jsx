import React from 'react'

function Subheading({text, className}) {
  return (
    <h2 className={`font-inter font-semibold text-[36px] text-black tracking-[4%] leading-[48px] ${className}`}>{text}</h2>
  )
}

export default Subheading