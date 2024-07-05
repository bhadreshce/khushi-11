import React, { useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getwheather } from './Slice/Weather'
const Header = () => {
    const [input, setInput] = useState(null)
    const dispatch = useDispatch()
              const url = 'https://api.openweathermap.org/data/2.5/weather';
              const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
  
    const search = (e) => { 
        if (e.key == 'Enter') { 
            //  console.log(e.key);
            
            axios.get(url, {
                params: {
                    q: input,
                    appid: api_key,
                }
            }).then((result) => { 
                console.log(result.data);
                dispatch(getwheather(result.data))
            })
        }    
    }
  return (
      <>
          <input type="text" onKeyUp={search} onChange={(event) => { 
              setInput(event.target.value)
          }}  /> 
      </>
  )
}

export default Header