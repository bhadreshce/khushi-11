import React from 'react'
import { useSelector } from 'react-redux'
const Home = () => {

    const state = useSelector((res) => {
        return res.addedCart
    })
    return (
        <div>{state}</div>
    )
}

export default Home