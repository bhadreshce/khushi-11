import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Product = () => {


    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        axios.get(`http://localhost:8000/product`).then((res) => {
            setProduct(res.data)
        })
    }

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/product/${id}`).then((res) => {
            getProduct()
        })
    }
    return (
        <>
            <button type="button" onClick={() => {
                navigate('/dashboard/product/add')
            }} class="btn btn-primary mt-5 mb-5">Add Product</button>

            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Image</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {product.map((result) => {
                        return (
                            <>
                                <tr>
                                    <td scope="row">{result.ProductName}</td>
                                    <td scope="row">
                                        <img src={result.ProductImage} height={'50px'} width={'50px'} alt="" />
                                    </td>
                                    <td scope="row">{result.ProductQuntity}</td>
                                    <td><button type="button" class="btn btn-danger" onClick={() => {
                                        deleteProduct(result.id)
                                    }}>Delete</button>
                                        <button type="button" class="btn btn-primary" onClick={() => {
                                            navigate(`/dashboard/product/update/${result.id}`)
                                        }}>Update</button>

                                    </td>
                                </tr>
                            </>
                        )
                    })}

                    {product.length == 0 && <tr>
                        <td colSpan={4} style={{ textAlign: "center" }}>No Data</td>
                    </tr>}

                </tbody>
            </table>


        </>
    )
}

export default Product