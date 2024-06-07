import React, { useEffect, useState } from 'react'

const Form = () => {
    const [input, setInput] = useState({ name: null, surname: null })
    const [myData, setmyData] = useState([])
    const [error, setError] = useState({})
    const changeHandller = (e) => {
        const { name, value } = e.target
        console.log(value);
        // console.log(e.target.name);

        setInput({ ...input, [name]: value })
        let errorData = { ...error }
        if (value != '' && name == 'name') {
            delete errorData.name
        }
        if (value != '' && name == 'surname') {
            delete errorData.surname
        }
        setError(errorData)

    }



    const submitHanller = async (e) => {
        e.preventDefault()

        let validation = {}
        if (input.name == "" || input.name == null) {
            validation.name = "please add valid name"
        }
        if (input.surname == '' || input.surname == null) {
            validation.surname = "please add valid surname"
        }

        setError(validation)
        console.log(validation);

        if (Object.keys(validation).length == 0) {
            setmyData([...myData, input])
            setInput({ name: null, surname: null })
            document.getElementById('name').value = null
            document.getElementById('surname').value = null
            console.log(input);

        }

    }

    const deleteData = (index) => {
        let newData = [...myData]
        newData.splice(index, 1)
        setmyData(newData)
    }

    useEffect(() => {
        console.log(myData);

    }, [myData])


    return (
        <>
            <form onSubmit={submitHanller}>
                <label htmlFor="" >Name</label>
                <input type="text" name='name' id='name' onKeyUp={changeHandller} />
                <br />
                <span style={{ color: "red" }}>{error.name ? error.name : ''}</span>
                <br />
                { }
                <br />
                <label htmlFor="">Surname</label>
                <input type="text" name='surname' id='surname' onKeyUp={changeHandller} />
                <br />
                <span style={{ color: "red" }}>{error.surname ? error.surname : ''}</span>
                <br />
                <input type="submit" value="Submit" />

            </form>
            <table rules='all' border={1}>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Action</th>
                </tr>
                {myData.map((result, index) => {
                    return (
                        <>
                            <tr>
                                <td>{result.name}</td>
                                <td>{result.surname}</td>
                                <td><button onClick={() => {
                                    deleteData(index)
                                }}>Delete</button></td>
                            </tr>
                        </>
                    )
                })}
            </table>

        </>
    )
}

export default Form