import React from 'react'
import { useDispatch } from 'react-redux'
import { AddData } from './Action'
const Input = () => {
    const dispatch = useDispatch()

    const addTodo = () => {
        let data = document.getElementById('inpt').value
        dispatch(AddData(data))
    }
    return (
        <>
            <input type="text" id='inpt' />
            <button onClick={() => {
                addTodo()
            }}>Add</button>
        </>
    )
}

export default Input