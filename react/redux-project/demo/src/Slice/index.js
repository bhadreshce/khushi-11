
import { configureStore } from "@reduxjs/toolkit";
import wtr from './Weather'
const store = configureStore({
    reducer: {
        wtrData: wtr
    }
})

export default store