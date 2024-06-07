import React, { memo } from 'react'

const Child = () => {
    console.log('child called');

    return (
        <>

        </>
    )
}

export default memo(Child)