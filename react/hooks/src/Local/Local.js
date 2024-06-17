import React, { useState, useRef, useEffect } from 'react'

const Local = () => {
    const [todo, settodo] = useState([])
    const [editId, seteditId] = useState(null)
    const listItem = useRef(null)
    useEffect(() => {
        getTodo()
    }, [])
    const addTodo = () => {


        // console.log(listItem);

        // settodo([...todo, listItem.current.value])
        let localTodo = localStorage.getItem('todo')
        console.log(localTodo);
        if (editId == null) {
            if (localTodo == null) {
                let myTOdo = []
                myTOdo.push(listItem.current.value)
                // console.log(myTOdo);
                let obj = { data: myTOdo }
                // console.log(obj);
                localStorage.setItem('todo', JSON.stringify(obj))


            } else {
                let mytodo = JSON.parse(localTodo)
                mytodo.data.push(listItem.current.value)
                console.log(mytodo);
                listItem.current.value = ''
                localStorage.setItem('todo', JSON.stringify(mytodo))

                // console.log(mytodo.data);


            }
        } else {
            alert('hii')
            let mytodo = JSON.parse(localTodo)
            mytodo.data[editId] = listItem.current.value

            localStorage.setItem('todo', JSON.stringify(mytodo))
            listItem.current.value = ''
            seteditId(null)

        }

        getTodo()
    }

    const getTodo = () => {
        let localTodo = localStorage.getItem('todo')
        if (localTodo == null) {
            settodo([])
        } else {
            let mytodo = JSON.parse(localTodo)
            settodo(mytodo.data)
        }
    }

    const deleteData = (index) => {
        let localTodo = localStorage.getItem('todo')
        let mytodo = JSON.parse(localTodo)
        console.log(index);

        mytodo.data.splice(index, 1)
        localStorage.setItem('todo', JSON.stringify(mytodo))

        getTodo()
    }

    const updateData = (index, result) => {
        seteditId(index)
        listItem.current.value = result
    }
    return (
        <>
            <input type="text" ref={listItem} />

            <button onClic
                k={() => {
                addTodo()
            }}>{editId == null ? "Add data" : "Update Data"}</button>
            {todo.map((result, index) => {
                return (
                    <>
                        <h1>{result}
                            <button onClick={() => {
                                deleteData(index)
                            }}>Delete</button>
                            <button onClick={() => {
                                updateData(index, result)
                            }}>Update</button>
                        </h1>
                    </>
                )
            })}
        </>
    )
}

export default Local