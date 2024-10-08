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
import UpdateCategory from './Admin/UpdateCategory'
import AddProduct from './Admin/AddProduct'
import UpdateProduct from './Admin/UpdateProduct'
import UserCategory from './user/UserCategory'
import ProductDetails from './user/ProductDetails'
import Cart from './user/Cart'
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
              <Route path='/dashboard/product/add' element={<AddProduct />}></Route>
              <Route path='/dashboard/category/update/:id' element={<UpdateCategory />}></Route>
              <Route path='/dashboard/product/update/:id' element={<UpdateProduct />}></Route>
            </Route>
          </Route>
          <Route path='/' element={<UserOutlet />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/category/:id' element={<UserCategory />}></Route>
            <Route path='/product/:id' element={<ProductDetails />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/login' element={<LoginRegiaster />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
