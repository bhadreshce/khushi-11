import React, { useEffect, useState } from 'react'

const Fetch = () => {

 const [user, setUser] = useState([])
    const [uId, setUid] = useState(null)
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        // axios.get('http://localhost:8000/user').then((result) => {
        //     console.log(result.data);

        //     setUser(result.data)
        // })

    fetch('http://localhost:8000/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((result) => { 
        return result.json()
    }).then((re) => { 
        console.log(re);
         setUser(re)
    })
    }

    const updateData = (editData) => {
        document.getElementById('inpt').value = editData.name
        setUid(editData.id)
    }
    const deleteData = (id) => {

        
        fetch(`http://localhost:8000/user/${id}`, {
            method: 'DELETE',
            headers: {
        'Content-Type': 'application/json',
              },
        }).then(() => { 
             getData();
        })
    }

    const addData = () => { 

        if (uId == null) {
            fetch('http://localhost:8000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: document.getElementById('inpt').value })
            }).then((res) => {
                getData();
                document.getElementById('inpt').value = ''
            })
        } else { 
              fetch(`http://localhost:8000/user/${uId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: document.getElementById('inpt').value })
            }).then((res) => {
                getData();
                document.getElementById('inpt').value = ''
            })
        }
     
    }



  return (
      <>
          
            <input type="text" id='inpt' />
            <button onClick={() => {
                addData()
            }}>{uId == null ? 'Add' : 'Update'}</button>
            {user.map((result) => {
                return (
                    <>
                        <h1>{result.name}

                        </h1>
                        <button onClick={() => {
                            deleteData(result.id)
                        }}>Delete</button>
                        <button onClick={() => {
                            updateData(result)
                        }}>Update</button>
                    </>
                )
            })}
    </>
  )
}

export default Fetch