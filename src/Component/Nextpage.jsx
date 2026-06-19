import React from 'react'

function Nextpage({prev, current, className}) {
  return (
    <div className={`${className}`}>
        <span  
         className="font-normal text-opacity-50 flex gap-x-2 text-sm text-black">{prev }  {prev && "/"}<p className="text-black ">{current}</p> </span>
    </div>
  )
}

export default Nextpage