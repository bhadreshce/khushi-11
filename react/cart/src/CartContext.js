import React, { useState, useContext,createContext } from 'react'
 const Addcart = createContext(); 
export const CartHome = () => { 
     return useContext(Addcart) 
}
const CartContext = ({ children }) => {
    const [cart, setCart] = useState(0)
  return (
      <>
          <Addcart.Provider value={{ cart , setCart}}>
              { children }
      </Addcart.Provider>
      </>
  )
}

export default CartContext