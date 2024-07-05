import { createSlice } from "@reduxjs/toolkit";


const wtr = createSlice({
    name: 'wheather',
    initialState: {},
    reducers: {
        getwheather(state, action) {
            return action.payload
        }
    }
})

export default wtr.reducer
export const { getwheather } = wtr.actions