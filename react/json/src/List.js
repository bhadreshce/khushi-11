import React, { useEffect, useState } from 'react'

const List = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/user').then((result) => {
            return result.json()
        }).then((data) => {
            console.log(data);
            setUser(data)
        })
    }, [])
    return (
        <>
            {user.map((result) => {
                return (
                    <>
                        <h1>  {result.name}</h1>
                    </>
                )
            })}
        </>
    )
}

export default List