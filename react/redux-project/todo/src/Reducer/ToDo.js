const initial = { data: [] }

const ToDO = (state = initial, action) => {
    switch (action.type) {
        case 'ADD':
            // state.push(action.payload)
            // console.log(state);
            return {
                data: [...state.data, action.payload]
            }
            break;

        default:
            return state
            break;
    }
}


export default ToDO;