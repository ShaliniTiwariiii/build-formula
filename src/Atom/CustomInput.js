import React from 'react'

import TextField from '@mui/material/TextField';
function CustomInput({ placeholder, onChange, value }) {
  return (
    <>
      <TextField id="outlined-basic" onChange={onChange} value={value} label={placeholder} variant="standard" />
    </>
  )
}

export default CustomInput
