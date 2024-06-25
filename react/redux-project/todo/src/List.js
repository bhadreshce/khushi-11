import React from 'react'
import { useSelector } from 'react-redux'

const List = () => {
    const state = useSelector((result) => {
        return result.ToDO.data


    })
    return (
        <>
            {state.map((res) => {
                return (
                    <>
                        <h1>{res}</h1>
                    </>
                )
            })}
        </>
    )
}

export default List