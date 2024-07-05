import React, { useEffect } from 'react'

const WebTitle = (name) => {
    useEffect(() => {
        document.title = name + '-React app'
    }, [])
}

export default WebTitle