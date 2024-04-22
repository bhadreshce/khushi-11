import React, { useState } from 'react'

const Count = () => {

    const [count, setCount] = useState(0)
    const deecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increement</button>
            <button onClick={() => {
                deecrement()
            }}>Decreement</button>
        </>
    )
}

export default Count