import React from 'react'
import PropTypes from 'prop-types';

const B = (props) => {
    return (
        <>

            <h1>Name of website : {props.website}</h1>
            <b>port: {props.port}</b>
        </>
    )
}


B.propTypes = {
    website: PropTypes.string.isRequired,
    port: PropTypes.number.isRequired
}
export default B