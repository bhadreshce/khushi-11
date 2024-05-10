import React, { forwardRef } from 'react'

const Inpt = (props, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
}

export default forwardRef(Inpt)