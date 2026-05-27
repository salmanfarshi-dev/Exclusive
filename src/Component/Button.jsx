import React from 'react'
import MuiButton from '@mui/material/Button';

function Button({text, className, onClick}) {
  return (
   <MuiButton className={`!bg-[#DB4444] py-[16px] px-[48px] rounded-[4px] text-[16px] font-medium`}   onClick={onClick} variant="contained">{text}</MuiButton>
  )
}

export default Button