import React, { useReducer } from 'react'


function reducer(state, action) {  
    console.log(action.type);
    if (action.type == 'inc') { 
        return {
            count: state.count +1 
        }
    }else if(action.type == 'dec'){ 
            return {  count: state.count -1}
        }
}
const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, { count:0 })
  return (
      <>
           <button onClick={() => dispatch({ type: 'dec' })}>Decreememt</button>
          <h2>{state.count}</h2>
          <button onClick={() => dispatch({ type: 'inc' })}>Increement</button>
           
      </>
  )
}

export default Reducer