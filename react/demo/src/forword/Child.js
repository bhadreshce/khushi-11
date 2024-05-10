import React, { useRef } from 'react'
import Inpt from './Inpt'

const Child = () => {
    const inpt = useRef('')
    const changeinpt = () => {
        inpt.current.value = 'bbb'
        inpt.current.focus()
    }
    return (
        <>

            <Inpt ref={inpt} />
            <button onClick={() => {
                changeinpt()
            }}>Click</button>
        </>
    )
}

export default Child