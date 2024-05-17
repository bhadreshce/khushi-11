import React from 'react'
import { CartHome } from './CartContext'

const Home = () => {
    const { cart, setCart } = CartHome()
    return (
        <>
            <button onClick={() => {
                setCart(cart + 1)
            }}>Add To Cart</button>
        </>
    )
}

export default Home