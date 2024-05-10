import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((result) => {
            console.log(result.data);
            setProduct(result.data)
        })
    }, [])
    return (
        <div>
            <div className="container d-flex flex-wrap">
                {product.map((res) => {
                    return (
                        <>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={res.image} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{res.title}</h5>
                                    <p class="card-text">{res.description}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>


        </div>
    )
}

export default Axios