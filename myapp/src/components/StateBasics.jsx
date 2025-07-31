import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    //usestate
    var[name,setName]=useState("you")
    var[a,Seta]=useState()

    const inputHandler=(f)=>{
        console.log(f.target.value)
       setName(f.target.value)
    }
    const subF=()=>{
      Seta(name)  
    }
   
    
  return (
    <div>
<h1>welcome {a} </h1>
<TextField variant='outlined' label='name' onChange={inputHandler}/><br /><br />
<Button variant="contained" onClick={subF}>ENTER</Button>
    </div>
  )
}

export default StateBasics
