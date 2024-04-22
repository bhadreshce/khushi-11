import React, { useState } from 'react'

const Condition = () => {
    const [image, setImage] = useState('sun')
    return (
        <><button onClick={() => {
            setImage('sun')
        }}>sun</button>
            <button onClick={() => {
                setImage('moon')
            }}>moon</button>
            {image == 'sun' && (<img src='../sun.jpg' />)}
            {image == 'moon' && (<img src='../moon.jpg' />)}
        </>
    )
}

export default Condition