import React, { useState, useCallback } from "react";
import Child from "./Child";

const Callback = () => {
    const [count, setCount] = useState(0)

    // const sendData = () => {
    //     //
    // }

    const sendData = useCallback(() => {
        return 5
    }, [])
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increement</button>
            <Child data={sendData} />
        </>
    )
}

export default Callback