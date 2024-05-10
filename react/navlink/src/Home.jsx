import React from 'react'
import { useHistory } from 'react-router-dom';
const Home = () => {
      let history = useHistory()

    const redirectnew = () => { 
          history.push("/home")
    }
  return (
      <div>Home
          <button onClick={() => { 
              redirectnew()
          }}></button>
    </div>
  )
}

export default Home