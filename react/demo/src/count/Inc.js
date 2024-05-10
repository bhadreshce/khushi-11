import React, { forwardRef } from 'react'

const Inc = (props, ref) => {

    return (
        <>
            <h1 id='h1'></h1>
            <input type="text" value={0} ref={ref} />
        </>
    )
}

export default forwardRef(Inc)