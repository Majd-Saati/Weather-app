import { SnackbarContent } from '@mui/material'
import React, { useState } from 'react'

export default function Snackbar() {
    const[open , setOpen] = useState(true)
  return (
    <>
        <Snackbar  onClose = {()=>{setOpen(false)}} autoHiderDuration={2000} open ={open}>
        </Snackbar> 
    </>
  )
} 
