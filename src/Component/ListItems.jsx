import React from 'react'

function ListItems({text}) {
  return (
    <li className="font-normal text-[16px] list-none text-black font-poppins cursor-pointer list">{text}</li>
  )
}

export default ListItems