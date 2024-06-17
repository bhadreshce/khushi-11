import React, { useLayoutEffect, useEffect } from 'react'

const Layout = () => {
    useLayoutEffect(() => {
        console.log('huseLayoutEffectello');
    }, [])

    useEffect(() => {
        console.log('useEffect');
    }, [])
    return (
        <>
            <h2>Lorem ipsum dolor sit amet.</h2>
        </>
    )
}

export default Layout