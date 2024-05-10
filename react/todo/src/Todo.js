import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState([])
    const [index, setIndex] = useState(null)
    const addData = () => {
        if (document.getElementById('inpt').value == '') {
            return false
        }


        if (index == null) {
            setTodo([...todo, document.getElementById('inpt').value])
            document.getElementById('inpt').value = null
        } else {
            let newData = [...todo]
            newData[index] = document.getElementById('inpt').value
            setTodo(newData)
            setIndex(null)
            document.getElementById('inpt').value = null
        }

    }

    const deleteData = (i) => {
        let newData = [...todo]
        newData.splice(i, 1)
        setTodo(newData)

    }
    const updateData = (data, id) => {
        document.getElementById('inpt').value = data
        setIndex(id)
    }
    return (
        <>
            <input type="text" id='inpt' />
            <button onClick={() => {
                addData()
            }}>{index == null ? 'Add Data' : 'Update Data'}</button>
            {todo.map((result, key) => {
                return (<>
                    <h1>{result}</h1>
                    <button onClick={() => {
                        deleteData(key)
                    }}>Delete</button>
                    <button onClick={() => {
                        updateData(result, key)
                    }}>Update</button>
                </>)
            })}
        </>
    )
}

export default Todo