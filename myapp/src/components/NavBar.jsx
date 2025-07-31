import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Link, Links } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar color='black'>
            <Toolbar>
                <h4>MyApp</h4>
                <Link to="/log">
                <Button variant="contained" >Login</Button></Link>&nbsp;&nbsp;&nbsp;
              
                <Link to="/">
                <Button variant="contained">SignUp</Button></Link>&nbsp;&nbsp;&nbsp;
              
              <Link to="/state">
                <Button variant="contained">state</Button>     </Link>&nbsp;&nbsp;&nbsp;
         
             <Link to="/page">
                <Button variant="contained">PageNew</Button> </Link>&nbsp;&nbsp;&nbsp;
                
             <Link to="/api">
                <Button variant="contained">Json</Button> </Link>
 
            </Toolbar>
        </AppBar>
        <br /><br /><br />
    </div>
  )
}

export default NavBar