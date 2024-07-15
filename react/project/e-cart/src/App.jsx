import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import UserOutlet from './user/UserOutlet'
import Home from './user/Home'
import LoginRegiaster from './comman/LoginRegiaster'
import Dashboard from './Admin/Dashboard'
function App() {

  return (
    <>
      {/* <Header />
      <Footer/> */}
      <BrowserRouter>
        <Routes>


          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/' element={<UserOutlet />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<LoginRegiaster />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
