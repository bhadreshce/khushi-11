import React from 'react'
import { Context } from './ThemeContext'
const Header = () => {
    const { theme, ToggleTheme } = Context()
  return (
      <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
                              <a class="nav-link active" aria-current="page">Home</a>
                         

        </li>
             <button type="button" class="btn btn-primary" onClick={ToggleTheme}>{ theme }</button>
       
     
      </ul>
    </div>
  </div>
</nav>
      </>
  )
}

export default Header