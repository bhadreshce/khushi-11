import { createSlice } from "@reduxjs/toolkit";


const cart = createSlice({
    name: 'add_cart',
    initialState: 0,
    reducers: {
        addTo(state, action) {
            return state + parseInt(action.payload);
        }
    }
})

export default cart.reducer
export const { addTo } = cart.actions