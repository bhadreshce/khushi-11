import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddCategory = () => {
    const navigate = useNavigate()

    const submitCat = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/category`, { category: document.getElementById('cat').value }).then((result) => {
            navigate('/dashboard/category')
        })
    }
    return (

        <>
            <h4>Add Category</h4>
            <form onSubmit={submitCat}>
                {newFunction()}
                <input type="submit" class="btn btn-primary" />
            </form></>
    )

    function newFunction() {
        return <div class="form-group mb-2">
            <label for="formGroupExampleInput">Category</label>
            <input type="text" class="form-control" id="cat" placeholder="Example input" />
        </div>
    }
}

export default AddCategory