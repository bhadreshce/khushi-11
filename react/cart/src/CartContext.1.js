import React, { useState } from 'react';
import { Addcart } from './CartContext';

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState(0);
    return (
        <>
            <Addcart.Provider value={{ cart, setCart }}>
                {children}
            </Addcart.Provider>
        </>
    );
};
