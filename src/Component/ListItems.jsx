import React from 'react'

function ListItems({text}) {
  return (
    <li tabindex='0' className="font-normal text-[16px] list-none  font-poppins cursor-pointer list">{text}</li>
  )
}

export default ListItems