import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../comman/Header'
import Footer from '../comman/Footer'
const UserOutlet = () => {
  return (
       <>
          <Header />
            <Outlet/> 
          <Footer/>
      </>
  )
}

export default UserOutlet