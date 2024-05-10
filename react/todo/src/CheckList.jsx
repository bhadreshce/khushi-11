import React, { useState } from 'react'

const CheckList = () => {
    const [list, setList] = useState([])
    const addData = () => { 
        let inpt = document.getElementById('inpt').value 
        setList([...list, {data:inpt,check:false }])
    }

    const checkIf = (e, check,key) => { 
        alert(check)
        let data = [...list]
        if (check == true) {
            data[key].check = false
            setList(data)
           e.target.style.textDecoration = 'none'
        } else { 
             data[key].check = true
            setList(data)
              e.target.style.textDecoration =  'line-through'
        }
    }
  return (
      <>
          <input type="text" id='inpt' />
          <button onClick={() => { 
              addData()
          }}>Add data</button>
          {list.map((result,key) => {
              return (<>
                  <h1  onClick={(event) => { 
                      checkIf(event,result.check,key)
                  }}>{result.data }</h1>
              </>)
          }) }
      </>
  )
}

export default CheckList