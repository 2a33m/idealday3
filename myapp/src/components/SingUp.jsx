
import { Button, IconButton, TextField } from '@mui/material'
import React from 'react'
import { Link, Links } from 'react-router-dom'

const SingUp = () => {
  return (
    <div>
        <h1>Sign Up Page </h1>
        <TextField id="outlined-basic" label="outlined" variant="outlined" /><br /><br />
        <TextField id="filled-basic" label="filled" variant="filled" /><br /><br />
        <TextField id="standard-basic" label="standard" variant="standard" /><br /><br />
        <Link to="/state">
        <Button  variant="contained">SignUp</Button><br /><br />
        </Link>
    </div>
  )
}

export default SingUp