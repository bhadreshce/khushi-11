import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [todo, settodo] = useState([])

    const adddata = () => {
        let name = document.getElementById('input').value
        settodo([...todo, name])
        document.getElementById('input').value = ''
    }

    // const passData = () => {
    //     return 5
    // }

    const passData = useCallback(() => {
        return 5
    }, [])  
    return (
        <>
            <input type="text" id='input' />
            <button onClick={() => {
                adddata();
            }}>Add</button>
            {todo.map((result) => {
                return (
                    <h1>{result}</h1>
                )
            })}

            <Child data={passData} />
        </>
    )
}

export default Parent