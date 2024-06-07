import React, { useEffect, useState } from 'react'

const Product = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((res) => {
                console.log(res.products);
                setProduct(res.products)
            });
    }, [])

    const searchData = () => {
        let search = document.getElementById('search').value
        fetch(`https://dummyjson.com/products/search?q=${search}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                setProduct(res.products)

            });
    }
    return (
        <>

            <div class="input-group">

                <input type="text" id='search' class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init onClick={() => {
                    searchData()
                }}>search</button>
            </div>

            <div className="container d-flex flex-wrap mt-5">
                {products.map((prd) => {
                    return (
                        <>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src={prd.images[0]} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{prd.title}</h5>
                                    <p class="card-text">{prd.description}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Product