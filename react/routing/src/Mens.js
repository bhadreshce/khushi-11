import React from 'react'
import { useNavigate } from 'react-router-dom'
const Mens = () => {
    const navigate = useNavigate()
    const gotoWomen = () => {
        navigate('/category/womens/4')
    }
    return (
        <div>Mens

            <button onClick={() => {
                gotoWomen()
            }}>Go To Womens</button>
        </div>

    )
}

export default Mens