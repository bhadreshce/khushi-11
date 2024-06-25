import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from './Actions'
const Home = () => {

    const state = useSelector((result) => {
        return result.AddToCart.cart

    })
    const dispatch = useDispatch()
    return (
        <>

            <button onClick={() => {
                dispatch(AddToCart())
            }}>Add to Cart</button>

        </>
    )
}

export default Home