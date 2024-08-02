import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const UpdateProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [cat, setCat] = useState([])
    const [product, setProduct] = useState({ ProductName: "", ProductPrice: "", ProductDecription: "", ProductImage: "", ProductQuntity: "", ProductCategory: "" })
    useEffect(() => {
        axios.get('http://localhost:8000/category').then((result) => {
            setCat(result.data)
        })

        axios.get(`http://localhost:8000/product/${id}`).then((result) => {
            console.log(result);
            setProduct(result.data)
        })
    }, [])

    const addProduct = (e) => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    const submitProduct = (e) => {

        e.preventDefault()
        axios.patch(`http://localhost:8000/product/${id}`, product).then(() => {
            navigate(`/dashboard/product`)
        })
    }
    return (
        <>
            <form onSubmit={submitProduct}>
                <div class="form-group mb-2">
                    <label for="ProductName">Product Name</label>
                    <input type="text" class="form-control" id="ProductName" placeholder="Product Name" name='ProductName' defaultValue={product.ProductName} onChange={addProduct} />

                    <label for="ProductPrice">Product Price</label>
                    <input type="text" class="form-control" id="ProductPrice" placeholder="Product Price" name='ProductPrice' defaultValue={product.ProductPrice} onChange={addProduct} />

                    <label for="ProductDecription">Product Decription</label>
                    <input type="text" class="form-control" id="ProductDecription" placeholder="Product Decription" defaultValue={product.ProductDecription} name='ProductDecription' onChange={addProduct} />


                    <label for="ProductImage">Product Image</label>
                    <input type="text" class="form-control" id="ProductImage" placeholder="Product Image" name='ProductImage' onChange={addProduct} defaultValue={product.ProductImage} />

                    <label for="ProductQuntity">Product Quntity</label>
                    <input type="text" class="form-control" name='ProductQuntity' id="ProductQuntity" onChange={addProduct} placeholder="Product Quntity" defaultValue={product.ProductQuntity} />

                    <label htmlFor="ProductCategory">Product Category</label>
                    <select name="ProductCategory" value={product.ProductCategory} onChange={addProduct} id="ProductCategory" class="form-control">
                        <option value="">Select Category</option>
                        {cat.map((res) => {
                            return (
                                <>
                                    <option value={res.category}  >{res.category}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <input type="submit" class="btn btn-primary" />
            </form>
        </>
    )
}

export default UpdateProduct
