import React, {useEffect,useState } from 'react'

const Product = () => {
    const [products, setProduct] = useState([])
    useEffect(() => { 
        fetch('https://fakestoreapi.com/products').then((result) => { 
             return result.json()
        }).then((response) => { 
            console.log(response); 
            setProduct(response)
        }) 
    },[])
  return (
      <>
          <div className='container d-flex flex-wrap'>
                    {products.map((res) => { 
              return (
                  <>
                                <div class="card" style={{width:"18rem"}}>
                          <img class="card-img-top" src={res.image} alt="Card image cap" />
                <div class="card-body">
                              <h5 class="card-title">{res.title }</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                  </>
              )
          }) }
          </div>
     
      </>
  )
}

export default Product