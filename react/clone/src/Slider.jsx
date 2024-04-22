import React from 'react'
import banner1 from './img/banner1.jpg'
import banner2 from './img/banner2.webp'
import banner3 from './img/banner3.jpg'
const Slider = () => {
  return (
      <>
          <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
                      <img src={banner1} style={{height:'500px'}} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img style={{height:'500px'}}  src={banner2 } class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img style={{height:'500px'}}  src={banner3 } class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </>
  )
}

export default Slider