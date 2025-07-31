import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import SingUp from './components/SingUp'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import PageNew from './components/PageNew'
import Json from './components/Json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/log' element={<Login/>}/>
      <Route path='/' element={<SingUp/>}/>
      <Route path='/state' element={<StateBasics/>}/>
    <Route path='/page' element={<PageNew/>}/>
    <Route path='/api' element={<Json/>}/>
    </Routes>
   
    </>
  )
}

export default App
    
