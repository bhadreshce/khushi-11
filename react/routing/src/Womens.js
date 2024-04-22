import React from 'react'
import { useParams } from 'react-router-dom'
const Womens = () => {
    const { id } = useParams()
  return (
      <div>Womens { id}</div>
  )
}

export default Womens