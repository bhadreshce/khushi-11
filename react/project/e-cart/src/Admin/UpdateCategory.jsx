import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
const UpdateCategory = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [category, setcategory] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/category?id=${id}`).then((result) => {
            console.log(result.data[0]);
            setcategory(result.data[0])
        })
    }, [])
    const submitCat = (e) => {
        e.preventDefault()
        axios.patch((`http://localhost:8000/category/${id}`), { category: document.getElementById('cat').value }).then(() => {
            navigate('/dashboard/category')
        })
    }
    return (
        <>
            <h4>Update Category</h4>
            <form onSubmit={submitCat}>
                <div class="form-group mb-2">
                    <label for="formGroupExampleInput">Category</label>
                    <input type="text" defaultValue={category.category} class="form-control" id="cat" placeholder="Example input" />
                </div>
                <input type="submit" class="btn btn-primary" />
            </form></>
    )
}

export default UpdateCategory