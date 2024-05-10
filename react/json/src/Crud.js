import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Crud = () => {
    const [user, setUser] = useState([])
    const [uId, setUid] = useState(null)
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('http://localhost:8000/user').then((result) => {
            console.log(result.data);

            setUser(result.data)
        })
    }

    const addData = () => {
        let input = document.getElementById('inpt').value
        if (uId == null) {

            console.log(input);

            axios.post('http://localhost:8000/user', { name: input }).then(() => {
                document.getElementById('inpt').value = ''
                getData()

            })

        } else {
            axios.put(`http://localhost:8000/user/${uId}`, { name: input }).then(() => {
                getData()
                setUid(null)
                document.getElementById('inpt').value = ''

            })
        }

    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:8000/user/${id}`).then(() => {
            getData()
        })
    }

    const updateData = (editData) => {
        document.getElementById('inpt').value = editData.name
        setUid(editData.id)
    }

    return (
        <>
            <input type="text" id='inpt' />
            <button onClick={() => {
                addData()
            }}>{uId == null ? 'Add' : 'Update'}</button>
            {user.map((result) => {
                return (
                    <>
                        <h1>{result.name}

                        </h1>
                        <button onClick={() => {
                            deleteData(result.id)
                        }}>Delete</button>
                        <button onClick={() => {
                            updateData(result)
                        }}>Update</button>
                    </>
                )
            })}
        </>
    )
}

export default Crud