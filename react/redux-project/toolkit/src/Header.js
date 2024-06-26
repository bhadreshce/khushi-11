import React from 'react'
import { useDispatch } from 'react-redux'
import { addTo } from './Slice/AddToCart'
const Header = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => {
                dispatch(addTo(1))
            }}>Add to cart</button>
        </div>
    )
}

export default Header