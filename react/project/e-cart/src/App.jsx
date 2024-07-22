import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import UserOutlet from './user/UserOutlet'
import Home from './user/Home'
import LoginRegiaster from './comman/LoginRegiaster'
import Dashboard from './Admin/Dashboard'
import Category from './Admin/Category'
import Main from './Admin/Main'
import Product from './Admin/Product'
import { PrivateRouter } from './Admin/PrivateRoutes'
import AddCategory from './Admin/AddCategory'
function App() {


  // let user = localStorage.getItem('username')

  return (
    <>
      {/* <Header />
      <Footer/> */}
      <BrowserRouter>
        <Routes>


          <Route element={<PrivateRouter />}>

            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='/dashboard' element={<Main />}></Route>
              <Route path='/dashboard/product' element={<Product />}></Route>
              <Route path='/dashboard/category' element={<Category />}></Route>
              <Route path='/dashboard/category/add' element={<AddCategory />}></Route>
            </Route>
          </Route>
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
