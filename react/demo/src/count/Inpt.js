import React, { useRef } from 'react'
import Inc from './Inc'

const Inpt = () => {
    const count = useRef(0)

    const Dec = () => {
        count.current.value -= 1
    }

    const Increeement = () => {
        count.current.value = parseInt(count.current.value) + 1
    }
    return (
        <>
             <Inc ref={count} />
            <button onClick={() => {
                Increeement()
            }}>Increement</button>
            <button onClick={() => {
                Dec()
            }}>Decreement</button>
        </>
    )
}

export default Inpt