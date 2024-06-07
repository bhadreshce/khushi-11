import React, { useState, useMemo } from 'react'

const Memo = () => {
    const [count, setcount] = useState(0)

    // const printdata = () => {
    //     console.log('call');

    //     return 'hii'
    // }

    const printdata = useMemo(() => {
        console.log('call');
        return count * 10
    }, [count])
    return (
        <>
            <h1>multiplication of count *10 : <b>{printdata}</b></h1>
            <h1>   {count}</h1>
            <button onClick={() => {
                setcount(count + 1)
            }}>Increeement</button>
        </>
    )
}

export default Memo