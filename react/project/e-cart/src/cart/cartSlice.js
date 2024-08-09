// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countCart: 0

};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.countCart += action.payload;
        },
        removeFromCart: (state, action) => {
            state.countCart = 0;
        },
        clearCart: (state) => {
            state.countCart = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
