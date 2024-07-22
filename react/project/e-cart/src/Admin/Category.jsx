import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Category = () => {
    const [cat, setCat] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {
        axios.get(`http://localhost:8000/category`).then((result) => {
            setCat(result.data)
        })
    }

    const deleteCat = (id) => {
        axios.delete(`http://localhost:8000/category/${id}`).then((result) => {
            getCategory()
        })
    }
    return (
        <>

            <button type="button" onClick={() => {
                navigate('/dashboard/category/add')
            }} class="btn btn-primary mt-5 mb-5">Add Category</button>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {cat.map((result) => {
                        return (
                            <>
                                <tr>
                                    <th scope="row">{result.category}</th>
                                    <td><button type="button" class="btn btn-danger" onClick={() => {
                                        deleteCat(result.id)
                                    }}>Delete</button>
                                        <button type="button" class="btn btn-primary">Update</button>

                                    </td>
                                </tr>
                            </>
                        )
                    })}

                    {cat.length == 0 && <tr>
                        <td colSpan={2} style={{ textAlign: "center" }}>No Data</td>
                    </tr>}

                </tbody>
            </table>
        </>
    )
}

export default Category