import { Button, Link } from '@mui/material'
import React, { useState } from 'react'
import { Links } from 'react-router-dom'

const PageNew = () => {
    var[a,setA]=useState()

    const inpt1=()=>{
        setA("React")
    }
  const inpt2=()=>{
        setA("Angular")
  }
  const inpt3=()=>{
        setA("Nest")
  }
  return (
    <div>
        <h1>Welcome {a} </h1>
        <Button  variant="contained" color="secondary" onClick={inpt1} >react</Button>&nbsp;&nbsp;&nbsp;
          <Button  variant="contained" color="success" onClick={inpt2} >angular</Button>&nbsp;&nbsp;&nbsp;
           <Button  variant="contained" color="error"onClick={inpt3} >nest</Button>&nbsp;&nbsp;&nbsp;
        </div>
  )

  }

export default PageNew