import React from 'react'
import PropTypes from 'prop-types'
const Child = (prop) => {
    return (

        <>
            <h1>This is child component</h1>
            <h3>{prop.appname}</h3>
            <span>{prop.name}</span> <span></span>
            <span>{prop.age}</span>
        </>
    )
}

Child.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}
export default Child