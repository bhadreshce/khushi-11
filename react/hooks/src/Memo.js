import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0)
    // const LoadData = () => {
    //     console.log('hii');
    //     return 'hii'

    // }

    const LoadData = useMemo(() => {
        console.log('hii');
        return 'hii'
    }, [count])


    return (
        <>
            {LoadData}
            <button onClick={() => {
                setCount(count + 1)
            }}>Increement</button>
            <h1>{count}</h1>
        </>
    )
}

export default Memo