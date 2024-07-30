import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddProduct = () => {

    const navigate = useNavigate()

    const [cat, setCat] = useState([])
    const [product, setProduct] = useState({ ProductName: "", ProductPrice: "", ProductDecription: "", ProductImage: "", ProductQuntity: "", ProductCategory: "" })
    useEffect(() => {
        axios.get('http://localhost:8000/category').then((result) => {
            setCat(result.data)
        })
    }, [])

    const addProduct = (e) => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    const submitProduct = (e) => {

        e.preventDefault()
        axios.post('http://localhost:8000/product', product).then(() => {
            navigate(`/dashboard/product`)
        })
    }
    return (
        <>
            <h4> AddProduct</h4>


            <form onSubmit={submitProduct}>
                <div class="form-group mb-2">
                    <label for="formGroupExampleInput">Product Name</label>
                    <input type="text" class="form-control" id="ProductName" placeholder="Product Name" name='ProductName' onChange={addProduct} />

                    <label for="formGroupExampleInput">Product Price</label>
                    <input type="text" class="form-control" id="ProductPrice" placeholder="Product Price" name='ProductPrice' onChange={addProduct} />

                    <label for="formGroupExampleInput">Product Decription</label>
                    <input type="text" class="form-control" id="ProductDecription" placeholder="Product Decription" name='ProductDecription' onChange={addProduct} />


                    <label for="formGroupExampleInput">Product Image</label>
                    <input type="text" class="form-control" id="ProductImage" placeholder="Product Image" name='ProductImage' onChange={addProduct} />

                    <label for="formGroupExampleInput">Product Quntity</label>
                    <input type="text" class="form-control" name='ProductQuntity' id="ProductQuntity" onChange={addProduct} placeholder="Product Quntity" />

                    <label htmlFor="">Product Category</label>
                    <select name="ProductCategory" onChange={addProduct} id="ProductCategory" class="form-control">
                        <option value="">Select Category</option>
                        {cat.map((res) => {
                            return (
                                <>
                                    <option value={res.category}>{res.category}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <input type="submit" class="btn btn-primary" />
            </form>
        </ >
    )
}

export default AddProduct