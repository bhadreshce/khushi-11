import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, UpdateData } from './Action'
import { Setinput } from './Action'
const Input = () => {
    const dispatch = useDispatch()
    const inptObj = useSelector((res) => {
        return res.Setinput

    })

    useEffect(() => {
        document.getElementById('inpt').value = inptObj.input
    }, [inptObj])
    const addTodo = () => {
        let data = document.getElementById('inpt').value
        if (inptObj.index == null) {

            dispatch(AddData(data))
            document.getElementById('inpt').value = null
        } else {
            dispatch(UpdateData({ data: data, index: inptObj.index }))
            dispatch(Setinput({ input: null, index: null }))
        }
    }
    return (
        <>
            <input type="text" id='inpt' />
            <button onClick={() => {
                addTodo()
            }}>{inptObj.index == null ? 'Add' : 'Update'}</button>
        </>
    )
}

export default Input