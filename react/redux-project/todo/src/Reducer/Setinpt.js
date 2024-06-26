const initial = { input: null, index: null }

const Setinput = (state = initial, action) => {
    switch (action.type) {
        case 'SETINPT':
            // state.push(action.payload)
            // console.log(state);
            return {
                input: action.payload.input, index: action.payload.index
            }

        default:
            return state
            break;
    }
}

export default Setinput