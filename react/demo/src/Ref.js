import React, { useRef } from 'react'

const Ref = () => {
    const input = useRef('')
    const printValue = () => {
        // console.log(document.getElementById('inpt').value);
        input.current.focus()
        console.log(input.current.value);

    }
    return (
        <>
            <input type="text" id='inpt' ref={input} />
            <button onClick={() => {
                printValue()
            }}>Print value</button>
        </>
    )
}

export default Ref