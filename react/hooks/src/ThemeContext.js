import React, { useState , useContext, createContext } from 'react'

export const useThemeContext = createContext()

export const Context = () => { return useContext(useThemeContext) }
const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState('light')
    
    const ToggleTheme = () => { 
         setTheme(theme == 'light'? 'dark':'light' )
    }

  return (
      <>
          <useThemeContext.Provider value={{theme, ToggleTheme}}>
              {children }
          </useThemeContext.Provider>
      </>
  )
}

export default ThemeContext