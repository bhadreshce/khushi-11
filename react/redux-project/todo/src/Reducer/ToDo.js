const initial = { data: [] }

const ToDO = (state = initial, action) => {
    switch (action.type) {
        case 'ADD':
            // state.push(action.payload)
            // console.log(state);
            return {
                data: [...state.data, action.payload]
            }

        case 'UPDATE':
            // state.push(action.payload)
            // console.log(state);
            let newArr = [...state.data]
            newArr[action.payload.index] = action.payload.data
            return {
                data: newArr
            }



        default:
            return state
            break;
    }
}


export default ToDO;