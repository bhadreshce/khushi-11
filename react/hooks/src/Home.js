import React, { useEffect } from 'react'
import { Context } from './ThemeContext'
const Home = () => {
    const { theme, ToggleTheme } = Context()
    
    useEffect(() => { 
        // if (theme == 'light') {
        //     document.body.style.backgroundColor = 'white'
        // } else { 
        //       document.body.style.backgroundColor = 'black'
        // }
        
        //   document.body.style.backgroundColor = theme == 'light' ? 'white':'black'
        
    },[theme])
  return (
      <div style={{ backgroundColor:theme == 'light' ? 'white':'black'}}>Home</div>
  )
}

export default Home