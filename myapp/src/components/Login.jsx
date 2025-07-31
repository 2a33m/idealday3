import { Button, Checkbox } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingUp from './SingUp'

const Login = () => {
  return (
    <div>
        <h1>Login page</h1>
  
  name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" name="" id="" /><br /><br />
  age :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="number" name="" id="" /><br /><br />
  password : <input type="password" name="" id="" /><br /><br />
  
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp; <Button variant="contained">login</Button>&nbsp;&nbsp;&nbsp;
 <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9gN4jqz76yFAkswUJgNCmhTRyJpAiE8yLg&s">
 <Button variant="contained">SignUp</Button><br /><br />
 </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://media1.tenor.com/m/d8DnvS0c3bEAAAAd/thaneer-mathan-malayalam.gif"> forgot password?</a>
    </div>
  )
}

export default Login