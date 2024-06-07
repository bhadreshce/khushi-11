import React from 'react'
import B from './B'

const website = 'flipkart'
const port = 3000
const A = () => {
    return (
        <>
            <B website={website} port={port} />
        </>
    )
}

export default A