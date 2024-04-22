import React from 'react'
import { Outlet } from 'react-router-dom'
import Category from './Category'
function Common() {
  return (
      <>
        <Category />
      <Outlet/>
      </>
  )
}

export default Common