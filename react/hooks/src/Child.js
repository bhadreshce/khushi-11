import React, { memo } from 'react'

const Child = ({ data }) => {
    console.log('child called');
    return (
        <>
        </>
    )
}

export default memo(Child)