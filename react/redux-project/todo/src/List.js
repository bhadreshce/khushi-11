import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Setinput } from './Action'
const List = () => {

    const dispatch = useDispatch()
    const state = useSelector((result) => {
        // console.log(result);

        return result.ToDO.data


    })

    const updateData = (res, index) => {
        dispatch(Setinput({ input: res, index: index }))
    }
    return (
        <>
            {state.map((res, index) => {
                return (
                    <>
                        <h1>{res}

                            <button onClick={() => {
                                updateData(res, index)
                            }}>Update</button></h1>
                    </>
                )
            })}
        </>
    )
}

export default List