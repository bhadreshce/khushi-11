import React, { useEffect, useState } from 'react'

const Demo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('bhadresh')
    useEffect(() => {
        document.body.style.backgroundColor = 'grey'
        if (count == 1) {
            document.body.style.backgroundColor = 'red'
        }
        if (count == 2) {
            document.body.style.backgroundColor = 'green'
        }

        if (count == 3) {
            document.body.style.backgroundColor = 'black'
        }

        if (count == 4) {
            document.body.style.backgroundColor = 'pink'
        }
        // console.log('hii');

    }, [count])

    useEffect(() => {
        if (name == 'bbb') {
            document.getElementById('name').style.color = 'green'
        }

    }, [name])


    const changename = () => {
        setName('bbb')
    }
    const increement = () => {
        setCount(count + 1)
    }

    const decreement = () => {
        setCount(count - 1)
    }
    return (

        <div>
            <button onClick={() => {
                increement()
            }}>Increement</button>
            <h1>{count}</h1>
            <button onClick={() => {
                decreement()
            }}>Decreement</button>
            <h1 id='name'>{name}</h1>
            <button onClick={() => {
                changename()
            }}>changename</button>
        </div>
    )
}

export default Demo