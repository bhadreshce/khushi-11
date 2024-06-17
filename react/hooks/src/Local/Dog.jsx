import React, { useReducer } from 'react'

function reducer(state,action) { 
            switch (action.type) {
                case 'ADOPT':
                    return state.map((res) => { 
                        if (res.name == action.payload) { 
                            res.adopted = true
                          
                        }
                          return res
                    })
                    break;
                 case 'RETURN':
                     return state.map((res) => { 
                        if (res.name == action.payload) { 
                            res.adopted = false
                          
                         }
                           return res
                    })
                    break;
            
                default:
                    break;
            }        
}
const Dog = () => {
const initialState = [
  {
    name: "Waffles",
    breed: "Chihuahua",
    adopted: false,
  },
  {
      name: "Charlie",
      breed: "Pitbull",
      adopted: true,
  },
  {
      name: "Prince",
      breed: "German Shepherd",
      adopted: false,
  },
    ];
    
    const [state, dispatch] = useReducer(reducer,initialState )

  const adoptDog = name => dispatch({ type: 'ADOPT', payload: name });
  
  const returnDog = name => dispatch({ type: 'RETURN', payload: name });



    return (
        <>
               <h3>Adoption Dogs List</h3>
      {state.map(dog => (
        <div className="box">
          <div>Name: {dog.name}</div>
          <div>Breed: {dog.breed}</div>
          <div>Status: {dog.adopted ? "Adopted" : "Not adopted"}</div>
          {dog.adopted ? (
            <button onClick={() => returnDog(dog.name)}>Return</button>
          ) : (
            <button onClick={() => adoptDog(dog.name)}>Adopt</button>
          )}
        </div>
      ))}
      </>
  )
}

export default Dog