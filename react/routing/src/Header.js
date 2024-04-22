import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
      <>
      <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <Link to={'/'} class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to={'/contact'} class="nav-link" >Contact</Link>
        </li> */}
     <li class="nav-item">
          <Link to={'/category/mens'} class="nav-link" aria-current="page">Mens</Link>
     </li>
    <li class="nav-item">
          <Link to={'/category/womens'} class="nav-link" aria-current="page">Womens</Link>
    </li>
    
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
  )
}

export default Header