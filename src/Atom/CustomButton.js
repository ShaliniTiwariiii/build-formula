import React from 'react'
import Button from '@mui/material/Button';
function CustomButton({color,txt,onClick}) {
  return (
    <Button variant="contained"  color={color} onClick={onClick}>
   {txt}
  </Button>
  )
}

export default CustomButton
